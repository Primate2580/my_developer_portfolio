import { useEffect, useState } from 'react'

// Fetches a public contribution calendar for a GitHub username from the free
// github-contributions-api (jogruber.de). Only counts per day come back, never repo names.
// Result is remembered while the tab is open, so going back to Home doesn't refetch.
const cache = new Map()

export function useGithubContributions(username) {
  const [state, setState] = useState(() => cache.get(username) ?? { status: 'loading' })

  useEffect(() => {
    if (cache.has(username)) return
    const controller = new AbortController()

    fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`)
        return res.json()
      })
      .then((json) => {
        const days = (json.contributions ?? []).map((d) => ({
          date: d.date,
          count: Number(d.count) || 0,
          level: Math.min(4, Math.max(0, Number(d.level) || 0)),
        }))
        if (days.length === 0) throw new Error('No data')
        const total = days.reduce((sum, d) => sum + d.count, 0)
        const next = { status: 'ready', days, total }
        cache.set(username, next)
        setState(next)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'error' })
      })

    return () => controller.abort()
  }, [username])

  return state
}
