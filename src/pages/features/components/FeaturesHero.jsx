import Button from '@/components/ui/Button'
import FeaturesHeroIllustration from './FeaturesHeroIllustration'
import { featuresHeroContent } from '@/data/features'

/** Features Hero: тёмный фон, заголовок + CTA слева, иллюстрация браузера справа (Figma: Features Hero Section). */
export default function FeaturesHero() {
  return (
    <section className="bg-ink">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <h1 className="font-heading text-4xl font-bold text-white md:text-[54px] md:leading-[1.1]">
            {featuresHeroContent.title}
          </h1>
          <p className="max-w-md text-white/60">{featuresHeroContent.text}</p>
          <Button to={featuresHeroContent.ctaTo}>{featuresHeroContent.ctaLabel}</Button>
        </div>

        <div className="animate-scale-in [animation-delay:150ms]">
          <FeaturesHeroIllustration />
        </div>
      </div>
    </section>
  )
}
