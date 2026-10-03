import { Globe, MapPin } from 'lucide-react'
import { Fragment } from 'react'
import { contact, site, socials } from '../data/content'
import ContactForm from './ContactForm'
import Dash from './ui/Dash'
import DotRow from './ui/DotRow'
import Reveal from './ui/Reveal'
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons'

// content.js names an icon; this maps the name to the component.
const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  globe: () => <Globe aria-hidden="true" size={20} strokeWidth={1.75} />,
}

const labelClass = 'mb-1 text-xs uppercase tracking-[0.3em] text-orange'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative -ml-(--rail-width) flex min-h-svh flex-col justify-center overflow-hidden bg-ink py-24 pl-[calc(var(--rail-width)+2.75rem)] pr-6 md:pl-[calc(var(--rail-width)+4rem)] md:pr-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50%_45%_at_85%_30%,rgb(138_10_158/0.35),transparent_70%),radial-gradient(45%_45%_at_8%_85%,rgb(255_90_106/0.16),transparent_70%)]"
      />
      <DotRow className="absolute left-(--rail-width) right-0 top-8" />
      <DotRow className="absolute bottom-8 left-(--rail-width) right-0 opacity-50" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Numeral + label */}
        <Reveal className="mb-12 flex items-end gap-6 lg:mb-16">
          <span
            aria-hidden="true"
            className="select-none text-[clamp(4rem,10vw,8rem)] font-light leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]"
          >
            {contact.numeral}
          </span>
          <div className="flex items-center gap-3 pb-1">
            <Dash />
            <h2
              id="contact-heading"
              className="text-xs font-medium uppercase leading-none tracking-[0.35em] text-white"
            >
              {contact.label}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          {/* Left: headline, intro, details */}
          <Reveal>
            <p className="mb-6 text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-none tracking-tight">
              {contact.headline}
            </p>
            <p className="mb-10 max-w-[40ch] text-base leading-relaxed text-white/90 md:text-lg">{contact.text}</p>

            <dl className="space-y-5">
              <div>
                <dt className={labelClass}>Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-lg font-medium text-white underline-offset-4 transition-colors hover:text-coral hover:underline motion-reduce:transition-none"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <Dash />
              <div>
                <dt className={labelClass}>Location</dt>
                <dd className="flex items-center gap-2 text-lg font-medium text-white">
                  <MapPin aria-hidden="true" size={18} strokeWidth={1.75} className="text-orange" />
                  {site.location}
                </dd>
              </div>
              <Dash />
              <div>
                <dt className={`${labelClass} mb-3`}>Elsewhere</dt>
                <dd>
                  <ul role="list" className="flex flex-wrap gap-3">
                    {socials.map(({ label, handle, icon, href }) => {
                      const Icon = iconMap[icon]
                      return (
                        <Fragment key={label}>
                          <li>
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${label}${handle ? `: ${handle}` : ''} (opens in a new tab)`}
                              title={handle ? `${label}: ${handle}` : label}
                              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-coral hover:bg-coral hover:text-ink motion-reduce:transition-none"
                            >
                              {Icon && <Icon size={20} />}
                            </a>
                          </li>
                        </Fragment>
                      )
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.15} className="relative">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
