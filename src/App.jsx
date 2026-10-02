// Phase 0: empty section shells. Each one gets real content in its own phase.
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
    <main>
      {sections.map(({ id, label, tone }) => (
        <section
          key={id}
          id={id}
          aria-labelledby={`${id}-heading`}
          className={`flex min-h-screen flex-col items-start justify-center gap-6 px-6 ${tone}`}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-coral">
            Section shell
          </p>
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
  )
}
