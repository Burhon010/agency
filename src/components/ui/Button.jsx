import { Link } from 'react-router-dom'

const VARIANTS = {
  accent: 'bg-accent text-ink hover:brightness-95',
  dark: 'bg-ink text-white hover:bg-ink-soft',
  outline: 'border border-ink/15 text-ink hover:border-ink/40',
}

/** Универсальная кнопка/ссылка: жёлтая (accent) по умолчанию — под CTA из макета. */
export default function Button({ to, variant = 'accent', className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${VARIANTS[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
