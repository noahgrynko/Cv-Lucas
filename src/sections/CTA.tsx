import { Reveal } from '../components/Reveal'
import { Glow } from '../components/Glow'
import { CV_PATH, PERSON } from '../lib/constants'

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-line px-4 py-28 md:px-8 md:py-40" aria-label="Internship application">
      <Glow className="opacity-50" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-10">
        <Reveal>
          <h2 className="font-display text-[13vw] font-bold leading-[0.9] tracking-tighter text-paper sm:text-[9vw] md:text-[6vw] lg:text-8xl">
            LOOKING FOR
            <br />
            AN INTERNSHIP
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-mono-label text-sm text-cyan">Stage en cybersécurité</p>
        </Reveal>

        <Reveal delay={0.25} className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={PERSON.emailHref}
            data-cursor-hover
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan/50 bg-cyan/10 px-8 py-4 font-mono-label text-sm text-paper transition-all duration-300 hover:scale-105 hover:bg-cyan/20"
            style={{ boxShadow: '0 0 40px -10px rgba(76,224,255,0.35)' }}
          >
            CONTACT ME
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <a
            href={CV_PATH}
            download
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-4 font-mono-label text-xs text-fog transition-colors duration-300 hover:border-cyan/40 hover:text-cyan"
          >
            DOWNLOAD CV
          </a>
        </Reveal>
      </div>
    </section>
  )
}
