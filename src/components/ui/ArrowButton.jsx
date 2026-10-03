import { ArrowLeft, ArrowRight } from 'lucide-react'

// Small circular carousel buttons (Reference 2).
//  prev = coral outline            next = blue ring with a soft blue fill
// aria-disabled (not `disabled`) at the ends, so a keyboard user who just
// pressed the button keeps their place instead of losing focus.
const styles = {
  prev: 'border-coral text-coral hover:bg-coral hover:text-ink aria-disabled:hover:bg-transparent aria-disabled:hover:text-coral',
  next: 'border-blue bg-blue/30 text-orange hover:bg-blue hover:text-white aria-disabled:hover:bg-blue/30 aria-disabled:hover:text-orange',
}

export default function ArrowButton({ direction, onClick, disabled }) {
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight
  return (
    <button
      type="button"
      aria-label={direction === 'prev' ? 'Previous project' : 'Next project'}
      aria-disabled={disabled ? 'true' : undefined}
      onClick={disabled ? undefined : onClick}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-40 motion-reduce:transition-none ${styles[direction]}`}
    >
      <Icon aria-hidden="true" size={20} strokeWidth={2} />
    </button>
  )
}
