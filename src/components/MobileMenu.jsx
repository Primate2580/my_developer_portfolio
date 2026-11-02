import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { header, navLinks } from '../data/content'
import { DURATION, EASE } from '../lib/motion'
import Button from './ui/Button'

// Drop-down panel for screens narrower than 1024px. Closes on link click and on Escape.
export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: DURATION.base, ease: EASE }}
          className="absolute inset-x-0 top-full border-b border-line bg-bg lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 pb-6 pt-2 md:px-8">
            <ul>
              {navLinks.map((l) => (
                <li key={l.to} className="border-b border-line/60 last:border-0">
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex min-h-12 items-center text-lg font-medium ${isActive ? 'grad-text' : 'text-fg-soft'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button to={header.cta.to} onClick={onClose} className="mt-5 w-full sm:hidden">
              {header.cta.label}
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
