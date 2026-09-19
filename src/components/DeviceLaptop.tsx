import type { CSSProperties } from 'react'

type DeviceLaptopProps = {
  className?: string
  rotate?: boolean
}

export function DeviceLaptop({
  className = '',
  rotate = true,
}: DeviceLaptopProps) {
  const style: CSSProperties | undefined = rotate
    ? { ['--mock-rotate' as string]: '2deg', transform: 'rotate(2deg)' }
    : undefined

  return (
    <div className={['w-full max-w-[620px]', className].join(' ')} style={style}>
      <div className="rounded-t-[11px] bg-[#1a2430] px-[7px] pt-[7px] shadow-[0_28px_50px_rgba(18,40,70,0.26)]">
        <div className="h-[min(380px,52vw)] overflow-hidden rounded-t-md bg-white sm:h-[380px]">
          <div className="flex items-center gap-1.5 border-b border-line bg-[#eef2f7] px-2.5 py-1.5">
            <div className="flex gap-1">
              <i className="size-1.5 rounded-full bg-[#ff5f57]" />
              <i className="size-1.5 rounded-full bg-[#febc2e]" />
              <i className="size-1.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 rounded border border-line bg-white px-2 py-0.5 text-[9px] font-semibold text-muted">
              medicos.glicodose.app / pacientes
            </div>
          </div>
          <div
            className="grid h-[calc(100%-28px)] grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr]"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 10% -10%, #a8c4f8 0%, transparent 55%), #e8eef8',
            }}
          >
            <aside className="border-r border-line-ui bg-white/80 p-2.5 sm:p-3">
              <div className="mb-3.5 flex items-center gap-1.5">
                <img
                  src="/glucosemeter.png"
                  alt=""
                  className="size-[22px] rounded-[5px] bg-ink"
                />
                <div>
                  <strong className="block text-[11px] leading-tight">GlicoDose</strong>
                  <small className="block text-[8px] font-semibold text-muted">
                    Médicos
                  </small>
                </div>
              </div>
              <div className="mb-0.5 rounded-md bg-brand-ui px-2 py-1.5 text-[10px] font-semibold text-white">
                Pacientes
              </div>
              <div className="mb-0.5 rounded-md px-2 py-1.5 text-[10px] font-semibold text-muted">
                Vincular
              </div>
              <div className="mb-0.5 rounded-md px-2 py-1.5 text-[10px] font-semibold text-muted">
                Perfil
              </div>
            </aside>
            <section className="overflow-hidden p-3 sm:px-3.5 sm:py-3">
              <h2 className="text-base font-extrabold">Pacientes</h2>
              <p className="mb-2.5 text-[10px] font-medium text-muted">
                Busque e acompanhe os pacientes vinculados à sua conta.
              </p>
              <div className="mb-2 flex gap-1.5">
                <div className="flex-1 rounded-md border border-line-ui bg-white px-2 py-1.5 text-[9px] font-semibold text-muted">
                  Buscar por nome ou código
                </div>
                <div className="shrink-0 rounded-md bg-brand-ui px-2.5 py-1.5 text-[9px] font-bold whitespace-nowrap text-white">
                  Vincular
                </div>
              </div>
              <PatientRow
                name="Maria Silva"
                detail="Código A7K2M9 · vinculado em 12/03/2026"
              />
              <PatientRow
                name="João Santos"
                detail="Código B3P8Q1 · vinculado em 08/03/2026"
              />
              <div className="mt-0.5 hidden grid-cols-2 gap-1.5 sm:grid">
                <div className="rounded-[9px] border border-line-ui bg-white px-2.5 py-1.5">
                  <label className="text-[8px] font-bold tracking-wide text-muted uppercase">
                    Glicemia (7 dias)
                  </label>
                  <svg
                    className="mt-1 block h-10 w-full"
                    viewBox="0 0 200 40"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <polyline
                      fill="none"
                      stroke="#3078e4"
                      strokeWidth="2.5"
                      points="0,28 28,22 56,24 84,12 112,18 140,8 168,14 200,6"
                    />
                    <circle cx="200" cy="6" r="3" fill="#3078e4" />
                  </svg>
                </div>
                <div className="rounded-[9px] border border-line-ui bg-white px-2.5 py-1.5">
                  <label className="text-[8px] font-bold tracking-wide text-muted uppercase">
                    Insulina aplicada
                  </label>
                  <svg className="mt-1 block h-10 w-full" viewBox="0 0 200 40" aria-hidden>
                    <rect x="8" y="16" width="18" height="20" rx="3" fill="#3078e4" opacity="0.85" />
                    <rect x="36" y="8" width="18" height="28" rx="3" fill="#3078e4" opacity="0.7" />
                    <rect x="64" y="12" width="18" height="24" rx="3" fill="#3078e4" opacity="0.85" />
                    <rect x="92" y="4" width="18" height="32" rx="3" fill="#3078e4" />
                    <rect x="120" y="10" width="18" height="26" rx="3" fill="#3078e4" opacity="0.75" />
                    <rect x="148" y="6" width="18" height="30" rx="3" fill="#3078e4" opacity="0.9" />
                    <rect x="176" y="9" width="18" height="27" rx="3" fill="#3078e4" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="relative h-3 rounded-b-md bg-gradient-to-b from-line to-[#9aa8b8]">
        <span className="absolute top-[3px] left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-sm bg-[#7a8796]" />
      </div>
      <div className="mx-auto h-2.5 w-[min(100%,700px)] translate-x-0 rounded-b-[14px] bg-gradient-to-b from-[#a8b4c4] to-[#8a96a6] shadow-[0_8px_16px_rgba(18,40,70,0.14)] sm:-translate-x-2" />
    </div>
  )
}

function PatientRow({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="mb-1.5 flex items-center justify-between gap-2 rounded-[9px] border border-line-ui bg-white px-2.5 py-2">
      <div className="min-w-0">
        <strong className="mb-0.5 block truncate text-[11px]">{name}</strong>
        <span className="block truncate text-[8px] font-semibold text-muted">
          {detail}
        </span>
      </div>
      <div className="hidden shrink-0 gap-1 sm:flex">
        <span className="rounded bg-brand-ui px-2 py-1 text-[8px] font-bold text-white">
          Ver histórico
        </span>
        <span className="rounded border border-[#fde8e8] bg-white px-2 py-1 text-[8px] font-bold text-[#d80000]">
          Remover
        </span>
      </div>
    </div>
  )
}
