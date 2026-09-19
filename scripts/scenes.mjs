import {
  copyBlock,
  laptopShell,
  patientDetailHead,
  patientTabs,
  phoneShell,
  wrapScene,
} from './mock-shared.mjs'

const CHART_GLUCOSE = `<svg viewBox="0 0 200 56" preserveAspectRatio="none"><polyline fill="none" stroke="#3078e4" stroke-width="2.5" points="0,40 28,32 56,36 84,18 112,26 140,12 168,20 200,8"/><circle cx="200" cy="8" r="3.5" fill="#3078e4"/></svg>`
const CHART_INSULIN = `<svg viewBox="0 0 200 56"><rect x="6" y="28" width="10" height="24" rx="2" fill="#3078e4"/><rect x="18" y="20" width="10" height="32" rx="2" fill="#94b8f0"/><rect x="36" y="16" width="10" height="36" rx="2" fill="#3078e4"/><rect x="48" y="10" width="10" height="42" rx="2" fill="#94b8f0"/><rect x="66" y="22" width="10" height="30" rx="2" fill="#3078e4"/><rect x="78" y="14" width="10" height="38" rx="2" fill="#94b8f0"/><rect x="96" y="8" width="10" height="44" rx="2" fill="#3078e4"/><rect x="108" y="12" width="10" height="40" rx="2" fill="#94b8f0"/><rect x="126" y="18" width="10" height="34" rx="2" fill="#3078e4"/><rect x="138" y="10" width="10" height="42" rx="2" fill="#94b8f0"/><rect x="156" y="14" width="10" height="38" rx="2" fill="#3078e4"/><rect x="168" y="8" width="10" height="44" rx="2" fill="#94b8f0"/></svg>`

function frame(copy, visual) {
  return `<div class="frame">${copy}${visual}</div>`
}

/** @type {{ id: string, group: 'app' | 'medicos', title: string, build: () => string }[]} */
export const SCENES = [
  {
    id: 'feature-app-dose',
    group: 'app',
    title: 'App — dose com IOB',
    build: () =>
      wrapScene({
        title: 'feature-app-dose',
        body: frame(
          copyBlock({
            eyebrow: 'App do paciente',
            headline: 'Glicose, refeição<br/>e dose — <span>com IOB</span>',
            sub: 'A estimativa usa o perfil prescrito e já desconta a insulina ainda ativa.',
            pills: ['IA', 'IOB', 'mg/dL'],
          }),
          phoneShell(
            `
            <div class="ph-warn">Você ainda tem ~2 U ativas. A recomendação já desconta isso.</div>
            <div class="ph-disclaimer">Estimativa com base no seu perfil. Não substitui orientação médica.</div>
            <div class="ph-card">
              <div class="ph-label"><i class="dot r"></i> Glicose atual</div>
              <div class="ph-glucose">142<span>mg/dL</span></div>
            </div>
            <div class="ph-card">
              <div class="ph-label"><i class="dot b"></i> Alimentação</div>
              <div class="ph-seg"><span class="on">Estimar com IA</span><span>Carbs manuais</span></div>
              <div class="ph-food-row"><div class="text">Ex: 2 pães franceses com queijo</div><div class="mic">🎙</div></div>
              <div class="ph-photos"><span>Câmera</span><span>Galeria</span></div>
              <div class="ph-cta">Estimar carbs e calcular</div>
            </div>
          `,
            { title: 'Dose', tab: 'Dose' },
          ),
        ),
      }),
  },
  {
    id: 'feature-app-meal',
    group: 'app',
    title: 'App — foto e voz',
    build: () =>
      wrapScene({
        title: 'feature-app-meal',
        body: frame(
          copyBlock({
            eyebrow: 'Alimentação multimodal',
            headline: 'Texto, <span>foto</span><br/>ou voz',
            sub: 'Descreva a refeição do jeito mais fácil. A IA estima carboidratos com visão e Whisper.',
            pills: ['Câmera', 'Galeria', 'Falar'],
          }),
          phoneShell(
            `
            <div class="ph-card">
              <div class="ph-label"><i class="dot b"></i> Alimentação</div>
              <div class="ph-seg"><span class="on">Estimar com IA</span><span>Carbs manuais</span></div>
              <div class="ph-photo-preview"></div>
              <div class="ph-photos"><span>Câmera</span><span>Galeria</span></div>
              <div class="ph-food-row"><div class="text">2 pães franceses com queijo</div><div class="mic listen">●</div></div>
              <div class="ph-listen">Ouvindo… toque no microfone para parar</div>
              <div class="ph-cta">Estimar carbs e calcular</div>
            </div>
          `,
            { title: 'Dose', tab: 'Dose' },
          ),
        ),
      }),
  },
  {
    id: 'feature-app-result',
    group: 'app',
    title: 'App — resultado',
    build: () =>
      wrapScene({
        title: 'feature-app-result',
        body: frame(
          copyBlock({
            eyebrow: 'Estimativa com IA',
            headline: 'Dose sugerida<br/>com <span>perfil − IOB</span>',
            sub: 'Carbs estimados + sensibilidade e razão I:C do seu perfil. Sempre uma ferramenta de apoio.',
            pills: ['~4,5 U', 'IOB descontado'],
          }),
          phoneShell(
            `
            <div class="ph-card">
              <div class="ph-result-title">Insulina recomendada</div>
              <div class="ph-result-sub">Estimativa de carbs (IA) + sua fórmula</div>
              <div class="ph-result-dose">4,5 <small>U</small></div>
              <div class="ph-warn">IOB descontado: 2 U (insulina ainda ativa)</div>
              <div class="ph-chips"><span>Carbs · 45 g</span><span>Correção · 1,2 U</span><span>Comida · 5,3 U</span></div>
            </div>
            <div class="ph-card">
              <div class="ph-field-label">Insulina aplicada (U)</div>
              <div class="ph-field">4,5</div>
              <div class="ph-field-hint">Confirme a dose que você vai aplicar</div>
              <div class="ph-cta">Confirmar dose aplicada</div>
              <div class="ph-cta outline">Nova dose</div>
            </div>
          `,
            { title: 'Resultado da dose', hideNav: true, flat: true },
          ),
        ),
      }),
  },
  {
    id: 'feature-app-code',
    group: 'app',
    title: 'App — código médico',
    build: () =>
      wrapScene({
        title: 'feature-app-code',
        body: frame(
          copyBlock({
            eyebrow: 'Compartilhar com o médico',
            headline: 'Código de<br/><span>6 caracteres</span>',
            sub: 'O profissional digita no portal e vê glicemia, refeições e insulina — só leitura.',
            pills: ['Sem senha', 'Somente leitura'],
          }),
          phoneShell(
            `
            <div class="ph-card ph-code-card">
              <div class="title">Código para o médico</div>
              <div class="body">Compartilhe este código com seu médico para ele acompanhar seu histórico.</div>
              <div class="ph-code-row"><span class="code">A7K2M9</span><span class="copy">⎘</span></div>
            </div>
            <div class="ph-rx">
              <div class="t">Sua prescrição</div>
              <div class="s">Fatores editáveis — cada perfil é individual</div>
            </div>
          `,
            { title: 'Perfil', tab: 'Perfil', flat: true },
          ),
        ),
      }),
  },
  {
    id: 'feature-medicos-list',
    group: 'medicos',
    title: 'Médicos — pacientes',
    build: () =>
      wrapScene({
        title: 'feature-medicos-list',
        body: frame(
          copyBlock({
            eyebrow: 'Portal Médicos',
            headline: 'Pacientes<br/><span>vinculados</span>',
            sub: 'Busque por nome ou código e abra o histórico completo na consulta.',
            pills: ['Lista', 'Busca', 'Ordenar'],
          }),
          laptopShell(
            '',
            'Pacientes',
            `
            <div class="page-head">
              <div>
                <h2>Pacientes</h2>
                <p class="desc">Busque e acompanhe os pacientes vinculados à sua conta.</p>
              </div>
              <div class="btn">Vincular</div>
            </div>
            <div class="section-label">Pacientes vinculados (2)</div>
            <div class="toolbar">
              <div class="q">Buscar por nome ou código</div>
              <div class="sort">Ordenar · Nome (A–Z)</div>
            </div>
            <div class="pcard">
              <div><b>Maria Silva</b><div class="meta">Código <span class="code">A7K2M9</span> · vinculado em 12/03/2026</div></div>
              <div class="actions"><span class="btn-p">Ver histórico</span><span class="btn-d">Remover</span></div>
            </div>
            <div class="pcard">
              <div><b>João Santos</b><div class="meta">Código <span class="code">B3P8Q1</span> · vinculado em 08/03/2026</div></div>
              <div class="actions"><span class="btn-p">Ver histórico</span><span class="btn-d">Remover</span></div>
            </div>
            `,
          ),
        ),
      }),
  },
  {
    id: 'feature-medicos-link',
    group: 'medicos',
    title: 'Médicos — vínculo',
    build: () =>
      wrapScene({
        title: 'feature-medicos-link',
        body: frame(
          copyBlock({
            eyebrow: 'Vínculo seguro',
            headline: 'Seis caracteres.<br/><span>Sem senha.</span>',
            sub: 'O paciente gera o código no app. Você digita no portal. Histórico em modo leitura.',
            pills: ['A7K2M9', 'Mono'],
          }),
          laptopShell(
            'vincular',
            'Vincular',
            `
            <h2>Vincular paciente</h2>
            <p class="desc">Digite o código de 6 dígitos do perfil do paciente no app GlicoDose.</p>
            <div class="link-card">
              <label>Código do paciente</label>
              <div class="link-row">
                <div class="mono">A7K2M9</div>
                <div class="submit">Vincular</div>
              </div>
              <p class="link-hint">6 caracteres — letras e números, sem espaços.</p>
            </div>
            `,
            { flat: true },
          ),
        ),
      }),
  },
  {
    id: 'feature-medicos-charts',
    group: 'medicos',
    title: 'Médicos — gráficos',
    build: () =>
      wrapScene({
        title: 'feature-medicos-charts',
        body: frame(
          copyBlock({
            eyebrow: 'Na consulta',
            headline: 'Gráficos de<br/><span>glicose e insulina</span>',
            sub: 'Resumo do período, glicose, insulina recomendada vs aplicada e carbs estimados.',
            pills: ['7 dias', '30 dias', 'Resumo'],
          }),
          laptopShell(
            'pacientes/3f2a9c01',
            'Pacientes',
            `
            ${patientDetailHead()}
            ${patientTabs('Gráficos')}
            <div class="period-chips"><span>7 dias</span><span class="on">30 dias</span><span>Tudo</span></div>
            <div class="section-label">Resumo do período</div>
            <div class="stats">
              <div class="stat"><label>Glicose média</label><strong>148</strong></div>
              <div class="stat"><label>% na faixa</label><strong>72%</strong></div>
              <div class="stat"><label>Desvio vs rec.</label><strong>−0,4 U</strong></div>
            </div>
            <div class="charts">
              <div class="ch"><label>Glicose</label>${CHART_GLUCOSE}</div>
              <div class="ch">
                <label>Insulina</label>
                <div class="legend"><span><i style="background:#3078e4"></i>Recomendada</span><span><i style="background:#94b8f0"></i>Aplicada</span></div>
                ${CHART_INSULIN}
              </div>
            </div>
            `,
            { flat: true },
          ),
        ),
      }),
  },
  {
    id: 'feature-medicos-ai',
    group: 'medicos',
    title: 'Médicos — análise com IA',
    build: () =>
      wrapScene({
        title: 'feature-medicos-ai',
        body: frame(
          copyBlock({
            eyebrow: 'Portal Médicos',
            headline: 'Análise com<br/><span>IA</span> no histórico',
            sub: 'Revise o período, identifique discrepâncias e possíveis ajustes de FSI, I:C e metas — apoio à consulta.',
            pills: ['Discrepâncias', 'Ajustes', '30 dias'],
          }),
          laptopShell(
            'pacientes/3f2a9c01',
            'Pacientes',
            `
            ${patientDetailHead()}
            ${patientTabs('Histórico')}
            <div class="ai-panel">
              <div class="ai-panel-head">
                <div>
                  <h3>Análise com IA</h3>
                  <p>Identifica discrepâncias, irregularidades e possíveis ajustes no período selecionado.</p>
                </div>
                <div class="ai-actions">
                  <div class="ai-period">Período · 30 dias</div>
                  <div class="ai-btn">Analisar com IA</div>
                </div>
              </div>
              <div class="ai-resumo">Padrão de correções no café e desvio recorrente entre dose recomendada e aplicada.</div>
              <div class="ai-count">42 registros · 30 dias</div>
              <div class="ai-finding">
                <span class="badge alta">Alta</span>
                <div>
                  <div class="tipo">Discrepância</div>
                  <div class="titulo">Dose recomendada vs aplicada</div>
                </div>
                <div class="ev">Evidência: diverge em várias refeições do período.</div>
              </div>
              <div class="ai-finding">
                <span class="badge media">Média</span>
                <div>
                  <div class="tipo">Ajuste</div>
                  <div class="titulo">Possível revisão de I:C no café</div>
                </div>
                <div class="ev">Evidência: carbs estimados altos e correções frequentes.</div>
              </div>
            </div>
            <div class="htable">
              <div class="hr head"><span>Data / hora</span><span>Glicemia</span><span>Comida</span><span>Rec.</span><span>Apl.</span></div>
              <div class="hr"><span>19/03 08:12</span><span class="mono">142</span><span>2 pães + queijo</span><span class="mono">4,5</span><span class="mono">5,0</span></div>
              <div class="hr"><span>18/03 19:40</span><span class="mono">118</span><span>Arroz + feijão</span><span class="mono">3,0</span><span class="mono">3,0</span></div>
            </div>
            `,
            { flat: true },
          ),
        ),
      }),
  },
]
