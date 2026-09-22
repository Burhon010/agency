import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@/components/ui/Button'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Blog', to: '/blog' },
]

/** Шапка: тёмно-синий фон на всех страницах (не только на Home), логотип слева, меню и CTA справа. */
export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative bg-ink">
      <div className="container-page flex h-[92px] items-center justify-between gap-6">
        <span className="font-heading text-xl font-bold text-white">
          <span className="text-accent">{'{'}</span>Finsweet
        </span>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'text-white' : 'text-white/55 hover:text-white')}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/contact" variant="outline-light" className="hidden sm:inline-flex">
            Contact us
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white lg:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {open ? <path d="M1 1l16 12M17 1L1 13" /> : <path d="M1 1h16M1 7h16M1 13h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-page flex flex-col gap-1 border-t border-white/10 pb-6 lg:hidden">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Button to="/contact" variant="outline-light" className="mt-2 sm:hidden">
            Contact us
          </Button>
        </nav>
      )}
    </header>
  )
}
