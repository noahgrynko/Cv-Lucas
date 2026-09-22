import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../lib/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-8 md:pt-6">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl transition-colors duration-500 ${
          scrolled ? 'border-line-strong bg-void/70' : 'border-line bg-void/30'
        }`}
        aria-label="Navigation principale"
      >
        <a
          href="#top"
          data-cursor-hover
          className="font-mono-label text-sm text-paper transition-colors hover:text-cyan"
        >
          LUCAS ARNOULT
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="font-mono-label text-xs text-fog transition-colors hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          <span className="font-mono-label text-[10px] text-fog">AVAILABLE FOR INTERNSHIP</span>
        </div>

        <button
          type="button"
          data-cursor-hover
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-5 bg-paper transition-transform duration-300 ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-paper transition-transform duration-300 ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-4 top-20 z-40 flex flex-col gap-1 rounded-2xl border border-line bg-abyss/95 p-4 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-mono-label text-sm text-mist transition-colors hover:bg-line/40 hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 px-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              <span className="font-mono-label text-[10px] text-fog">AVAILABLE FOR INTERNSHIP</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
