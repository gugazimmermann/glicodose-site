# GlicoDose Site

Landing pages do produto GlicoDose — app do paciente, portal médico e apoio (Stripe).

## Stack

- Vite + React + TypeScript
- Tailwind CSS 4
- react-router-dom
- Supabase (checkout público de apoio)

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Landing do app do paciente — CTAs para Play Store / App Store |
| `/medicos` | Landing do portal — CTA para `medicos.glicodose.app` |
| `/como-usar` | Guia passo a passo (toggle Paciente / Médico; âncoras `#paciente` e `#medico`) |
| `/apoiar` | Assinatura mensal opcional (Stripe Checkout público) |
| `/contato` | Formulário de contato (Edge Function `send-contact` + Resend) |

Copy alinhada ao produto atual: o médico acompanha histórico **e** pode editar a prescrição usada no app.

## SEO

- `public/robots.txt`
- `public/sitemap.xml`
- Meta OG/Twitter + `canonical` absolutos via `usePageMeta` (use `VITE_APP_URL` em produção)

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

Variáveis (`.env.example`):

```env
VITE_SUPABASE_URL=…
VITE_SUPABASE_ANON_KEY=…
VITE_APP_URL=https://glicodose.app
VITE_MEDICOS_URL=https://medicos.glicodose.app
# Opcional — sobrescreve CTAs das lojas:
# VITE_PLAY_STORE_URL=…
# VITE_APP_STORE_URL=…
```

O checkout de `/apoiar` chama a Edge Function `create-public-support-checkout` (deploy no projeto `diabetes-medicos`).

O formulário de `/contato` chama `send-contact` (mesmo projeto). Secrets Resend e verificação de domínio: ver `diabetes-medicos/supabase/README.md` (seção Contato).

## Assets de marketing

```bash
npm run export-assets
# ou sem vídeo:
npm run export-assets -- --skip-video
```

Gera OG images, feature PNGs e promo MP4s. Requer Chrome; ffmpeg em `../divulgacao/video/bin/ffmpeg` ou `FFMPEG=…`.

## Projetos irmãos

| Repo | Papel |
| --- | --- |
| `diabetes` | App Flutter do paciente |
| `diabetes-medicos` | Portal + Stripe Edge Functions |
| `diabetes-admin` | Painel interno |
