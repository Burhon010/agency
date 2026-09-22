import { processSteps } from '@/data/about'

/** The process we follow — этапы иконками в ряд (Figma: Process). */
export default function ProcessSteps() {
  return (
    <section className="bg-ink py-16">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map(({ id, icon: Icon, title }, index) => (
          <div
            key={id}
            className="flex animate-fade-up items-center gap-4 [animation-delay:var(--d)]"
            style={{ '--d': `${index * 80}ms` }}
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-accent">
              <Icon className="size-6" />
            </span>
            <div>
              <p className="text-xs font-semibold text-white/40">0{index + 1}</p>
              <p className="font-heading font-semibold text-white">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
