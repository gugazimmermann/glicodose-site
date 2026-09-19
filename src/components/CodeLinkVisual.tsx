type CodeLinkVisualProps = {
  code?: string
  className?: string
}

export function CodeLinkVisual({
  code = 'A7K2M9',
  className = '',
}: CodeLinkVisualProps) {
  return (
    <div className={['flex flex-col items-center gap-6', className].join(' ')}>
      <div className="relative">
        <div
          className="absolute -inset-6 rounded-full bg-brand/15 blur-2xl"
          aria-hidden
        />
        <div className="relative rounded-2xl border border-line bg-white px-8 py-6 shadow-lg shadow-brand-dark/10">
          <p className="text-center text-xs font-bold tracking-[0.14em] text-muted uppercase">
            Código do paciente
          </p>
          <p className="mt-2 font-mono text-4xl font-bold tracking-[0.18em] text-ink sm:text-5xl">
            {code}
          </p>
        </div>
      </div>
      <ol className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <li className="flex-1 rounded-xl border border-line/80 bg-white/70 px-4 py-3 text-center">
          <span className="block text-xs font-bold tracking-wide text-brand uppercase">
            1
          </span>
          <span className="mt-1 block text-sm font-semibold text-ink">
            Paciente gera no app
          </span>
        </li>
        <li className="hidden items-center text-brand sm:flex" aria-hidden>
          →
        </li>
        <li className="flex-1 rounded-xl border border-line/80 bg-white/70 px-4 py-3 text-center">
          <span className="block text-xs font-bold tracking-wide text-brand uppercase">
            2
          </span>
          <span className="mt-1 block text-sm font-semibold text-ink">
            Médico vincula no portal
          </span>
        </li>
      </ol>
    </div>
  )
}
