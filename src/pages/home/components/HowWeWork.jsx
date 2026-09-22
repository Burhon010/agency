import SectionHeading from '@/components/ui/SectionHeading'
import IconCard from '@/components/ui/IconCard'
import { howWeWork } from '@/data/home'

/** How we work — ряд карточек-этапов (Figma: This is how it work). */
export default function HowWeWork() {
  return (
    <section className="container-page py-20">
      <SectionHeading eyebrow="How we work" title="From idea to launch in four steps" align="center" className="mx-auto items-center text-center" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {howWeWork.map((step, index) => (
          <IconCard key={step.id} icon={step.icon} title={step.title} text={step.text} index={index} />
        ))}
      </div>
    </section>
  )
}
