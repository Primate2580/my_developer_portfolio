import { Link } from 'react-router-dom'

// One button for the whole site. It renders a router <Link> (to), a normal <a> (href), or a <button>.
//   variant="primary": gradient outline      variant="outline": plain outline (both transparent)
const base =
  'group inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition motion-reduce:transition-none'
const variants = {
  // transparent, with a blue -> pink gradient outline (see .btn-grad-outline in index.css)
  primary:
    'btn-grad-outline text-fg hover:-translate-y-0.5 hover:bg-fg/5 hover:shadow-lg hover:shadow-brand-violet/25 motion-reduce:hover:translate-y-0',
  // transparent, with a plain outline
  outline: 'border border-line text-fg hover:border-fg/40 hover:bg-fg/5',
}

export default function Button({ variant = 'primary', to, href, className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
