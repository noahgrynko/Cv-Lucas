import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { MISSION_STEPS } from '../lib/constants'

export function Mission() {
  return (
    <section
      id="mission"
      className="relative border-t border-line bg-nightblue/40 px-4 py-28 md:px-8 md:py-40"
      aria-label="Mission"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionLabel index="04" label="MISSION" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 text-[15vw] font-bold leading-[0.85] tracking-tighter text-paper sm:text-[11vw] md:text-[7.5vw] lg:text-8xl">
            MISSION
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 max-w-md">
          <p className="font-display text-2xl leading-snug text-mist md:text-3xl">
            Découvrir.
            <br />
            Apprendre.
            <br />
            Pratiquer.
            <br />
            Progresser.
          </p>
        </Reveal>

        <div className="relative mt-20 md:mt-28">
          <div className="hidden md:block absolute left-0 right-0 top-[18px] h-px bg-line-strong" aria-hidden="true" />
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {MISSION_STEPS.map((step, i) => (
              <Reveal key={step.index} delay={0.1 * i}>
                <li className="relative flex gap-4 md:flex-col md:gap-6">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan/50 bg-void font-mono-label text-xs text-cyan md:h-9 md:w-9">
                    {step.index}
                  </span>
                  <div>
                    <p className="font-mono-label text-xs text-cyan">{step.label}</p>
                    <p className="font-display mt-1 text-xl text-paper">{step.word}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
