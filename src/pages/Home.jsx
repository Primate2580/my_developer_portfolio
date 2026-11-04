import { ArrowRight, MessageCircle } from 'lucide-react'
import { hero, site } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTypewriter } from '../hooks/useTypewriter'
import Services from '../components/Services'
import Button from '../components/ui/Button'
import Pill from '../components/ui/Pill'
import Portrait from '../components/ui/Portrait'
import SocialLinks from '../components/ui/SocialLinks'
import { AboutCover, ContactCover, ExperienceCover, ProjectsCover, SkillsCover } from '../components/home/Covers'
import GithubActivity from '../components/home/GithubActivity'
import HomeNav from '../components/home/HomeNav'

// Defined outside the component so the list never changes between renders.
const SECTION_IDS = ['section-about', 'section-skills', 'section-projects', 'section-experience', 'section-github', 'section-contact']

// Home = a fixed intro on the left + a column of page "covers" scrolling on the right.
// On phones and tablets everything stacks: intro first, then the covers.
export default function Home() {
  usePageTitle('')
  const typed = useTypewriter(hero.roles)
  const active = useScrollSpy(SECTION_IDS)

  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-start gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        {/* ---------- Left: stays in place while the right side scrolls ---------- */}
        <aside className="pt-[calc(var(--header-h)+2rem)] lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:overflow-y-auto lg:pb-4 lg:pt-(--header-h) lg:[scrollbar-width:none]">
          {/* my-auto centres this block when there is room, and lets it scroll when there is not */}
          <div className="lg:my-auto">
          <div className="flex items-center gap-4">
            <Portrait className="w-16 shrink-0" />
            <p className="inline-flex items-center gap-3 rounded-full border border-line px-4 py-2 text-sm text-fg-soft">
              <span aria-hidden="true" className="relative flex h-3 w-3">
                <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/60 motion-reduce:animate-none" />
                <span className="relative h-3 w-3 rounded-full bg-sky-500" />
              </span>
              {hero.status}
            </p>
          </div>

          <p className="mt-4 text-xl font-light text-muted md:text-2xl">{hero.greeting}</p>
          <h1 className="mt-1 text-[clamp(2.5rem,4.2vw,4rem)]">
            {site.firstName}
            <br />
            {site.lastName}
          </h1>

          <p className="mt-3 text-xl font-bold text-fg md:text-2xl">
            {hero.introPrefix}{' '}
            <span aria-hidden="true" className="text-accent [text-shadow:0_0_28px_rgb(56_189_248/0.55)]">
              {typed}
              <span className="animate-blink motion-reduce:animate-none">|</span>
            </span>
            <span className="sr-only">{hero.roles.join(', ')}</span>
          </p>

          <p className="mt-3 max-w-lg text-fg-soft">{hero.text}</p>

          <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Technologies">
            {hero.tech.map((t, i) => (
              <li key={t}>
                <Pill index={i}>{t}</Pill>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex flex-wrap gap-3">
              <Button to={hero.primaryCta.to}>
                {hero.primaryCta.label}
                <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Button>
              <Button to={hero.secondaryCta.to} variant="outline">
                {hero.secondaryCta.label}
                <MessageCircle aria-hidden="true" size={16} />
              </Button>
            </div>
            <SocialLinks aria-label={hero.followLabel} />
          </div>

          <div className="mt-5 hidden [@media(min-height:840px)]:block">
            <HomeNav active={active} />
          </div>
          </div>
        </aside>

        {/* ---------- Right: covers of each page, scroll down to see them all ---------- */}
        <div className="space-y-8 pb-16 lg:pb-24 lg:pt-[calc(var(--header-h)+2rem)]">
          <AboutCover />
          <SkillsCover />
          <ProjectsCover />
          <ExperienceCover />
          <GithubActivity />
          <ContactCover />
        </div>
      </div>

      <Services />
    </>
  )
}
