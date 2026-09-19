import type { CSSProperties } from 'react'

type DevicePhoneProps = {
  className?: string
  rotate?: boolean
}

export function DevicePhone({ className = '', rotate = true }: DevicePhoneProps) {
  const style: CSSProperties | undefined = rotate
    ? { ['--mock-rotate' as string]: '-4deg', transform: 'rotate(-4deg)' }
    : undefined

  return (
    <div
      className={['relative w-[236px] shrink-0', className].join(' ')}
      style={style}
    >
      <div className="relative h-[500px] rounded-[34px] bg-[#0f1720] p-[9px] shadow-[0_28px_50px_rgba(18,40,70,0.32),0_0_0_2px_#1a2430]">
        <div className="absolute top-3.5 left-1/2 z-10 h-4 w-[72px] -translate-x-1/2 rounded-xl bg-[#0f1720]" />
        <div className="flex h-full flex-col overflow-hidden rounded-[26px] bg-gradient-to-b from-[#d6e8f7] via-surface-mid to-white">
          <div className="flex justify-between px-3.5 pt-3 pb-0.5 text-[9px] font-bold">
            <span>9:41</span>
            <span>●●● 100%</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1">
            <img
              src="/glucosemeter.png"
              alt=""
              className="size-5 rounded-md bg-ink"
            />
            <strong className="text-xs text-brand-dark">GlicoDose</strong>
          </div>
          <div className="flex-1 overflow-hidden px-2.5 pb-2">
            <div className="mb-1.5 rounded-lg border border-warning-border bg-warning-soft px-1.5 py-1.5 text-[8px] leading-snug font-semibold text-warning">
              Você ainda tem ~2 U ativas. A recomendação já desconta isso.
            </div>
            <div className="mb-1.5 rounded-[11px] border border-[#e2e8f0] bg-white px-2.5 py-2">
              <div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-bold">
                <i className="size-1.5 rounded-full bg-danger" />
                Glicose atual
              </div>
              <div className="rounded-lg border border-brand/25 bg-surface px-2 py-2 text-center">
                <div className="text-[30px] leading-none font-extrabold">142</div>
                <div className="text-[9px] font-semibold text-muted">mg/dL</div>
              </div>
            </div>
            <div className="rounded-[11px] border border-[#e2e8f0] bg-white px-2.5 py-2">
              <div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-bold">
                <i className="size-1.5 rounded-full bg-brand" />
                Alimentação
              </div>
              <div className="mb-1.5 flex gap-0.5 rounded-lg bg-surface-mid p-0.5">
                <span className="flex-1 rounded-md bg-white py-1 text-center text-[7px] font-bold text-brand-dark shadow-sm">
                  Estimar com IA
                </span>
                <span className="flex-1 py-1 text-center text-[7px] font-bold text-muted">
                  Carbs manuais
                </span>
              </div>
              <div className="mb-1.5 rounded-lg border border-line bg-[#f8fafc] px-1.5 py-1.5 text-[8px] leading-snug text-muted">
                2 pães franceses com queijo
              </div>
              <div className="mb-1.5 flex gap-1.5">
                <span className="flex flex-1 items-center justify-center gap-1 rounded-lg border-[1.5px] border-line bg-white px-1 py-1.5 text-[8px] font-bold text-brand-dark">
                  <CameraIcon />
                  Câmera
                </span>
                <span className="flex flex-1 items-center justify-center gap-1 rounded-lg border-[1.5px] border-line bg-white px-1 py-1.5 text-[8px] font-bold text-brand-dark">
                  <GalleryIcon />
                  Galeria
                </span>
              </div>
              <div className="rounded-lg bg-brand py-2 text-center text-[10px] font-bold text-white">
                Calcular dose
              </div>
            </div>
          </div>
          <div className="flex justify-around border-t border-[#e2e8f0] bg-white px-1 pt-1.5 pb-2.5 text-[8px] font-bold text-[#90a4ae]">
            <span className="text-brand">Nova dose</span>
            <span>Histórico</span>
            <span>Perfil</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-[11px] shrink-0"
      aria-hidden
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function GalleryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-[11px] shrink-0"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  )
}
