import Button from '@/components/ui/Button'

/** Промо-баннер на тёмном фоне перед футером — повторяется почти на всех страницах. */
export default function PromoBanner({
  title = "Let's build something great together",
  text = 'Расскажите нам о своём проекте — подберём команду и посчитаем сроки в течение суток.',
  ctaLabel = 'Get in touch',
  to = '/contact',
}) {
  return (
    <section className="container-page py-10">
      <div className="animate-scale-in flex flex-col items-center gap-6 rounded-2xl bg-ink px-8 py-16 text-center">
        <h2 className="font-heading max-w-2xl text-3xl font-bold text-white md:text-[40px]">{title}</h2>
        <p className="max-w-lg text-white/60">{text}</p>
        <Button to={to}>{ctaLabel}</Button>
      </div>
    </section>
  )
}
