import { testimonialContent } from '@/data/home'

/** Отзыв клиента — цитата, аватар, имя (Figma: Testimonials). */
export default function Testimonial() {
  return (
    <section className="container-page py-20">
      <div className="animate-scale-in mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <p className="font-heading text-2xl leading-snug text-ink md:text-3xl">{testimonialContent.quote}</p>
        <div className="flex items-center gap-3">
          <img src={testimonialContent.avatar} alt={testimonialContent.author} className="size-12 rounded-full object-cover" />
          <div className="text-left">
            <p className="font-semibold text-ink">{testimonialContent.author}</p>
            <p className="text-sm text-ink/50">{testimonialContent.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
