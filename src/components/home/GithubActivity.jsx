import { github } from '../../data/homeContent'
import { useGithubContributions } from '../../hooks/useGithubContributions'
import { GithubIcon } from '../ui/SocialIcons'

// Cell colours for 0 (none) to 4 (most). Brand blue -> violet -> pink.
const LEVEL = ['bg-fg/10', 'bg-sky-400/40', 'bg-indigo-400/70', 'bg-purple-500', 'bg-pink-500']

const monthName = new Intl.DateTimeFormat('en', { month: 'short', timeZone: 'UTC' })
const longDate = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeZone: 'UTC' })
const toDate = (iso) => new Date(`${iso}T00:00:00Z`)

// Turns the flat list of days into columns of 7 (Sunday first), padding the first week.
function toCells(days) {
  const offset = toDate(days[0].date).getUTCDay()
  const cells = [...Array(offset).fill(null), ...days]
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

function monthLabels(cells) {
  const labels = []
  let last = -1
  for (let w = 0; w < cells.length / 7; w++) {
    const first = cells.slice(w * 7, w * 7 + 7).find(Boolean)
    if (!first) continue
    const m = toDate(first.date).getUTCMonth()
    // A label this close to the right edge would be cut off
    if (m !== last && w < cells.length / 7 - 2) {
      labels.push({ week: w, text: monthName.format(toDate(first.date)) })
      last = m
    }
  }
  // A short first month would crowd the next label, so drop it
  if (labels.length > 1 && labels[1].week - labels[0].week < 3) labels.shift()
  return labels
}

function Graph({ days, total }) {
  const cells = toCells(days)
  const weeks = cells.length / 7
  const columns = { gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }

  return (
    <div className="overflow-x-auto pb-2">
      <div
        role="img"
        aria-label={`${github.summary(total)}, shown as a calendar of daily activity.`}
        className="min-w-[540px]"
      >
        <div aria-hidden="true" className="mb-1 grid h-5 gap-[3px]" style={columns}>
          {monthLabels(cells).map((l) => (
            <span
              key={l.week}
              className="whitespace-nowrap text-xs text-muted"
              style={{ gridColumnStart: l.week + 1 }}
            >
              {l.text}
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="grid gap-[3px]"
          style={{ ...columns, gridTemplateRows: 'repeat(7, auto)', gridAutoFlow: 'column' }}
        >
          {cells.map((d, i) =>
            d ? (
              <span
                key={d.date}
                title={`${d.count} contribution${d.count === 1 ? '' : 's'} on ${longDate.format(toDate(d.date))}`}
                className={`aspect-square rounded-[3px] ${LEVEL[d.level]}`}
              />
            ) : (
              <span key={`pad-${i}`} className="aspect-square" />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default function GithubActivity() {
  const state = useGithubContributions(github.username)

  return (
    <section id="section-github" aria-labelledby="github-title" className="scroll-mt-24 rounded-3xl border border-line bg-surface-solid p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 id="github-title" className="text-2xl md:text-3xl">
            {github.title}
          </h2>
          <span aria-hidden="true" className="grad-bg mt-2 block h-1 w-12 rounded-full" />
          {state.status === 'ready' && <p className="mt-4 text-fg-soft">{github.summary(state.total)}</p>}
        </div>
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${github.username} on GitHub (opens in a new tab)`}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-soft transition-colors hover:text-fg motion-reduce:transition-none"
        >
          <GithubIcon size={18} />@{github.username}
        </a>
      </div>

      {state.status === 'loading' && (
        <div role="status" aria-label="Loading GitHub activity" className="h-32 animate-pulse rounded-2xl bg-fg/5 motion-reduce:animate-none" />
      )}

      {state.status === 'error' && (
        <p className="text-fg-soft">
          {github.error}{' '}
          <a href={github.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline underline-offset-4 hover:text-fg">
            {github.errorLink}
          </a>
        </p>
      )}

      {state.status === 'ready' && (
        <>
          <Graph days={state.days} total={state.total} />
          <div aria-hidden="true" className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted">
            {github.less}
            {LEVEL.map((c) => (
              <span key={c} className={`h-3 w-3 rounded-[3px] ${c}`} />
            ))}
            {github.more}
          </div>
        </>
      )}
    </section>
  )
}
