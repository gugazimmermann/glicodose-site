import { Link } from 'react-router-dom'
import { CtaButton } from '../components/CtaButton'
import { DeviceLaptop } from '../components/DeviceLaptop'
import { DevicePhone } from '../components/DevicePhone'
import { DisclaimerBand } from '../components/DisclaimerBand'
import { IobDosePreview } from '../components/IobDosePreview'
import { SectionHeading } from '../components/SectionHeading'
import { StepTimeline } from '../components/StepTimeline'

const STEPS = [
  {
    n: '1',
    title: 'Glicose',
    body: 'Informe o valor atual em mg/dL.',
  },
  {
    n: '2',
    title: 'Refeição',
    body: 'Descreva por texto, foto ou voz.',
  },
  {
    n: '3',
    title: 'Estimativa',
    body: 'Receba a dose sugerida com IOB.',
  },
]

export function HomePage() {
  return (
    <>
      <section className="section-band relative overflow-hidden">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20 lg:py-24">
          <div className="animate-fade-up relative z-10">
            <div className="mb-7 flex items-center gap-3.5">
              <img
                src="/glucosemeter.png"
                alt=""
                width={72}
                height={72}
                className="size-[4.5rem] rounded-2xl bg-ink shadow-lg shadow-brand-dark/25"
              />
              <div>
                <h1 className="font-display text-5xl font-bold tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
                  GlicoDose
                </h1>
                <p className="mt-1.5 text-sm font-semibold tracking-wide text-muted sm:text-base">
                  App do paciente
                </p>
              </div>
            </div>
            <p className="max-w-lg font-display text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-[1.75rem]">
              Do registro da glicose à estimativa de dose —{' '}
              <span className="text-brand">com apoio de IA</span>
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Alimentação por texto, foto ou voz. A sugestão de insulina rápida
              já considera o que ainda está ativo no organismo.
            </p>
            <div className="mt-9 animate-fade-up delay-1">
              <CtaButton />
            </div>
          </div>

          <div
            className="animate-float-in delay-2 relative flex justify-center lg:justify-end"
            aria-hidden
          >
            <div className="device-glow" />
            <div className="relative z-10 scale-105 sm:scale-110">
              <DevicePhone />
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner">
          <SectionHeading
            title="Do registro à dose"
            subtitle="Três passos no momento em que você precisa calcular."
          />
          <StepTimeline steps={STEPS} className="mt-12 sm:mt-14" />
        </div>
      </section>

      <section className="section-band border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="A IA já desconta o IOB"
              subtitle="A estimativa usa o perfil prescrito e avisa quando ainda há insulina ativa — para você não somar doses sem querer."
            />
          </div>
          <div className="flex justify-center lg:justify-end">
            <IobDosePreview />
          </div>
        </div>
      </section>

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              title="Seu médico vê o histórico"
              subtitle="Com um código de seis caracteres, o profissional acompanha glicemia, refeições e insulina no portal — em modo leitura."
            />
            <Link to="/medicos" className="text-link mt-6">
              Conhecer o portal para médicos
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div
            className="flex min-w-0 justify-center lg:justify-end"
            aria-hidden
          >
            <DeviceLaptop
              rotate={false}
              className="origin-center scale-[0.78] sm:scale-[0.88] lg:scale-95"
            />
          </div>
        </div>
      </section>

      <DisclaimerBand>
        <p>
          A estimativa do app{' '}
          <strong className="font-semibold">não substitui</strong> orientação
          médica. O GlicoDose é uma ferramenta de apoio — as decisões de
          tratamento devem seguir a prescrição e o acompanhamento da equipe de
          saúde.
        </p>
      </DisclaimerBand>
    </>
  )
}
