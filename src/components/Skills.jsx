import { Monitor, Server, Wrench } from 'lucide-react'
import { skills } from '../data/content'
import Dash from './ui/Dash'
import DotRow from './ui/DotRow'
import Reveal from './ui/Reveal'

// content.js says which icon a group uses by name; this maps the name to the component.
const iconMap = { monitor: Monitor, server: Server, wrench: Wrench }

// Every skill name once, for the marquee (so it always matches the cards)
const allSkills = [...new Set(skills.groups.flatMap((g) => g.items))]

// The track holds 4 copies and slides left by half (2 copies), so the loop is
// seamless even on very wide screens. Reduced motion shows just the first copy.
const COPIES = 4

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative -ml-(--rail-width) flex min-h-svh flex-col justify-center overflow-hidden bg-ink py-24 lg:py-32"
    >
      {/* Colour glows behind the cards: gives the glass something to blur */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(45%_40%_at_15%_30%,rgb(47_91_216/0.35),transparent_70%),radial-gradient(45%_45%_at_85%_65%,rgb(224_24_155/0.3),transparent_70%)]"
      />
      <DotRow className="absolute left-(--rail-width) right-0 top-8" />

      {/* Same padding + max width as About, so the two sections line up */}
      <div className="relative w-full pl-[calc(var(--rail-width)+2.75rem)] pr-6 md:pl-[calc(var(--rail-width)+4rem)] md:pr-12">
        <div className="mx-auto w-full max-w-6xl">
          {/* Numeral + label */}
          <Reveal className="mb-12 flex items-end gap-6 lg:mb-16">
            <span
              aria-hidden="true"
              className="select-none text-[clamp(4rem,10vw,8rem)] font-light leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]"
            >
              {skills.numeral}
            </span>
            <div className="flex items-center gap-3 pb-1">
              <Dash />
              <h2
                id="skills-heading"
                className="text-xs font-medium uppercase leading-none tracking-[0.35em] text-white"
              >
                {skills.label}
              </h2>
            </div>
          </Reveal>

          {/* Glass cards */}
          <ul className="grid gap-6 lg:grid-cols-3">
            {skills.groups.map(({ title, icon, items }, i) => {
              const Icon = iconMap[icon]
              return (
                <li key={title}>
                  <Reveal delay={i * 0.1} className="h-full">
                    <div
                      // Focusable on purpose (checklist): keyboard users get the same
                      // lift + coral top border that mouse users get on hover.
                      tabIndex={0}
                      role="group"
                      aria-labelledby={`skill-group-${i}`}
                      className="h-full rounded-lg border border-t-2 border-white/10 border-t-white/10 bg-violet/20 p-6 backdrop-blur-md transition-[translate,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-t-coral hover:bg-violet/30 focus-visible:-translate-y-1.5 focus-visible:border-t-coral focus-visible:bg-violet/30 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0 md:p-8"
                    >
                      {Icon && (
                        <Icon aria-hidden="true" size={28} strokeWidth={1.5} className="mb-5 text-orange" />
                      )}
                      <h3 id={`skill-group-${i}`}>{title}</h3>
                      <Dash className="my-5" />
                      <ul className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Marquee: CSS only. Decorative (the same names are in the cards), so hidden from screen readers. */}
      <Reveal delay={0.3} className="relative mt-16 pl-(--rail-width) lg:mt-24">
        <div
          aria-hidden="true"
          className="group overflow-hidden border-y border-white/10 py-5 [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:py-6"
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:px-6">
            {Array.from({ length: COPIES }, (_, copy) => (
              <ul
                key={copy}
                className={`flex shrink-0 items-center motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3 ${copy > 0 ? 'motion-reduce:hidden' : ''}`}
              >
                {allSkills.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-8 pr-8 text-lg font-bold uppercase tracking-widest text-white/80 md:text-2xl"
                  >
                    {name}
                    <Dash />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
