export function PrivacidadePage() {
  return (
    <div className="section-band">
      <div className="section-inner max-w-3xl py-14 sm:py-20">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold tracking-wide text-brand">
            GlicoDose
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Política de privacidade
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Vigência: outubro de 2026. Responsável: GlicoDose. Contato:{' '}
            <a
              href="mailto:contato@glicodose.app"
              className="font-medium text-brand hover:text-brand-dark"
            >
              contato@glicodose.app
            </a>
            .
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink sm:text-base">
          <p>
            O GlicoDose (app <span className="font-medium">app.glicodose</span>)
            é um registro de glicose e alimentação, com estimativa de insulina
            rápida a partir do perfil que a pessoa cadastrou. Não é dispositivo
            médico, não diagnostica e não prescreve. O público é de adultos. O
            app não é dirigido a crianças.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Dados da conta e do perfil
            </h2>
            <p className="mt-2 text-muted">
              No cadastro, o Supabase Auth guarda e-mail e senha. O perfil
              guarda nome, tipo de diabetes, meta de glicose, fator de
              sensibilidade, relação insulina:carboidrato, nome da insulina
              rápida, passo da dose, duração da insulina, janela noturna, fuso
              horário, tema, código de compartilhamento com o médico, limites
              de alerta e a data em que o aviso clínico foi aceito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Registros de saúde que você cria
            </h2>
            <p className="mt-2 text-muted">
              Cada registro pode incluir glicose, texto da refeição,
              carboidratos, dose sugerida e dose aplicada, insulina basal,
              receitas e anotações ligadas ao histórico. Fotos de refeição
              ficam num armazenamento privado, na pasta da sua conta. O áudio
              da refeição é enviado para transcrição; o que permanece no
              registro é o texto resultante, não um arquivo de áudio.
            </p>
            <p className="mt-2 text-muted">
              Gráficos, GMI, o pet e os arquivos CSV/PDF são gerados a partir
              desses registros. A exportação fica no seu aparelho até você
              compartilhar o arquivo.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Foto, voz e estimativa
            </h2>
            <p className="mt-2 text-muted">
              Quando você pede uma estimativa, o texto da refeição, a foto ou o
              áudio seguem para a OpenAI (modelos de visão, texto e
              transcrição) por uma função no servidor. O servidor registra uso
              da chamada (identificador da conta, modelo, quantidade de tokens,
              latência, sucesso e custo estimado) para operação. Esse log não é
              a resposta clínica.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Health Connect
            </h2>
            <p className="mt-2 text-muted">
              Com a sua permissão, o app lê e grava glicose e nutrição no
              Health Connect do aparelho, inclusive histórico e leitura em
              segundo plano quando você autoriza. Esses dados também podem ser
              copiados para o seu histórico no servidor. O Health Connect tem a
              própria política do Google.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              LibreLinkUp e alertas
            </h2>
            <p className="mt-2 text-muted">
              Se você ligar o sensor, o app guarda o e-mail e a região da conta
              LibreLinkUp e os tokens usados para sincronizar a glicose. As
              leituras (valor, tendência, horário) entram no seu histórico. Com
              alertas ligados, um token de notificação do aparelho (Firebase
              Cloud Messaging) permite avisar hipoglicemia, hiperglicemia ou
              sensor parado. Você desliga os alertas no perfil.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Médico vinculado
            </h2>
            <p className="mt-2 text-muted">
              Se você passar o código de 6 caracteres, o profissional vinculado
              pode ler o histórico e dados do perfil necessários ao
              acompanhamento. O vínculo vale enquanto existir na sua conta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Apoio (assinatura)
            </h2>
            <p className="mt-2 text-muted">
              A calculadora é gratuita. A assinatura opcional de apoio é
              cobrada pelo Google Play (ou pela App Store no iOS). O RevenueCat
              confirma o estado da assinatura (produto, loja, validade). O app
              guarda só esse estado, para liberar LibreLinkUp, o widget e o
              Health Connect. O pagamento em si fica na loja. Na ficha da loja
              o produto se chama apoio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              O que não fazemos
            </h2>
            <p className="mt-2 text-muted">
              Não vendemos esses dados. Não há SDK de analytics de terceiros no
              app. Firebase entra para entregar notificações. O widget e o
              serviço em primeiro plano de insulina ativa guardam no aparelho o
              necessário para mostrar o status.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Quem processa
            </h2>
            <ul className="mt-3 space-y-2 text-muted">
              <li>
                <span className="font-medium text-ink">Supabase</span> — conta,
                banco, fotos e funções do servidor.
              </li>
              <li>
                <span className="font-medium text-ink">OpenAI</span> — estimar
                carboidratos, descrever foto e transcrever voz.
              </li>
              <li>
                <span className="font-medium text-ink">Google</span> (Play,
                Health Connect, Firebase) — loja, assinatura, saúde no aparelho
                e notificações.
              </li>
              <li>
                <span className="font-medium text-ink">RevenueCat</span> —
                estado da assinatura de apoio.
              </li>
              <li>
                <span className="font-medium text-ink">LibreLinkUp (Abbott)</span>
                , se você conectar — leituras do sensor.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Retenção e exclusão
            </h2>
            <p className="mt-2 text-muted">
              A conta e os registros permanecem enquanto a conta existir. Para
              excluir a conta, escreva para{' '}
              <a
                href="mailto:contato@glicodose.app"
                className="font-medium text-brand hover:text-brand-dark"
              >
                contato@glicodose.app
              </a>
              : apagamos a conta e os dados ligados a ela no servidor, salvo o
              que a lei obrigar a guardar. Cancelar a assinatura é na loja
              (Play → pagamentos e assinaturas). Sair do app não apaga o
              histórico.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Segurança
            </h2>
            <p className="mt-2 text-muted">
              Acesso aos registros exige a sua sessão. Fotos não são públicas.
              Credenciais do LibreLinkUp e tokens de notificação ficam no
              servidor com acesso restrito à sua conta e às funções que
              sincronizam e alertam.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark">
              Alterações
            </h2>
            <p className="mt-2 text-muted">
              Mudanças neste texto passam a valer na data publicada no topo da
              página. O aviso dentro do app, quando o texto clínico mudar, pede
              novo aceite.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
