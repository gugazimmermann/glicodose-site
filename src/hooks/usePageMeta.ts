import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const META: Record<
  string,
  { title: string; description: string; ogImage: string }
> = {
  '/': {
    title: 'GlicoDose — App do paciente',
    description:
      'Registre glicose e alimentação (texto, foto ou voz), receba estimativa de insulina com IA e IOB. Ferramenta de apoio — não substitui orientação médica.',
    ogImage: '/media/og-app.png',
  },
  '/medicos': {
    title: 'GlicoDose Médicos — Portal para profissionais',
    description:
      'Vincule pacientes por código e acompanhe glicemia, alimentação e insulina com gráficos em modo leitura.',
    ogImage: '/media/og-medicos.png',
  },
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

export function usePageMeta() {
  const { pathname } = useLocation()
  const page = META[pathname] ?? META['/']

  useEffect(() => {
    document.title = page.title
    setMeta('description', page.description, 'name')
    setMeta('og:title', page.title)
    setMeta('og:description', page.description)
    setMeta('og:image', page.ogImage)
    setMeta('twitter:card', 'summary_large_image', 'name')
    setMeta('twitter:title', page.title, 'name')
    setMeta('twitter:description', page.description, 'name')
    setMeta('twitter:image', page.ogImage, 'name')
  }, [page])
}
