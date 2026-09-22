import AboutHero from './components/AboutHero'
import WhoWeAre from './components/WhoWeAre'
import ProcessSteps from './components/ProcessSteps'
import MissionVision from './components/MissionVision'
import BenefitsStats from './components/BenefitsStats'
import TeamGrid from './components/TeamGrid'
import PromoBanner from '@/components/common/PromoBanner'

/** /about — About us (Figma: About us). */
export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <WhoWeAre />
      <ProcessSteps />
      <MissionVision />
      <BenefitsStats />
      <TeamGrid />
      <PromoBanner />
    </div>
  )
}
