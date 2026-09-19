export function SiteFooter() {
  return (
    <footer className="bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-5 py-10 sm:px-8">
        <p className="font-display text-lg font-bold text-brand-dark">GlicoDose</p>
        <p className="text-sm text-muted">
          App do paciente e portal para médicos.
        </p>
        <p className="mt-3 text-xs text-muted/70">
          © {new Date().getFullYear()} GlicoDose
        </p>
      </div>
    </footer>
  )
}
