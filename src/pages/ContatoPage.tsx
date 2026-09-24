import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { sendContactMessage } from '../lib/contactApi'

function BusyDot() {
  return (
    <span
      className="inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-brand-soft border-t-brand"
      aria-hidden
    />
  )
}

const inputClass =
  'mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:opacity-70'

export function ContatoPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        website,
      })
      setSent(true)
      setName('')
      setEmail('')
      setMessage('')
      setWebsite('')
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Não foi possível enviar a mensagem. Tente novamente.',
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="section-band">
      <div className="section-inner max-w-3xl py-14 sm:py-20">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold tracking-wide text-brand">
            Fale conosco
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Contato
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Dúvidas, sugestões ou suporte — envie uma mensagem. Respondemos em{' '}
            <a
              href="mailto:contato@glicodose.app"
              className="font-medium text-brand hover:text-brand-dark"
            >
              contato@glicodose.app
            </a>
            .
          </p>
        </div>

        {sent ? (
          <div
            className="animate-fade-up mt-8 rounded-xl border border-brand-soft bg-brand-softer/50 px-4 py-3 text-sm text-brand-dark"
            role="status"
          >
            Mensagem enviada. Obrigado pelo contato!
            <button
              type="button"
              className="ml-3 font-semibold underline-offset-2 hover:underline"
              onClick={() => setSent(false)}
            >
              Enviar outra
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

        <form
          onSubmit={(e) => void handleSubmit(e)}
          className="animate-fade-up mt-10 space-y-5"
          noValidate={false}
        >
          {/* Honeypot — hidden from users */}
          <div className="absolute top-auto left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-brand-dark">Nome</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className={inputClass}
              disabled={busy}
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-brand-dark">E-mail</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={inputClass}
              disabled={busy}
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-brand-dark">
              Mensagem
            </span>
            <textarea
              name="message"
              required
              maxLength={5000}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Como podemos ajudar?"
              className={`${inputClass} resize-y`}
              disabled={busy}
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-bold text-white shadow-md shadow-brand-dark/15 transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-44"
            disabled={
              busy || !name.trim() || !email.trim() || !message.trim()
            }
          >
            {busy ? <BusyDot /> : null}
            Enviar
          </button>
        </form>

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
