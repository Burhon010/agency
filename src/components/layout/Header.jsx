import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Features', to: '/features' },
  { label: 'Work', to: '/work' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact us', to: '/contact' },
]

/** Шапка: логотип слева, меню по центру/справа, жёлтая CTA-кнопка справа. На планшете/мобильных меню уходит в бургер. */
export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative border-b border-ink/10 bg-surface">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <span className="font-heading text-xl font-bold">Agency</span>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'text-accent-blue' : 'text-ink hover:text-accent-blue')}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105 sm:inline-flex"
          >
            Let's Talk
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-ink/15 lg:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {open ? <path d="M1 1l16 12M17 1L1 13" /> : <path d="M1 1h16M1 7h16M1 13h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-page flex flex-col gap-1 border-t border-ink/10 pb-6 lg:hidden">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-sm font-medium ${isActive ? 'bg-accent/15 text-accent-blue' : 'text-ink hover:bg-surface-muted'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <button type="button" className="mt-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink sm:hidden">
            Let's Talk
          </button>
        </nav>
      )}
    </header>
  )
}
