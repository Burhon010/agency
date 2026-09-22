/**
 * Маленький набор инлайн-иконок для карточек (How we work, Benefits, Process и т.п.).
 * Без внешних иконных пакетов — чтобы не тащить лишнюю зависимость ради десятка глифов.
 */
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function StrategyIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WireframeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M9 9.5V20" />
    </svg>
  )
}

export function DesignIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 3.5l6 6L9 21H3v-6L14.5 3.5z" />
      <path d="M12 6l6 6" />
    </svg>
  )
}

export function DevelopmentIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 9l-4.5 3.5L8 16" />
      <path d="M16 9l4.5 3.5L16 16" />
      <path d="M13.5 6.5l-3 11" />
    </svg>
  )
}

export function GoalIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  )
}

export function ImprovementIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 6.5h6V12.5" />
    </svg>
  )
}

export function PlanningIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9.5h16M8 4v3M16 4v3" />
    </svg>
  )
}

export function ConsultationIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v6a2.5 2.5 0 01-2.5 2.5H9l-5 4v-4a2.5 2.5 0 01-2.5-2.5v-6z" />
    </svg>
  )
}

export function DeliveryIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8l9-5 9 5-9 5-9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  )
}

export function QualityIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L12 3z" />
    </svg>
  )
}

export function TeamIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M3.5 20c.5-3.6 3-5.5 5.5-5.5s5 1.9 5.5 5.5" />
      <path d="M15.5 14.7c2 .3 3.7 1.9 4 4.8" />
    </svg>
  )
}

export function SupportIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M5.5 5.5l3.6 3.6M18.5 5.5l-3.6 3.6M5.5 18.5l3.6-3.6M18.5 18.5l-3.6-3.6" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12l5.5 5.5L20 6.5" />
    </svg>
  )
}

export function CrossIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
