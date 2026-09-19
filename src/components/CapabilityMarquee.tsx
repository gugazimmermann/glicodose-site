type CapabilityMarqueeProps = {
  items: string[]
  className?: string
}

export function CapabilityMarquee({
  items,
  className = '',
}: CapabilityMarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div
      className={[
        'relative overflow-hidden border-y border-line/40 bg-white/60 py-5',
        className,
      ].join(' ')}
      aria-label="Recursos"
    >
      <div className="capability-marquee flex w-max gap-3">
        {loop.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="shrink-0 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold text-brand-dark shadow-sm shadow-brand-dark/5"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
