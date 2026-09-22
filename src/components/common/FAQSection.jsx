import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import { ChevronDownIcon } from '@/components/ui/icons'

/**
 * FAQ: список вопросов слева, раскрывающийся ответ справа/снизу (Figma: блок FAQ на Home/Pricing/Features).
 * На мобильном список вопросов и ответ идут одной колонкой.
 */
export default function FAQSection({ title = 'Frequently asked questions', items }) {
  const [openId, setOpenId] = useState(items[0]?.id)

  return (
    <section className="container-page py-20">
      <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          text="Не нашли ответ на свой вопрос — напишите нам, ответим в течение дня."
        />

        <ul className="flex flex-col gap-3">
          {items.map(({ id, question, answer }) => {
            const isOpen = openId === id
            return (
              <li key={id} className="overflow-hidden rounded-xl bg-surface-muted">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-ink"
                  aria-expanded={isOpen}
                >
                  {question}
                  <ChevronDownIcon
                    className={`size-5 shrink-0 text-ink/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60">{answer}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
