import { missionVision } from '@/data/about'

/** 2 текстово-графических блока с чередующейся раскладкой (Figma: Our Mission and Our Vision). */
export default function MissionVision() {
  return (
    <section className="container-page flex flex-col gap-16 py-20">
      {missionVision.map(({ id, title, text, image, reverse }) => (
        <div key={id} className="grid items-center gap-12 lg:grid-cols-2">
          <div className={`animate-scale-in aspect-[4/3] overflow-hidden rounded-2xl shadow-card ${reverse ? 'lg:order-2' : ''}`}>
            <img src={image} alt={title} className="size-full object-cover" />
          </div>
          <div className="flex animate-fade-up flex-col gap-4">
            <h2 className="font-heading text-3xl font-bold text-ink">{title}</h2>
            <p className="text-ink/60">{text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
