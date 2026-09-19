import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { appBaseUrl, createPublicSupportCheckout } from '../lib/supportApi'
import {
  SUPPORT_PLAN_KEYS,
  SUPPORT_PLAN_LABELS,
  displayPriceLabel,
  type SupportPlanKey,
} from '../lib/supportProducts'

function BusyDot() {
  return (
    <span
      className="inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-brand-soft border-t-brand"
      aria-hidden
    />
  )
}

export function ApoiarPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [busyPlan, setBusyPlan] = useState<SupportPlanKey | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [banner, setBanner] = useState<'sucesso' | 'cancelado' | null>(null)

  useEffect(() => {
    const onPageShow = () => {
      setBusyPlan(null)
    }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  useEffect(() => {
    const result = searchParams.get('apoiar')
    if (result !== 'sucesso' && result !== 'cancelado') return

    setBusyPlan(null)
    setBanner(result)
    const next = new URLSearchParams(searchParams)
    next.delete('apoiar')
    setSearchParams(next, { replace: true })
  }, [searchParams, setSearchParams])

  async function handleCheckout(plan: SupportPlanKey) {
    setError(null)
    setBusyPlan(plan)
    try {
      const base = appBaseUrl()
      const url = await createPublicSupportCheckout({
        plan,
        successUrl: `${base}/apoiar?apoiar=sucesso`,
        cancelUrl: `${base}/apoiar?apoiar=cancelado`,
      })
      window.location.assign(url)
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Não foi possível iniciar o checkout. Tente novamente.',
      )
      setBusyPlan(null)
    }
  }

  return (
    <div className="section-band">
      <div className="section-inner max-w-3xl py-14 sm:py-20">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold tracking-wide text-brand">
            Apoio opcional
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Apoiar o GlicoDose
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            O app e o portal são gratuitos. Se quiser, uma assinatura mensal
            ajuda a manter infraestrutura e IA.
          </p>
        </div>

        {banner === 'sucesso' ? (
          <div
            className="animate-fade-up mt-8 rounded-xl border border-brand-soft bg-brand-softer/50 px-4 py-3 text-sm text-brand-dark"
            role="status"
          >
            Obrigado por apoiar o GlicoDose!
            <button
              type="button"
              className="ml-3 font-semibold underline-offset-2 hover:underline"
              onClick={() => setBanner(null)}
            >
              Fechar
            </button>
          </div>
        ) : null}
        {banner === 'cancelado' ? (
          <div
            className="animate-fade-up mt-8 rounded-xl border border-line bg-white/80 px-4 py-3 text-sm text-muted"
            role="status"
          >
            Checkout cancelado. Você pode apoiar quando quiser.
            <button
              type="button"
              className="ml-3 font-semibold text-brand-dark underline-offset-2 hover:underline"
              onClick={() => setBanner(null)}
            >
              Fechar
            </button>
          </div>
        ) : null}
        {error ? (
          <div
            className="animate-fade-up mt-8 rounded-xl border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger"
            role="alert"
          >
            {error}
            <button
              type="button"
              className="ml-3 font-semibold underline-offset-2 hover:underline"
              onClick={() => setError(null)}
            >
              Fechar
            </button>
          </div>
        ) : null}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SUPPORT_PLAN_KEYS.map((plan, i) => {
            const busy = busyPlan === plan
            return (
              <div
                key={plan}
                className={[
                  'animate-fade-up rounded-2xl border border-line/80 bg-white/90 p-5 shadow-sm',
                  'transition-[border-color,box-shadow] hover:border-brand/50',
                  i === 0 ? '' : i === 1 ? 'delay-1' : i === 2 ? 'delay-2' : 'delay-3',
                ].join(' ')}
              >
                <p className="text-lg font-semibold tracking-tight text-ink">
                  {SUPPORT_PLAN_LABELS[plan]}
                </p>
                <p className="mt-1 text-2xl font-bold text-brand-dark">
                  {displayPriceLabel(plan)}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Renovação automática. Cancele quando quiser no portal Stripe.
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-bold text-white shadow-md shadow-brand-dark/15 transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={busy || busyPlan !== null}
                  onClick={() => void handleCheckout(plan)}
                >
                  {busy ? <BusyDot /> : null}
                  Assinar
                </button>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Quer conhecer o produto?{' '}
          <Link to="/" className="font-medium text-brand hover:text-brand-dark">
            App
          </Link>
          {' · '}
          <Link
            to="/medicos"
            className="font-medium text-brand hover:text-brand-dark"
          >
            Médicos
          </Link>
        </p>
      </div>
    </div>
  )
}
