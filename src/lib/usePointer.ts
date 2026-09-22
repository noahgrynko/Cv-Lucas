import { useEffect, useRef } from 'react'

export interface PointerState {
  x: number
  y: number
  nx: number // -1..1 normalized from center
  ny: number
}

/**
 * Tracks pointer position in a ref (no re-renders) so consumers like
 * canvases / transforms can read the latest value on their own rAF tick.
 */
export function usePointer() {
  const pointer = useRef<PointerState>({ x: 0, y: 0, nx: 0, ny: 0 })

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const x = event.clientX
      const y = event.clientY
      pointer.current = {
        x,
        y,
        nx: (x / window.innerWidth) * 2 - 1,
        ny: (y / window.innerHeight) * 2 - 1,
      }
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return pointer
}
