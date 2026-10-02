import { useEffect, useState } from 'react'

/**
 * Tells us which nav item should be highlighted while the user scrolls.
 *
 * - Watches every <section id> inside <main> with an IntersectionObserver.
 * - The observer only "sees" a thin band across the middle of the screen, so
 *   the section crossing the middle is the current one.
 * - Sections that have no nav link (Skills, Experience) count towards the
 *   nearest nav link above them (About, Work).
 *
 * @param {string[]} navIds  ids that exist in the nav, in page order
 * @returns {string} the id of the active nav item
 */
export function useActiveSection(navIds) {
  const [active, setActive] = useState(navIds[0])

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    if (!sections.length) return

    const order = sections.map((s) => s.id)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const index = order.indexOf(entry.target.id)
          // Walk back from this section to the closest one that has a nav link
          for (let i = index; i >= 0; i--) {
            if (navIds.includes(order[i])) {
              setActive(order[i])
              break
            }
          }
        }
      },
      { rootMargin: '-45% 0px -54% 0px' }, // ~1% tall band in the middle
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [navIds])

  return active
}
