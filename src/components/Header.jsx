import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { header, navLinks } from '../data/content'
import Button from './ui/Button'
import Logo from './ui/Logo'
import ThemeToggle from './ui/ThemeToggle'
import MobileMenu from './MobileMenu'

const linkBase =
  'relative inline-flex min-h-11 items-center px-3 text-sm font-medium transition-colors motion-reduce:transition-none'

export default function Header() {
  const { pathname } = useLocation()
  // The home page has its own list on the left, so these links show on the other pages only
  const showLinks = pathname !== '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Glass background appears once you scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-(--header-h) transition-colors duration-300 motion-reduce:transition-none ${
        scrolled || open ? 'border-b border-line bg-bg/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo onClick={() => setOpen(false)} />

        {showLinks && (
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? 'text-fg' : 'text-fg-soft hover:text-fg'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {l.label}
                        {isActive && (
                          <span aria-hidden="true" className="grad-bg absolute inset-x-3 bottom-1 h-0.5 rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="hidden sm:block">
            <Button to={header.cta.to} className="h-10 px-5">
              {header.cta.label}
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-fg transition hover:bg-fg/10 lg:hidden motion-reduce:transition-none"
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
