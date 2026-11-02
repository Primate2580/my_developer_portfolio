import { Link } from 'react-router-dom'
import { site } from '../../data/content'

// The primeswitch logo. Two files, one per theme: the white version shows in dark mode,
// the black version in light mode (public/logo-dark.png and public/logo-light.png).
export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} aria-label={`${site.brand}, home`} className="inline-flex min-h-11 items-center">
      <img
        src="/logo-dark.png"
        alt=""
        width="614"
        height="187"
        className="hidden h-12 w-auto sm:h-14 dark:block"
      />
      <img
        src="/logo-light.png"
        alt=""
        width="615"
        height="186"
        className="block h-12 w-auto sm:h-14 dark:hidden"
      />
    </Link>
  )
}
