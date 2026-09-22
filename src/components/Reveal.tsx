import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'span'
}

export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }: RevealProps) {
  const reducedMotion = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : y, filter: reducedMotion ? 'none' : 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reducedMotion ? 0.01 : 0.8, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
