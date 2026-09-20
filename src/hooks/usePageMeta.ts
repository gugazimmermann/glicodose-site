import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URLS } from '../lib/siteUrls'

const META: Record<
  string,
  { title: string; description: string; ogImage: string }
> = {
  '/': {
    title: 'GlicoDose — App do paciente',
    description:
      'Glicose, alimentação por texto/foto/voz e estimativa de insulina com IA e IOB. Histórico compartilhado com o médico por código. Ferramenta de apoio — não substitui orientação médica.',
    ogImage: '/media/og-app.png',
  },
  '/medicos': {
    title: 'GlicoDose Médicos — Portal para profissionais',
    description:
      'Portal para médicos: vincule pacientes por código, edite a prescrição, acompanhe histórico e gráficos, e use a Análise com IA — em apoio à consulta.',
    ogImage: '/media/og-medicos.png',
  },
  '/apoiar': {
    title: 'Apoiar o GlicoDose',
    description:
      'O app e o portal são gratuitos. Assinatura mensal opcional ajuda a manter infraestrutura e IA do GlicoDose.',
    ogImage: '/media/og-app.png',
  },
}

function absoluteUrl(path: string): string {
  const origin = SITE_URLS.siteOrigin.replace(/\/$/, '')
  if (path.startsWith('http')) return path
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

function setMeta(property: string, content: string, attr: 'property' | 'name' = 'property') {
  let el = document.head.querySelector(`meta[${attr}="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export function usePageMeta() {
  const { pathname } = useLocation()
  const page = META[pathname] ?? META['/']

  useEffect(() => {
    const canonical = absoluteUrl(pathname === '/' ? '/' : pathname)
    const ogImage = absoluteUrl(page.ogImage)

    document.title = page.title
    setMeta('description', page.description, 'name')
    setMeta('og:title', page.title)
    setMeta('og:description', page.description)
    setMeta('og:image', ogImage)
    setMeta('og:url', canonical)
    setMeta('twitter:card', 'summary_large_image', 'name')
    setMeta('twitter:title', page.title, 'name')
    setMeta('twitter:description', page.description, 'name')
    setMeta('twitter:image', ogImage, 'name')
    setCanonical(canonical)
  }, [page, pathname])
}
