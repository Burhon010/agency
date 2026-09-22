import { CheckIcon } from '@/components/ui/icons'
import { benefits } from '@/data/about'

/** The benefits of working with us — статистика + список преимуществ (Figma: Benefits). */
export default function BenefitsStats() {
  return (
    <section className="container-page py-20">
      <div className="grid items-center gap-12 rounded-2xl bg-surface-muted p-10 lg:grid-cols-2 lg:p-16">
        <div className="flex animate-fade-up flex-col gap-2">
          <p className="font-heading text-5xl font-bold text-ink md:text-6xl">{benefits.stat}</p>
          <p className="max-w-xs text-ink/60">{benefits.statLabel}</p>
        </div>

        <ul className="flex flex-col gap-4">
          {benefits.items.map((item, index) => (
            <li
              key={item}
              className="flex animate-fade-up items-start gap-3 [animation-delay:var(--d)]"
              style={{ '--d': `${index * 80}ms` }}
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-ink">
                <CheckIcon className="size-4" strokeWidth={2.2} />
              </span>
              <span className="text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
