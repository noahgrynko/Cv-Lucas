interface SectionLabelProps {
  index: string
  label: string
  className?: string
}

export function SectionLabel({ index, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 font-mono-label text-xs text-cyan ${className}`}>
      <span className="text-cyan/70">{index}</span>
      <span className="h-px w-8 bg-cyan/40" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}
