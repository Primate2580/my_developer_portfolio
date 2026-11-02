import { motion } from 'framer-motion'
import { DURATION, EASE } from '../../lib/motion'

// Fades + slides its children up the first time they scroll into view (never replays).
// App wraps everything in <MotionConfig reducedMotion="user">, so people who ask for
// less motion only get the fade.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: DURATION.slow, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Tag>
  )
}
