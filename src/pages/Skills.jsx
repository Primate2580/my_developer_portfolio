import { Monitor, Server, Wrench } from 'lucide-react'
import { skills } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHeader from '../components/ui/PageHeader'
import Pill from '../components/ui/Pill'
import Reveal from '../components/ui/Reveal'

// content.js says which icon a group uses by name; this maps the name to the component.
const iconMap = { monitor: Monitor, server: Server, wrench: Wrench }

export default function Skills() {
  usePageTitle(skills.title)
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-[calc(var(--header-h)+3rem)] md:px-8">
      <PageHeader title={skills.title} intro={skills.intro} />

      <div className="grid gap-6 md:grid-cols-3">
        {skills.groups.map((g, i) => {
          const Icon = iconMap[g.icon] ?? Monitor
          return (
            <Reveal key={g.title} delay={i * 0.08} className="glass rounded-3xl p-6 md:p-8">
              <span aria-hidden="true" className="grad-bg mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg shadow-brand-violet/30">
                <Icon size={22} />
              </span>
              <h2 className="text-xl">{g.title}</h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((item, j) => (
                  <li key={item}>
                    <Pill index={j}>{item}</Pill>
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
