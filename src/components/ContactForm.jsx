import { useEffect, useRef, useState } from 'react'
import { CircleAlert, CircleCheck, Send } from 'lucide-react'
import { contact, site } from '../data/content'
import { validate } from '../lib/validate'
import FloatingField from './ui/FloatingField'

// Where the form posts to. Set VITE_FORM_ENDPOINT in .env (see README).
// If it's missing we show a friendly note instead of breaking.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const TIMEOUT_MS = 15000
const FIELDS = ['name', 'email', 'message']
const empty = { name: '', email: '', message: '' }
const f = contact.form
const mailto = `mailto:${site.email}`

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [touched, setTouched] = useState({})
  // idle -> sending -> success | error
  const [status, setStatus] = useState('idle')

  const formRef = useRef(null)
  const honeypotRef = useRef(null)
  const successRef = useRef(null)
  // A ref flips instantly (state updates are async), so a very fast double click can't slip through
  const submitting = useRef(false)

  const errors = validate(values) // worked out fresh on every render
  const sending = status === 'sending'
  const connected = Boolean(ENDPOINT)

  // After a successful send, move focus to the confirmation so keyboard and screen-reader users land on it
  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }))
  // Only show an error once the person has left the field (or tried to submit)
  const errorFor = (name) => (touched[name] ? errors[name] : undefined)

  async function onSubmit(e) {
    e.preventDefault()
    if (submitting.current || sending) return // no double submits

    setTouched({ name: true, email: true, message: true })
    const firstInvalid = FIELDS.find((n) => errors[n])
    if (firstInvalid) {
      // Focusing the field makes screen readers read its label, "invalid" and the error text
      formRef.current.elements.namedItem(firstInvalid)?.focus()
      return
    }
    if (!connected) return

    // Honeypot: real people never see this field. If it's filled, it's a bot:
    // pretend it worked and send nothing.
    if (honeypotRef.current?.value) {
      setStatus('success')
      return
    }

    submitting.current = true
    setStatus('sending')
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
        signal: controller.signal,
      })
      if (!res.ok) throw new Error(`Form service answered ${res.status}`)
      setValues(empty)
      setTouched({})
      setStatus('success')
    } catch {
      // network down, timeout, or the service said no: keep what they typed so they can retry
      setStatus('error')
    } finally {
      clearTimeout(timer)
      submitting.current = false
    }
  }

  function sendAnother() {
    setStatus('idle')
    setTimeout(() => formRef.current?.elements.namedItem('name')?.focus(), 0)
  }

  return (
    <div className="rounded-lg border border-white/10 bg-violet/20 p-6 backdrop-blur-md md:p-8">
      {status === 'success' ? (
        <div role="status" className="py-4">
          <CircleCheck aria-hidden="true" size={36} strokeWidth={1.5} className="mb-4 text-cyan" />
          <h3 ref={successRef} tabIndex={-1} className="mb-3 outline-none">
            {f.successTitle}
          </h3>
          <p className="mb-8 text-white/90">{f.successText}</p>
          <button
            type="button"
            onClick={sendAnother}
            className="inline-flex h-12 items-center justify-center rounded-btn border-2 border-white/70 px-8 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10 motion-reduce:transition-none"
          >
            {f.another}
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Contact form" aria-busy={sending}>
          {!connected && (
            <div id="form-notice" className="mb-6 rounded-btn border border-orange/60 bg-orange/10 p-4 text-sm leading-relaxed text-white">
              <p>
                {f.notConnected}{' '}
                <a href={mailto} className="font-semibold text-orange underline underline-offset-4 hover:text-white">
                  {site.email}
                </a>
              </p>
              {import.meta.env.DEV && (
                <p className="mt-2 text-white/80">
                  Developer note: set VITE_FORM_ENDPOINT in a .env file (see the README), then restart the dev server.
                </p>
              )}
            </div>
          )}

          <p className="mb-5 text-sm text-white/80">{f.intro}</p>

          <div className="space-y-1">
            <FloatingField
              id="contact-name"
              name="name"
              label={f.name}
              value={values.name}
              onChange={onChange}
              onBlur={onBlur}
              error={errorFor('name')}
              autoComplete="name"
              required
              readOnly={sending}
            />
            <FloatingField
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              label={f.email}
              value={values.email}
              onChange={onChange}
              onBlur={onBlur}
              error={errorFor('email')}
              autoComplete="email"
              required
              readOnly={sending}
            />
            <FloatingField
              id="contact-message"
              name="message"
              multiline
              rows={5}
              maxLength={2000}
              label={f.message}
              value={values.message}
              onChange={onChange}
              onBlur={onBlur}
              error={errorFor('message')}
              required
              readOnly={sending}
            />
          </div>

          {/* Honeypot: invisible to people and screen readers, tempting to bots */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Leave this field empty
              <input ref={honeypotRef} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          {status === 'error' && (
            <p role="alert" className="mb-5 flex items-start gap-2 rounded-btn border border-coral/60 bg-coral/10 p-4 text-sm leading-relaxed text-white">
              <CircleAlert aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-coral" />
              <span>
                {f.errorText}{' '}
                <a href={mailto} className="font-semibold text-orange underline underline-offset-4 hover:text-white">
                  {site.email}
                </a>
              </span>
            </p>
          )}

          {/* Polite announcement for screen readers while sending */}
          <p role="status" className="sr-only">
            {sending ? 'Sending your message' : ''}
          </p>

          <button
            type="submit"
            // aria-disabled (not disabled) keeps it focusable and lets us explain why
            aria-disabled={sending || !connected ? 'true' : undefined}
            aria-describedby={!connected ? 'form-notice' : undefined}
            className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-btn bg-coral px-8 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-orange aria-disabled:cursor-not-allowed aria-disabled:opacity-60 aria-disabled:hover:bg-coral motion-reduce:transition-none sm:w-auto"
          >
            {sending ? (
              <>
                <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink motion-reduce:animate-none" />
                {f.sending}
              </>
            ) : (
              <>
                {f.submit}
                <Send aria-hidden="true" size={16} strokeWidth={2.5} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
