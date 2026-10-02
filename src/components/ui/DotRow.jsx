// Decorative row of small dots (seen in both references).
// aria-hidden: screen readers should ignore it completely.
export default function DotRow({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none h-2 bg-[radial-gradient(circle,rgba(255,255,255,0.55)_1.5px,transparent_1.6px)] bg-size-[2.75rem_0.5rem] bg-repeat-x ${className}`}
    />
  )
}
