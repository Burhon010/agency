import { useParams } from 'react-router-dom'
import PagePlaceholder from '@/components/common/PagePlaceholder'

/** /blog/:postId — статья (Figma: Read Blog). */
export default function BlogPostPage() {
  const { postId } = useParams()

  return (
    <PagePlaceholder
      title={`Blog post: ${postId}`}
      sections={['Заголовок + крупное фото', 'Текст статьи с изображением-разделителем', 'Промо-баннер']}
    />
  )
}
