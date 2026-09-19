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
        <div className="h-[min(400px,54vw)] overflow-hidden rounded-t-md bg-white sm:h-[400px]">
          <div className="flex items-center gap-1.5 border-b border-line bg-[#eef2f7] px-2.5 py-1.5">
            <div className="flex gap-1">
              <i className="size-1.5 rounded-full bg-[#ff5f57]" />
              <i className="size-1.5 rounded-full bg-[#febc2e]" />
              <i className="size-1.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 rounded border border-line bg-white px-2 py-0.5 text-[9px] font-semibold text-muted">
              medicos.glicodose.app/
            </div>
          </div>
          <div
            className="flex h-[calc(100%-28px)] flex-col"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 10% -10%, #a8c4f8 0%, transparent 55%), #e8eef8',
            }}
          >
            <header className="flex items-center justify-between gap-2 border-b border-line-ui/80 bg-white/90 px-2.5 py-2">
              <div className="flex min-w-0 items-center gap-1.5">
                <img
                  src="/glucosemeter.png"
                  alt=""
                  className="size-[22px] rounded-[5px] bg-ink"
                />
                <div className="min-w-0">
                  <strong className="block truncate text-[11px] leading-tight">
                    GlicoDose Médicos
                  </strong>
                  <small className="block truncate text-[8px] font-medium text-muted">
                    Dra. Ana Costa
                  </small>
                </div>
              </div>
              <nav className="hidden items-center gap-0.5 sm:flex" aria-hidden>
                <span className="rounded-md bg-brand-softer px-2 py-1 text-[9px] font-semibold text-brand-dark">
                  Pacientes
                </span>
                <span className="rounded-md px-2 py-1 text-[9px] font-semibold text-muted">
                  Vincular
                </span>
                <span className="rounded-md px-2 py-1 text-[9px] font-semibold text-muted">
                  Perfil
                </span>
                <span className="rounded-md bg-brand-ui px-2 py-1 text-[9px] font-bold text-white">
                  Apoiar
                </span>
              </nav>
              <span className="rounded-md border border-line-ui bg-white px-2 py-1 text-[9px] font-semibold text-muted">
                Sair
              </span>
            </header>

            <section className="min-h-0 flex-1 overflow-hidden px-3 py-2.5 sm:px-3.5">
              <div className="mb-2 flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-base font-extrabold">Pacientes</h2>
                  <p className="text-[10px] font-medium text-muted">
                    Busque e acompanhe os pacientes vinculados à sua conta.
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-brand-ui px-2.5 py-1.5 text-[9px] font-bold text-white">
                  Vincular
                </span>
              </div>
              <p className="mb-2 text-[9px] font-bold tracking-wide text-muted uppercase">
                Pacientes vinculados (2)
              </p>
              <div className="mb-2 flex gap-1.5">
                <div className="flex-1 rounded-md border border-line-ui bg-white px-2 py-1.5 text-[9px] font-semibold text-muted">
                  Buscar por nome ou código
                </div>
                <div className="shrink-0 rounded-md border border-line-ui bg-white px-2 py-1.5 text-[9px] font-semibold text-muted">
                  Ordenar · Nome (A–Z)
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
        <span className="block truncate font-mono text-[8px] font-semibold text-muted">
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
