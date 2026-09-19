#!/usr/bin/env node
/**
 * Exporta Open Graph images (1200×630) via headless Chrome.
 * Uso: node scripts/export-assets.mjs
 */
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.dirname(fileURLToPath(import.meta.url))
const SITE = path.join(ROOT, '..')
const OUT = path.join(SITE, 'public', 'media')
const CHROME = process.env.CHROME || 'google-chrome'
const W = 1200
const H = 630

const JOBS = [
  { html: 'og-app.html', out: 'og-app.png' },
  { html: 'og-medicos.html', out: 'og-medicos.png' },
]

function shell(cmd, args) {
  const r = spawnSync(cmd, args, { encoding: 'utf8' })
  if (r.status !== 0) {
    throw new Error(`${cmd} failed:\n${r.stderr || r.stdout}`)
  }
  return r
}

fs.mkdirSync(OUT, { recursive: true })

for (const job of JOBS) {
  const htmlPath = path.join(ROOT, job.html)
  const outPath = path.join(OUT, job.out)
  const fileUrl = pathToFileURL(htmlPath).href

  console.log(`Rendering ${job.html} → ${job.out}`)
  shell(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--window-size=${W},${H}`,
    `--screenshot=${outPath}`,
    fileUrl,
  ])

  if (!fs.existsSync(outPath) || fs.statSync(outPath).size < 1000) {
    throw new Error(`Screenshot failed or too small: ${outPath}`)
  }
  console.log(`  ok (${fs.statSync(outPath).size} bytes)`)
}

console.log('Done.')
