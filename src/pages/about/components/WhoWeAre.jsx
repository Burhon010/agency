import IconCard from '@/components/ui/IconCard'
import { whoWeAreCards, whoWeAreContent } from '@/data/about'

/** 2 карточки (Goal focused, Continuous improvement) + фото и текст «Who we are» (Figma: Who we are). */
export default function WhoWeAre() {
  return (
    <section className="container-page py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-scale-in aspect-[4/3] overflow-hidden rounded-2xl shadow-card lg:order-2">
          <img src={whoWeAreContent.image} alt="Team at work" className="size-full object-cover" />
        </div>

        <div className="flex flex-col gap-8 lg:order-1">
          <div className="flex animate-fade-up flex-col gap-4">
            <h2 className="font-heading text-3xl font-bold text-ink">{whoWeAreContent.title}</h2>
            <p className="text-ink/60">{whoWeAreContent.text}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whoWeAreCards.map((card, index) => (
              <IconCard key={card.id} icon={card.icon} title={card.title} text={card.text} index={index} className="shadow-none" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
