import PagePlaceholder from '@/components/common/PagePlaceholder'

/** /work — Work / портфолио (Figma: Work). */
export default function WorkPage() {
  return (
    <PagePlaceholder
      title="Our Work Portfolio"
      sections={[
        'Фильтр/табы по категориям',
        'Сетка карточек-шаблонов (Template 1…6)',
        'Промо-блок «Lets build something great together»',
      ]}
    />
  )
}
