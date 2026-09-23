import WorkHero from './components/WorkHero'
import WorkGrid from './components/WorkGrid'
import PromoBanner from '@/components/common/PromoBanner'

/** /work — Work / портфолио (Figma: Work). */
export default function WorkPage() {
  return (
    <div className="flex flex-col">
      <WorkHero />
      <WorkGrid />
      <PromoBanner />
    </div>
  )
}
