import PricingHero from './components/PricingHero'
import PricingCards from './components/PricingCards'
import FAQSection from '@/components/common/FAQSection'
import PromoBanner from '@/components/common/PromoBanner'
import { pricingFaq } from '@/data/pricing'

/** /pricing — Pricing (Figma: Pricing). */
export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <PricingHero />
      <PricingCards />
      <FAQSection title="Frequently asked questions" items={pricingFaq} />
      <PromoBanner />
    </div>
  )
}
