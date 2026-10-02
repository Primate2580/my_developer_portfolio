import { motion } from 'framer-motion'

// Fades + slides its children up the first time they scroll into view.
// `once` means it never replays when you scroll back.
// (App wraps everything in <MotionConfig reducedMotion="user">, so people who
// ask for less motion only get the fade, no sliding.)
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  )
}
