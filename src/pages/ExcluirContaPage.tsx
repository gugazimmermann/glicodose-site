import { Link } from 'react-router-dom'

export function ExcluirContaPage() {
  return (
    <div className="section-band">
      <div className="section-inner max-w-3xl py-14 sm:py-20">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold tracking-wide text-brand">
            GlicoDose
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Excluir conta
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            O app GlicoDose (<span className="font-medium">app.glicodose</span>)
            apaga a conta e os dados ligados a ela no servidor quando você pede.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink sm:text-base">
          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Como pedir
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
              <li>
                Envie um e-mail para{' '}
                <a
                  href="mailto:contato@glicodose.app"
                  className="font-medium text-brand hover:text-brand-dark"
                >
                  contato@glicodose.app
                </a>{' '}
                a partir do e-mail da conta no app.
              </li>
              <li>No assunto ou no texto, peça a exclusão da conta GlicoDose.</li>
              <li>
                Apagamos a conta e os dados ligados a ela no servidor. Não há
                exclusão automática dentro do app.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              O que é apagado
            </h2>
            <p className="mt-2 text-muted">
              Conta, perfil, registros de glicose, refeição e insulina, fotos,
              credenciais do LibreLinkUp e token de notificação.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              O que pode permanecer
            </h2>
            <p className="mt-2 text-muted">
              O que a lei obrigar a guardar. A assinatura de apoio se cancela
              na Google Play, em pagamentos e assinaturas. Sair do app não
              apaga os dados.
            </p>
          </section>

          <p className="text-muted">
            O tratamento dos dados está na{' '}
            <Link
              to="/privacidade"
              className="font-medium text-brand hover:text-brand-dark"
            >
              política de privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
