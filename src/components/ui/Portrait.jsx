
import { useState } from 'react'
import { about, site } from '../../data/content'
import profilePhoto from '../../assets/profile.jpg'

const initials = site.name
  .split(' ')
  .map((w) => w[0])
  .join('')

export default function Portrait({ shape = 'circle', className = '' }) {
  const [failed, setFailed] = useState(false)

  const round =
    shape === 'circle'
      ? 'rounded-full aspect-square'
      : 'rounded-[2rem] aspect-[4/5]'

  return (
    <div className={`grad-bg p-1 shadow-2xl shadow-brand-violet/30 ${round} ${className}`}>
      <div className={`h-full w-full overflow-hidden bg-surface-solid ${shape === 'circle' ? 'rounded-full' : 'rounded-[1.75rem]'}`}>
        {!failed ? (
          <img
            src={profilePhoto}
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
            <span className="text-6xl font-extrabold tracking-tight text-white/90">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
