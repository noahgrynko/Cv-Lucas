import { IdentityCard } from '../components/IdentityCard'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

export function Profile() {
  return (
    <section id="profile" className="relative border-t border-line px-4 py-28 md:px-8 md:py-36" aria-label="Profile">
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel index="01" label="PROFILE" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance mt-8 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-paper md:text-5xl">
              Curieux par nature. Passionné par la technologie.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-mist md:text-lg">
            <Reveal delay={0.15}>
              <p>
                Actuellement élève en classe de seconde MTNE, je suis à la recherche d&rsquo;un
                stage qui me permettrait de découvrir davantage le domaine de la cybersécurité et
                de mettre en pratique mes connaissances.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Passionné par l&rsquo;informatique et plus particulièrement par la cybersécurité,
                je m&rsquo;intéresse également à la programmation, au codage et aux nouvelles
                technologies.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                J&rsquo;ai déjà eu l&rsquo;occasion de développer quelques notions en
                programmation et en cybersécurité, que je souhaite maintenant approfondir grâce à
                une expérience professionnelle.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
            <MicroField label="LOCATION" value="FRANCE" />
            <MicroField label="STATUS" value="STUDENT" />
            <MicroField label="FIELD" value="CYBERSECURITY" />
            <MicroField label="FOCUS" value="TECHNOLOGY" />
            <MicroField label="GOAL" value="INTERNSHIP" />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex items-start justify-center lg:justify-end">
          <IdentityCard />
        </Reveal>
      </div>
    </section>
  )
}

function MicroField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono-label text-[10px] text-fog">{label}</p>
      <p className="font-mono-label mt-1 text-xs text-cyan">{value}</p>
    </div>
  )
}
