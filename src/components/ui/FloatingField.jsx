import { CircleAlert } from 'lucide-react'

// A text input / textarea whose label starts inside the box and floats up when
// you focus it or type. The input has placeholder=" " so CSS can tell "empty"
// (placeholder-shown) from "has text", and the label is its `peer` sibling.
//
// Accessibility: real <label for>, aria-invalid + aria-describedby on the error,
// and an always-present aria-live="polite" error area so screen readers hear it.
const field =
  'peer block w-full rounded-xl border bg-fg/5 px-4 text-base text-fg outline-offset-2 transition-colors placeholder:text-transparent hover:border-fg/40 focus:border-brand-blue motion-reduce:transition-none'

const label =
  'pointer-events-none absolute left-4 top-4 origin-left text-base text-muted transition-transform motion-reduce:transition-none peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-fg-soft peer-not-placeholder-shown:-translate-y-2.5 peer-not-placeholder-shown:scale-75'

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
          className={`${field} ${multiline ? 'min-h-36 resize-y pb-3 pt-7' : 'h-14 pb-2 pt-6'} ${error ? 'border-red-600 dark:border-red-400' : 'border-line'}`}
          {...props}
        />
        <label htmlFor={id} className={label}>
          {text}
        </label>
      </div>
      <p id={errorId} aria-live="polite" className="mt-1.5 flex min-h-6 items-start gap-1.5 text-sm text-red-600 dark:text-red-400">
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
