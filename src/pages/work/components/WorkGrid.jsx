import { useState } from 'react'
import { Link } from 'react-router-dom'
import { workCategories, workProjects } from '@/data/work'

/** Фильтр по категориям + сетка карточек-шаблонов (Figma: Work Categories, Our Work). */
export default function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects =
    activeCategory === 'All' ? workProjects : workProjects.filter((project) => project.category === activeCategory)

  return (
    <section className="container-page py-20">
      <div className="mb-10 flex flex-wrap gap-8">
        {workCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`text-base font-semibold transition-colors duration-300 ${
              activeCategory === category ? 'text-accent-blue' : 'text-ink/60 hover:text-ink'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <article key={project.id} className="animate-fade-up flex flex-col gap-6 [animation-delay:var(--d)]" style={{ '--d': `${index * 80}ms` }}>
            <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
              <img src={project.image} alt={project.title} className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-2xl font-semibold text-ink">{project.title}</h3>
              <p className="text-ink/60">{project.text}</p>
              <Link
                to={`/work/${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent-blue"
              >
                {project.linkLabel} <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
