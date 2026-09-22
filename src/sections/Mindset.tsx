import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { QUALITIES } from '../lib/constants'

export function Mindset() {
  return (
    <section className="relative border-t border-line px-4 py-28 md:px-8 md:py-36" aria-label="Mindset">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionLabel index="03" label="MINDSET" />
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 md:gap-x-10">
          {QUALITIES.map((word, i) => (
            <Reveal key={word} delay={i * 0.12} y={30}>
              <span className="font-display text-[13vw] font-bold leading-none tracking-tighter transition-[color,-webkit-text-stroke-color] duration-700 sm:text-[9vw] md:text-[6.5vw] lg:text-7xl [-webkit-text-stroke:1px_rgba(215,222,230,0.5)] [color:transparent] hover:[-webkit-text-stroke-color:#4ce0ff]">
                {word}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5} className="mt-14 max-w-xl">
          <p className="text-lg text-mist md:text-xl">
            Je souhaite apprendre, comprendre et progresser au contact de professionnels.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
