import { Fragment } from 'react'
import { navLinks } from '../data/content'
import Dash from './ui/Dash'

// Persistent left rail (Reference 2): dark, translucent, rotated labels
// separated by short orange dashes. Visible on every screen size.
export default function SideRail({ active }) {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-0 left-0 top-(--header-h) z-30 w-(--rail-width) bg-rail backdrop-blur-md"
    >
      <ul className="flex h-full flex-col items-center justify-evenly py-6">
        {navLinks.map(({ label, href }, i) => {
          const isActive = active === href.slice(1)
          return (
            <Fragment key={href}>
              {i > 0 && (
                <li aria-hidden="true">
                  <Dash />
                </li>
              )}
              <li>
                <a
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  // vertical-rl + rotate-180 makes the text read bottom-to-top
                  className="block rotate-180 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors [writing-mode:vertical-rl] hover:text-white aria-[current=true]:font-semibold aria-[current=true]:text-coral motion-reduce:transition-none md:text-xs"
                >
                  {label}
                </a>
              </li>
            </Fragment>
          )
        })}
      </ul>
    </nav>
  )
}
