/** Recorte visual do aviso IOB + CTA de dose (fragmento do app). */
export function IobDosePreview({ className = '' }: { className?: string }) {
  return (
    <div
      className={[
        'relative w-full max-w-sm',
        className,
      ].join(' ')}
      aria-hidden
    >
      <div
        className="absolute -inset-8 rounded-[40%] bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div className="relative space-y-3 rounded-2xl border border-line bg-gradient-to-b from-[#d6e8f7] to-white p-4 shadow-xl shadow-brand-dark/15">
        <div className="rounded-xl border border-warning-border bg-warning-soft px-3 py-2.5 text-sm leading-snug font-semibold text-warning">
          Você ainda tem ~2 U ativas. A recomendação já desconta isso.
        </div>
        <div className="rounded-xl border border-[#e2e8f0] bg-white px-3 py-3">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold text-ink">
            <i className="size-2 rounded-full bg-brand" />
            Estimativa com IA
          </div>
          <p className="mb-3 text-sm text-muted">2 pães franceses com queijo</p>
          <div className="rounded-xl bg-brand py-3 text-center text-sm font-bold text-white">
            Calcular dose
          </div>
        </div>
      </div>
    </div>
  )
}
