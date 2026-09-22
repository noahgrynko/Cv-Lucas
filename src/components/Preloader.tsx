import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion'

export function Preloader() {
  const [visible, setVisible] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setVisible(false)
      return
    }
    const timer = setTimeout(() => setVisible(false), 1200)
    return () => clearTimeout(timer)
  }, [reducedMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          aria-hidden="true"
        >
          <motion.p
            className="font-mono-label text-xs text-cyan"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.9, times: [0, 0.2, 0.75, 1] }}
          >
            INITIALIZING PORTFOLIO...
          </motion.p>
          <motion.h1
            className="font-display text-2xl font-semibold tracking-tight text-paper md:text-3xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            LUCAS ARNOULT
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
