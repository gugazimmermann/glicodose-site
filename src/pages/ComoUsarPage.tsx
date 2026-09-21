import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CtaButton } from '../components/CtaButton'
import { DisclaimerBand } from '../components/DisclaimerBand'
import { HowToGuide, type HowToStep } from '../components/HowToGuide'
import { SectionHeading } from '../components/SectionHeading'
import { SITE_URLS } from '../lib/siteUrls'

type Audience = 'paciente' | 'medico'

const PATIENT_STEPS: HowToStep[] = [
  {
    n: '1',
    title: 'Baixe e crie sua conta',
    body: 'Instale o GlicoDose no Android ou iPhone e cadastre-se com e-mail e senha. Depois é só entrar quando precisar.',
    image: '/media/feature-app-dose.png',
    imageAlt: 'Tela principal do app GlicoDose',
  },
  {
    n: '2',
    title: 'Complete o perfil prescrito',
    body: 'Informe meta de glicemia de dia e de noite, a janela noturna, FSI, razão I:C e o nome da insulina rápida — conforme a orientação da sua equipe.',
    image: '/media/feature-app-dose.png',
    imageAlt: 'Configuração do perfil no app',
  },
  {
    n: '3',
    title: 'Aceite o aviso médico',
    body: 'O app é uma ferramenta de apoio. Na primeira vez, leia e confirme o disclaimer antes de usar a estimativa de dose.',
  },
  {
    n: '4',
    title: 'Opcional: Linkar Sensor',
    body: 'No Perfil ou na Dose, conecte sua conta de seguidor do LibreLinkUp para preencher a glicose a partir do sensor — ou continue digitando o valor manualmente.',
  },
  {
    n: '5',
    title: 'Registre glicose e refeição',
    body: 'Na aba Dose, informe a glicemia. Descreva a refeição por texto, foto ou voz (IA estima os carbs) ou digite os carboidratos manualmente e calcule com a sua fórmula.',
    image: '/media/feature-app-meal.png',
    imageAlt: 'Registro de refeição com foto e voz',
  },
  {
    n: '6',
    title: 'Confirme a dose aplicada',
    body: 'Veja a insulina sugerida com IOB já descontado. Ajuste se precisar e confirme o que você aplicou — essa dose entra no cálculo de insulina ainda ativa.',
    image: '/media/feature-app-result.png',
    imageAlt: 'Resultado da estimativa de dose com IOB',
  },
  {
    n: '7',
    title: 'Acompanhe e exporte o histórico',
    body: 'Na aba Histórico, revise registros e gráficos. Pelo menu Exportar, envie CSV ou um relatório em texto para a consulta.',
  },
  {
    n: '8',
    title: 'Compartilhe o código com o médico',
    body: 'No Perfil, copie o código de seis caracteres. Seu médico digita no portal para ver o histórico e ajustar a prescrição — sem acessar sua senha.',
    image: '/media/feature-app-code.png',
    imageAlt: 'Código de vínculo de seis caracteres no app',
  },
]

const DOCTOR_STEPS: HowToStep[] = [
  {
    n: '1',
    title: 'Crie a conta e complete o perfil',
    body: 'Cadastre-se no portal com e-mail e senha. Em seguida preencha CRM/UF, especialidade, telefone e dados do consultório.',
    image: '/media/feature-medicos-list.png',
    imageAlt: 'Lista de pacientes no portal médico',
  },
  {
    n: '2',
    title: 'Vincule o paciente pelo código',
    body: 'Peça o código de seis caracteres gerado no app. Em Vincular, digite o código — sem compartilhar senha do paciente.',
    image: '/media/feature-medicos-link.png',
    imageAlt: 'Formulário de vínculo por código',
  },
  {
    n: '3',
    title: 'Revise alertas, histórico e gráficos',
    body: 'Abra o paciente: veja alertas clínicos (hipos em sequência, gap de dose, variabilidade), a linha do tempo de registros e os gráficos de tendência.',
    image: '/media/feature-medicos-charts.png',
    imageAlt: 'Histórico e gráficos do paciente',
  },
  {
    n: '4',
    title: 'Ajuste a prescrição usada no app',
    body: 'Na aba Prescrição, edite meta dia/noite, FSI, I:C, insulina rápida, passo da dose, duração da insulina (IOB) e janela noturna. As mudanças passam a valer no app do paciente.',
  },
  {
    n: '5',
    title: 'Use a Análise com IA na consulta',
    body: 'Escolha o período, rode a análise e revise achados e sugestões. Você pode aplicar um valor sugerido na prescrição com confirmação e reabrir análises anteriores salvas.',
    image: '/media/feature-medicos-ai.png',
    imageAlt: 'Painel Análise com IA no portal',
  },
]

function audienceFromHash(hash: string): Audience {
  const h = hash.replace(/^#/, '').toLowerCase()
  if (h === 'medico' || h === 'médico' || h === 'medicos') return 'medico'
  return 'paciente'
}

export function ComoUsarPage() {
  const { hash } = useLocation()
  const [audience, setAudience] = useState<Audience>(() =>
    audienceFromHash(typeof window !== 'undefined' ? window.location.hash : ''),
  )

  useEffect(() => {
    setAudience(audienceFromHash(hash))
  }, [hash])

  function selectAudience(next: Audience) {
    setAudience(next)
    const nextHash = next === 'medico' ? '#medico' : '#paciente'
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', `/como-usar${nextHash}`)
    }
  }

  const steps = audience === 'paciente' ? PATIENT_STEPS : DOCTOR_STEPS

  return (
    <>
      <section className="section-band relative overflow-hidden">
        <div className="section-inner py-14 sm:py-18 lg:py-20">
          <div className="animate-fade-up mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">
              Guia rápido
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
              Como usar o GlicoDose
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Passo a passo do app do paciente e do portal para médicos — do
              cadastro ao acompanhamento na consulta.
            </p>
          </div>

          <div
            className="mx-auto mt-10 flex w-full max-w-md rounded-2xl border border-line/60 bg-white/80 p-1.5 shadow-sm"
            role="tablist"
            aria-label="Audiência do guia"
          >
            <button
              type="button"
              role="tab"
              aria-selected={audience === 'paciente'}
              id="tab-paciente"
              onClick={() => selectAudience('paciente')}
              className={[
                'flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition',
                audience === 'paciente'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-muted hover:text-brand-dark',
              ].join(' ')}
            >
              Paciente (app)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={audience === 'medico'}
              id="tab-medico"
              onClick={() => selectAudience('medico')}
              className={[
                'flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition',
                audience === 'medico'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-muted hover:text-brand-dark',
              ].join(' ')}
            >
              Médico (portal)
            </button>
          </div>
        </div>
      </section>

      <section
        id={audience === 'paciente' ? 'paciente' : 'medico'}
        className="section-band section-band-white border-t border-line/40"
        role="tabpanel"
        aria-labelledby={
          audience === 'paciente' ? 'tab-paciente' : 'tab-medico'
        }
      >
        <div className="section-inner">
          <SectionHeading
            title={
              audience === 'paciente'
                ? 'App do paciente'
                : 'Portal GlicoDose Médicos'
            }
            subtitle={
              audience === 'paciente'
                ? 'Do primeiro login à estimativa de dose e ao vínculo com o médico.'
                : 'Do cadastro profissional à Análise com IA na consulta.'
            }
          />
          <HowToGuide steps={steps} className="mt-12 sm:mt-14" />

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {audience === 'paciente' ? (
              <>
                <CtaButton href={SITE_URLS.playStore} external>
                  Baixar no Android
                </CtaButton>
                <CtaButton
                  href={SITE_URLS.appStore}
                  external
                  className="!bg-brand-dark"
                >
                  Baixar no iPhone
                </CtaButton>
                <Link
                  to="/medicos"
                  className="inline-flex items-center justify-center rounded-xl border border-brand/40 bg-white/80 px-6 py-3 text-base font-bold text-brand-dark shadow-sm transition-colors hover:border-brand hover:bg-white"
                >
                  Sou médico
                </Link>
              </>
            ) : (
              <>
                <CtaButton href={SITE_URLS.medicosPortal} external>
                  Acessar o portal
                </CtaButton>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-xl border border-brand/40 bg-white/80 px-6 py-3 text-base font-bold text-brand-dark shadow-sm transition-colors hover:border-brand hover:bg-white"
                >
                  Conhecer o app
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <DisclaimerBand>
        <p>
          As estimativas do app e a Análise com IA do portal são ferramentas de
          apoio.{' '}
          <strong className="font-semibold">Não substituem</strong> orientação
          médica nem o julgamento clínico. As decisões de tratamento permanecem
          com a equipe de saúde.
        </p>
      </DisclaimerBand>
    </>
  )
}
