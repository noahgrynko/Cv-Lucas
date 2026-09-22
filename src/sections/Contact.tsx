import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { PERSON } from '../lib/constants'

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-line px-4 py-28 md:px-8 md:py-36" aria-label="Connect">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionLabel index="06" label="CONNECT" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 text-[16vw] font-bold leading-[0.85] tracking-tighter text-paper sm:text-[11vw] md:text-[7.5vw] lg:text-8xl">
            LET&rsquo;S
            <br />
            CONNECT.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-8">
          <Reveal delay={0.2} className="flex flex-col gap-3 font-mono-label text-sm text-mist">
            <p className="text-paper">{PERSON.name}</p>
            <p>{PERSON.address}</p>
            <p>{PERSON.phoneDisplay}</p>
            <p>{PERSON.email}</p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col gap-4 sm:flex-row md:justify-end">
            <a
              href={PERSON.emailHref}
              data-cursor-hover
              className="inline-flex items-center justify-center gap-3 rounded-full bg-paper px-7 py-4 font-mono-label text-xs text-void transition-transform duration-300 hover:scale-105"
            >
              SEND AN EMAIL <span aria-hidden="true">→</span>
            </a>
            <a
              href={PERSON.phoneHref}
              data-cursor-hover
              className="inline-flex items-center justify-center gap-3 rounded-full border border-line-strong px-7 py-4 font-mono-label text-xs text-mist transition-colors duration-300 hover:border-cyan/40 hover:text-cyan"
            >
              CALL <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
