import { motion } from 'framer-motion'
import { DURATION, EASE } from '../../lib/motion'

// Title block at the top of every inner page: big bold title + one-line intro.
export default function PageHeader({ title, intro, children }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, ease: EASE }}
      className="mb-12 md:mb-16"
    >
      <h1>{title}</h1>
      {intro && <p className="mt-4 text-lg text-fg-soft">{intro}</p>}
      {children}
    </motion.header>
  )
}
