/**
 * Декоративная графика Features Hero — окно браузера со строками контента
 * и парящими бейджами вокруг (Figma: Feature Hero Illustration), в стиле HeroIllustration с Home.
 */
export default function FeaturesHeroIllustration() {
  return (
    <svg viewBox="0 0 420 300" className="size-full" role="img" aria-label="Иллюстрация браузера с настройками">
      <rect x="30" y="20" width="360" height="260" rx="20" fill="#5b5c82" opacity="0.5" />

      <circle cx="56" cy="46" r="4.5" fill="#ff9d8a" />
      <circle cx="72" cy="46" r="4.5" fill="#fcd980" />
      <circle cx="88" cy="46" r="4.5" fill="#8de3c0" />
      <rect x="52" y="62" width="316" height="14" rx="7" fill="#ffffff" opacity="0.08" />

      <rect x="52" y="96" width="150" height="150" rx="14" fill="#ffffff" opacity="0.06" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="66" y={116 + i * 24} width={i % 2 === 0 ? 122 : 90} height="8" rx="4" fill="#ffffff" opacity="0.18" />
      ))}

      <rect x="222" y="96" width="146" height="70" rx="14" fill="#ffffff" opacity="0.06" />
      <circle cx="248" cy="122" r="12" fill="#4d5bf9" opacity="0.8" />
      <rect x="270" y="114" width="80" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="270" y="130" width="56" height="8" rx="4" fill="#ffffff" opacity="0.18" />

      <g className="hero-float" style={{ '--float-duration': '4s', '--float-delay': '0s' }}>
        <rect x="234" y="182" width="134" height="64" rx="14" fill="#434472" />
        <circle cx="258" cy="214" r="14" fill="#fcd980" />
        <path d="M252 214l4 4 8-8" stroke="#1c1e53" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="282" y="204" width="72" height="8" rx="4" fill="#ffffff" opacity="0.4" />
        <rect x="282" y="218" width="50" height="8" rx="4" fill="#ffffff" opacity="0.22" />
      </g>

      <g className="hero-float" style={{ '--float-duration': '3.6s', '--float-delay': '0.3s' }}>
        <rect x="8" y="6" width="52" height="52" rx="16" fill="#1abcfe" />
        <path
          d="M24 18h13l9 9v18a2 2 0 01-2 2h-20a2 2 0 01-2-2V20a2 2 0 012-2z"
          fill="#ffffff"
          opacity="0.92"
        />
        <path d="M37 18v8h8" fill="none" stroke="#1abcfe" strokeWidth="1.6" strokeLinejoin="round" />
      </g>

      <g className="hero-float" style={{ '--float-duration': '4.6s', '--float-delay': '0.6s' }}>
        <rect x="352" y="6" width="52" height="52" rx="16" fill="#51cb9c" />
        <path d="M368 24l-7 8 7 8M388 24l7 8-7 8" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className="hero-float" style={{ '--float-duration': '5s', '--float-delay': '0.5s' }}>
        <rect x="360" y="240" width="48" height="48" rx="14" fill="#ffc04a" />
        <text x="374" y="270" fontSize="18" fontWeight="700" fill="#1c1e53" fontFamily="Poppins, sans-serif">
          {'{}'}
        </text>
      </g>

      <g className="hero-float" style={{ '--float-duration': '4.3s', '--float-delay': '0.2s' }}>
        <rect x="8" y="238" width="46" height="46" rx="14" fill="#ff9dc4" />
        <circle cx="31" cy="255" r="5" fill="#ffffff" opacity="0.9" />
        <path d="M18 274c2-8 8-12 13-12s11 4 13 12" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      </g>
    </svg>
  )
}
