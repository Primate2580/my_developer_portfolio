import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { home } from '../../data/homeContent'
import { useBurst } from '../burstContext'

// A "cover" for a page: shows the top of that page, fading out at the bottom.
// Clicking it bursts open the real page. It is a real link, so keyboard,
// right-click and ctrl/cmd-click (new tab) all still work.
export default function Cover({ to, title, id, children }) {
  const open = useBurst()

  function onClick(e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    open(to, e.currentTarget.getBoundingClientRect())
  }

  return (
    <div id={id} className="scroll-mt-24">
      <Link
        to={to}
        onClick={onClick}
        aria-label={`${home.open}: ${title}`}
        className="group relative block h-[26rem] overflow-hidden rounded-3xl border border-line bg-surface-solid p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-fg/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-8"
      >
        <div aria-hidden="true">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl">{title}</h2>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-fg/10 text-fg transition group-hover:bg-fg/20 motion-reduce:transition-none">
              <ArrowUpRight size={18} />
            </span>
          </div>
          {children}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 flex h-40 items-end bg-linear-to-t from-surface-solid from-35% to-transparent p-6 md:px-8"
        >
          <span className="grad-text text-sm font-semibold">{home.open}</span>
        </div>
      </Link>
    </div>
  )
}
