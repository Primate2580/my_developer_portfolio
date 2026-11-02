import { useEffect } from 'react'
import { site } from '../data/content'

// Each page sets its own browser-tab title, e.g. "About | primeswitch"
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.brand}` : `${site.brand} | ${site.name}`
  }, [title])
}
