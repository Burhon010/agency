import SectionHeading from '@/components/ui/SectionHeading'
import IconCard from '@/components/ui/IconCard'
import { features } from '@/data/home'

/** Design that solves problems — сетка из 6 карточек-преимуществ (Figma: Features). */
export default function FeaturesGrid() {
  return (
    <section className="bg-surface-muted py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why us"
          title="Design that solves problems, one product at a time"
          align="center"
          className="mx-auto items-center text-center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <IconCard key={feature.id} icon={feature.icon} title={feature.title} text={feature.text} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
