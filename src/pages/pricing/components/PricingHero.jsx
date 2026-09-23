import SectionHeading from '@/components/ui/SectionHeading'
import { pricingHeroContent } from '@/data/pricing'

/** Заголовок страницы Pricing (Figma: Pricing Heading). */
export default function PricingHero() {
  return (
    <section className="container-page py-16 md:py-20">
      <SectionHeading
        title={pricingHeroContent.title}
        text={pricingHeroContent.text}
        align="center"
        className="mx-auto items-center text-center"
      />
    </section>
  )
}
