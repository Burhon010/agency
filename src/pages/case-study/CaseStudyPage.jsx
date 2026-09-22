import { useParams } from 'react-router-dom'
import PagePlaceholder from '@/components/common/PagePlaceholder'

/** /work/:caseId — Read Case Study (Figma: Read Case Study). */
export default function CaseStudyPage() {
  const { caseId } = useParams()

  return (
    <PagePlaceholder
      title={`Case study: ${caseId}`}
      sections={[
        'Заголовок, описание, крупное фото-превью',
        'About the project',
        'How we do it',
        'Промо-баннер',
      ]}
    />
  )
}
