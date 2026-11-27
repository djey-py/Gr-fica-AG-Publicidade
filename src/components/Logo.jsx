// Logótipo da Gráfica Online BP.
// Marca: quadrado arredondado em gradiente azul com um "cartão/criação"
// branco e detalhe amarelo. O texto usa a tipografia do site (Sora).
// variant: 'dark' (fundo claro) | 'light' (fundo escuro)

export default function Logo({ variant = 'dark', height = 40 }) {
  const textColor = variant === 'light' ? '#ffffff' : '#071B65'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.72)' : '#5b647e'

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={height}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        role="img"
        aria-label="Gráfica Online BP"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bp-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0646C8" />
            <stop offset="1" stopColor="#087BFF" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#bp-g)" />
        <rect x="1" y="1" width="46" height="46" rx="13" fill="#071B65" opacity="0.12" />
        {/* cartão/criação branco */}
        <rect x="13" y="11" width="22" height="27" rx="4" fill="#fff" transform="rotate(-6 24 24)" />
        {/* detalhe amarelo */}
        <rect x="17" y="15.5" width="11" height="6.5" rx="2" fill="#FFD900" transform="rotate(-6 24 24)" />
        {/* linhas de texto no cartão */}
        <rect x="17" y="25" width="14" height="2.6" rx="1.3" fill="#0646C8" opacity="0.55" transform="rotate(-6 24 24)" />
        <rect x="17" y="30" width="9" height="2.6" rx="1.3" fill="#087BFF" opacity="0.5" transform="rotate(-6 24 24)" />
        {/* brilho */}
        <circle cx="36" cy="13" r="3" fill="#FFD900" />
      </svg>

      <span style={{ lineHeight: 1, fontFamily: 'Sora, sans-serif', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: 600, fontSize: height * 0.34, color: textColor, letterSpacing: '-0.01em' }}>
          Gráfica <span style={{ color: variant === 'light' ? '#FFD900' : '#087BFF' }}>Online</span>
        </span>
        <span style={{ fontWeight: 800, fontSize: height * 0.42, color: textColor, letterSpacing: '0.02em', marginTop: 1 }}>
          BP
        </span>
      </span>
    </span>
  )
}
