import { InterestVisual } from '../components/InterestVisual'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { INTERESTS } from '../lib/constants'

export function Interests() {
  return (
    <section id="interests" className="relative border-t border-line px-4 py-28 md:px-8 md:py-36" aria-label="Interests">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionLabel index="02" label="INTERESTS" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            Ce qui retient mon attention.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTERESTS.map((interest, i) => (
            <Reveal key={interest.key} delay={0.05 * i}>
              <div
                data-cursor-hover
                className="group relative flex h-56 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-panel/40 p-6 transition-colors duration-500 hover:border-cyan/40 hover:bg-panel/70"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-[10px] text-fog">0{i + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-line-strong transition-colors duration-500 group-hover:bg-cyan" />
                </div>

                <div className="absolute inset-x-6 top-14 bottom-16 opacity-40 transition-opacity duration-500 group-hover:opacity-100">
                  <InterestVisual variant={interest.key} />
                </div>

                <p className="font-display relative text-lg font-medium text-mist transition-colors duration-500 group-hover:text-paper">
                  {interest.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
