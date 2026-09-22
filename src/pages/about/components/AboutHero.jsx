import { aboutHeroContent } from '@/data/about'

/** About us hero — текст + фото (Figma: About us hero). */
export default function AboutHero() {
  return (
    <section className="container-page py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold tracking-wide text-ink uppercase">
            {aboutHeroContent.eyebrow}
          </span>
          <h1 className="font-heading text-4xl font-bold text-ink md:text-[48px] md:leading-[1.1]">
            {aboutHeroContent.title}
          </h1>
          <p className="max-w-md text-ink/60">{aboutHeroContent.text}</p>
        </div>

        <div className="animate-scale-in aspect-[4/3] overflow-hidden rounded-2xl shadow-card [animation-delay:150ms]">
          <img src={aboutHeroContent.image} alt="Team collaborating" className="size-full object-cover" />
        </div>
      </div>
    </section>
  )
}
