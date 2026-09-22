import { Link } from 'react-router-dom'

/** Карточка поста блога: фото, заголовок, краткий текст. Используется на Home и на Blog Page. */
export default function BlogCard({ post, index = 0 }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group flex animate-fade-up flex-col gap-4 [animation-delay:var(--d)]"
      style={{ '--d': `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold tracking-wide text-ink/40 uppercase">{post.date}</p>
        <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent-blue">{post.title}</h3>
        <p className="text-sm text-ink/60">{post.excerpt}</p>
      </div>
    </Link>
  )
}
