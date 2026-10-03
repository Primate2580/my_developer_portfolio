import { ArrowUp } from 'lucide-react'
import { footer, navLinks, site } from '../data/content'
import Logo from './ui/Logo'

// Worked out once when the page loads (not on every render)
const year = new Date().getFullYear()

export default function Footer() {
  return (
    // Same left padding as the sections so nothing sits under the side rail
    <footer className="relative border-t border-white/10 bg-ink py-10 pl-[calc(var(--rail-width)+2.75rem)] pr-6 md:pl-[calc(var(--rail-width)+4rem)] md:pr-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo asText />

          <nav aria-label="Footer">
            <ul role="list" className="flex flex-wrap gap-x-8 gap-y-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-sm text-white/90 transition-colors hover:text-coral motion-reduce:transition-none"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#home" className="group inline-flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-white/90">Back to top</span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-coral text-coral transition-colors group-hover:bg-coral group-hover:text-ink motion-reduce:transition-none">
              <ArrowUp aria-hidden="true" size={20} strokeWidth={2} />
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/80">
            &copy; {year} {site.name}. {footer.rights}
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-white/85">{footer.meta}</p>
        </div>
      </div>
    </footer>
  )
}
