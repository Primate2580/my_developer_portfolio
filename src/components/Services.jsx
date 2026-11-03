import { Globe, Monitor, Server } from 'lucide-react'
import { services } from '../data/content'
import Reveal from './ui/Reveal'

// content.js names an icon; this maps the name to the component.
const iconMap = { globe: Globe, monitor: Monitor, server: Server }

// Three short cards under the hero on the home page.
export default function Services() {
  return (
    <section aria-labelledby="services-title" className="mx-auto max-w-7xl px-5 pb-20 pt-4 md:px-8">
      <h2 id="services-title" className="mb-8 text-2xl md:text-3xl">
        {services.title}
      </h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {services.items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Monitor
          return (
            <li key={item.title}>
              <Reveal delay={i * 0.08} className="glass h-full rounded-3xl p-6 md:p-8">
                <span aria-hidden="true" className="grad-bg mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg shadow-brand-violet/30">
                  <Icon size={22} />
                </span>
                <h3>{item.title}</h3>
                <p className="mt-2 text-sm text-fg-soft">{item.text}</p>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
