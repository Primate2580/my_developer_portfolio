import { ArrowRight, Code, MessageCircle, Star, Zap } from 'lucide-react'
import { hero } from '../data/content'
import { site } from '../data/content'
import { usePageTitle } from '../hooks/usePageTitle'
import { useTypewriter } from '../hooks/useTypewriter'
import Button from '../components/ui/Button'
import Pill from '../components/ui/Pill'
import Portrait from '../components/ui/Portrait'
import SocialLinks from '../components/ui/SocialLinks'

// The code card is always dark, like an editor window, in both themes.
function CodeCard({ className = '' }) {
  const c = hero.code
  return (
    <div
      aria-hidden="true"
      className={`rounded-2xl border border-white/10 bg-slate-900/90 p-4 font-mono text-[12px] leading-relaxed shadow-2xl shadow-black/40 backdrop-blur-xl sm:text-[13px] ${className}`}
    >
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
      </div>
      <pre className="overflow-hidden text-slate-300">
        <code>
          <span className="text-violet-400">const</span> <span className="text-sky-300">developer</span> = {'{'}
          {'\n  '}
          <span className="text-sky-400">name</span>: <span className="text-emerald-400">&quot;{c.name}&quot;</span>,
          {'\n  '}
          <span className="text-sky-400">skills</span>: [
          {c.skills.map((s, i) => (
            <span key={s}>
              <span className="text-amber-300">&quot;{s}&quot;</span>
              {i < c.skills.length - 1 ? ', ' : ''}
            </span>
          ))}
          ],
          {'\n  '}
          <span className="text-sky-400">passion</span>: <span className="text-emerald-400">&quot;{c.passion}&quot;</span>,
          {'\n'}
          {'}'};
        </code>
      </pre>
    </div>
  )
}

function Floating({ children, className = '', delay = 0 }) {
  return (
    <div
      aria-hidden="true"
      style={{ animationDelay: `${delay}s` }}
      className={`absolute animate-float motion-reduce:animate-none ${className}`}
    >
      {children}
    </div>
  )
}

function StatCard({ stat }) {
  return (
    <div className="glass rounded-2xl px-5 py-3 text-center shadow-xl shadow-black/10">
      <p className="grad-text text-2xl font-bold leading-tight">{stat.value}</p>
      <p className="text-xs text-muted">{stat.label}</p>
    </div>
  )
}

export default function Home() {
  usePageTitle('')
  const typed = useTypewriter(hero.roles)

  return (
    <section className="mx-auto grid max-w-7xl items-center lg:min-h-svh gap-10 px-5 pb-16 pt-[calc(var(--header-h)+2rem)] md:px-8 lg:grid-cols-2 lg:gap-6">
      {/* ---------- Left: words ---------- */}
      <div>
        <p className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-fg-soft">
          <span aria-hidden="true" className="relative flex h-3 w-3">
            <span className="absolute inset-0 animate-ping rounded-full bg-sky-400/60 motion-reduce:animate-none" />
            <span className="relative h-3 w-3 rounded-full bg-sky-500" />
          </span>
          {hero.status}
        </p>

        <p className="mt-8 text-2xl font-light text-muted md:text-4xl">{hero.greeting}</p>
        <h1 className="mt-2 text-[clamp(3rem,7.5vw,5.25rem)]">
          {site.firstName}
          <br />
          {site.lastName}
        </h1>

        <p className="mt-4 text-2xl font-bold text-fg md:text-3xl">
          {hero.introPrefix}{' '}
          <span aria-hidden="true" className="text-accent [text-shadow:0_0_28px_rgb(56_189_248/0.55)] dark:[text-shadow:0_0_28px_rgb(56_189_248/0.55)]">
            {typed}
            <span className="animate-blink motion-reduce:animate-none">|</span>
          </span>
          <span className="sr-only">{hero.roles.join(', ')}</span>
        </p>

        <p className="mt-6 max-w-xl text-fg-soft">{hero.text}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {hero.tech.map((t, i) => (
            <li key={t}>
              <Pill index={i}>{t}</Pill>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button to={hero.primaryCta.to}>
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Button>
          <Button to={hero.secondaryCta.to} variant="outline">
            {hero.secondaryCta.label}
            <MessageCircle aria-hidden="true" size={16} />
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm text-muted">{hero.followLabel}</span>
          <SocialLinks />
        </div>
      </div>

      {/* ---------- Right: portrait with floating details ---------- */}
      <div className="relative mx-auto mt-4 flex h-[27rem] w-full max-w-md items-center justify-center sm:h-[34rem] lg:mt-0 lg:max-w-lg">
        <Portrait className="relative mt-20 w-56 sm:mt-16 sm:w-72 lg:w-80" />

        <CodeCard className="absolute right-0 top-0 z-20 w-60 sm:w-72" />

        <Floating className="left-[8%] top-[32%] z-10" delay={0.4}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40">
            <Code size={18} />
          </span>
        </Floating>
        <Floating className="bottom-[26%] left-[16%] z-10 sm:bottom-[20%] sm:left-[24%]" delay={1.2}>
          <span className="flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg shadow-sky-500/40">
            <Star size={16} />
          </span>
        </Floating>
        <Floating className="bottom-[34%] right-[6%] z-10 sm:bottom-[36%] sm:right-[8%]" delay={0.8}>
          <span className="flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-600/40">
            <Zap size={16} />
          </span>
        </Floating>

        <Floating className="bottom-0 left-0 z-10 sm:bottom-[8%]" delay={0.2}>
          <StatCard stat={hero.stats[0]} />
        </Floating>
        <Floating className="bottom-[4%] right-0 z-10 sm:bottom-[18%]" delay={1.6}>
          <StatCard stat={hero.stats[1]} />
        </Floating>
      </div>
    </section>
  )
}
