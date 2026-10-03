import { Download } from 'lucide-react'
import { experience } from '../data/content'
import Button from './ui/Button'
import Dash from './ui/Dash'
import DotRow from './ui/DotRow'
import Reveal from './ui/Reveal'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative -ml-(--rail-width) flex min-h-svh flex-col justify-center overflow-hidden bg-ink py-24 pl-[calc(var(--rail-width)+2.75rem)] pr-6 md:pl-[calc(var(--rail-width)+4rem)] md:pr-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(45%_40%_at_90%_20%,rgb(138_10_158/0.3),transparent_70%),radial-gradient(40%_40%_at_5%_75%,rgb(255_90_106/0.14),transparent_70%)]"
      />
      <DotRow className="absolute left-(--rail-width) right-0 top-8" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Numeral + label */}
        <Reveal className="mb-12 flex items-end gap-6 lg:mb-16">
          <span
            aria-hidden="true"
            className="select-none text-[clamp(4rem,10vw,8rem)] font-light leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]"
          >
            {experience.numeral}
          </span>
          <div className="flex items-center gap-3 pb-1">
            <Dash />
            <h2
              id="experience-heading"
              className="text-xs font-medium uppercase leading-none tracking-[0.35em] text-white"
            >
              {experience.label}
            </h2>
          </div>
        </Reveal>

        {/* Timeline.
            Below lg: line on the left, cards to its right.
            lg+   : line down the middle, cards alternate left / right. */}
        <ol role="list" className="relative space-y-10 lg:space-y-14">
          {/* the thin line */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-2 w-px bg-white/25 lg:left-1/2 lg:-translate-x-1/2"
          />

          {experience.items.map((item, i) => {
            const onRight = i % 2 === 1
            return (
              <li key={`${item.role}-${i}`} className="relative pl-8 lg:grid lg:grid-cols-2 lg:pl-0">
                {/* dot marker: filled coral for the current role, outlined for earlier ones */}
                <span
                  aria-hidden="true"
                  data-dot
                  className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-coral lg:left-1/2 lg:-translate-x-1/2 ${item.current ? 'bg-coral' : 'bg-ink'}`}
                />

                <Reveal
                  className={`lg:col-start-1 lg:row-start-1 ${onRight ? 'lg:col-start-2 lg:pl-14' : 'lg:pr-14'}`}
                >
                  <article className="rounded-lg border border-white/10 bg-violet/20 p-5 backdrop-blur-md sm:p-6 md:p-8">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-orange md:tracking-[0.3em]">{item.dates}</p>
                    <h3>{item.role}</h3>
                    <p className="mt-1 text-lg text-white/90">{item.company}</p>
                    <Dash className="my-5" />
                    <ul role="list" className="space-y-3">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[0.95rem] leading-relaxed text-white/90 md:text-base">
                          <span aria-hidden="true" className="mt-[0.8em] h-0.5 w-3 shrink-0 bg-orange" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>

        {/* CV download */}
        <Reveal className="mt-14 lg:flex lg:justify-center">
          <Button
            href={experience.cv.href}
            download={experience.cv.filename}
            className="gap-3"
          >
            <Download aria-hidden="true" size={16} strokeWidth={2.5} />
            {experience.cv.label}
            <span className="sr-only"> (PDF)</span>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
