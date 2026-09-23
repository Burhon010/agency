import template1 from '@/assets/images/figma/work-template-1.jpg'
import template2 from '@/assets/images/figma/work-template-2.jpg'
import template3 from '@/assets/images/figma/work-template-3.jpg'
import template4 from '@/assets/images/figma/work-template-4.jpg'
import template5 from '@/assets/images/figma/work-template-5.jpg'
import template6 from '@/assets/images/figma/work-template-6.jpg'

export const workHeroContent = {
  eyebrow: 'What we created',
  title: 'Our Work Portfolio',
  text: 'Помогаем командам создавать сильные digital-продукты — от лендингов до многостраничных сайтов на Webflow и Figma.',
}

export const workCategories = ['All', 'UI Design', 'Webflow Design', 'Figma Design']

export const workProjects = [
  {
    id: 'template-1',
    title: 'Template 1',
    text: 'Лендинг для запуска продукта с акцентом на конверсию и быстрый онбординг.',
    image: template1,
    category: 'UI Design',
    linkLabel: 'View Portfolio',
  },
  {
    id: 'template-2',
    title: 'Template 2',
    text: 'Корпоративный сайт на Webflow с гибкой CMS для блога и кейсов.',
    image: template2,
    category: 'Webflow Design',
    linkLabel: 'View Portfolio',
  },
  {
    id: 'template-3',
    title: 'Template 3',
    text: 'Дизайн-система в Figma для продуктовой команды — компоненты и токены.',
    image: template3,
    category: 'Figma Design',
    linkLabel: 'Read case study',
  },
  {
    id: 'template-4',
    title: 'Template 4',
    text: 'Интерфейс мобильного приложения с фокусом на скорость и простоту.',
    image: template4,
    category: 'UI Design',
    linkLabel: 'Read case study',
  },
  {
    id: 'template-5',
    title: 'Template 5',
    text: 'Сайт-визитка агентства на Webflow с анимацией и адаптивной вёрсткой.',
    image: template5,
    category: 'Webflow Design',
    linkLabel: 'Read case study',
  },
  {
    id: 'template-6',
    title: 'Template 6',
    text: 'Прототип продукта в Figma — от вайрфреймов до кликабельного макета.',
    image: template6,
    category: 'Figma Design',
    linkLabel: 'Read case study',
  },
]
