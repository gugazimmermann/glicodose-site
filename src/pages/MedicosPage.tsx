import { Link } from 'react-router-dom'
import { CapabilityMarquee } from '../components/CapabilityMarquee'
import { CtaButton } from '../components/CtaButton'
import { DisclaimerBand } from '../components/DisclaimerBand'
import { FeatureGrid } from '../components/FeatureGrid'
import { MediaFrame } from '../components/MediaFrame'
import { SectionHeading } from '../components/SectionHeading'
import { SITE_URLS } from '../lib/siteUrls'

const CAPABILITIES = [
  'Análise com IA',
  'Histórico do paciente',
  'Gráficos',
  'Código de 6 caracteres',
  'Prescrição',
  'FSI / I:C',
  'Alertas clínicos',
  'Na consulta',
]

const ALERTS = [
  'Hipoglicemias em sequência',
  'Várias hipoglicemias',
  'Hiperglicemias elevadas',
  'Gap entre dose recomendada e aplicada',
  'Alta variabilidade',
  'Acima da meta recente',
]

const FEATURES = [
  {
    title: 'Conta do profissional',
    body: 'Crie sua conta com e-mail e senha, vincule pacientes e acompanhe o histórico de quem usa o app GlicoDose.',
    image: '/media/feature-medicos-list.png',
    imageAlt: 'Lista de pacientes no portal GlicoDose Médicos',
  },
  {
    title: 'Vínculo em 6 caracteres',
    body: 'O paciente gera o código no app. Você digita no portal. Sem compartilhar senha — histórico, gráficos e a prescrição que o app usa no cálculo.',
    image: '/media/feature-medicos-link.png',
    imageAlt: 'Tela de vínculo por código no portal médico',
  },
  {
    title: 'Histórico e gráficos na consulta',
    body: 'Glicemia, refeição (texto ou foto) e insulina em linha do tempo, com gráficos de tendência para apoiar a conversa. Os registros permanecem como o paciente anotou.',
    image: '/media/feature-medicos-charts.png',
    imageAlt: 'Histórico do paciente com gráficos e eventos',
  },
  {
    title: 'Análise com IA no portal',
    body: 'Para quem apoia o GlicoDose: escolha o período e rode a análise. Ela aponta achados e pode sugerir FSI, I:C, metas, passo e duração — você confirma antes de gravar na prescrição.',
    image: '/media/feature-medicos-ai.png',
    imageAlt: 'Painel Análise com IA no portal médico',
  },
]

export function MedicosPage() {
  return (
    <>
      <section className="section-band relative overflow-hidden">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:py-20">
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
            <p className="max-w-md font-display text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-[1.85rem]">
              Histórico, gráficos e{' '}
              <span className="text-brand">Análise com IA</span>
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              O acompanhamento clínico é gratuito: vínculo por código,
              prescrição, histórico, alertas e gráficos. A Análise com IA entra
              com a assinatura de apoio, para a revisão na consulta.
            </p>
            <div className="mt-9 flex animate-fade-up delay-1 flex-wrap items-center gap-3">
              <CtaButton href={SITE_URLS.medicosPortal} external>
                Acessar o portal
              </CtaButton>
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
              src="/media/promo-medicos.mp4"
              poster="/media/feature-medicos-ai.png"
              className="mx-auto max-w-2xl lg:max-w-none"
            />
          </div>
        </div>
      </section>

      <CapabilityMarquee items={CAPABILITIES} />

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner">
          <SectionHeading
            title="O que o portal oferece"
            subtitle="Vínculo por código, prescrição que vale no app, histórico e gráficos. A Análise com IA fica para quem apoia."
          />
          <FeatureGrid items={FEATURES} className="mt-12 sm:mt-14" />
        </div>
      </section>

      <section className="section-band border-t border-line/40">
        <div className="section-inner grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Alertas clínicos no histórico"
              subtitle="Regras fixas sobre os últimos 30 dias. Quando não há nada a sinalizar, a tela diz isso."
            />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ALERTS.map((label) => (
                <li
                  key={label}
                  className="rounded-xl border border-line/70 bg-white/90 px-4 py-3 text-sm font-semibold text-brand-dark shadow-sm"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              title="A prescrição que o app usa"
              subtitle="O que você salva no portal passa a valer no cálculo do paciente: meta do dia e da noite, janela noturna, FSI e razão I:C por horário, insulina rápida e basal."
            />
          </div>
        </div>
      </section>

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Análise com IA"
              subtitle="No histórico, escolha 7 dias, 30 dias ou tudo. A análise resume o período, lista prioridades da consulta e achados com evidência. Ela sugere FSI, razão I:C, metas, passo da dose e duração — com a sua confirmação antes de gravar. Não define a dose em unidades. Análises anteriores ficam salvas para reabrir. Esse recurso acompanha a assinatura de apoio; o resto do portal segue disponível."
            />
          </div>
          <MediaFrame
            src="/media/feature-medicos-ai.png"
            alt="Painel Análise com IA com achados clínicos"
          />
        </div>
      </section>

      <section className="section-band border-t border-line/40">
        <div className="section-inner grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              title="Como usar o portal"
              subtitle="Conta profissional, vínculo por código, alertas e gráficos, edição da prescrição e Análise com IA — o guia completo para a consulta."
            />
            <Link
              to="/como-usar#medico"
              className="text-link mt-6 inline-flex items-center gap-1"
            >
              Ver guia completo
              <span aria-hidden>→</span>
            </Link>
          </div>
          <MediaFrame
            src="/media/feature-medicos-link.png"
            alt="Vínculo de paciente por código no portal"
            className="mx-auto max-w-md lg:max-w-none"
          />
        </div>
      </section>

      <section className="section-band border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Vínculo em 6 caracteres"
              subtitle="O paciente gera o código no app. Você digita no portal. Sem compartilhar senha — o histórico fica disponível para leitura e análise."
            />
          </div>
          <MediaFrame
            src="/media/feature-medicos-link.png"
            alt="Formulário de vínculo por código no portal"
          />
        </div>
      </section>

      <section className="section-band section-band-white border-t border-line/40">
        <div className="section-inner grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <MediaFrame
            src="/media/feature-app-result.png"
            alt="Estimativa de dose no app do paciente"
            className="mx-auto max-w-md lg:max-w-lg"
          />
          <div>
            <SectionHeading
              title="IA do app do paciente"
              subtitle="Entre consultas, o app estima carboidratos (texto, foto ou voz), pode puxar glicose do sensor LibreLinkUp e sugere dose com FSI, I:C e IOB ao vivo. Esse histórico alimenta o portal — a Análise com IA do médico é outro recurso, sobre o conjunto dos registros."
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
          A Análise com IA do portal e as estimativas do app são ferramentas de
          apoio.{' '}
          <strong className="font-semibold">Não substituem</strong> o julgamento
          clínico nem a relação médico–paciente. As decisões de tratamento
          permanecem com a equipe de saúde.
        </p>
      </DisclaimerBand>
    </>
  )
}
