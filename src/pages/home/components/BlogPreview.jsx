import SectionHeading from '@/components/ui/SectionHeading'
import BlogCard from '@/components/common/BlogCard'
import { blogPosts } from '@/data/home'

/** Our blog — 3 карточки превью постов (Figma: Blog). */
export default function BlogPreview() {
  return (
    <section className="container-page py-20">
      <SectionHeading eyebrow="Blog" title="Our blog" />

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  )
}
