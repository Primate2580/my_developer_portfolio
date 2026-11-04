import { ExternalLink } from 'lucide-react'
import { projects } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHeader from '../components/ui/PageHeader'
import Pill from '../components/ui/Pill'
import ProjectImage from '../components/ui/ProjectImage'
import Reveal from '../components/ui/Reveal'
import { GithubIcon } from '../components/ui/SocialIcons'

const linkClass =
  'glass inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-fg transition hover:bg-fg/10 motion-reduce:transition-none'

export default function Projects() {
  usePageTitle(projects.title)
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-[calc(var(--header-h)+3rem)] md:px-8">
      <PageHeader title={projects.title} intro={projects.intro} />

      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.items.map((p, i) => (
          <li key={p.id}>
            <Reveal delay={i * 0.08} className="glass flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="aspect-[2/1] overflow-hidden">
                <ProjectImage project={p} index={i} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl">{p.title}</h2>
                <p className="mt-2 text-sm text-fg-soft">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2.5" aria-label={`${p.title} technologies`}>
                  {p.tags.map((t, j) => (
                    <li key={t}>
                      <Pill index={i + j}>{t}</Pill>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${projects.live}: ${p.title} (opens in a new tab)`}
                      className={linkClass}
                    >
                      {projects.live}
                      <ExternalLink aria-hidden="true" size={15} />
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${projects.code}: ${p.title} (opens in a new tab)`}
                    className={linkClass}
                  >
                    <GithubIcon size={15} />
                    {projects.code}
                  </a>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
