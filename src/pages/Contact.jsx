import { Mail } from 'lucide-react'
import { contact, site, socials } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import ContactForm from '../components/ContactForm'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { iconMap } from '../components/ui/socialIconMap'

const row = 'glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-fg/30 motion-reduce:transition-none'
const iconBox = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fg/10 text-fg'

export default function Contact() {
  usePageTitle(contact.title)
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-[calc(var(--header-h)+3rem)] md:px-8">
      <PageHeader title={contact.title} intro={contact.intro} />

      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal className="space-y-8">
          <div>
            <h2 className="mb-3 text-lg">{contact.emailLabel}</h2>
            <a href={`mailto:${site.email}`} className={row}>
              <span className={iconBox}>
                <Mail aria-hidden="true" size={20} />
              </span>
              <span className="min-w-0 break-words font-medium text-fg">{site.email}</span>
            </a>
          </div>

          <div>
            <h2 className="mb-3 text-lg">{contact.socialsLabel}</h2>
            <ul className="space-y-3">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={row}>
                      <span className={iconBox}>
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium text-fg">{s.label}</span>
                        <span className="block break-words text-sm text-muted">
                          {s.handle}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
