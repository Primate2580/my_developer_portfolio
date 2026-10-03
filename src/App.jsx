import { MotionConfig } from 'framer-motion'
import SkipLink from './components/ui/SkipLink'
import DotRow from './components/ui/DotRow'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user": scroll animations only fade (no sliding) for people who ask for less motion
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <Navigation />

      {/* pl-(--rail-width): content starts exactly where the side rail ends */}
      <main
        id="main-content"
        tabIndex={-1}
        className="relative pl-(--rail-width) focus:outline-none"
      >
        {/* z-10 keeps the dots above the hero's background */}
        <DotRow className="absolute left-(--rail-width) right-0 top-[calc(var(--header-h)+0.75rem)] z-10" />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}
