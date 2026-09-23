import bestInClass from '@/assets/images/figma/features-best-in-class.jpg'
import freeRevisions from '@/assets/images/figma/features-free-revisions.jpg'
import support from '@/assets/images/figma/features-support.jpg'
import quickDelivery from '@/assets/images/figma/features-quick-delivery.jpg'
import { SupportIcon, WireframeIcon, DesignIcon } from '@/components/ui/icons'

export const featuresHeroContent = {
  title: 'All the features you need',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ctaLabel: 'View Pricing',
  ctaTo: '/pricing',
}

export const featuresStat = {
  value: '100.000+',
  label: 'Figma Users',
}

export const benefits = [
  { id: 'friendly-support', icon: SupportIcon, title: 'Friendly Support', text: 'Отвечаем в течение дня и всегда на связи — от брифа до релиза и поддержки после запуска.' },
  { id: 'responsive', icon: WireframeIcon, title: 'Perfectly Responsive', text: 'Каждый экран адаптирован под мобильные, планшеты и десктоп без потери деталей.' },
  { id: 'customize', icon: DesignIcon, title: 'Customize with ease', text: 'Гибкая дизайн-система — меняем цвета, шрифты и блоки без переписывания вёрстки.' },
]

export const featureBlocks = [
  {
    id: 'best-in-class',
    eyebrow: 'Use Client-first',
    title: 'Top agencies and freelancers around the world use Client-first',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation.',
    image: bestInClass,
    reverse: false,
    bg: 'none',
  },
  {
    id: 'free-revisions',
    eyebrow: 'Free Revision Rounds',
    title: 'Get free Revisions and one week of free maintenance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: freeRevisions,
    reverse: true,
    bg: 'muted',
  },
  {
    id: 'support',
    eyebrow: '24/7 Support',
    title: 'Working with us, you will be getting 24/7 priority support',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: support,
    reverse: false,
    bg: 'white',
  },
  {
    id: 'quick-delivery',
    eyebrow: 'Quick Delivery',
    title: 'Guranteed 1 week delivery for standard five pager website',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: quickDelivery,
    reverse: true,
    bg: 'accent',
  },
]

export const featuresFaq = [
  { id: 'timeline', question: 'Сколько времени занимает проект?', answer: 'В среднем лендинг занимает 1–2 недели, многостраничный сайт — 3–5 недель в зависимости от объёма контента и правок.' },
  { id: 'big-project', question: 'У нас крупный проект — вы справитесь?', answer: 'Да, под комплексные проекты собираем отдельную команду и делим работу на этапы с еженедельными демо.' },
  { id: 'communication', question: 'Как проходит коммуникация?', answer: 'Ведём проект в общем чате и созваниваемся раз в неделю — плюс доступ к таск-трекеру для отслеживания прогресса.' },
  { id: 'naming', question: 'Какой конвенции именования классов вы придерживаетесь?', answer: 'Используем Client-First — это ускоряет передачу проекта и упрощает поддержку после сдачи.' },
  { id: 'revisions', question: 'Сколько правок включено в стоимость?', answer: 'В каждый тариф включён раунд бесплатных правок в течение недели после сдачи проекта.' },
]
