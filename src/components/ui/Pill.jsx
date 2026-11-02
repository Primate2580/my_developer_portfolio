// Small coloured tag. Known tech names get their own colour; anything else cycles through the palette.
// Text colours are chosen to stay readable on each background.
const palette = [
  'bg-blue-600 text-white',
  'bg-fuchsia-600 text-white',
  'bg-amber-400 text-amber-950',
  'bg-sky-600 text-white',
  'bg-emerald-700 text-white',
  'bg-violet-600 text-white',
]

const known = {
  html5: 0,
  'html & css': 0,
  css3: 1,
  javascript: 2,
  tailwind: 3,
  'tailwind css': 3,
  react: 3,
  python: 4,
  django: 4,
  'node.js': 4,
  vite: 5,
  supabase: 4,
  'git & github': 5,
}

function pillClass(label, fallbackIndex = 0) {
  const i = known[label.toLowerCase()] ?? fallbackIndex % palette.length
  return palette[i]
}

export default function Pill({ children, index = 0, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold ${pillClass(String(children), index)} ${className}`}
    >
      {children}
    </span>
  )
}
