import { Download } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { about } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import Button from '../components/ui/Button'
import PageHeader from '../components/ui/PageHeader'
import Portrait from '../components/ui/Portrait'
import Reveal from '../components/ui/Reveal'

export default function About() {
  usePageTitle(about.title)
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-[calc(var(--header-h)+3rem)] md:px-8">
      <PageHeader title={about.title} intro={about.intro} />

      <div className="grid items-start gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <Reveal>
          <Portrait shape="card" className="mx-auto w-full max-w-sm lg:max-w-none" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl">
            {about.statement[0]}
            <br />
            <span className="grad-text">{about.statement[1]}</span>
          </h2>
          <p className="mt-6 text-lg text-fg-soft">{about.bio}</p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {about.facts.map((f) => (
              <div key={f.label} className="glass rounded-2xl p-4">
                <dt className="text-xs text-muted">{f.label}</dt>
                <dd className="mt-1 font-semibold text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={about.ctas.primary.to}>
              {about.ctas.primary.label}
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
            <Button variant="outline" href={about.ctas.secondary.href} download={about.ctas.secondary.filename}>
              {about.ctas.secondary.label}
              <Download aria-hidden="true" size={16} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
