import { Link } from 'react-router-dom'
import { CapabilityMarquee } from '../components/CapabilityMarquee'
import { CtaButton } from '../components/CtaButton'
import { DisclaimerBand } from '../components/DisclaimerBand'
import { FeatureGrid } from '../components/FeatureGrid'
import { MediaFrame } from '../components/MediaFrame'
import { SectionHeading } from '../components/SectionHeading'
import { StepTimeline } from '../components/StepTimeline'

const CAPABILITIES = [
  'Texto',
  'Foto',
  'Voz',
  'IOB',
  'Perfil prescrito',
  'Histórico',
  'Código médico',
  'Estimativa com IA',
]

const FEATURES = [
  {
    title: 'Alimentação por texto, foto ou voz',
    body: 'Descreva a refeição digitando, fotografando o prato ou falando. A IA estima carboidratos com visão e transcrição (Whisper), alinhada à tabela TACO.',
    image: '/media/feature-app-meal.png',
    imageAlt: 'Tela do app com foto da refeição e botão de voz',
  },
  {
    title: 'Estimativa com perfil − IOB',
    body: 'A sugestão de insulina rápida usa sensibilidade (FSI), razão I:C e metas do seu perfil — e já desconta a insulina ainda ativa no organismo.',
    image: '/media/feature-app-result.png',
    imageAlt: 'Tela do app com dose estimada de 4,5 unidades',
  },
  {
    title: 'Perfil prescrito pela equipe',
    body: 'Configure FSI, I:C e metas de glicemia conforme a orientação do seu médico. O app aplica esses parâmetros em cada estimativa.',
    image: '/media/feature-app-dose.png',
    imageAlt: 'Tela principal do app com glicose e alimentação',
  },
  {
    title: 'Histórico e vínculo com o médico',
    body: 'Registre glicose, refeições e doses. Com um código de seis caracteres, o profissional acompanha tudo no portal — em modo leitura.',
    image: '/media/feature-app-code.png',
    imageAlt: 'Tela do app mostrando o código de vínculo A7K2M9',
  },
]

const STEPS = [
  {
    n: '1',
    title: 'Glicose',
    body: 'Informe o valor atual em mg/dL — o ponto de partida da estimativa.',
  },
  {
    n: '2',
    title: 'Refeição',
    body: 'Descreva por texto, envie uma foto ou use o botão Falar.',
  },
  {
    n: '3',
    title: 'Estimativa',
    body: 'Receba a dose sugerida com IOB descontado e registre o que aplicou.',
  },
]

export function HomePage() {
  return (
    <>
      <section className="section-band relative overflow-hidden">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-20">
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
            <p className="max-w-lg font-display text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-[1.85rem]">
              Do registro da glicose à estimativa de dose —{' '}
              <span className="text-brand">com apoio de IA</span>
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Alimentação por texto, foto ou voz. A sugestão de insulina rápida
              usa o perfil prescrito e já considera o que ainda está ativo no
              organismo (IOB).
            </p>
            <div className="mt-9 flex animate-fade-up delay-1 flex-wrap items-center gap-3">
              <CtaButton />
              <Link
                to="/apoiar"
                className="inline-flex items-center justify-center rounded-xl border border-brand/40 bg-white/80 px-6 py-3 text-base font-bold text-brand-dark shadow-sm transition-colors hover:border-brand hover:bg-white"
              >
                Apoiar o GlicoDose
              </Link>
            </div>
          </div>

          <div className="animate-float-in delay-2 relative min-w-0">
            <MediaFrame
              type="video"
              src="/media/promo-app.mp4"
              poster="/media/feature-app-dose.png"
              className="mx-auto max-w-xl lg:max-w-none"
            />
          </div>
        </div>
      </section>

      <CapabilityMarquee items={CAPABILITIES} />

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner">
          <SectionHeading
            title="Feito para o momento da dose"
            subtitle="Recursos pensados para quem precisa registrar glicose e refeição e receber uma estimativa clara — sem complicar o dia a dia."
          />
          <FeatureGrid items={FEATURES} className="mt-12 sm:mt-14" />
        </div>
      </section>

      <section className="section-band border-t border-line/40">
        <div className="section-inner">
          <SectionHeading
            title="Do registro à dose"
            subtitle="Três passos no momento em que você precisa calcular — com a IA ajudando na refeição e no IOB."
          />
          <StepTimeline steps={STEPS} className="mt-12 sm:mt-14" />
        </div>
      </section>

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="A IA já desconta o IOB"
              subtitle="A estimativa avisa quando ainda há insulina ativa e desconta esse valor da sugestão — para você não somar doses sem querer. Sempre uma ferramenta de apoio à prescrição da sua equipe."
            />
          </div>
          <MediaFrame
            src="/media/feature-app-result.png"
            alt="Estimativa de dose com IOB descontado"
          />
        </div>
      </section>

      <section className="section-band border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <SectionHeading
              title="Seu médico vê o histórico"
              subtitle="Com um código de seis caracteres, o profissional acompanha glicemia, refeições e insulina no portal — em modo leitura, sem acessar sua senha."
            />
            <Link to="/medicos" className="text-link mt-6">
              Conhecer o portal para médicos
              <span aria-hidden>→</span>
            </Link>
          </div>
          <MediaFrame
            src="/media/feature-medicos-list.png"
            alt="Portal médico com lista de pacientes"
          />
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
