import { useEffect, useRef } from 'react'
import { usePointer } from '../lib/usePointer'
import { useReducedMotion } from '../lib/useReducedMotion'

/**
 * Layer 3 — a soft radial halo that drifts toward the pointer inside its
 * host section, giving a "light from behind" feel without any flashy glow.
 */
export function Glow({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const pointer = usePointer()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    let raf = 0
    let cx = 0
    let cy = 0
    const tick = () => {
      const el = ref.current
      if (el) {
        const { nx, ny } = pointer.current
        cx += (nx * 40 - cx) * 0.04
        cy += (ny * 30 - cy) * 0.04
        el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [pointer, reducedMotion])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        ref={ref}
        className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(59,109,255,0.16) 0%, rgba(76,224,255,0.07) 35%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  )
}
