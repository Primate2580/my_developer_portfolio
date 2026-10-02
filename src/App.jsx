import SkipLink from './components/ui/SkipLink'
import DotRow from './components/ui/DotRow'
import Navigation from './components/Navigation'

// Section shells: each one gets real content in its own phase.
const sections = [
  { id: 'home', label: 'Home', tone: 'bg-violet-deep' },
  { id: 'about', label: 'About', tone: 'bg-ink' },
  { id: 'skills', label: 'Skills', tone: 'bg-violet-deep/40' },
  { id: 'work', label: 'Work', tone: 'bg-ink' },
  { id: 'experience', label: 'Experience', tone: 'bg-violet-deep/40' },
  { id: 'contact', label: 'Contact', tone: 'bg-ink' },
]

// TEMP (remove in Phase 2): proves every design token works as a Tailwind class.
const swatches = [
  'bg-ink', 'bg-violet-deep', 'bg-violet', 'bg-magenta', 'bg-coral',
  'bg-orange', 'bg-cyan', 'bg-blue', 'bg-lilac', 'bg-rail',
]

export default function App() {
  return (
    <>
      <SkipLink />
      <Navigation />

      {/* pl-(--rail-width): content starts exactly where the side rail ends */}
      <main
        id="main-content"
        tabIndex={-1}
        className="relative pl-(--rail-width) focus:outline-none"
      >
        {/* Decorative dots along the top of the content area, just under the header */}
        <DotRow className="absolute left-(--rail-width) right-0 top-[calc(var(--header-h)+0.75rem)]" />

        {sections.map(({ id, label, tone }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            // The negative margin lets the section background run underneath the
            // translucent rail; the extra left padding keeps the text clear of it.
            className={`-ml-(--rail-width) flex min-h-screen flex-col items-start justify-center gap-6 pl-[calc(var(--rail-width)+1.5rem)] pr-6 ${tone}`}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-coral">Section shell</p>
            <h2 id={`${id}-heading`}>{label}</h2>

            {id === 'home' && (
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {swatches.map((s) => (
                  <span key={s} className={`h-10 w-10 rounded-sm border border-white/20 ${s}`} />
                ))}
                <span className="font-display text-3xl tracking-widest text-lilac">
                  TOKEN CHECK
                </span>
              </div>
            )}
          </section>
        ))}
      </main>
    </>
  )
}
