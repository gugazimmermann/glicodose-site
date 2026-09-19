import type { ReactNode } from 'react'

type DisclaimerBandProps = {
  children: ReactNode
  className?: string
}

export function DisclaimerBand({ children, className = '' }: DisclaimerBandProps) {
  return (
    <aside
      className={[
        'border-y border-warning-border/70 bg-warning-soft/80',
        className,
      ].join(' ')}
      role="note"
    >
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-bold tracking-[0.12em] text-warning uppercase">
          Aviso importante
        </p>
        <div className="mt-2 max-w-3xl text-sm leading-relaxed text-warning/90 sm:text-base">
          {children}
        </div>
      </div>
    </aside>
  )
}
