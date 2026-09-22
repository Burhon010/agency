import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/data/home'

/** View our projects — 2 карточки проектов (Figma: Our Work). */
export default function OurProjects() {
  return (
    <section className="container-page py-20">
      <SectionHeading eyebrow="Our work" title="View our projects" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/work/${project.id}`}
            className="group animate-fade-up overflow-hidden rounded-2xl bg-surface-muted [animation-delay:var(--d)]"
            style={{ '--d': `${index * 100}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1 p-6">
              <p className="text-xs font-semibold tracking-wide text-ink/40 uppercase">{project.category}</p>
              <h3 className="font-heading text-xl font-semibold text-ink">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
