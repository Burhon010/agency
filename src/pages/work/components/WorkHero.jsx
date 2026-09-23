import SectionHeading from '@/components/ui/SectionHeading'
import { workHeroContent } from '@/data/work'

/** Work Hero: заголовок портфолио по центру на светлом фоне (Figma: Work Hero). */
export default function WorkHero() {
  return (
    <section className="bg-surface-muted py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow={workHeroContent.eyebrow}
          title={workHeroContent.title}
          text={workHeroContent.text}
          align="center"
          className="mx-auto items-center text-center"
        />
      </div>
    </section>
  )
}
