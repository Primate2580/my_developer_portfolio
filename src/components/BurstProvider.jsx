import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { BurstContext } from './burstContext'

// "Burst open" page transition. A cover card calls open(path, rect): a panel starting at the
// card's exact position and size grows to fill the screen, the real page loads underneath,
// then the panel fades away. People who ask for reduced motion skip straight to the page.
export function BurstProvider({ children }) {
  const navigate = useNavigate()
  const [burst, setBurst] = useState(null) // { to, rect, phase: 'expand' | 'fade' }
  const busy = useRef(false)

  const open = useCallback(
    (to, rect) => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced || busy.current) {
        navigate(to)
        return
      }
      busy.current = true
      setBurst({ to, rect, phase: 'expand' })
    },
    [navigate],
  )

  function onDone() {
    if (burst.phase === 'expand') {
      navigate(burst.to)
      setBurst((b) => ({ ...b, phase: 'fade' }))
    } else {
      setBurst(null)
      busy.current = false
    }
  }

  const full = {
    top: 0,
    left: 0,
    width: document.documentElement.clientWidth,
    height: window.innerHeight,
    borderRadius: 0,
  }

  return (
    <BurstContext.Provider value={open}>
      {children}
      {burst && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed z-[200] overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--surface-solid) 0%, var(--bg) 100%)' }}
          initial={{
            top: burst.rect.top,
            left: burst.rect.left,
            width: burst.rect.width,
            height: burst.rect.height,
            borderRadius: 24,
            opacity: 1,
          }}
          animate={burst.phase === 'expand' ? { ...full, opacity: 1 } : { ...full, opacity: 0 }}
          transition={
            burst.phase === 'expand'
              ? { duration: 0.55, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0.4, ease: 'easeOut' }
          }
          onAnimationComplete={onDone}
        />
      )}
    </BurstContext.Provider>
  )
}
