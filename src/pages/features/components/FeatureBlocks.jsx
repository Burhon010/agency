import { featureBlocks } from '@/data/features'

const BG_CLASSES = {
  none: '',
  white: 'bg-white',
  muted: 'bg-surface-muted',
  accent: 'bg-accent/10',
}

/** 4 чередующихся текстово-графических блока (Figma: Best in Class / Free Revisions / Support / Quick Deliver). */
export default function FeatureBlocks() {
  return (
    <div className="flex flex-col">
      {featureBlocks.map(({ id, eyebrow, title, text, image, reverse, bg }) => (
        <section key={id} className={BG_CLASSES[bg]}>
          <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2">
            <div className={`animate-scale-in aspect-[4/3] overflow-hidden rounded-2xl shadow-card ${reverse ? 'lg:order-2' : ''}`}>
              <img src={image} alt={title} className="size-full object-cover" />
            </div>
            <div className="flex animate-fade-up flex-col gap-4">
              <p className="text-sm font-semibold text-accent-blue">{eyebrow}</p>
              <h2 className="font-heading text-3xl font-bold text-ink md:text-[38px] md:leading-[1.2]">{title}</h2>
              <p className="text-ink/60">{text}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
