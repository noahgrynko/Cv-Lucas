import { Reveal } from '../components/Reveal'

export function Objective() {
  return (
    <section className="relative border-t border-line bg-nightblue/40 px-4 py-24 md:px-8 md:py-32" aria-label="Objective">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-8">
        <Reveal>
          <p className="font-display text-balance text-2xl leading-relaxed text-paper md:text-4xl">
            &laquo; Je souhaite effectuer un stage dans le domaine de la cybersécurité afin de
            découvrir concrètement le fonctionnement d&rsquo;une équipe informatique, observer les
            pratiques professionnelles et approfondir mes connaissances. &raquo;
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-2xl border-l-2 border-cyan/50 pl-5 text-base leading-relaxed text-mist md:text-lg">
            Je suis prêt à apprendre, à m&rsquo;investir et à participer sérieusement aux missions
            qui pourront m&rsquo;être confiées.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
