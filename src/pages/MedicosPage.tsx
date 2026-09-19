import { Link } from 'react-router-dom'
import { CodeLinkVisual } from '../components/CodeLinkVisual'
import { CtaButton } from '../components/CtaButton'
import { DeviceLaptop } from '../components/DeviceLaptop'
import { DevicePhone } from '../components/DevicePhone'
import { DisclaimerBand } from '../components/DisclaimerBand'
import { SectionHeading } from '../components/SectionHeading'

export function MedicosPage() {
  return (
    <>
      <section className="section-band relative overflow-hidden">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:py-24">
          <div className="animate-fade-up relative z-10 min-w-0">
            <div className="mb-7 flex items-center gap-3.5">
              <img
                src="/glucosemeter.png"
                alt=""
                width={72}
                height={72}
                className="size-[4.5rem] rounded-2xl bg-ink shadow-lg shadow-brand-dark/25"
              />
              <div>
                <h1 className="font-display text-5xl font-bold tracking-tight text-brand-dark sm:text-6xl">
                  GlicoDose
                </h1>
                <p className="mt-1.5 text-sm font-semibold tracking-wide text-muted sm:text-base">
                  Portal Médicos
                </p>
              </div>
            </div>
            <p className="max-w-md font-display text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-[1.75rem]">
              Acompanhe seus pacientes{' '}
              <span className="text-brand">com clareza</span>
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Vínculo por código, histórico completo e gráficos para apoiar a
              consulta — tudo em modo leitura.
            </p>
            <div className="mt-9 animate-fade-up delay-1">
              <CtaButton />
            </div>
          </div>

          <div
            className="animate-float-in delay-2 relative flex min-w-0 justify-center lg:justify-end"
            aria-hidden
          >
            <div className="device-glow" />
            <div className="relative z-10 w-full max-w-[640px]">
              <DeviceLaptop className="scale-[0.92] sm:scale-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Vínculo em 6 caracteres"
              subtitle="O paciente gera o código no app. Você digita no portal. Sem compartilhar senha — só o histórico em leitura."
            />
          </div>
          <CodeLinkVisual />
        </div>
      </section>

      <section className="section-band border-t border-line/40">
        <div className="section-inner">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-12">
            <SectionHeading
              title="Na consulta"
              subtitle="Glicemia, alimentação e insulina aplicadas — com visão temporal para a conversa com o paciente."
            />
            <div className="min-w-0" aria-hidden>
              <DeviceLaptop
                rotate={false}
                className="mx-auto origin-bottom scale-[0.85] sm:scale-95 lg:mx-0 lg:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="flex justify-center lg:order-first" aria-hidden>
            <div className="relative">
              <div className="device-glow" />
              <div className="relative z-10 scale-90 sm:scale-95">
                <DevicePhone rotate={false} />
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              title="App do paciente"
              subtitle="Quem usa o GlicoDose registra glicose e refeições e recebe estimativas de dose com IOB — o mesmo histórico que você acompanha."
            />
            <Link to="/" className="text-link mt-6">
              Conhecer o app
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerBand>
        <p>
          O portal é uma ferramenta de apoio ao acompanhamento.{' '}
          <strong className="font-semibold">Não substitui</strong> o julgamento
          clínico nem a relação médico–paciente. As decisões de tratamento
          permanecem com a equipe de saúde.
        </p>
      </DisclaimerBand>
    </>
  )
}
