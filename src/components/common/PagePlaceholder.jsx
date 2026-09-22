/**
 * Временная заглушка страницы: пока верстальщик страницы не начал работу,
 * здесь виден заголовок и список блоков по ТЗ — так по роутам видно, что где верстать.
 * Когда страница готова — компонент просто удаляется и заменяется реальной вёрсткой.
 */
export default function PagePlaceholder({ title, sections = [] }) {
  return (
    <div className="container-page flex flex-col gap-6 py-20">
      <p className="text-sm font-semibold tracking-wide text-accent-blue uppercase">TODO</p>
      <h1 className="font-heading text-4xl font-bold">{title}</h1>
      <ul className="flex flex-col gap-2 text-ink/70">
        {sections.map((section) => (
          <li key={section} className="rounded-lg bg-surface-muted px-4 py-3">
            {section}
          </li>
        ))}
      </ul>
    </div>
  )
}
