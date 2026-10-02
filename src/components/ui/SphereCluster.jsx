import { useEffect, useRef, useState } from 'react'

// Four glossy spheres joined by liquid "bridges". Pure SVG + CSS, no images.
//
// How it works (3 layers, bottom to top):
//  1. GOO layer : plain circles + thick lines, run through a "gooey" filter
//                 (blur, then sharpen the alpha). The blur makes the shapes
//                 merge into smooth liquid necks between the spheres.
//  2. SPHERES   : radial gradients for colour, a dark edge for depth, and
//                 soft white ellipses for the glossy highlights.
//  3. Both layers use the SAME float animation, so the spheres drift together
//                 while the goo necks stretch and morph between them.

const VIEW = { w: 640, h: 600 }

const spheres = [
  { id: 'a', cx: 150, cy: 420, r: 128, stops: ['#b8f4ff', 'var(--color-cyan)', 'var(--color-blue)', '#16288f'], flat: 'var(--color-blue)', dur: 8.5, delay: -1.5 },
  { id: 'b', cx: 335, cy: 195, r: 114, stops: ['#ffb8ec', 'var(--color-magenta)', '#5a2bd6', '#2a1486'], flat: '#5a2bd6', dur: 7.2, delay: -4 },
  { id: 'c', cx: 505, cy: 425, r: 104, stops: ['#ff9ed4', 'var(--color-magenta)', '#b3123f', '#6e0a2a'], flat: '#b3123f', dur: 9.4, delay: -2.5 },
  { id: 'd', cx: 650, cy: 215, r: 96, stops: ['#ff94a8', '#d0103a', '#8a0a4a', '#4a0a3a'], flat: '#c0123f', dur: 8, delay: -6 },
]

// Colour of each bridge, from one sphere to the next
const bridges = [
  { id: 'ab', from: 'a', to: 'b', colors: ['var(--color-cyan)', 'var(--color-blue)', '#5a2bd6'] },
  { id: 'bc', from: 'b', to: 'c', colors: ['#5b3df0', '#c01aa8', '#e0189b'] },
  { id: 'cd', from: 'c', to: 'd', colors: ['#e0189b', '#d0103a'] },
]

const byId = Object.fromEntries(spheres.map((s) => [s.id, s]))
const stopOffsets = ['0%', '35%', '75%', '100%']

export default function SphereCluster({ className = '' }) {
  const ref = useRef(null)
  const [running, setRunning] = useState(true)

  // Filters + endless animation are not free: pause when scrolled out of view.
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting))
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const floatProps = (s) => ({
    className:
      'origin-center animate-sphere-float motion-reduce:animate-none [transform-box:fill-box]',
    style: {
      animationDuration: `${s.dur}s`,
      animationDelay: `${s.delay}s`,
      animationPlayState: running ? 'running' : 'paused',
    },
  })

  return (
    // aspect-ratio reserves the space before anything paints: no layout shift
    <div ref={ref} aria-hidden="true" className={`aspect-[640/600] ${className}`}>
      <svg
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        className="h-full w-full overflow-visible"
        focusable="false"
      >
        <defs>
          {/* Gooey filter: blur, then threshold the alpha so shapes fuse */}
          <filter id="sc-goo" filterUnits="userSpaceOnUse" x="-120" y="-120" width="900" height="840" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          {/* Soft blur for the glossy highlights */}
          <filter id="sc-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          {/* Dark rim = inner shadow, shared by every sphere */}
          <radialGradient id="sc-shade" cx="50%" cy="50%" r="50%">
            <stop offset="55%" stopColor="#0a0030" stopOpacity="0" />
            <stop offset="100%" stopColor="#0a0030" stopOpacity="0.5" />
          </radialGradient>

          {spheres.map((s) => (
            <radialGradient key={s.id} id={`sc-fill-${s.id}`} cx="50%" cy="50%" r="55%" fx="35%" fy="28%">
              {s.stops.map((c, i) => (
                <stop key={i} offset={stopOffsets[i]} style={{ stopColor: c }} />
              ))}
            </radialGradient>
          ))}

          {bridges.map((b) => {
            const f = byId[b.from]
            const t = byId[b.to]
            return (
              <linearGradient key={b.id} id={`sc-br-${b.id}`} gradientUnits="userSpaceOnUse" x1={f.cx} y1={f.cy} x2={t.cx} y2={t.cy}>
                {b.colors.map((c, i) => (
                  <stop key={i} offset={`${(i / (b.colors.length - 1)) * 100}%`} style={{ stopColor: c }} />
                ))}
              </linearGradient>
            )
          })}
        </defs>

        {/* 1. Liquid bridges */}
        <g filter="url(#sc-goo)">
          {bridges.map((b) => {
            const f = byId[b.from]
            const t = byId[b.to]
            return (
              <line key={b.id} x1={f.cx} y1={f.cy} x2={t.cx} y2={t.cy} stroke={`url(#sc-br-${b.id})`} strokeWidth="92" strokeLinecap="round" />
            )
          })}
          {spheres.map((s) => (
            <circle key={s.id} cx={s.cx} cy={s.cy} r={s.r} style={{ ...floatProps(s).style, fill: s.flat }} className={floatProps(s).className} />
          ))}
        </g>

        {/* 2. Glossy spheres */}
        {spheres.map((s) => {
          const fp = floatProps(s)
          const hx = s.cx - 0.3 * s.r
          const hy = s.cy - 0.44 * s.r
          const bx = s.cx + 0.34 * s.r
          const by = s.cy + 0.5 * s.r
          return (
            <g key={s.id} {...fp}>
              <circle cx={s.cx} cy={s.cy} r={s.r} fill={`url(#sc-fill-${s.id})`} />
              <circle cx={s.cx} cy={s.cy} r={s.r} fill="url(#sc-shade)" />
              {/* main specular highlight */}
              <ellipse cx={hx} cy={hy} rx={0.3 * s.r} ry={0.15 * s.r} transform={`rotate(-30 ${hx} ${hy})`} fill="#fff" opacity="0.7" filter="url(#sc-soft)" />
              {/* faint bounce light, bottom right */}
              <ellipse cx={bx} cy={by} rx={0.22 * s.r} ry={0.08 * s.r} transform={`rotate(-40 ${bx} ${by})`} fill="#fff" opacity="0.25" filter="url(#sc-soft)" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
