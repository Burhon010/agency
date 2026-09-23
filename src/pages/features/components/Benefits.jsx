import SectionHeading from '@/components/ui/SectionHeading'
import IconCard from '@/components/ui/IconCard'
import { benefits } from '@/data/features'

/** The benefits of working with our team — 3 карточки преимуществ (Figma: Benefits). */
export default function Benefits() {
  return (
    <section className="container-page py-20">
      <SectionHeading title="The benefits of working with our team" align="center" className="mx-auto items-center text-center" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <IconCard key={benefit.id} icon={benefit.icon} title={benefit.title} text={benefit.text} index={index} />
        ))}
      </div>
    </section>
  )
}
