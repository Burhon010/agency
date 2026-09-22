import PagePlaceholder from '@/components/common/PagePlaceholder'

/** /blog — список статей (Figma: Blog Page). */
export default function BlogPage() {
  return (
    <PagePlaceholder
      title="Our Blog"
      sections={[
        'Featured-статья — крупное фото + превью',
        'Сетка из 3 карточек статей',
        'Промо-баннер',
      ]}
    />
  )
}
