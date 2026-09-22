import SectionHeading from '@/components/ui/SectionHeading'
import { team } from '@/data/about'

/** Meet our team — сетка круглых аватаров сотрудников с именами (Figma: Our Team). */
export default function TeamGrid() {
  return (
    <section className="container-page py-20">
      <SectionHeading eyebrow="Our team" title="Meet our team" align="center" className="mx-auto items-center text-center" />

      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {team.map((member, index) => (
          <div
            key={member.id}
            className="flex animate-fade-up flex-col items-center gap-3 text-center [animation-delay:var(--d)]"
            style={{ '--d': `${index * 80}ms` }}
          >
            <img src={member.avatar} alt={member.name} className="size-24 rounded-full object-cover shadow-card" />
            <div>
              <p className="font-semibold text-ink">{member.name}</p>
              <p className="text-sm text-ink/50">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
