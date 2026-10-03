import { useEffect, useRef, useState } from 'react'

// Screenshot area of a project panel. Three states:
//  - loading : spinner while the image downloads
//  - loaded  : the image fades in
//  - fallback: gradient (no image set, or the file failed to load)
const gradients = [
  'from-violet via-magenta to-coral',
  'from-blue via-violet to-magenta',
  'from-cyan via-blue to-violet',
]

export default function ProjectImage({ project, index }) {
  const [state, setState] = useState(project.image ? 'loading' : 'fallback')
  const imgRef = useRef(null)

  // If the browser already had the image cached, `load` may have fired before React listened.
  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) setState('loaded')
  }, [])

  if (state === 'fallback') {
    return (
      <div
        role="img"
        aria-label={`${project.imageAlt ?? project.title}: screenshot coming soon`}
        className={`flex h-full w-full items-center justify-center bg-linear-to-br ${gradients[index % gradients.length]}`}
      >
        <span aria-hidden="true" className="text-5xl font-extrabold tracking-tight text-white/90">
          {project.id}
        </span>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full bg-white/5">
      {state === 'loading' && (
        <div data-spinner aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white motion-reduce:animate-none" />
        </div>
      )}
      <img
        ref={imgRef}
        src={project.image}
        alt={project.imageAlt ?? `Screenshot of ${project.title}`}
        // width/height reserve the right shape before the file arrives (no layout shift)
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
        draggable="false"
        onLoad={() => setState('loaded')}
        onError={() => setState('fallback')}
        className={`h-full w-full object-cover transition-opacity duration-(--duration-base) motion-reduce:transition-none ${state === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}
