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

// A soft, organic "blob" made with uneven border-radius values.
const blob = 'rounded-[58%_42%_51%_49%/46%_55%_45%_54%]'

const initials = site.name
  .split(' ')
  .map((w) => w[0])
  .join('')

export default function Portrait({ className = '' }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = photoUrl && !failed

  return (
    <div className={`relative aspect-[4/5] ${className}`}>
      {/* Coral outline, nudged down-right so it peeks out from behind the photo */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-x-4 translate-y-4 border-2 border-coral ${blob}`}
      />

      <div className={`relative h-full w-full overflow-hidden ${blob}`}>
        {showPhoto ? (
          <img
            src={photoUrl}
            alt={about.photoAlt}
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          // Fallback: still announced as an image to screen readers
          <div
            role="img"
            aria-label={about.photoAlt}
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-violet via-magenta to-blue"
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
