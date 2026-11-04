import { Globe, Monitor, Server } from 'lucide-react'
import { services } from '../data/content'

// content.js names an icon; this maps the name to the component.
const iconMap = { globe: Globe, monitor: Monitor, server: Server }

// "What I do": three short rows, shown at the bottom of the left panel on the home page.
export default function Services() {
  return (
    <section aria-labelledby="services-title" className="mt-10 pb-4">
      <h2 id="services-title" className="mb-4 text-xl">
        {services.title}
      </h2>
      <ul className="space-y-3">
        {services.items.map((item) => {
          const Icon = iconMap[item.icon] ?? Monitor
          return (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-line p-4">
              <span aria-hidden="true" className="grad-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="text-base">{item.title}</h3>
                <p className="mt-1 text-sm text-fg-soft">{item.text}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
