import { Fragment } from 'react'
import { about } from '../data/content'
import Dash from './ui/Dash'
import DotRow from './ui/DotRow'
import Portrait from './ui/Portrait'
import Reveal from './ui/Reveal'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      // -ml pulls the background under the translucent rail (same trick as the hero)
      className="relative -ml-(--rail-width) flex min-h-svh flex-col justify-center overflow-hidden bg-ink py-24 pl-[calc(var(--rail-width)+2.75rem)] pr-6 md:pl-[calc(var(--rail-width)+4rem)] md:pr-12 lg:py-32"
    >
      {/* Soft violet glow + dotted rails (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(55%_50%_at_88%_45%,rgb(138_10_158/0.35),transparent_70%)]"
      />
      <DotRow className="absolute left-(--rail-width) right-0 top-8" />
      <DotRow className="absolute bottom-8 left-(--rail-width) right-0 opacity-50" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Big outlined numeral + spaced-out label */}
        <Reveal className="mb-12 flex items-end gap-6 lg:mb-16">
          <span
            aria-hidden="true"
            className="select-none text-[clamp(4rem,10vw,8rem)] font-light leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]"
          >
            {about.numeral}
          </span>
          <div className="flex items-center gap-3 pb-1">
            <Dash />
            <h2
              id="about-heading"
              className="text-xs font-medium uppercase leading-none tracking-[0.35em] text-white"
            >
              {about.label}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          {/* Left: statement + portrait */}
          <div className="space-y-12">
            <Reveal>
              <p className="text-[clamp(2rem,6vw,3rem)] font-extrabold leading-[1.1] tracking-tight lg:text-[clamp(1.75rem,3vw,2.75rem)]">
                {about.statement.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Portrait className="w-[calc(100%-1rem)] max-w-xs" />
            </Reveal>
          </div>

          {/* Right: bio + quick facts */}
          <Reveal delay={0.15} className="lg:pt-4">
            <p className="text-base leading-relaxed text-white/90 md:text-lg">{about.bio}</p>

            <dl className="mt-10 space-y-5">
              {about.facts.map(({ label, value }, i) => (
                <Fragment key={label}>
                  {i > 0 && <Dash />}
                  <div>
                    <dt className="mb-1 text-xs uppercase tracking-[0.3em] text-orange">{label}</dt>
                    <dd className="text-lg font-medium text-white">{value}</dd>
                  </div>
                </Fragment>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
