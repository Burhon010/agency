import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="container-page flex flex-col items-center gap-4 py-32 text-center">
      <h1 className="font-heading text-4xl font-bold">404</h1>
      <p className="text-ink/60">Страница не найдена.</p>
      <Link to="/" className="text-accent-blue underline">
        На главную
      </Link>
    </div>
  )
}
