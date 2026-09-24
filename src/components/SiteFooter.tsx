import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-5 py-10 sm:px-8">
        <p className="font-display text-lg font-bold text-brand-dark">GlicoDose</p>
        <p className="text-sm text-muted">
          App do paciente e portal para médicos.
        </p>
        <nav
          className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"
          aria-label="Rodapé"
        >
          <Link to="/" className="text-brand-dark hover:text-brand">
            App
          </Link>
          <Link to="/medicos" className="text-brand-dark hover:text-brand">
            Médicos
          </Link>
          <Link to="/como-usar" className="text-brand-dark hover:text-brand">
            Como usar
          </Link>
          <Link to="/apoiar" className="text-brand-dark hover:text-brand">
            Apoiar
          </Link>
          <Link to="/contato" className="text-brand-dark hover:text-brand">
            Contato
          </Link>
        </nav>
        <p className="mt-3 text-xs text-muted/70">
          © {new Date().getFullYear()} GlicoDose
        </p>
      </div>
    </footer>
  )
}
