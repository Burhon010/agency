import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import HeroIllustration from './HeroIllustration'
import { heroContent } from '@/data/home'

/** Home Hero: тёмный фон, заголовок + 2 CTA слева, диаграмма процесса справа (Figma: Home Hero). */
export default function HeroSection() {
  return (
    <section className="bg-ink">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <h1 className="font-heading text-4xl font-bold text-white md:text-[52px] md:leading-[1.1]">
            {heroContent.title}
          </h1>
          <p className="max-w-md text-white/60">{heroContent.text}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Button to="/work">View our work</Button>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent">
              View Pricing <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="animate-scale-in [animation-delay:150ms]">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
