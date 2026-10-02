import SkipLink from './components/ui/SkipLink'
import DotRow from './components/ui/DotRow'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

// Section shells: each one gets real content in its own phase.
const shells = [
  { id: 'about', label: 'About', tone: 'bg-ink' },
  { id: 'skills', label: 'Skills', tone: 'bg-violet-deep/40' },
  { id: 'work', label: 'Work', tone: 'bg-ink' },
  { id: 'experience', label: 'Experience', tone: 'bg-violet-deep/40' },
  { id: 'contact', label: 'Contact', tone: 'bg-ink' },
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
        {/* z-10 keeps the dots above the hero's background */}
        <DotRow className="absolute left-(--rail-width) right-0 top-[calc(var(--header-h)+0.75rem)] z-10" />

        <Hero />

        {shells.map(({ id, label, tone }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className={`-ml-(--rail-width) flex min-h-screen flex-col items-start justify-center gap-6 pl-[calc(var(--rail-width)+1.5rem)] pr-6 ${tone}`}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-coral">Section shell</p>
            <h2 id={`${id}-heading`}>{label}</h2>
          </section>
        ))}
      </main>
    </>
  )
}
