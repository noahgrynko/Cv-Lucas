import { motion } from 'framer-motion'
import { Glow } from '../components/Glow'
import { NeuralField } from '../components/NeuralField'
import { PERSON } from '../lib/constants'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pt-32"
      aria-label="Identity"
    >
      <Glow className="opacity-80" />
      <div className="pointer-events-none absolute inset-0">
        <NeuralField />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono-label mb-6 text-xs text-cyan"
        >
          01 / IDENTITY — PORTFOLIO / 2026
        </motion.p>

        <h1 className="font-display -ml-1 select-none text-[16vw] font-bold leading-[0.85] tracking-tighter text-paper sm:text-[13vw] md:text-[9.5vw] lg:text-[8.5rem]">
          {['LUCAS', 'ARNOULT'].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 1.75 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col gap-5 border-l border-line-strong pl-4 md:mt-10 md:pl-6"
        >
          <p className="font-mono-label flex flex-wrap gap-x-3 text-xs text-fog md:text-sm">
            <span>{PERSON.formation}</span>
            <span className="text-line-strong">/</span>
            <span>CYBERSECURITY</span>
            <span className="text-line-strong">/</span>
            <span>TECHNOLOGY</span>
            <span className="text-line-strong">/</span>
            <span>CODE</span>
          </p>
          <p className="max-w-md text-lg text-mist md:text-xl">
            À la recherche d&rsquo;un stage en cybersécurité.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between font-mono-label text-[10px] text-fog"
      >
        <span>LOCATION / FRANCE</span>
        <span className="hidden sm:inline">STATUS / STUDENT</span>
        <span className="flex items-center gap-2">
          SCROLL
          <span className="inline-block h-8 w-px animate-pulse bg-line-strong" />
        </span>
      </motion.div>
    </section>
  )
}
