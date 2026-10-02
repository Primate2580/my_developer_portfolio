// The short orange dash (16 x 2 px) used as a divider.
// Same one the side rail uses between its labels.
export default function Dash({ className = '' }) {
  return <span aria-hidden="true" className={`block h-0.5 w-4 bg-orange ${className}`} />
}
