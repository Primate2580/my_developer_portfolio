import { ArrowRight } from 'lucide-react'
import { cta } from '../data/content'
import Button from './ui/Button'

// "Have a project in mind?" bar. Layout shows it above the footer on every page except Contact.
export default function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-linear-to-r from-brand-blue/10 via-brand-violet/10 to-brand-pink/10 p-8 md:flex-row md:items-center md:p-10">
        <div>
          <h2 id="cta-title" className="text-2xl md:text-3xl">
            {cta.title}
          </h2>
          <p className="mt-2 text-fg-soft">{cta.text}</p>
        </div>
        <Button to={cta.button.to} className="shrink-0">
          {cta.button.label}
          <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
        </Button>
      </div>
    </section>
  )
}
