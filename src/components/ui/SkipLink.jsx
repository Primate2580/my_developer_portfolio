// First focusable thing on the page. Invisible until a keyboard user tabs to it.
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:bg-coral focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-widest focus:text-white"
    >
      Skip to content
    </a>
  )
}
