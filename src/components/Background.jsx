// Fixed, decorative: soft purple / blue / pink glows and tiny stars behind every page.
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-glow-1 absolute -top-[18%] left-[38%] h-[60vmax] w-[60vmax] -translate-x-1/2 blur-2xl" />
      <div className="bg-glow-2 absolute -bottom-[30%] left-[48%] h-[55vmax] w-[55vmax] -translate-x-1/2 blur-2xl" />
      <div className="bg-glow-3 absolute -right-[15%] top-[30%] h-[40vmax] w-[40vmax] blur-2xl" />
      <div className="stars" />
    </div>
  )
}
