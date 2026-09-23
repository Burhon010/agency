import Button from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/icons'
import { pricingPlans } from '@/data/pricing'

/** 3 тарифа в ряд, средняя карточка выделена тёмным фоном (Figma: Pricing Card x3). */
export default function PricingCards() {
  return (
    <section className="container-page pb-20">
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`animate-fade-up flex flex-col gap-8 rounded-2xl p-8 [animation-delay:var(--d)] lg:p-10 ${
              plan.highlighted ? 'bg-ink text-white shadow-card lg:-translate-y-4' : 'bg-surface-muted text-ink'
            }`}
            style={{ '--d': `${index * 100}ms` }}
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-2xl font-semibold">{plan.title}</h3>
              <p className={`text-sm ${plan.highlighted ? 'text-accent' : 'text-accent-blue'}`}>{plan.period}</p>
            </div>

            <p className="font-heading text-4xl font-bold md:text-[38px]">{plan.price}</p>

            <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-white/60' : 'text-ink/60'}`}>{plan.text}</p>

            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <CheckIcon className={`size-4 shrink-0 ${plan.highlighted ? 'text-accent' : 'text-accent-blue'}`} strokeWidth={2.2} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button to="/contact" variant={plan.highlighted ? 'accent' : 'dark'}>
              {plan.ctaLabel}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
