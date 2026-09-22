export function Footer() {
  return (
    <footer className="relative border-t border-line px-4 py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 font-mono-label text-[10px] text-fog sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="text-mist">LUCAS ARNOULT</span>
          <span>PORTFOLIO / CYBERSECURITY</span>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <span>&copy; 2026 Lucas Arnoult</span>
          <span className="italic normal-case tracking-normal">Built with curiosity.</span>
        </div>
      </div>
    </footer>
  )
}
