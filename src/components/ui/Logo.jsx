import { site } from '../../data/content'

// Wide-tracked uppercase wordmark. The negative right margin cancels the
// extra letter-spacing after the last letter so it centres properly.
export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      aria-label={`${site.brand}, back to top`}
      className={`-mr-[0.35em] inline-block text-sm font-semibold uppercase tracking-[0.35em] text-white ${className}`}
    >
      {site.brand}
    </a>
  )
}
