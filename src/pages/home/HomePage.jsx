import HeroSection from './components/HeroSection'
import HowWeWork from './components/HowWeWork'
import OurProjects from './components/OurProjects'
import FeaturesGrid from './components/FeaturesGrid'
import Testimonial from './components/Testimonial'
import BlogPreview from './components/BlogPreview'
import FAQSection from '@/components/common/FAQSection'
import PromoBanner from '@/components/common/PromoBanner'
import { homeFaq } from '@/data/home'

/** / — Home (Figma: Home). */
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HowWeWork />
      <OurProjects />
      <FeaturesGrid />
      <Testimonial />
      <FAQSection items={homeFaq} />
      <PromoBanner />
      <BlogPreview />
    </div>
  )
}
