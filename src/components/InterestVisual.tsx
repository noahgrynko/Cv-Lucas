import type { INTERESTS } from '../lib/constants'

type InterestKey = (typeof INTERESTS)[number]['key']

const lineClass120 =
  'stroke-cyan-soft/70 [stroke-dashoffset:120] transition-[stroke-dashoffset] duration-[1100ms] ease-out group-hover:[stroke-dashoffset:0]'
const lineClass200 =
  'stroke-cyan-soft/70 [stroke-dashoffset:200] transition-[stroke-dashoffset] duration-[1100ms] ease-out group-hover:[stroke-dashoffset:0]'
const lineClass40 =
  'stroke-cyan-soft/70 [stroke-dashoffset:40] transition-[stroke-dashoffset] duration-[1100ms] ease-out group-hover:[stroke-dashoffset:0]'

const dotClass = 'fill-cyan opacity-0 transition-opacity duration-700 group-hover:opacity-100'
const dotStrokeClass =
  'stroke-cyan opacity-0 transition-opacity duration-700 delay-500 group-hover:opacity-100'

export function InterestVisual({ variant }: { variant: InterestKey }) {
  switch (variant) {
    case 'cyber':
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
          {(
            [
              [20, 60, 60, 30],
              [60, 30, 110, 45],
              [110, 45, 160, 25],
              [60, 30, 70, 90],
              [70, 90, 130, 95],
              [110, 45, 130, 95],
              [20, 60, 70, 90],
            ] as const
          ).map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={lineClass120}
              strokeWidth="1"
              strokeDasharray="120"
              style={{ transitionDelay: `${i * 60}ms` }}
            />
          ))}
          {(
            [
              [20, 60],
              [60, 30],
              [110, 45],
              [160, 25],
              [70, 90],
              [130, 95],
            ] as const
          ).map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="2.4"
              className={dotClass}
              style={{ transitionDelay: `${i * 60 + 200}ms` }}
            />
          ))}
        </svg>
      )

    case 'programming': {
      const rows = [
        { y: 22, x: 10, w: 90 },
        { y: 42, x: 10, w: 130 },
        { y: 62, x: 24, w: 70 },
        { y: 82, x: 24, w: 110 },
      ]
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
          {rows.map((row, i) => (
            <rect
              key={i}
              x={row.x}
              y={row.y}
              width={row.w}
              height="6"
              rx="3"
              className="origin-left scale-x-0 fill-cyan-soft/60 transition-transform duration-700 ease-out group-hover:scale-x-100"
              style={{ transformOrigin: `${row.x}px ${row.y + 3}px`, transitionDelay: `${i * 90}ms` }}
            />
          ))}
          <rect
            x={rows[3].x + rows[3].w + 8}
            y={rows[3].y}
            width="6"
            height="6"
            className="fill-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ transitionDelay: '450ms' }}
          />
        </svg>
      )
    }

    case 'it':
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
          {(
            [
              [10, 20, 190, 20],
              [10, 20, 10, 100],
              [10, 60, 90, 60],
              [90, 20, 90, 100],
              [90, 100, 190, 100],
              [140, 60, 140, 100],
            ] as const
          ).map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className={lineClass200}
              strokeWidth="1"
              strokeDasharray="200"
              style={{ transitionDelay: `${i * 70}ms` }}
            />
          ))}
          {(
            [
              [10, 20],
              [190, 20],
              [10, 100],
              [90, 60],
              [140, 100],
            ] as const
          ).map(([cx, cy], i) => (
            <rect
              key={i}
              x={cx - 3}
              y={cy - 3}
              width="6"
              height="6"
              className={dotClass}
              style={{ transitionDelay: `${i * 70 + 250}ms` }}
            />
          ))}
        </svg>
      )

    case 'gaming':
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
          <path
            d="M60 40 H140 A20 20 0 0 1 160 60 V70 A16 16 0 0 1 132 82 L120 68 H80 L68 82 A16 16 0 0 1 40 70 V60 A20 20 0 0 1 60 40 Z"
            fill="none"
            pathLength={100}
            className="stroke-cyan-soft/70 [stroke-dashoffset:100] transition-[stroke-dashoffset] duration-[1100ms] ease-out group-hover:[stroke-dashoffset:0]"
            strokeWidth="1"
            strokeDasharray="100"
          />
          <line x1="66" y1="58" x2="66" y2="70" className={dotStrokeClass} strokeWidth="2" />
          <line x1="60" y1="64" x2="72" y2="64" className={dotStrokeClass} strokeWidth="2" />
          <circle cx="132" cy="58" r="3" className={dotClass} style={{ transitionDelay: '500ms' }} />
          <circle cx="146" cy="68" r="3" className={dotClass} style={{ transitionDelay: '600ms' }} />
        </svg>
      )

    case 'travel':
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
          <path
            d="M20 95 C 60 20, 140 20, 180 90"
            fill="none"
            pathLength={100}
            className="stroke-cyan-soft/60 [stroke-dashoffset:100] transition-[stroke-dashoffset] duration-[1200ms] ease-out group-hover:[stroke-dashoffset:0]"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          {[
            [20, 95],
            [100, 32],
            [180, 90],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i === 1 ? 2.4 : 3.2}
              className={dotClass}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            />
          ))}
        </svg>
      )

    case 'tech':
    default:
      return (
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
          <circle
            cx="100"
            cy="60"
            r="34"
            fill="none"
            className="stroke-cyan-soft/50 [stroke-dashoffset:214] transition-[stroke-dashoffset] duration-[1000ms] ease-out group-hover:[stroke-dashoffset:0]"
            strokeWidth="1"
            strokeDasharray="214"
          />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x2 = 100 + Math.cos(rad) * 60
            const y2 = 60 + Math.sin(rad) * 60
            const x1 = 100 + Math.cos(rad) * 34
            const y1 = 60 + Math.sin(rad) * 34
            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={lineClass40}
                strokeWidth="1"
                strokeDasharray="40"
                style={{ transitionDelay: `${i * 80}ms` }}
              />
            )
          })}
        </svg>
      )
  }
}
