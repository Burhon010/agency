/**
 * Иллюстрация для Home Hero — по макету: окно браузера с карточкой контента,
 * иконками (документ / код / фигурные скобки) и карточкой-списком, соединёнными линиями.
 * Векторная (SVG), а не фото — так совпадает с оригиналом и не тяжелит страницу.
 */
export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 260" className="size-full" role="img" aria-label="Диаграмма процесса разработки">
      <rect x="60" y="8" width="332" height="230" rx="18" fill="#5b5c82" opacity="0.55" />

      {/* браузерная плашка */}
      <circle cx="82" cy="30" r="4" fill="#ff9d8a" />
      <circle cx="96" cy="30" r="4" fill="#fcd980" />
      <circle cx="110" cy="30" r="4" fill="#8de3c0" />
      <rect x="78" y="42" width="290" height="10" rx="5" fill="#ffffff" opacity="0.08" />

      {/* соединительные линии */}
      <path
        d="M120 118 H150 M150 118 V80 H196 M150 118 V150 H196 M232 100 V118 H210 M232 138 V118 M300 118 H272"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <circle cx="150" cy="118" r="3" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="232" cy="118" r="3" fill="#ffffff" fillOpacity="0.35" />

      {/* карточка контента слева */}
      <rect x="16" y="78" width="104" height="86" rx="14" fill="#434472" />
      <rect x="30" y="92" width="32" height="32" rx="8" fill="#2c2d5f" />
      <path d="M36 116l7-9 5 6 5-7 7 10z" fill="#ffffff" opacity="0.55" />
      <circle cx="40" cy="99" r="3" fill="#fcd980" />
      <rect x="70" y="94" width="38" height="6" rx="3" fill="#ffffff" opacity="0.4" />
      <rect x="70" y="106" width="26" height="6" rx="3" fill="#ffffff" opacity="0.25" />
      <circle cx="38" cy="144" r="9" fill="#ffffff" opacity="0.15" />
      <rect x="56" y="134" width="20" height="20" rx="6" fill="#ffffff" opacity="0.1" />
      <text x="62" y="148" fontSize="11" fill="#ffffff" opacity="0.6" fontFamily="Poppins, sans-serif">
        T
      </text>

      {/* иконка-документ (синяя) */}
      <rect x="196" y="62" width="36" height="36" rx="10" fill="#1abcfe" />
      <path
        d="M207 71h9l6 6v12a1.5 1.5 0 01-1.5 1.5h-13.5a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5z"
        fill="#ffffff"
        opacity="0.92"
      />
      <path d="M216 71v6h6" fill="none" stroke="#1abcfe" strokeWidth="1.4" strokeLinejoin="round" />

      {/* иконка фигурных скобок (жёлтая) */}
      <rect x="292" y="80" width="36" height="36" rx="10" fill="#ffc04a" />
      <text x="303" y="105" fontSize="16" fontWeight="700" fill="#1c1e53" fontFamily="Poppins, sans-serif">
        {'{}'}
      </text>

      {/* центральный коннектор */}
      <circle cx="210" cy="118" r="16" fill="#2c3563" stroke="#5877a8" strokeWidth="1.5" />
      <path d="M203 114h9l-3-3M217 122h-9l3 3" stroke="#8fc7ff" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* иконка code (зелёная) */}
      <rect x="188" y="168" width="36" height="36" rx="10" fill="#51cb9c" />
      <path d="M200 178l-6 6 6 6M212 178l6 6-6 6" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* карточка-список справа */}
      <rect x="272" y="140" width="112" height="82" rx="14" fill="#4f507f" />
      {[
        { y: 156, color: '#fcd980', w: 60 },
        { y: 172, color: '#5fe3c8', w: 44 },
        { y: 188, color: '#b6a4ff', w: 52 },
        { y: 204, color: '#ff9dc4', w: 36 },
      ].map((row) => (
        <g key={row.y}>
          <circle cx="288" cy={row.y} r="4" fill={row.color} />
          <rect x="300" y={row.y - 3} width={row.w} height="6" rx="3" fill="#ffffff" opacity="0.35" />
        </g>
      ))}
    </svg>
  )
}
