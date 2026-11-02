import { useCallback, useEffect, useState } from 'react'

// Reads/writes the theme on <html data-theme="dark|light"> and remembers it.
// index.html sets the saved theme before first paint, so we just read it here.
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f3f5fb' : '#0f1626')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage blocked: the theme still changes for this visit */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
