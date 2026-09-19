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

## Assets Open Graph

```bash
npm run export-assets
```

Gera `public/media/og-app.png` e `public/media/og-medicos.png` via Chrome headless (mesmo padrão de `/divulgacao`).
