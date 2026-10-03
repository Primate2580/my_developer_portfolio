// Form rules in one place. Returns an object like { email: 'message' } (empty = valid).
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validate({ name, email, message }) {
  const errors = {}
  const n = name.trim()
  const e = email.trim()
  const m = message.trim()

  if (!n) errors.name = 'Please enter your name.'
  else if (n.length < 2) errors.name = 'Your name looks too short.'

  if (!e) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(e)) errors.email = "That email address doesn't look right. Example: name@example.com"

  if (!m) errors.message = 'Please write a message.'
  else if (m.length < 10) errors.message = 'Please write at least 10 characters so I know how to help.'

  return errors
}
