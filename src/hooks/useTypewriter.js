import { useEffect, useState } from 'react'

// Types a word, pauses, deletes it, then moves to the next word.
// If the visitor asked for reduced motion, it just shows the first word.
export function useTypewriter(words, { type = 85, erase = 45, hold = 1600 } = {}) {
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return
    const word = words[index % words.length]
    let delay = deleting ? erase : type

    if (!deleting && text === word) delay = hold
    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words, reduced, type, erase, hold])

  return reduced ? words[0] : text
}
