/** Карточка «иконка — заголовок — текст»: повторяющийся модуль (How we work, Benefits, Features и т.п.). */
export default function IconCard({ icon: Icon, title, text, index = 0, dark = false, className = '' }) {
  return (
    <div
      className={`group flex animate-fade-up flex-col gap-4 rounded-2xl p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 ${
        dark ? 'bg-ink-soft text-white' : 'bg-white text-ink'
      } ${className}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <span
        className={`grid size-12 place-items-center rounded-xl ${dark ? 'bg-white/10 text-accent' : 'bg-accent/15 text-ink'}`}
      >
        <Icon className="size-6" />
      </span>
      <h3 className="font-heading text-lg font-semibold">{title}</h3>
      {text && <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-ink/60'}`}>{text}</p>}
    </div>
  )
}
