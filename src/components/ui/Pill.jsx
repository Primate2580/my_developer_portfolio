// Outlined tag with a transparent background. Known tech names keep their own colour;
// anything else cycles through the palette. Each colour has a light-theme and a dark-theme
// shade so the text stays readable on both backgrounds.
const palette = [
  'border-blue-600 text-blue-700 dark:border-blue-500 dark:text-blue-400',
  'border-fuchsia-600 text-fuchsia-700 dark:border-fuchsia-500 dark:text-fuchsia-400',
  'border-amber-500 text-amber-700 dark:border-amber-400 dark:text-amber-300',
  'border-sky-600 text-sky-700 dark:border-sky-500 dark:text-sky-400',
  'border-emerald-600 text-emerald-700 dark:border-emerald-500 dark:text-emerald-400',
  'border-violet-600 text-violet-700 dark:border-violet-500 dark:text-violet-400',
  'border-orange-600 text-orange-700 dark:border-orange-500 dark:text-orange-400',
  'border-teal-600 text-teal-700 dark:border-teal-500 dark:text-teal-400',
]

const known = {
  html5: 6,
  'html & css': 6,
  css3: 1,
  javascript: 2,
  tailwind: 7,
  'tailwind css': 7,
  react: 3,
  wordpress: 0,
  python: 5,
  django: 4,
  'node.js': 4,
  express: 6,
  mongodb: 4,
  firebase: 2,
  vite: 5,
  supabase: 4,
  'git & github': 6,
}

function pillClass(label, fallbackIndex = 0) {
  const i = known[label.toLowerCase()] ?? fallbackIndex % palette.length
  return palette[i]
}

export default function Pill({ children, index = 0, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-[1.5px] bg-transparent px-4 py-1.5 text-sm font-semibold ${pillClass(String(children), index)} ${className}`}
    >
      {children}
    </span>
  )
}
