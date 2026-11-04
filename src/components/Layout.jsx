import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DURATION, EASE } from '../lib/motion'
import Background from './Background'
import Header from './Header'
import CtaBand from './CtaBand'
import Footer from './Footer'
import { BurstProvider } from './BurstProvider'
import { navLinks } from '../data/content'

// Wraps every page: background, header, the page itself, footer.
export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const first = useRef(true)
  // Contact bar on every real page except Home (it has a Contact cover), Contact itself and the 404 page
  const showCta = pathname !== '/contact' && pathname !== '/' && navLinks.some((l) => l.to === pathname)

  // On every page change: jump to the top and move keyboard focus to the page,
  // so screen-reader and keyboard users start at the new content.
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <BurstProvider>
    <div className="relative flex min-h-svh flex-col overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-lg bg-fg px-4 py-2 font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Background />
      <Header />

      <main id="main-content" ref={mainRef} tabIndex={-1} className="relative flex-1 focus:outline-none">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.base, ease: EASE }}
        >
          <Outlet />
        </motion.div>
      </main>

      {showCta && <CtaBand />}
      <Footer />
    </div>
    </BurstProvider>
  )
}
