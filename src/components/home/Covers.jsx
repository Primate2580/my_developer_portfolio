import { about, contact, experience, projects, site, skills, socials } from '../../data/content'
import Pill from '../ui/Pill'
import { iconMap } from '../ui/socialIconMap'
import Cover from './Cover'

// Each cover shows the first part of its real page. The text comes from content.js,
// so editing a page's text updates its cover too.

export function AboutCover() {
  return (
    <Cover id="section-about" to="/about" title={about.title}>
      <p className="text-2xl font-bold leading-snug md:text-3xl">
        {about.statement[0]} <span className="grad-text">{about.statement[1]}</span>
      </p>
      <p className="mt-4 text-fg-soft">{about.bio}</p>
      <dl className="mt-6 grid grid-cols-3 gap-3">
        {about.facts.map((f) => (
          <div key={f.label} className="rounded-2xl border border-line p-3">
            <dt className="text-xs text-muted">{f.label}</dt>
            <dd className="mt-1 text-sm font-semibold">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Cover>
  )
}

export function SkillsCover() {
  return (
    <Cover id="section-skills" to="/skills" title={skills.title}>
      <div className="space-y-5">
        {skills.groups.map((g) => (
          <div key={g.title}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">{g.title}</p>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((item, i) => (
                <Pill key={item} index={i}>
                  {item}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Cover>
  )
}

export function ProjectsCover() {
  const shown = projects.items.slice(0, 4)
  return (
    <Cover id="section-projects" to="/projects" title={projects.title}>
      <div className="grid grid-cols-2 gap-4">
        {shown.map((p) => (
          <div key={p.id}>
            <div className="aspect-[2/1] overflow-hidden rounded-xl border border-line bg-fg/5">
              {p.image && <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover object-top" />}
            </div>
            <p className="mt-2 text-sm font-semibold">{p.title}</p>
          </div>
        ))}
      </div>
    </Cover>
  )
}

export function ExperienceCover() {
  const shown = experience.items.slice(0, 3)
  return (
    <Cover id="section-experience" to="/experience" title={experience.title}>
      <ol className="space-y-5 border-l border-line pl-6">
        {shown.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              className={`absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full ${
                job.current ? 'grad-bg' : 'border-2 border-muted bg-surface-solid'
              }`}
            />
            <p className="font-semibold">{job.role}</p>
            <p className="text-sm text-muted">
              {job.company} / {job.dates}
            </p>
          </li>
        ))}
      </ol>
    </Cover>
  )
}

export function ContactCover() {
  return (
    <Cover id="section-contact" to="/contact" title={contact.title}>
      <p className="text-fg-soft">{contact.intro}</p>
      <p className="mt-6 break-words text-lg font-semibold">{site.email}</p>
      <ul className="mt-5 flex gap-3">
        {socials.map((s) => {
          const Icon = iconMap[s.icon]
          return (
            <li key={s.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-fg/10">
              <Icon size={18} />
            </li>
          )
        })}
      </ul>
    </Cover>
  )
}
