import heroMockup from '@/assets/images/agency/hero-mockup.jpg'
import project1 from '@/assets/images/agency/project-1.jpg'
import project2 from '@/assets/images/agency/project-2.jpg'
import testimonial from '@/assets/images/agency/testimonial.jpg'
import blog1 from '@/assets/images/agency/blog-1.jpg'
import blog2 from '@/assets/images/agency/blog-2.jpg'
import blog3 from '@/assets/images/agency/blog-3.jpg'
import { StrategyIcon, WireframeIcon, DesignIcon, DevelopmentIcon, GoalIcon, TeamIcon, QualityIcon, SupportIcon, DeliveryIcon, CheckIcon } from '@/components/ui/icons'

export const heroContent = {
  eyebrow: 'Digital / design agency',
  title: 'Building stellar websites for early startups',
  text: 'Мы помогаем молодым продуктам запускаться быстро и выглядеть дорого: стратегия, дизайн и разработка в одной команде.',
  image: heroMockup,
}

export const howWeWork = [
  { id: 'strategy', icon: StrategyIcon, title: 'Strategy', text: 'Изучаем рынок и цели бизнеса, формируем план проекта и метрики успеха.' },
  { id: 'wireframing', icon: WireframeIcon, title: 'Wireframing', text: 'Прототипируем структуру страниц — быстро проверяем гипотезы до дизайна.' },
  { id: 'design', icon: DesignIcon, title: 'Design', text: 'Собираем визуальный стиль, который отражает характер бренда.' },
  { id: 'development', icon: DevelopmentIcon, title: 'Development', text: 'Верстаем и разрабатываем с упором на скорость и адаптивность.' },
]

export const projects = [
  { id: 'finsweet', title: 'Finsweet Rebrand', category: 'Branding · Web design', image: project1 },
  { id: 'nova', title: 'Nova Dashboard', category: 'Product design · Development', image: project2 },
]

export const features = [
  { id: 'goal', icon: GoalIcon, title: 'Goal focused', text: 'Каждое решение подчинено метрикам, а не просто «красиво».' },
  { id: 'team', icon: TeamIcon, title: 'Expert team', text: 'Дизайнеры и разработчики с опытом в 30+ индустриях.' },
  { id: 'quality', icon: QualityIcon, title: 'Best in class', text: 'Следим за деталями — от пикселя до анимации.' },
  { id: 'support', icon: SupportIcon, title: '24/7 Support', text: 'На связи на всех этапах — от брифа до релиза.' },
  { id: 'delivery', icon: DeliveryIcon, title: 'Quick delivery', text: 'Первый прототип — уже через неделю после старта.' },
  { id: 'checks', icon: CheckIcon, title: 'Free revisions', text: 'Дорабатываем детали без ограничения по числу правок.' },
]

export const testimonialContent = {
  quote: '«Команда агентства запустила наш сайт за три недели — от брифа до продакшена. Результат превзошёл ожидания инвесторов.»',
  author: 'James Walker',
  role: 'Founder, Nova',
  avatar: testimonial,
}

export const homeFaq = [
  { id: 'timeline', question: 'Сколько времени занимает проект?', answer: 'В среднем лендинг занимает 2–3 недели, многостраничный сайт — 4–6 недель, в зависимости от объёма контента и правок.' },
  { id: 'price', question: 'Сколько стоит разработка?', answer: 'Стоимость зависит от объёма страниц и интеграций — присылайте бриф, посчитаем смету в течение суток.' },
  { id: 'stack', question: 'На чём вы разрабатываете?', answer: 'React/Next.js или Webflow — выбираем стек под задачи заказчика и бюджет поддержки.' },
  { id: 'support', question: 'Есть ли поддержка после запуска?', answer: 'Да, предлагаем пакеты поддержки: правки контента, мониторинг и доработки по мере роста продукта.' },
]

export const blogPosts = [
  { id: 'design-systems', title: 'Как дизайн-система ускоряет запуск продукта', date: '12 Sep 2024', excerpt: 'Разбираем, зачем стартапу дизайн-система уже на первом релизе.', image: blog1 },
  { id: 'remote-teams', title: 'Как мы строим распределённые команды', date: '28 Aug 2024', excerpt: 'Процессы, инструменты и ритуалы, которые держат команду синхронной.', image: blog2 },
  { id: 'discovery', title: 'Discovery-этап: что спросить у клиента перед стартом', date: '14 Aug 2024', excerpt: 'Чек-лист вопросов, которые экономят недели переделок.', image: blog3 },
]
