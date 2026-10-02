import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import Logo from './ui/Logo'

// Top bar.
// Mobile : [hamburger]   [logo centred]   [empty]
// Desktop: [logo left]                    [links right]
export default function Header({ active, menuOpen, onToggle, toggleRef }) {
  // Transparent over the hero; once you scroll, it gets a dark blurred background
  // so page content passing underneath never collides with the logo or links.
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 grid h-(--header-h) grid-cols-[1fr_auto_1fr] items-center px-3 transition-colors duration-300 motion-reduce:transition-none md:flex md:justify-between md:px-8 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md' : 'bg-linear-to-b from-ink/80 to-transparent'
      }`}
    >
      {/* Hamburger: three bars, the middle one shorter. Mobile only. */}
      <button
        ref={toggleRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={onToggle}
        className="group flex h-11 w-11 flex-col items-start justify-center gap-[5px] justify-self-start px-2.5 md:hidden"
      >
        <span className="block h-0.5 w-6 bg-white" />
        <span className="block h-0.5 w-4 bg-white transition-[width] duration-200 group-hover:w-6 motion-reduce:transition-none" />
        <span className="block h-0.5 w-6 bg-white" />
      </button>

      <Logo />

      {/* Desktop links */}
      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-10">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? 'true' : undefined}
                  className="relative py-2 text-sm font-medium text-white/90 transition-colors hover:text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-coral after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=true]:text-white aria-[current=true]:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none"
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
