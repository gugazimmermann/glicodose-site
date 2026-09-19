export type TimelineStep = {
  n: string
  title: string
  body: string
}

type StepTimelineProps = {
  steps: TimelineStep[]
  className?: string
}

export function StepTimeline({ steps, className = '' }: StepTimelineProps) {
  return (
    <ol
      className={[
        'relative grid gap-10 sm:grid-cols-3 sm:gap-6',
        className,
      ].join(' ')}
    >
      <div
        className="pointer-events-none absolute top-[22px] right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent sm:block"
        aria-hidden
      />
      {steps.map((step) => (
        <li key={step.n} className="relative flex flex-col items-start sm:items-center sm:text-center">
          <span className="relative z-10 flex size-11 items-center justify-center rounded-full border-2 border-brand bg-white font-display text-lg font-bold text-brand-dark shadow-sm shadow-brand-dark/10">
            {step.n}
          </span>
          <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">
            {step.title}
          </h3>
          <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted sm:text-base">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  )
}
