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
      'Glicose manual, LibreLinkUp ou Health, alimentação por texto, foto ou voz, e estimativa de insulina com o perfil e o IOB. Histórico, exportação e código para o médico. Ferramenta de apoio — não substitui orientação médica.',
    ogImage: '/media/og-app.png',
  },
  '/medicos': {
    title: 'GlicoDose Médicos — Portal para profissionais',
    description:
      'Portal para médicos: vínculo por código de 6 caracteres, prescrição, histórico, gráficos e alertas clínicos. A Análise com IA acompanha a consulta para quem apoia.',
    ogImage: '/media/og-medicos.png',
  },
  '/apoiar': {
    title: 'Apoiar o GlicoDose',
    description:
      'Assinatura mensal opcional. No app, libera LibreLinkUp, Apple Health, Health Connect e o widget. No portal, libera a Análise com IA. Dose, histórico e o acompanhamento clínico continuam gratuitos.',
    ogImage: '/media/og-app.png',
  },
  '/como-usar': {
    title: 'Como usar o GlicoDose',
    description:
      'Guia do app (perfil, sensor, Health, dose, hipoglicemia, basal, exportação) e do portal médico (vínculo, prescrição, alertas clínicos e Análise com IA).',
    ogImage: '/media/og-app.png',
  },
  '/contato': {
    title: 'Contato — GlicoDose',
    description:
      'Fale com a equipe GlicoDose: dúvidas, sugestões ou suporte. Envie uma mensagem para contato@glicodose.app.',
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
