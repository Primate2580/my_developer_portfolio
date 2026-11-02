import { Download } from 'lucide-react'
import { experience } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'

export default function Experience() {
  usePageTitle(experience.title)
  return (
    <section className="mx-auto max-w-4xl px-5 pb-24 pt-[calc(var(--header-h)+3rem)] md:px-8">
      <PageHeader title={experience.title} intro={experience.intro} />

      <ol className="relative ml-2 space-y-8 border-l border-line">
        {experience.items.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative pl-8 md:pl-10">
            <span
              aria-hidden="true"
              className={`absolute -left-[9px] top-8 h-4 w-4 rounded-full ${
                job.current ? 'grad-bg shadow-lg shadow-brand-violet/50' : 'border-2 border-muted bg-bg'
              }`}
            />
            <Reveal delay={i * 0.08} className="glass rounded-3xl p-6 md:p-8">
              <h2 className="text-xl">{job.role}</h2>
              <p className="mt-1 text-sm text-muted">
                <span className="font-semibold text-fg-soft">{job.company}</span>
                {' / '}
                {job.dates}
                {job.current && <span className="sr-only"> (current role)</span>}
              </p>
              <ul className="mt-5 space-y-2 text-fg-soft">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden="true" className="grad-bg mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <Button variant="outline" href={experience.cv.href} download={experience.cv.filename}>
          {experience.cv.label}
          <Download aria-hidden="true" size={16} />
        </Button>
      </div>
    </section>
  )
}
