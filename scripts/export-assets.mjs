#!/usr/bin/env node
/**
 * Exporta assets de marketing via headless Chrome (+ ffmpeg para vídeos).
 *
 * - OG 1200×630 (og-app / og-medicos)
 * - Feature stills 1200×900 (feature-*.png)
 * - Promo silenciosos com Ken Burns (promo-app.mp4 / promo-medicos.mp4)
 *
 * Uso: node scripts/export-assets.mjs
 *      node scripts/export-assets.mjs --skip-video
 */
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { SCENES } from './scenes.mjs'

const ROOT = path.dirname(fileURLToPath(import.meta.url))
const SITE = path.join(ROOT, '..')
const OUT = path.join(SITE, 'public', 'media')
const SCENES_DIR = path.join(ROOT, 'generated')
const LOGO = path.join(SITE, 'public', 'glucosemeter.png')
const CHROME = process.env.CHROME || 'google-chrome'
const SKIP_VIDEO = process.argv.includes('--skip-video')

const FFMPEG_CANDIDATES = [
  process.env.FFMPEG,
  path.join(SITE, '..', 'divulgacao', 'video', 'bin', 'ffmpeg'),
  'ffmpeg',
].filter(Boolean)

function resolveFfmpeg() {
  for (const c of FFMPEG_CANDIDATES) {
    if (c === 'ffmpeg') {
      const r = spawnSync('ffmpeg', ['-version'], { encoding: 'utf8' })
      if (r.status === 0) return 'ffmpeg'
      continue
    }
    if (fs.existsSync(c)) return c
  }
  return null
}

function shell(cmd, args) {
  const r = spawnSync(cmd, args, { encoding: 'utf8' })
  if (r.status !== 0) {
    throw new Error(`${cmd} failed:\n${r.stderr || r.stdout}`)
  }
  return r
}

function screenshot(htmlPath, outPath, w, h) {
  const fileUrl = pathToFileURL(htmlPath).href
  shell(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--window-size=${w},${h}`,
    `--screenshot=${outPath}`,
    fileUrl,
  ])
  if (!fs.existsSync(outPath) || fs.statSync(outPath).size < 1000) {
    throw new Error(`Screenshot failed or too small: ${outPath}`)
  }
}

function exportOg() {
  const jobs = [
    { html: 'og-app.html', out: 'og-app.png' },
    { html: 'og-medicos.html', out: 'og-medicos.png' },
  ]
  for (const job of jobs) {
    const htmlPath = path.join(ROOT, job.html)
    const outPath = path.join(OUT, job.out)
    console.log(`OG ${job.html} → ${job.out}`)
    screenshot(htmlPath, outPath, 1200, 630)
    console.log(`  ok (${fs.statSync(outPath).size} bytes)`)
  }
}

function exportFeatures() {
  fs.mkdirSync(SCENES_DIR, { recursive: true })
  const logoUri = pathToFileURL(LOGO).href

  for (const scene of SCENES) {
    const html = scene.build().replaceAll('__LOGO__', logoUri)
    // wrapScene already replaces __LOGO__ if passed; scenes use __LOGO__ placeholder
    const htmlFixed = html.includes('__LOGO__')
      ? html.replaceAll('__LOGO__', logoUri)
      : html
    const htmlPath = path.join(SCENES_DIR, `${scene.id}.html`)
    const outPath = path.join(OUT, `${scene.id}.png`)
    fs.writeFileSync(htmlPath, htmlFixed)
    console.log(`Feature ${scene.id}.png`)
    screenshot(htmlPath, outPath, 1200, 900)
    console.log(`  ok (${fs.statSync(outPath).size} bytes)`)
  }
}

/**
 * Silent Ken Burns promo: full 4:3 frame first, then gentle zoom.
 * Stills are 1200×900 — keep that aspect so the first frame is not cropped.
 */
function buildPromo(group, outName) {
  const ffmpeg = resolveFfmpeg()
  if (!ffmpeg) {
    console.warn('ffmpeg não encontrado — pulando vídeos. Defina FFMPEG=…')
    return
  }

  const stills = SCENES.filter((s) => s.group === group).map((s) =>
    path.join(OUT, `${s.id}.png`),
  )
  if (stills.length === 0) return

  const tmpDir = path.join(SCENES_DIR, `clips-${group}`)
  fs.mkdirSync(tmpDir, { recursive: true })
  const clips = []
  const dur = 3.2
  const fps = 30
  const frames = Math.round(dur * fps)
  const W = 1200
  const H = 900

  stills.forEach((img, i) => {
    const clip = path.join(tmpDir, `${String(i + 1).padStart(2, '0')}.mp4`)
    // Fit entire still (no crop), then zoom 1.0 → 1.06 from center
    const vf = [
      `scale=${W}:${H}:force_original_aspect_ratio=decrease`,
      `pad=${W}:${H}:(ow-iw)/2:(oh-ih)/2:color=white`,
      `zoompan=z='min(1+0.0004*on,1.06)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${W}x${H}:fps=${fps}`,
    ].join(',')

    console.log(`  clip ${path.basename(clip)}`)
    shell(ffmpeg, [
      '-y',
      '-loop',
      '1',
      '-i',
      img,
      '-vf',
      vf,
      '-t',
      String(dur),
      '-c:v',
      'libx264',
      '-pix_fmt',
      'yuv420p',
      '-movflags',
      '+faststart',
      clip,
    ])
    clips.push(clip)
  })

  const list = path.join(tmpDir, 'concat.txt')
  fs.writeFileSync(
    list,
    clips.map((c) => `file '${c.replace(/'/g, "'\\''")}'`).join('\n'),
  )
  const outPath = path.join(OUT, outName)
  shell(ffmpeg, [
    '-y',
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    list,
    '-c',
    'copy',
    outPath,
  ])
  console.log(
    `Promo ${outName} (${(fs.statSync(outPath).size / 1024 / 1024).toFixed(1)} MB)`,
  )
}

fs.mkdirSync(OUT, { recursive: true })

console.log('=== Open Graph ===')
exportOg()

console.log('=== Feature stills ===')
exportFeatures()

if (!SKIP_VIDEO) {
  console.log('=== Promo videos ===')
  buildPromo('app', 'promo-app.mp4')
  buildPromo('medicos', 'promo-medicos.mp4')
} else {
  console.log('Pulando vídeos (--skip-video)')
}

console.log('Done.')
