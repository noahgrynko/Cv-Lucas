import { useEffect, useRef, useState } from 'react'

/**
 * Custom desktop cursor: a small lit dot plus a lagging ring. Disabled
 * entirely on touch/coarse pointers so mobile is never affected.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(query.matches)
    const listener = (event: MediaQueryListEvent) => setEnabled(event.matches)
    query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('cursor-none-desktop', enabled)
    return () => document.body.classList.remove('cursor-none-desktop')
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2
    let targetX = ringX
    let targetY = ringY
    let raf = 0

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      setHidden(false)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      }
      const target = event.target as HTMLElement
      setHovering(Boolean(target.closest('[data-cursor-hover]')))
    }

    const onLeave = () => setHidden(true)

    const tick = () => {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[70] transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-cyan-soft transition-transform duration-100"
        style={{ boxShadow: '0 0 8px 2px rgba(76,224,255,0.8)' }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 rounded-full border transition-[width,height,border-color] duration-200 ease-out"
        style={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          borderColor: hovering ? 'rgba(76,224,255,0.7)' : 'rgba(215,222,230,0.35)',
          background: hovering ? 'rgba(76,224,255,0.08)' : 'transparent',
        }}
      />
    </div>
  )
}
