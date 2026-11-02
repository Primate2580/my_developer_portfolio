import { useState } from 'react'
import { about, site } from '../../data/content'

// Finds src/assets/profile.(jpg|jpeg|png|webp) at build time.
// If none exists the object is empty, so nothing breaks: we show the fallback.
const found = import.meta.glob('../../assets/profile.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const photoUrl = Object.values(found)[0]

const initials = site.name
  .split(' ')
  .map((w) => w[0])
  .join('')

// Photo inside a blue -> pink gradient ring. shape="circle" (hero) or "card" (about page).
export default function Portrait({ shape = 'circle', className = '' }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = photoUrl && !failed
  const round = shape === 'circle' ? 'rounded-full aspect-square' : 'rounded-[2rem] aspect-[4/5]'

  return (
    <div className={`grad-bg p-1 shadow-2xl shadow-brand-violet/30 ${round} ${className}`}>
      <div className={`h-full w-full overflow-hidden bg-surface-solid ${shape === 'circle' ? 'rounded-full' : 'rounded-[1.75rem]'}`}>
        {showPhoto ? (
          <img
            src={photoUrl}
            alt={about.photoAlt}
            width="800"
            height={shape === 'circle' ? '800' : '1000'}
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={about.photoAlt}
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-brand-blue via-brand-violet to-brand-pink"
          >
            <span aria-hidden="true" className="text-6xl font-extrabold tracking-tight text-white/90">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
