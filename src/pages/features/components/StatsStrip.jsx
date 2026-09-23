import { featuresStat } from '@/data/features'

const PLACEHOLDER_LOGOS = ['Webnest', 'Northline', 'Vantage', 'Orbitly', 'Craftlab']

/** Строка доверия: число пользователей + логотипы партнёров (Figma: Logo Section). */
export default function StatsStrip() {
  return (
    <section className="container-page py-16">
      <div className="flex animate-fade-up flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 grayscale">
          {PLACEHOLDER_LOGOS.map((name) => (
            <li key={name} className="font-heading text-lg font-semibold text-ink">
              {name}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-1 text-center lg:items-end lg:text-right">
          <p className="font-heading text-3xl font-bold text-ink md:text-4xl">{featuresStat.value}</p>
          <p className="text-sm text-ink/50">{featuresStat.label}</p>
        </div>
      </div>
    </section>
  )
}
