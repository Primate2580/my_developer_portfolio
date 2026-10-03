import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code } from 'lucide-react'
import { projects } from '../data/content'
import { DURATION, EASE } from '../lib/motion'
import ArrowButton from './ui/ArrowButton'
import Dash from './ui/Dash'
import DotRow from './ui/DotRow'
import ProjectImage from './ui/ProjectImage'
import Reveal from './ui/Reveal'

const items = projects.items
const last = items.length - 1
const SWIPE_MIN = 50 // px of horizontal travel that counts as a swipe
const TAP_MAX = 8 // movement under this is a tap/click, not a drag

const linkClass =
  'inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-coral motion-reduce:transition-none'

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [step, setStep] = useState(0) // width of one slide + the gap, in px

  const slideRefs = useRef([])
  const suppressClick = useRef(false)
  // The drag handlers live outside React's render, so they read the current slide from a ref
  const indexRef = useRef(index)
  useEffect(() => {
    indexRef.current = index
  }, [index])

  const goTo = useCallback((i) => setIndex(Math.min(Math.max(i, 0), last)), [])

  // Measure how far one slide travels (slide width + gap). Re-measure on resize.
  useLayoutEffect(() => {
    const el = slideRefs.current[0]
    const measure = () => {
      const gap = parseFloat(getComputedStyle(el.parentElement).columnGap) || 0
      setStep(el.offsetWidth + gap)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Left / Right arrows (and Home / End) anywhere inside the carousel
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') goTo(index + 1)
    else if (e.key === 'ArrowLeft') goTo(index - 1)
    else if (e.key === 'Home') goTo(0)
    else if (e.key === 'End') goTo(last)
    else return
    e.preventDefault()
  }

  // Swipe / drag with touch, pen or mouse. The track follows your finger,
  // and on release we decide whether it was a swipe, a tap, or nothing.
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    const startX = e.clientX
    let moved = false

    const onMove = (ev) => {
      const dx = ev.clientX - startX
      if (Math.abs(dx) > TAP_MAX) {
        moved = true
        setDragging(true)
      }
      if (!moved) return
      // rubber-band feel when pushing past the first or last slide
      const i = indexRef.current
      const atEdge = (i === 0 && dx > 0) || (i === last && dx < 0)
      setDragX(atEdge ? dx * 0.25 : dx)
    }

    const onUp = (ev) => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      const dx = ev.clientX - startX
      setDragging(false)
      setDragX(0)

      if (moved) {
        // the browser fires a click after a drag: swallow it so links don't open
        suppressClick.current = true
        setTimeout(() => (suppressClick.current = false), 0)
        if (dx <= -SWIPE_MIN) goTo(indexRef.current + 1)
        else if (dx >= SWIPE_MIN) goTo(indexRef.current - 1)
      } else {
        // a tap on a peeking slide brings it to the front
        const hit = slideRefs.current.findIndex((s) => {
          const r = s.getBoundingClientRect()
          return ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom
        })
        if (hit !== -1 && hit !== indexRef.current) goTo(hit)
      }
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
  }

  // Never leave listeners behind if the section unmounts mid-drag (cheap safety net)
  useEffect(() => () => setDragging(false), [])

  const current = items[index]

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      // --pl / --pr are the section's side padding; the carousel needs them to bleed to the screen edge
      className="relative -ml-(--rail-width) flex min-h-svh flex-col justify-center overflow-hidden bg-ink py-24 pl-(--pl) pr-(--pr) [--pl:calc(var(--rail-width)+2.75rem)] [--pr:1.5rem] md:[--pl:calc(var(--rail-width)+4rem)] md:[--pr:3rem] lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50%_45%_at_80%_35%,rgb(255_90_106/0.18),transparent_70%),radial-gradient(45%_45%_at_10%_80%,rgb(47_91_216/0.3),transparent_70%)]"
      />
      <DotRow className="absolute left-(--rail-width) right-0 top-8" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Numeral + label */}
        <Reveal className="mb-8 flex items-end gap-6 lg:mb-10">
          <span
            aria-hidden="true"
            className="select-none text-[clamp(4rem,10vw,8rem)] font-light leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]"
          >
            {projects.numeral}
          </span>
          <div className="flex items-center gap-3 pb-1">
            <Dash />
            <h2
              id="work-heading"
              className="text-xs font-medium uppercase leading-none tracking-[0.35em] text-white"
            >
              {projects.label}
            </h2>
          </div>
        </Reveal>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          onKeyDown={onKeyDown}
          className="grid gap-x-6 lg:grid-cols-[auto_1fr]"
        >
          {/* Controls: stacked on the left on desktop, a row under the panels on mobile */}
          <div className="order-2 mt-6 flex items-center gap-3 lg:order-1 lg:mt-12 lg:flex-col lg:items-start">
            <ArrowButton direction="prev" onClick={() => goTo(index - 1)} disabled={index === 0} />
            <ArrowButton direction="next" onClick={() => goTo(index + 1)} disabled={index === last} />
            <p aria-hidden="true" className="ml-2 text-xs tracking-[0.3em] text-white/80 lg:ml-0 lg:mt-2">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
          </div>

          {/* Viewport: clips the track. The negative right margin lets it run to the screen edge so the next panel peeks in. */}
          <div
            tabIndex={0}
            role="group"
            aria-label="Project slides"
            aria-describedby="projects-hint"
            onPointerDown={onPointerDown}
            onClickCapture={(e) => {
              if (suppressClick.current) {
                e.preventDefault()
                e.stopPropagation()
              }
            }}
            onDragStart={(e) => e.preventDefault()}
            style={{ marginRight: 'calc(-1 * (var(--pr) + max(0px, (100vw - var(--pl) - var(--pr) - 72rem) / 2)))' }}
            className="order-1 cursor-grab select-none overflow-hidden pt-12 pb-2 [touch-action:pan-y] focus-visible:outline-offset-[-3px] active:cursor-grabbing lg:order-2"
          >
            <p id="projects-hint" className="sr-only">
              Use the left and right arrow keys to change project.
            </p>

            <div
              className={`flex gap-4 md:gap-6 ${dragging ? 'transition-none' : 'transition-transform duration-(--duration-slow) motion-reduce:transition-none'}`}
              style={{ transform: `translate3d(${-index * step + dragX}px, 0, 0)` }}
            >
              {items.map((p, i) => {
                const active = i === index
                return (
                  <div
                    key={p.id}
                    ref={(el) => (slideRefs.current[i] = el)}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${items.length}`}
                    // Only the active slide is exposed: the others are hidden from screen readers and can't be tabbed into
                    aria-hidden={active ? undefined : 'true'}
                    inert={!active}
                    className="relative aspect-[4/5] w-[calc(100%-3.5rem)] shrink-0 md:w-[22rem]"
                  >
                    {/* Big outlined numeral overlapping the top edge */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-10 left-5 z-10 select-none text-[clamp(4rem,7vw,5.5rem)] font-light leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]"
                    >
                      {p.id}
                    </span>

                    {/* Two colour layers cross-fade: coral/orange card <-> dark card */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg bg-linear-to-br from-coral to-orange"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg bg-[radial-gradient(circle,rgb(18_0_43/0.18)_1.5px,transparent_1.6px)] bg-size-[1.5rem_1.5rem]"
                    />
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-lg border border-white/10 bg-[#0d0618] shadow-2xl shadow-black/50 transition-opacity duration-(--duration-base) motion-reduce:transition-none ${active ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* Panel content: screenshot, tags, links */}
                    <div
                      className={`relative flex h-full flex-col overflow-hidden rounded-lg transition-opacity duration-(--duration-base) motion-reduce:transition-none ${active ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="min-h-0 flex-1">
                        <ProjectImage project={p} index={i} />
                      </div>
                      <div className="space-y-2 p-4">
                        <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
                          {p.tags.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-white/20 px-2.5 py-0.5 text-xs uppercase tracking-widest text-white"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-5">
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            Live
                            <ArrowUpRight aria-hidden="true" size={14} />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                          <a href={p.code} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            Code
                            <Code aria-hidden="true" size={14} />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Caption for the active project. aria-live: screen readers announce it when the project changes. */}
          <div aria-live="polite" aria-atomic="true" className="order-3 mt-8 lg:col-start-2">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.base, ease: EASE }}
            >
              <p className="sr-only">
                Project {index + 1} of {items.length}
              </p>
              <h3 className="mb-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-tight">
                {current.title}
              </h3>
              <p className="mb-6 max-w-[44ch] text-base leading-relaxed text-white/90">{current.description}</p>
              {/* CTA bar with a small orange block at the end (Reference 2) */}
              <a
                href={current.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-stretch"
              >
                <span className="flex items-center bg-coral px-8 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors group-hover:bg-orange motion-reduce:transition-none">
                  {projects.cta}
                  <span className="sr-only">: {current.title} (opens in a new tab)</span>
                </span>
                <span
                  aria-hidden="true"
                  className="flex w-12 items-center justify-center bg-orange text-ink transition-colors group-hover:bg-white motion-reduce:transition-none"
                >
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
