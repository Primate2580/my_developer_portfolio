import { useEffect } from 'react'

/**
 * "404-safe" hashes.
 *
 * If the address ends in #something that isn't on the page (a typo, an old link,
 * #/nope ...) browsers just sit there and do nothing. Instead we scroll back to
 * the top and tidy the address bar, so the visitor always lands somewhere sensible.
 * Real section links (#about, #work ...) are left alone.
 */
export function useUnknownHash() {
  useEffect(() => {
    const check = () => {
      const raw = window.location.hash.slice(1)
      if (!raw) return

      let id = raw
      try {
        id = decodeURIComponent(raw)
      } catch {
        /* malformed %-escape: use it as typed */
      }
      if (document.getElementById(id)) return

      // Smooth when allowed: scroll-behavior is set in CSS (and switched off for reduced motion)
      window.scrollTo({ top: 0 })
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }

    check() // on first load
    window.addEventListener('hashchange', check) // when a link or the address bar changes it
    return () => window.removeEventListener('hashchange', check)
  }, [])
}
