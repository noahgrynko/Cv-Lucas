import { useEffect, useRef } from 'react'
import { usePointer } from '../lib/usePointer'
import { useReducedMotion } from '../lib/useReducedMotion'

/**
 * Layer 2 — an extremely faint perspective grid that drifts a few pixels
 * with the pointer. Pure CSS transform, no layout cost.
 */
export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const pointer = usePointer()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    let raf = 0
    const tick = () => {
      const el = ref.current
      if (el) {
        const { nx, ny } = pointer.current
        el.style.transform = `translate3d(${nx * -10}px, ${ny * -10}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [pointer, reducedMotion])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        ref={ref}
        className="absolute -inset-[10%]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(140,170,210,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(140,170,210,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)',
        }}
      />
    </div>
  )
}
