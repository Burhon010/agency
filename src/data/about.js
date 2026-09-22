import aboutHero from '@/assets/images/agency/about-hero.jpg'
import whoWeAre from '@/assets/images/agency/who-we-are.jpg'
import mission from '@/assets/images/agency/mission.jpg'
import vision from '@/assets/images/agency/vision.jpg'
import team1 from '@/assets/images/agency/team-1.jpg'
import team2 from '@/assets/images/agency/team-2.jpg'
import team3 from '@/assets/images/agency/team-3.jpg'
import team4 from '@/assets/images/agency/team-4.jpg'
import team5 from '@/assets/images/agency/team-5.jpg'
import team6 from '@/assets/images/agency/team-6.jpg'
import { GoalIcon, ImprovementIcon, PlanningIcon, ConsultationIcon, DesignIcon, DeliveryIcon } from '@/components/ui/icons'

export const aboutHeroContent = {
  eyebrow: 'About us',
  title: 'Our designs solve problems',
  text: 'Мы небольшая команда дизайнеров и разработчиков, которая помогает стартапам выглядеть так же уверенно, как большие компании.',
  image: aboutHero,
}

export const whoWeAreCards = [
  { id: 'goal', icon: GoalIcon, title: 'Goal focused', text: 'Начинаем с целей бизнеса, а не с картинок — дизайн работает на метрики.' },
  { id: 'improvement', icon: ImprovementIcon, title: 'Continuous improvement', text: 'Тестируем решения и улучшаем продукт после запуска, а не бросаем после сдачи.' },
]

export const whoWeAreContent = {
  title: 'Who we are',
  text: 'С 2018 года мы работаем с ранними стартапами — от идеи до первого раунда инвестиций. За это время собрали процесс, который позволяет запускать сайты быстро, не теряя в качестве.',
  image: whoWeAre,
}

export const processSteps = [
  { id: 'planning', icon: PlanningIcon, title: 'Planning' },
  { id: 'consultation', icon: ConsultationIcon, title: 'Consultation' },
  { id: 'design', icon: DesignIcon, title: 'Design' },
  { id: 'delivery', icon: DeliveryIcon, title: 'Delivery' },
]

export const missionVision = [
  {
    id: 'mission',
    title: 'Our Mission',
    text: 'Делать digital-присутствие стартапов сильной стороной, а не узким местом — через дизайн, который продаёт с первого экрана.',
    image: mission,
    reverse: false,
  },
  {
    id: 'vision',
    title: 'Our Vision',
    text: 'Мы верим, что хороший дизайн должен быть доступен не только компаниям с большим бюджетом — поэтому строим процессы, которые ускоряют, а не удорожают запуск.',
    image: vision,
    reverse: true,
  },
]

export const benefits = {
  stat: '180,000+',
  statLabel: 'часов опыта команды в digital-продуктах',
  items: [
    'Выделенная команда на проект, а не набор фрилансеров',
    'Прозрачные сроки и еженедельные демо',
    'Дизайн-система остаётся у вас после сдачи проекта',
    'Поддержка и доработки после запуска',
  ],
}

export const team = [
  { id: 1, name: 'Michael Reyes', role: 'Founder & Strategist', avatar: team1 },
  { id: 2, name: 'Sarah Chen', role: 'Lead Designer', avatar: team2 },
  { id: 3, name: 'David Kim', role: 'Front-end Developer', avatar: team3 },
  { id: 4, name: 'Amara Obi', role: 'Product Designer', avatar: team4 },
  { id: 5, name: 'Olivia Novak', role: 'Project Manager', avatar: team5 },
  { id: 6, name: 'Ethan Cole', role: 'Back-end Developer', avatar: team6 },
]
