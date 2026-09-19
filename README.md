# GlicoDose Site

Landing pages do produto GlicoDose — app do paciente e portal médico.

## Stack

- Vite + React + TypeScript
- Tailwind CSS 4
- react-router-dom

## Setup

```bash
npm install
npm run dev
```

## Rotas

- `/` — landing do app do paciente
- `/medicos` — landing do portal médico

## Assets de marketing

```bash
npm run export-assets
```

Gera via Chrome headless (+ ffmpeg):

- `public/media/og-app.png` e `og-medicos.png` (Open Graph)
- `public/media/feature-*.png` (cenas do app e do portal)
- `public/media/promo-app.mp4` e `promo-medicos.mp4` (vídeos silenciosos com Ken Burns)

Requer `google-chrome` no PATH. Para vídeos, usa `../divulgacao/video/bin/ffmpeg` ou `FFMPEG=…`.

```bash
npm run export-assets -- --skip-video
```

Pula a geração dos MP4.
