/** Заголовок секции: жёлтый бейдж-эйбрёв (опционально) + заголовок + подпись. Переиспользуется на всех страницах. */
export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, className = '' }) {
  return (
    <div
      className={`flex animate-fade-up flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl font-bold md:text-[40px] md:leading-[1.15] ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {text && <p className={`max-w-xl text-base ${light ? 'text-white/70' : 'text-ink/60'}`}>{text}</p>}
    </div>
  )
}
