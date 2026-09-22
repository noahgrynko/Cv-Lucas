import { useRef } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import { PERSON } from '../lib/constants'
import { useReducedMotion } from '../lib/useReducedMotion'

export function IdentityCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    const rotateX = (0.5 - py) * 10
    const rotateY = (px - 0.5) * 10
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    card.style.setProperty('--mx', `${px * 100}%`)
    card.style.setProperty('--my', `${py * 100}%`)
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      data-cursor-hover
      className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-line-strong bg-panel/60 p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-transform duration-300 ease-out will-change-transform"
      style={{ '--mx': '50%', '--my': '50%' } as CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--mx) var(--my), rgba(76,224,255,0.14), transparent 60%)',
        }}
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="font-mono-label text-[10px] text-cyan">ID / 001</span>
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(76,224,255,0.7)]" />
        </div>

        <div>
          <p className="font-display text-2xl font-semibold text-paper">{PERSON.name}</p>
          <p className="font-mono-label mt-1 text-[10px] text-fog">STUDENT</p>
        </div>

        <div className="grid grid-cols-2 gap-6 border-t border-line pt-6">
          <Field label="FORMATION" value={PERSON.formation} />
          <Field label="INTEREST" value="CYBERSECURITY" />
          <Field label="GOAL" value="INTERNSHIP" />
          <Field label="FIELD" value="TECHNOLOGY" />
        </div>
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono-label text-[9px] text-fog">{label}</p>
      <p className="mt-1 font-mono-label text-xs text-mist">{value}</p>
    </div>
  )
}
