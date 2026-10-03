// One set of easing + duration values for every animation on the site.
// (CSS twins live in src/index.css: --ease-brand and --duration-fast/base/slow.)
export const EASE = [0.22, 1, 0.36, 1] // smooth, quick start, soft landing
export const DURATION = {
  fast: 0.2, // hover colours, small state changes, things leaving
  base: 0.4, // fades, card lifts, panels changing state
  slow: 0.7, // entrances: scroll reveals, headline words, slides moving
}
