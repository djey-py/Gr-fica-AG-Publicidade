// Logótipo oficial MAIS FÁCIL (apresentação em SVG, fiel à identidade).
// O símbolo "+" (em laranja) é mantido e não é substituído.
// variant: 'dark'  -> texto navy (para fundos claros)
//           'light' -> texto branco (para fundos escuros)
export default function Logo({ variant = 'dark', height = 40, withSlogan = false }) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#050B46'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.78)' : '#5A6072'

  return (
    <span className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={height}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#050B46" />
        <rect x="2" y="2" width="60" height="60" rx="14" stroke="#FF6500" strokeWidth="2.5" />
        <path
          d="M32 16 V48 M16 32 H48"
          stroke="#FF6500"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontWeight: 800,
            fontSize: height * 0.42,
            letterSpacing: '0.5px',
            color: textColor,
            fontFamily: 'Sora, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          MAIS
          <span style={{ color: '#FF6500', fontWeight: 800 }}> + </span>
          FÁCIL
        </span>
        {withSlogan && (
          <span
            style={{
              fontSize: height * 0.2,
              fontWeight: 500,
              color: subColor,
              letterSpacing: '0.3px',
              marginTop: 2,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Serviços Gráficos
          </span>
        )}
      </span>
    </span>
  )
}
