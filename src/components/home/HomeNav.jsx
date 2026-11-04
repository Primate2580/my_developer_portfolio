import { home } from '../../data/homeContent'

// The list on the left: a line that grows and turns colourful for the card in view.
// Clicking scrolls the right-hand column to that card (it does not open the page).
export default function HomeNav({ active }) {
  function go(e, id) {
    const el = document.getElementById(`section-${id}`)
    if (!el) return
    e.preventDefault()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' })
  }

  return (
    <nav aria-label="Jump to a section" className="hidden lg:block">
      <ul className="space-y-1">
        {home.nav.map((item) => {
          const isActive = active === `section-${item.id}`
          return (
            <li key={item.id}>
              <a
                href={`#section-${item.id}`}
                onClick={(e) => go(e, item.id)}
                aria-current={isActive ? 'location' : undefined}
                className="group flex min-h-8 items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-300 motion-reduce:transition-none ${
                    isActive ? 'grad-bg w-16' : 'w-8 bg-muted group-hover:w-12 group-hover:bg-fg'
                  }`}
                />
                <span className={isActive ? 'text-fg' : 'text-muted group-hover:text-fg'}>{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
