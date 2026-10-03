import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useUnknownHash } from '../hooks/useUnknownHash'
import Header from './Header'
import SideRail from './SideRail'
import MobileMenu from './MobileMenu'

// Owns the navigation state (is the menu open? which section is active?)
// and hands it to the three pieces: top bar, side rail, overlay menu.
const navIds = navLinks.map((l) => l.href.slice(1))

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navIds)
  useUnknownHash()
  const toggleRef = useRef(null)
  const wasOpen = useRef(false)

  // While the menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Give focus back to the hamburger when the menu closes.
  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus()
    wasOpen.current = open
  }, [open])

  // The overlay is mobile-only: if the window grows to desktop width, close it.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 48rem)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <Header
        active={active}
        menuOpen={open}
        onToggle={() => setOpen((v) => !v)}
        toggleRef={toggleRef}
      />
      <SideRail active={active} />
      <AnimatePresence>
        {open && <MobileMenu active={active} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
