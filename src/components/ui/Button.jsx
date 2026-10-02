// Rectangular, uppercase, wide-tracked button used across the site.
// primary = solid coral. ghost = outlined.
// Primary uses dark ink text: white on coral is only ~3:1 contrast,
// ink on coral is ~6.5:1 (passes WCAG AA for small text).
const base =
  'inline-flex h-12 items-center justify-center rounded-btn px-8 text-xs font-bold uppercase tracking-[0.2em] transition-colors motion-reduce:transition-none'

const variants = {
  primary: 'bg-coral text-ink hover:bg-orange',
  ghost: 'border-2 border-white/70 text-white hover:border-white hover:bg-white/10',
}

export default function Button({ href, variant = 'primary', className = '', children }) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}
