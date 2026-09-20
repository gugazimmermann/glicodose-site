/** Public product URLs for CTAs (overridable via Vite env). */
export const SITE_URLS = {
  medicosPortal:
    (import.meta.env.VITE_MEDICOS_URL as string | undefined)?.trim() ||
    'https://medicos.glicodose.app',
  playStore:
    (import.meta.env.VITE_PLAY_STORE_URL as string | undefined)?.trim() ||
    'https://play.google.com/store/apps/details?id=app.glicodose.paciente',
  appStore:
    (import.meta.env.VITE_APP_STORE_URL as string | undefined)?.trim() ||
    'https://apps.apple.com/app/glicodose/id0000000000',
  siteOrigin:
    (import.meta.env.VITE_APP_URL as string | undefined)?.trim() ||
    (typeof window !== 'undefined' ? window.location.origin : 'https://glicodose.app'),
}
