import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative px-1 py-2 text-sm font-semibold transition-colors',
    isActive
      ? 'text-brand-dark after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-brand'
      : 'text-muted hover:text-brand-dark',
  ].join(' ')

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/50 bg-surface-mid/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src="/glucosemeter.png"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-xl bg-ink shadow-md shadow-brand-dark/20"
          />
          <span className="font-display text-xl font-bold tracking-tight text-brand-dark">
            GlicoDose
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Principal">
          <NavLink to="/" end className={linkClass}>
            App
          </NavLink>
          <NavLink to="/medicos" className={linkClass}>
            Médicos
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-line/80 bg-white/80 px-3 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-white sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-line/50 px-5 py-3 sm:hidden"
          aria-label="Mobile"
        >
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
            App
          </NavLink>
          <NavLink
            to="/medicos"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Médicos
          </NavLink>
        </nav>
      ) : null}
    </header>
  )
}
