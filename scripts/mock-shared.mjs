/**
 * Shared CSS + device mock fragments for marketing HTML scenes.
 * Used by export-assets.mjs (Chrome headless → PNG).
 */

export const FONT_LINKS = `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500;9..40,600;9..40,700;9..40,800&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet" />
`

export const BASE_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body {
  width: 1200px; height: 900px; overflow: hidden;
  font-family: "DM Sans", system-ui, sans-serif; color: #121212;
}
.frame {
  width: 1200px; height: 900px; position: relative;
  background:
    radial-gradient(ellipse 55% 70% at 5% 20%, #9ec4ef 0%, transparent 55%),
    radial-gradient(ellipse 40% 55% at 100% 0%, #c5d8f0 0%, transparent 50%),
    linear-gradient(160deg, #e8f1f9 0%, #f3f6fa 45%, #fff 100%);
}
.frame::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(circle at 1px 1px, rgba(47,124,196,.07) 1px, transparent 0);
  background-size: 22px 22px;
}
.copy {
  position: absolute; left: 56px; top: 72px; width: 420px; z-index: 3;
}
.eyebrow {
  font-size: 13px; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; color: #2f7cc4; margin-bottom: 14px;
}
.headline {
  font-family: "Fraunces", Georgia, serif;
  font-size: 42px; font-weight: 700; line-height: 1.12; letter-spacing: -0.02em;
}
.headline span { color: #2f7cc4; }
.sub {
  margin-top: 16px; font-size: 18px; line-height: 1.45; color: #5a6570; font-weight: 500;
}
.pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
.pill {
  background: #fff; border: 1.5px solid #c5d0db; border-radius: 999px;
  padding: 8px 14px; font-size: 13px; font-weight: 700; color: #1e5a94;
  box-shadow: 0 2px 8px rgba(30,90,148,.06);
}

/* Phone — chrome fiel ao Flutter /diabetes (AppBar + NavigationBar) */
.phone {
  position: absolute; right: 120px; top: 80px; width: 280px; height: 580px;
  background: #0f1720; border-radius: 36px; padding: 10px;
  box-shadow: 0 28px 50px rgba(18,40,70,.32), 0 0 0 2px #1a2430;
  transform: rotate(-3deg); z-index: 2;
}
.phone.flat { transform: none; right: 140px; top: 100px; }
.phone-notch {
  position: absolute; top: 16px; left: 50%; transform: translateX(-50%);
  width: 78px; height: 18px; background: #0f1720; border-radius: 12px; z-index: 2;
}
.phone-screen {
  width: 100%; height: 100%; border-radius: 28px; overflow: hidden;
  background: #f3f6fa;
  display: flex; flex-direction: column;
}
.ph-status {
  display: flex; justify-content: space-between; padding: 12px 16px 4px;
  font-size: 10px; font-weight: 700; color: #fff; background: #2f7cc4;
}
.ph-appbar {
  display: flex; align-items: center; gap: 8px;
  background: #2f7cc4; padding: 6px 14px 12px; color: #fff;
}
.ph-appbar img { width: 22px; height: 22px; border-radius: 6px; background: #111; }
.ph-appbar strong { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
.ph-body { padding: 10px 12px 8px; flex: 1; overflow: hidden; background: #f3f6fa; }
.ph-disclaimer {
  background: #e8f1f9; border: 1px solid rgba(47,124,196,.2); border-radius: 8px;
  padding: 7px 8px; font-size: 9px; color: #1e5a94; font-weight: 600;
  line-height: 1.3; margin-bottom: 8px;
}
.ph-warn {
  background: #fff4e5; border: 1px solid #ffcc80; border-radius: 8px;
  padding: 8px; font-size: 10px; color: #e65100; font-weight: 600;
  line-height: 1.3; margin-bottom: 8px;
}
.ph-card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;
  padding: 10px 12px; margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(18,40,70,.04);
}
.ph-label {
  display: flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 700; margin-bottom: 8px; color: #121212;
}
.dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }
.dot.r { background: #e31c23; }
.dot.b { background: #2f7cc4; }
.ph-glucose {
  background: #e8f1f9; border: 1px solid rgba(47,124,196,.25); border-radius: 10px;
  padding: 10px; text-align: center; font-size: 32px; font-weight: 800; line-height: 1; color: #121212;
}
.ph-glucose span { display: block; margin-top: 4px; font-size: 10px; font-weight: 600; color: #5a6570; }
.ph-seg {
  display: flex; background: #f3f6fa; border-radius: 8px; padding: 3px; gap: 3px; margin-bottom: 8px;
}
.ph-seg span {
  flex: 1; text-align: center; font-size: 9px; font-weight: 700;
  padding: 6px 2px; color: #5a6570; border-radius: 6px;
}
.ph-seg .on { background: #fff; color: #1e5a94; box-shadow: 0 1px 3px rgba(0,0,0,.08); }
.ph-food-row {
  display: flex; align-items: center; gap: 6px;
  background: #f8fafc; border: 1px solid #c5d0db; border-radius: 8px;
  padding: 6px 8px; margin-bottom: 6px;
}
.ph-food-row .text { flex: 1; font-size: 11px; color: #5a6570; line-height: 1.3; }
.ph-food-row .mic {
  width: 26px; height: 26px; border-radius: 50%; background: #2f7cc4; color: #fff;
  display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0;
}
.ph-food-row .mic.listen { background: #e31c23; }
.ph-listen {
  font-size: 9px; color: #e65100; font-weight: 600; margin-bottom: 8px; line-height: 1.3;
}
.ph-photos { display: flex; gap: 6px; margin-bottom: 8px; }
.ph-photos span {
  flex: 1; text-align: center; border: 1.5px solid #c5d0db; border-radius: 8px;
  padding: 8px 4px; font-size: 10px; font-weight: 700; color: #1e5a94; background: #fff;
}
.ph-photo-preview {
  height: 72px; border-radius: 10px; margin-bottom: 8px;
  background: linear-gradient(135deg, #f5e6d3 0%, #e8c9a0 40%, #d4a574 100%);
  border: 1px solid #c5d0db;
}
.ph-cta {
  background: #2f7cc4; color: #fff; border-radius: 10px; padding: 11px 8px;
  text-align: center; font-size: 12px; font-weight: 700; line-height: 1.2;
}
.ph-cta.outline {
  background: #fff; color: #2f7cc4; border: 1.5px solid #2f7cc4; margin-top: 8px;
}
.ph-result-title { font-size: 12px; font-weight: 700; color: #121212; margin-bottom: 4px; }
.ph-result-sub { font-size: 10px; color: #5a6570; font-weight: 500; margin-bottom: 10px; line-height: 1.3; }
.ph-result-dose {
  text-align: center; font-size: 44px; font-weight: 800; color: #1e5a94; line-height: 1; margin: 8px 0;
}
.ph-result-dose small { font-size: 16px; font-weight: 700; color: #5a6570; }
.ph-chips { display: flex; flex-wrap: wrap; gap: 6px; margin: 10px 0; }
.ph-chips span {
  background: #e8f1f9; color: #1e5a94; border-radius: 999px;
  padding: 4px 9px; font-size: 9px; font-weight: 700;
}
.ph-field-label { font-size: 11px; font-weight: 700; margin-bottom: 6px; color: #121212; }
.ph-field {
  background: #f8fafc; border: 1px solid #c5d0db; border-radius: 8px;
  padding: 10px; text-align: center; font-size: 20px; font-weight: 800; color: #121212; margin-bottom: 6px;
}
.ph-field-hint { font-size: 9px; color: #5a6570; font-weight: 500; margin-bottom: 10px; }
.ph-code-card .title { font-size: 13px; font-weight: 700; color: #121212; margin-bottom: 6px; }
.ph-code-card .body { font-size: 10px; color: #5a6570; font-weight: 500; line-height: 1.35; margin-bottom: 10px; }
.ph-code-row {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  background: #c5d8f0; border-radius: 10px; padding: 14px 12px;
}
.ph-code-row .code {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 22px; font-weight: 700; letter-spacing: 0.2em; color: #1e5a94;
}
.ph-code-row .copy {
  width: 28px; height: 28px; border-radius: 8px; background: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: #2f7cc4; border: 1px solid #c5d0db;
}
.ph-rx {
  margin-top: 8px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 12px;
}
.ph-rx .t { font-size: 13px; font-weight: 700; margin-bottom: 2px; }
.ph-rx .s { font-size: 9px; color: #5a6570; font-weight: 500; }
.ph-tabs {
  display: flex; gap: 0; border-top: 1px solid #e2e8f0; background: #fff;
  padding: 8px 4px 12px; font-size: 9px; font-weight: 700; color: #90a4ae;
}
.ph-tabs span {
  flex: 1; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 2px;
}
.ph-tabs .ico { font-size: 14px; line-height: 1; }
.ph-tabs .on { color: #2f7cc4; }

/* Laptop — chrome fiel ao diabetes-medicos (header superior, sem sidebar) */
.laptop {
  position: absolute; right: 36px; top: 120px; width: 700px;
  transform: rotate(1.2deg); z-index: 2;
}
.laptop.flat { transform: none; top: 110px; }
.lb {
  background: #1a2430; border-radius: 12px 12px 0 0; padding: 8px 8px 0;
  box-shadow: 0 28px 50px rgba(18,40,70,.26);
}
.urlbar {
  display: flex; align-items: center; gap: 8px;
  background: #eef2f7; border-radius: 6px 6px 0 0; padding: 8px 12px;
}
.traffic { display: flex; gap: 5px; }
.traffic i { width: 8px; height: 8px; border-radius: 50%; display: block; }
.t-r { background: #ff5f57; } .t-y { background: #febc2e; } .t-g { background: #28c840; }
.urltext {
  flex: 1; background: #fff; border: 1px solid #c5d0db; border-radius: 4px;
  padding: 4px 10px; font-size: 11px; font-weight: 600; color: #5a6478;
}
.portal {
  display: flex; flex-direction: column; background: #e8eef8;
  min-height: 440px; border-radius: 0 0 6px 6px; overflow: hidden;
}
.app-header {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: rgba(255,255,255,.92); border-bottom: 1px solid rgba(192,204,228,.8);
  padding: 10px 14px;
}
.app-brand { display: flex; align-items: center; gap: 8px; min-width: 0; }
.app-brand img { width: 28px; height: 28px; border-radius: 7px; background: #111; }
.app-brand .name { font-size: 13px; font-weight: 700; color: #181818; line-height: 1.15; }
.app-brand .doc { font-size: 10px; color: #5a6478; font-weight: 500; margin-top: 1px; }
.app-nav { display: flex; gap: 4px; flex-wrap: wrap; }
.app-nav span {
  padding: 5px 10px; border-radius: 7px; font-size: 11px; font-weight: 600; color: #5a6478;
}
.app-nav .on { background: #ccd8f0; color: #2460c4; }
.app-nav .cta { background: #3078e4; color: #fff; font-weight: 700; }
.app-sair {
  border: 1px solid #c0cce4; background: #fff; border-radius: 7px;
  padding: 5px 10px; font-size: 11px; font-weight: 600; color: #5a6478;
}
.portal-main {
  padding: 14px 16px 16px; flex: 1; overflow: hidden;
  background:
    radial-gradient(ellipse 80% 50% at 10% -10%, #a8c4f8 0%, transparent 55%),
    #e8eef8;
}
.portal-main h2 { font-size: 20px; font-weight: 800; color: #181818; margin-bottom: 2px; }
.portal-main > .desc { font-size: 11px; color: #5a6478; margin-bottom: 12px; font-weight: 500; }
.page-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 12px; }
.page-head .btn {
  background: #3078e4; color: #fff; border-radius: 7px; padding: 7px 12px;
  font-size: 11px; font-weight: 700; white-space: nowrap;
}
.section-label {
  font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em;
  color: #5a6478; margin-bottom: 8px;
}
.toolbar { display: flex; gap: 8px; margin-bottom: 10px; align-items: center; }
.toolbar .q {
  flex: 1; background: #fff; border: 1px solid #c0cce4; border-radius: 8px;
  padding: 8px 12px; font-size: 11px; font-weight: 600; color: #5a6478;
}
.toolbar .sort {
  background: #fff; border: 1px solid #c0cce4; border-radius: 8px;
  padding: 8px 10px; font-size: 11px; font-weight: 600; color: #5a6478; white-space: nowrap;
}
.pcard {
  background: #fff; border: 1px solid #c0cce4; border-radius: 10px;
  padding: 11px 12px; display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 8px; gap: 8px;
}
.pcard b { display: block; font-size: 13px; color: #181818; }
.pcard .meta { font-size: 10px; color: #5a6478; font-weight: 600; margin-top: 2px; }
.pcard .meta .code { font-family: "JetBrains Mono", ui-monospace, monospace; font-weight: 700; }
.pcard .actions { display: flex; gap: 6px; flex-shrink: 0; }
.pcard .btn-p {
  background: #3078e4; color: #fff; border-radius: 6px; padding: 6px 10px;
  font-size: 10px; font-weight: 700;
}
.pcard .btn-d {
  background: #fff; border: 1px solid #fde8e8; color: #d80000; border-radius: 6px;
  padding: 6px 10px; font-size: 10px; font-weight: 700;
}
.back { font-size: 11px; font-weight: 600; color: #3078e4; margin-bottom: 6px; }
.patient-sub { font-size: 11px; color: #5a6478; font-weight: 500; margin-bottom: 10px; }
.patient-sub .code { font-family: "JetBrains Mono", ui-monospace, monospace; font-weight: 700; }
.tabs {
  display: flex; gap: 2px; border-bottom: 1px solid #c0cce4; margin-bottom: 12px;
}
.tabs span {
  padding: 8px 12px; font-size: 11px; font-weight: 600; color: #5a6478;
  border-bottom: 2px solid transparent; margin-bottom: -1px;
}
.tabs .on { color: #2460c4; border-bottom-color: #3078e4; font-weight: 700; }
.period-chips { display: flex; gap: 6px; margin-bottom: 10px; }
.period-chips span {
  background: #fff; border: 1px solid #c0cce4; border-radius: 999px;
  padding: 5px 11px; font-size: 10px; font-weight: 700; color: #5a6478;
}
.period-chips .on { background: #ccd8f0; border-color: #ccd8f0; color: #2460c4; }
.stats {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 10px;
}
.stat {
  background: #fff; border: 1px solid #c0cce4; border-radius: 8px; padding: 8px 10px;
}
.stat label { display: block; font-size: 9px; font-weight: 700; color: #5a6478; text-transform: uppercase; letter-spacing: .04em; }
.stat strong { display: block; margin-top: 2px; font-size: 14px; font-weight: 800; color: #181818; }
.charts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.ch { background: #fff; border: 1px solid #c0cce4; border-radius: 10px; padding: 10px; }
.ch label {
  font-size: 10px; font-weight: 700; color: #5a6478;
  text-transform: uppercase; letter-spacing: .04em;
}
.ch .legend { display: flex; gap: 10px; margin-top: 4px; font-size: 9px; font-weight: 600; color: #5a6478; }
.ch .legend i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 3px; vertical-align: middle; }
.ch svg { width: 100%; height: 52px; margin-top: 6px; display: block; }
.link-card {
  background: #fff; border: 1px solid #c0cce4; border-radius: 12px; padding: 16px;
  max-width: 340px; margin-top: 4px;
}
.link-card label { display: block; font-size: 12px; font-weight: 700; margin-bottom: 8px; color: #181818; }
.link-row { display: flex; gap: 8px; align-items: stretch; }
.link-row .mono {
  flex: 1; background: #f8fafc; border: 1.5px solid #c0cce4; border-radius: 8px;
  padding: 10px; text-align: center; font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 18px; font-weight: 700; letter-spacing: 0.12em; color: #2460c4;
}
.link-row .submit {
  background: #3078e4; color: #fff; border-radius: 8px; padding: 10px 14px;
  font-size: 12px; font-weight: 700; display: flex; align-items: center;
}
.link-hint { margin-top: 8px; font-size: 10px; color: #5a6478; font-weight: 500; }
.ai-panel {
  background: #fff; border: 1px solid #c0cce4; border-radius: 12px; padding: 12px;
  margin-bottom: 10px;
}
.ai-panel-head {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 10px; margin-bottom: 10px;
}
.ai-panel-head h3 { font-size: 14px; font-weight: 800; color: #181818; }
.ai-panel-head p { font-size: 10px; color: #5a6478; font-weight: 500; margin-top: 2px; max-width: 260px; line-height: 1.35; }
.ai-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
.ai-period {
  background: #f8fafc; border: 1px solid #c0cce4; border-radius: 7px;
  padding: 6px 9px; font-size: 10px; font-weight: 700; color: #5a6478;
}
.ai-btn {
  background: #3078e4; color: #fff; border-radius: 7px; padding: 7px 11px;
  font-size: 10px; font-weight: 700; white-space: nowrap;
}
.ai-resumo { font-size: 11px; font-weight: 600; color: #181818; margin-bottom: 4px; line-height: 1.35; }
.ai-count { font-size: 10px; color: #5a6478; font-weight: 600; margin-bottom: 8px; }
.ai-finding {
  display: grid; grid-template-columns: auto 1fr; gap: 4px 8px;
  background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;
  padding: 8px 10px; margin-bottom: 6px;
}
.ai-finding .badge {
  font-size: 8px; font-weight: 800; padding: 2px 7px; border-radius: 999px;
  text-transform: uppercase; letter-spacing: .03em; align-self: start;
}
.ai-finding .badge.alta { background: #fde8e8; color: #d80000; }
.ai-finding .badge.media { background: #fff4e5; color: #bf360c; }
.ai-finding .badge.baixa { background: #e8f1f9; color: #2460c4; }
.ai-finding .tipo { font-size: 9px; font-weight: 700; color: #5a6478; text-transform: uppercase; letter-spacing: .03em; }
.ai-finding .titulo { font-size: 11px; font-weight: 800; color: #181818; }
.ai-finding .ev { font-size: 10px; color: #5a6478; font-weight: 500; line-height: 1.3; grid-column: 2; }
.htable {
  background: #fff; border: 1px solid #c0cce4; border-radius: 8px; overflow: hidden;
  font-size: 10px;
}
.htable .hr {
  display: grid; grid-template-columns: 72px 56px 1fr 52px 52px; gap: 4px;
  padding: 7px 10px; border-bottom: 1px solid #e8eef8; align-items: center;
}
.htable .hr.head { background: #f8fafc; font-weight: 700; color: #5a6478; text-transform: uppercase; letter-spacing: .03em; font-size: 9px; }
.htable .hr:last-child { border-bottom: none; }
.htable .mono { font-family: "JetBrains Mono", ui-monospace, monospace; font-weight: 700; }
.base { height: 10px; background: linear-gradient(#a8b4c4, #8a96a6); border-radius: 0 0 14px 14px; margin: 0 8px; }
.hinge { height: 8px; background: linear-gradient(#c5d0db, #9aa8b8); border-radius: 0 0 6px 6px; position: relative; }
.hinge::after {
  content: ""; position: absolute; top: 2px; left: 50%; transform: translateX(-50%);
  width: 56px; height: 3px; background: #7a8796; border-radius: 2px;
}
`

export function wrapScene({ title, body, logoUri }) {
  const html = body.includes('__LOGO__') && logoUri
    ? body.replaceAll('__LOGO__', logoUri)
    : body
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<title>${title}</title>
${FONT_LINKS}
<style>${BASE_CSS}</style>
</head>
<body>
${html}
</body>
</html>`
}

/**
 * @param {string} inner
 * @param {{ flat?: boolean, title?: string, tab?: 'Dose'|'Histórico'|'Perfil'|null, hideNav?: boolean }} [opts]
 */
export function phoneShell(inner, { flat = false, title = 'Dose', tab = 'Dose', hideNav = false } = {}) {
  const tabs = [
    ['Dose', '💧'],
    ['Histórico', '⏱'],
    ['Perfil', '👤'],
  ]
    .map(
      ([label, ico]) =>
        `<span class="${label === tab ? 'on' : ''}"><span class="ico">${ico}</span>${label}</span>`,
    )
    .join('')
  return `
<div class="phone${flat ? ' flat' : ''}">
  <div class="phone-notch"></div>
  <div class="phone-screen">
    <div class="ph-status"><span>9:41</span><span>●●● 100%</span></div>
    <div class="ph-appbar"><img src="__LOGO__" alt="" /><strong>${title}</strong></div>
    <div class="ph-body">${inner}</div>
    ${hideNav ? '' : `<div class="ph-tabs">${tabs}</div>`}
  </div>
</div>`
}

/**
 * @param {string} urlPath - path after host, e.g. "" | "vincular" | "pacientes/3f2a9c01"
 * @param {string} navActive - Pacientes | Vincular | Perfil | Apoiar
 * @param {string} mainHtml
 * @param {{ flat?: boolean }} [opts]
 */
export function laptopShell(urlPath, navActive, mainHtml, { flat = false } = {}) {
  const nav = ['Pacientes', 'Vincular', 'Perfil', 'Apoiar']
    .map((n) => {
      if (n === 'Apoiar' && navActive !== 'Apoiar') {
        return `<span class="cta">Apoiar</span>`
      }
      return `<span class="${n === navActive ? 'on' : ''}">${n}</span>`
    })
    .join('')
  const path = urlPath ? `/${urlPath}` : '/'
  return `
<div class="laptop${flat ? ' flat' : ''}">
  <div class="lb">
    <div class="urlbar">
      <div class="traffic"><i class="t-r"></i><i class="t-y"></i><i class="t-g"></i></div>
      <div class="urltext">medicos.glicodose.app${path}</div>
    </div>
    <div class="portal">
      <header class="app-header">
        <div class="app-brand">
          <img src="__LOGO__" alt="" />
          <div>
            <div class="name">GlicoDose Médicos</div>
            <div class="doc">Dra. Ana Costa</div>
          </div>
        </div>
        <nav class="app-nav">${nav}</nav>
        <div class="app-sair">Sair</div>
      </header>
      <div class="portal-main">${mainHtml}</div>
    </div>
  </div>
  <div class="hinge"></div>
  <div class="base"></div>
</div>`
}

export function patientTabs(active) {
  const tabs = [
    ['Prescrição', 'Prescrição'],
    ['Histórico', 'Histórico (128)'],
    ['Gráficos', 'Gráficos'],
  ]
  return `<div class="tabs">${tabs
    .map(
      ([key, label]) =>
        `<span class="${key === active ? 'on' : ''}">${label}</span>`,
    )
    .join('')}</div>`
}

export function patientDetailHead() {
  return `
<div class="back">← Pacientes</div>
<h2>Maria Silva</h2>
<div class="patient-sub">Tipo 1 · código <span class="code">A7K2M9</span></div>`
}

export function copyBlock({ eyebrow, headline, sub, pills = [] }) {
  const pillHtml = pills.length
    ? `<div class="pill-row">${pills.map((p) => `<div class="pill">${p}</div>`).join('')}</div>`
    : ''
  return `
<div class="copy">
  <div class="eyebrow">${eyebrow}</div>
  <h1 class="headline">${headline}</h1>
  <p class="sub">${sub}</p>
  ${pillHtml}
</div>`
}
