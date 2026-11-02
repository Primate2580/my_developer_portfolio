import { Link } from 'react-router-dom'
import { footer, navLinks, site } from '../data/content'
import SocialLinks from './ui/SocialLinks'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold text-fg">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{footer.meta}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex min-h-11 items-center text-sm text-fg-soft transition-colors hover:text-fg motion-reduce:transition-none"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </div>
      <p className="border-t border-line px-5 py-5 text-center text-xs text-muted">
        &copy; {YEAR} {site.name}. {footer.rights}
      </p>
    </footer>
  )
}
