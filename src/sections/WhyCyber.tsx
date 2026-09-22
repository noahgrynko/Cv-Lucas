import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { WHY_CYBER_WORDS } from '../lib/constants'

const NODES = [
  { x: 50, y: 12 },
  { x: 15, y: 32 },
  { x: 85, y: 32 },
  { x: 28, y: 58 },
  { x: 72, y: 58 },
  { x: 50, y: 50 },
  { x: 15, y: 82 },
  { x: 85, y: 82 },
  { x: 50, y: 92 },
]

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 5],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [3, 6],
  [4, 7],
  [5, 8],
  [6, 8],
  [7, 8],
]

export function WhyCyber() {
  return (
    <section className="relative border-t border-line px-4 py-28 md:px-8 md:py-36" aria-label="Why cybersecurity">
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <SectionLabel index="05" label="WHY CYBERSECURITY" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display mt-8 max-w-lg text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              Un domaine qui combine rigueur et curiosité.
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-col gap-3">
            {WHY_CYBER_WORDS.map((word, i) => (
              <div key={word} className="flex items-center gap-4">
                <span className="font-mono-label text-[10px] text-fog">0{i + 1}</span>
                <span className="font-display text-xl text-mist md:text-2xl">{word}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
              {EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  x1={NODES[a].x}
                  y1={NODES[a].y}
                  x2={NODES[b].x}
                  y2={NODES[b].y}
                  stroke="rgba(120,190,255,0.25)"
                  strokeWidth="0.4"
                />
              ))}
              {NODES.map((node, i) => (
                <circle
                  key={i}
                  cx={node.x}
                  cy={node.y}
                  r={i === 5 ? 2.6 : 1.6}
                  fill={i === 5 ? '#4ce0ff' : 'rgba(150,220,255,0.7)'}
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3.5s' }}
                />
              ))}
            </svg>
            <div
              className="pointer-events-none absolute inset-0 rounded-full opacity-60"
              style={{
                background: 'radial-gradient(circle, rgba(76,224,255,0.12), transparent 70%)',
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
