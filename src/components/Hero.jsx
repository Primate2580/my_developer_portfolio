import { Fragment } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import { hero } from '../data/content'
import { DURATION, EASE } from '../lib/motion'
import Button from './ui/Button'
import SphereCluster from './ui/SphereCluster'

// Headline: each word slides up out of its own mask, one after another.
const headline = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: DURATION.slow, ease: EASE } },
}

// Everything under the headline fades up a little later.
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, delay: 0.4 + i * 0.1, ease: EASE },
  }),
}

export default function Hero() {
  const words = hero.headline.split(' ')

  return (
    // reducedMotion="user": sliding is switched off for people who ask for less motion
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        aria-labelledby="home-heading"
        // -ml pulls the background under the translucent rail (see Phase 1 note)
        className="relative -ml-(--rail-width) min-h-svh overflow-hidden bg-ink"
      >
        {/* Background gradient (decorative) */}
        <div aria-hidden="true" className="hero-bg absolute inset-0" />

        {/* Big outlined numeral, top right */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-[calc(var(--header-h)+1.25rem)] select-none text-[clamp(3.5rem,9vw,9rem)] font-light leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] md:right-10"
        >
          {hero.numeral}
        </span>

        <div className="relative z-10 flex min-h-svh flex-col pb-24 pl-[calc(var(--rail-width)+2.75rem)] pr-6 pt-[calc(var(--header-h)+5.5rem)] md:pl-[calc(var(--rail-width)+4rem)] md:pr-12 lg:justify-center lg:pt-(--header-h)">
          <div className="max-w-xl lg:max-w-[46%]">
            <motion.h1
              id="home-heading"
              variants={headline}
              initial="hidden"
              animate="show"
              className="mb-6 text-[clamp(3rem,8vw,6.5rem)]"
            >
              {words.map((w, i) => (
                <Fragment key={i}>
                  {/* overflow-hidden = the mask; padding keeps descenders from being clipped */}
                  <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                    <motion.span variants={word} className="inline-block">
                      {w}
                    </motion.span>
                  </span>{' '}
                </Fragment>
              ))}
            </motion.h1>

            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-5 text-xl font-light text-white md:text-2xl"
            >
              {hero.subtitle}
            </motion.p>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-8 max-w-[40ch] text-sm leading-relaxed text-white/90"
            >
              {hero.text}
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          {/* Art: below the text on small screens, on the right (bleeding off the edge) on lg+ */}
          <SphereCluster className="mx-auto mt-10 w-[min(88vw,340px)] md:w-[420px] lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[50%] lg:max-w-[820px] lg:-translate-y-1/2" />
        </div>

        {/* Thin vertical line + rotated label, bottom left (md and up: the rail already gives mobile a vertical label) */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-[calc(var(--rail-width)+1.5rem)] z-10 hidden flex-col items-center gap-3 md:flex"
        >
          <span className="h-14 w-px bg-white/70" />
          <span className="rotate-180 text-xs uppercase tracking-[0.3em] text-white [writing-mode:vertical-rl]">
            {hero.verticalLabel}
          </span>
        </div>

        {/* Tiny meta line, bottom */}
        <p className="absolute bottom-8 left-[calc(var(--rail-width)+2.75rem)] z-10 text-xs uppercase tracking-[0.25em] text-white/85 md:left-[calc(var(--rail-width)+4rem)]">
          {hero.meta}
        </p>
      </section>
    </MotionConfig>
  )
}
