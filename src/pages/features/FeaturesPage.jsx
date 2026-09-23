import FeaturesHero from './components/FeaturesHero'
import StatsStrip from './components/StatsStrip'
import Benefits from './components/Benefits'
import FeatureBlocks from './components/FeatureBlocks'
import FAQSection from '@/components/common/FAQSection'
import PromoBanner from '@/components/common/PromoBanner'
import { featuresFaq } from '@/data/features'

/** /features — Features (Figma: Features). */
export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <FeaturesHero />
      <StatsStrip />
      <Benefits />
      <FeatureBlocks />
      <FAQSection title="Frequently asked question" items={featuresFaq} />
      <PromoBanner />
    </div>
  )
}
