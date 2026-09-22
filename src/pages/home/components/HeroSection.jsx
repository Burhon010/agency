import Button from '@/components/ui/Button'
import { heroContent } from '@/data/home'

/** Home Hero: тёмный фон, заголовок + CTA слева, скриншот интерфейса справа (Figma: Home Hero). */
export default function HeroSection() {
  return (
    <section className="bg-ink">
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            {heroContent.eyebrow}
          </span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-[52px] md:leading-[1.1]">
            {heroContent.title}
          </h1>
          <p className="max-w-md text-white/60">{heroContent.text}</p>
          <Button to="/contact">Get started</Button>
        </div>

        <div className="animate-scale-in overflow-hidden rounded-2xl shadow-card [animation-delay:150ms]">
          <img src={heroContent.image} alt="Product interface preview" className="size-full object-cover" />
        </div>
      </div>
    </section>
  )
}
