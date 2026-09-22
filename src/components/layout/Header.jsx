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

/** Шапка: логотип слева, меню по центру/справа, жёлтая CTA-кнопка справа. Точные подписи — по макету. */
export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-surface">
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

        <button
          type="button"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
        >
          Let's Talk
        </button>

        {/* TODO: бургер-меню для планшета/мобильных */}
      </div>
    </header>
  )
}
