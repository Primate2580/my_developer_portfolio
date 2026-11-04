import { socials } from '../../data/content'
import { iconMap } from './socialIconMap'

// Row of round icon buttons (hero + footer). Each opens in a new tab.
export default function SocialLinks({ className = '', ...rest }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`} {...rest}>
      {socials.map((s) => {
        const Icon = iconMap[s.icon]
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in a new tab)`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-fg/10 text-fg-soft transition hover:-translate-y-0.5 hover:bg-fg/20 hover:text-fg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <Icon size={18} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
