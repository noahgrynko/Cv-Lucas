import { useEffect, useRef } from 'react'
import { usePointer } from '../lib/usePointer'
import { useReducedMotion } from '../lib/useReducedMotion'

interface Node {
  x: number
  y: number
  z: number
  vx: number
  vy: number
}

/**
 * Layer 5 — a sparse network of connected points drifting in slow orbit,
 * lightly attracted toward the pointer. Canvas 2D only (no WebGL
 * dependency) to keep this decorative element essentially free.
 */
export function NeuralField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointer = usePointer()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let raf = 0
    let visible = true

    const NODE_COUNT_BASE = 46
    const LINK_DIST = 150

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = width < 640 ? Math.round(NODE_COUNT_BASE * 0.5) : NODE_COUNT_BASE
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.4 + Math.random() * 0.6,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }))
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const onVisibility = () => {
      visible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibility)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const { nx, ny } = pointer.current
      const px = (nx * 0.5 + 0.5) * width
      const py = (ny * 0.5 + 0.5) * height

      for (const node of nodes) {
        if (!reducedMotion) {
          node.x += node.vx * node.z
          node.y += node.vy * node.z

          const dx = px - node.x
          const dy = py - node.y
          const dist = Math.hypot(dx, dy)
          if (dist < 260) {
            node.x += dx * 0.0009
            node.y += dy * 0.0009
          }

          if (node.x < -20) node.x = width + 20
          if (node.x > width + 20) node.x = -20
          if (node.y < -20) node.y = height + 20
          if (node.y > height + 20) node.y = -20
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16 * Math.min(a.z, b.z)
            ctx.strokeStyle = `rgba(120, 190, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.2 * node.z + 0.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(150, 220, 255, ${0.35 * node.z + 0.15})`
        ctx.fill()
      }

      if (visible) raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [pointer, reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none block h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}
