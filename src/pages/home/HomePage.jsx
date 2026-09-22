import PagePlaceholder from '@/components/common/PagePlaceholder'

/** / — Home (Figma: Home). */
export default function HomePage() {
  return (
    <PagePlaceholder
      title="Home"
      sections={[
        'Hero — заголовок, CTA, иллюстрация интерфейса',
        'How we work — карточки этапов (Strategy, Wireframing, Design, Development)',
        'View our projects — 2 карточки проектов',
        'Design that solves problems — сетка из 6 карточек-преимуществ',
        'Отзыв клиента — цитата, аватар, имя',
        'FAQ — аккордеон',
        'Промо-баннер «Lets build something great together»',
        'Our blog — 3 карточки постов',
      ]}
    />
  )
}
