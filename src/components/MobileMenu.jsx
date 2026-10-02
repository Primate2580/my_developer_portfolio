import { useEffect, useRef } from 'react'
import { MotionConfig, motion, useIsPresent } from 'framer-motion'
import { X } from 'lucide-react'
import { navLinks } from '../data/content'
import Logo from './ui/Logo'

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

// Full-screen overlay menu. Escape + scroll lock live in Navigation;
// this component handles click-outside and the focus trap.
export default function MobileMenu({ active, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  // false while the exit animation plays, so we stop trapping focus and
  // Navigation can hand focus back to the hamburger.
  const isPresent = useIsPresent()

  // Move focus into the dialog when it opens.
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Pull focus back in if it ever escapes (e.g. tabbing past the last link).
  useEffect(() => {
    if (!isPresent) return
    const pullBack = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        closeRef.current?.focus()
      }
    }
    document.addEventListener('focusin', pullBack)
    return () => document.removeEventListener('focusin', pullBack)
  }, [isPresent])

  // Keep Tab / Shift+Tab cycling inside the dialog.
  const handleKeyDown = (e) => {
    if (e.key !== 'Tab') return
    const focusable = dialogRef.current.querySelectorAll('a[href], button:not([disabled])')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  // Click on empty space (not on a link or button) closes the menu.
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    // reducedMotion="user": people who prefer less motion get fades only, no sliding.
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={dialogRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.25 }}
        onKeyDown={handleKeyDown}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-violet-deep via-ink to-ink px-8 md:hidden"
      >
        {/* Same position as the hamburger so it feels like the icon turned into an X */}
        <div className="pointer-events-none absolute inset-x-0 top-0 grid h-(--header-h) grid-cols-[1fr_auto_1fr] items-center px-3">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center justify-self-start text-white"
          >
            <X aria-hidden="true" size={26} strokeWidth={2} />
          </button>
          <span className="pointer-events-auto">
            <Logo />
          </span>
        </div>

        <nav aria-label="Mobile">
          <motion.ul variants={list} initial="hidden" animate="show" className="flex flex-col gap-5">
            {navLinks.map(({ label, href }, i) => {
              const isActive = active === href.slice(1)
              return (
                <motion.li key={href} variants={item} className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="w-8 text-sm font-light tracking-widest text-orange"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={href}
                    onClick={onClose}
                    aria-current={isActive ? 'true' : undefined}
                    className="text-5xl font-extrabold tracking-tight text-white transition-colors hover:text-coral aria-[current=true]:text-coral motion-reduce:transition-none"
                  >
                    {label}
                  </a>
                </motion.li>
              )
            })}
          </motion.ul>
        </nav>
      </motion.div>
    </MotionConfig>
  )
}
