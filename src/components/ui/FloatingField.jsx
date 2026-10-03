import { CircleAlert } from 'lucide-react'

// A text input / textarea whose label starts inside the box and floats up when
// you focus it or type. The trick: the input has placeholder=" " so CSS can tell
// "empty" (placeholder-shown) from "has text", and the label sits next to it as a
// `peer` sibling.
//
// Accessibility:
//  - the label is a real <label for>, so screen readers announce it
//  - aria-invalid + aria-describedby point at the error message
//  - the error container is always in the page with aria-live="polite", so
//    screen readers announce the message the moment it appears
const field =
  'peer block w-full rounded-btn border bg-white/5 px-4 text-base text-white outline-offset-2 transition-colors placeholder:text-transparent hover:border-white/50 focus:border-white motion-reduce:transition-none'

const label =
  'pointer-events-none absolute left-4 top-4 origin-left text-base text-white/80 transition-transform duration-200 motion-reduce:transition-none peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-white peer-not-placeholder-shown:-translate-y-2.5 peer-not-placeholder-shown:scale-75'

export default function FloatingField({ id, label: text, error, multiline = false, ...props }) {
  const Tag = multiline ? 'textarea' : 'input'
  const errorId = `${id}-error`

  return (
    <div>
      <div className="relative">
        <Tag
          id={id}
          placeholder=" "
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={errorId}
          className={`${field} ${multiline ? 'min-h-36 resize-y pb-3 pt-7' : 'h-14 pb-2 pt-6'} ${error ? 'border-coral' : 'border-white/25'}`}
          {...props}
        />
        <label htmlFor={id} className={label}>
          {text}
        </label>
      </div>
      <p id={errorId} aria-live="polite" className="mt-1.5 flex min-h-6 items-start gap-1.5 text-sm text-coral">
        {error && (
          <>
            <CircleAlert aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
            <span>{error}</span>
          </>
        )}
      </p>
    </div>
  )
}
