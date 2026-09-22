import PagePlaceholder from '@/components/common/PagePlaceholder'

/** /about — About us (Figma: About us). */
export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About us"
      sections={[
        'Hero «Our designs solve problems» — текст + фото',
        '2 карточки (Goal focused, Continuous improvement) + фото',
        'The process we follow — этапы иконками (Planning, Consultation, Design, Delivery)',
        '2 текстово-графических блока с чередующейся раскладкой',
        'The benefits of working with us — статистика + список преимуществ',
        'Meet our team — сетка аватаров',
        'Промо-баннер',
      ]}
    />
  )
}
