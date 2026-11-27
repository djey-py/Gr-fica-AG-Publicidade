import { useId } from 'react'

// Gera "trabalhos" gráficos ilustrativos em SVG, sempre nítidos e on-brand.
// Usado na secção de Portfólio e em ilustrações de serviços.
// variant: flyer | poster | card | logo | social | book | banner | invite
// tone: escuro (texto branco) | claro (texto navy)

const PALETTES = {
  blue: { a: '#087BFF', b: '#0646C8', c: '#4DA3FF' },
  navy: { a: '#0a236f', b: '#071B65', c: '#087BFF' },
  yellow: { a: '#FFD900', b: '#FFB800', c: '#FFF1A8' },
  royal: { a: '#0646C8', b: '#0a236f', c: '#6FA8FF' },
  mix: { a: '#087BFF', b: '#071B65', c: '#FFD900' },
}

function dims(variant) {
  switch (variant) {
    case 'poster': return [400, 300]
    case 'card': return [360, 210]
    case 'logo': return [320, 320]
    case 'social': return [320, 320]
    case 'book': return [300, 400]
    case 'banner': return [480, 200]
    case 'invite': return [300, 400]
    case 'flyer':
    default: return [300, 400]
  }
}

function LogoChip({ x, y, s = 26, id, c }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={s} height={s} rx={s * 0.28} fill={`url(#${id})`} />
      <circle cx={s * 0.32} cy={s * 0.34} r={s * 0.12} fill={c} />
      <rect x={s * 0.32} y={s * 0.52} width={s * 0.42} height={s * 0.1} rx={s * 0.05} fill="#fff" opacity="0.85" />
    </g>
  )
}

function Bars({ x, y, w, rows, gap = 11, h = 8, color = '#fff', op = 0.85 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {rows.map((rw, i) => (
        <rect
          key={i}
          x={0}
          y={i * gap}
          width={i === rows.length - 1 ? w * 0.6 : w}
          height={h}
          rx={h / 2}
          fill={color}
          opacity={op - i * 0.12}
        />
      ))}
    </g>
  )
}

export default function WorkMockup({ variant = 'flyer', tone = 'dark', accent = 'blue', className = '' }) {
  const uid = useId().replace(/:/g, '')
  const p = PALETTES[accent] || PALETTES.blue
  const [W, H] = dims(variant)
  const txt = tone === 'light' ? '#071B65' : '#ffffff'
  const sub = tone === 'light' ? 'rgba(7,27,101,0.6)' : 'rgba(255,255,255,0.75)'
  const gid = `g${uid}`
  const gid2 = `g2${uid}`

  const defs = (
    <defs>
      <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={p.a} />
        <stop offset="1" stopColor={p.b} />
      </linearGradient>
      <linearGradient id={gid2} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={p.c} />
        <stop offset="1" stopColor={p.a} />
      </linearGradient>
      <radialGradient id={`r${uid}`} cx="0.8" cy="0.15" r="0.9">
        <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
  )

  let body = null

  if (variant === 'flyer') {
    body = (
      <>
        <rect width={W} height={H} fill={`url(#${gid})`} />
        <circle cx={W * 0.82} cy={H * 0.16} r={W * 0.5} fill={`url(#r${uid})`} />
        <LogoChip x={24} y={24} id={gid} c={p.c} s={30} />
        <circle cx={W * 0.7} cy={H * 0.42} r={60} fill={p.c} opacity="0.22" />
        <rect x={24} y={H * 0.58} width={W - 48} height={H * 0.26} rx={14} fill="#fff" opacity="0.12" />
        <Bars x={24} y={H * 0.62} w={W - 48} rows={[0, 0, 0]} color={txt} op={0.95} />
        <rect x={24} y={H * 0.9} width={90} height={14} rx={7} fill="#FFD900" />
      </>
    )
  } else if (variant === 'poster') {
    body = (
      <>
        <rect width={W} height={H} fill={`url(#${gid2})`} />
        <circle cx={W * 0.2} cy={H * 0.3} r={70} fill="#FFD900" opacity="0.9" />
        <polygon points={`${W * 0.55},${H * 0.1} ${W * 0.95},${H * 0.1} ${W * 0.75},${H * 0.95} ${W * 0.35},${H * 0.95}`} fill="#fff" opacity="0.12" />
        <LogoChip x={28} y={26} id={gid} c={p.c} s={30} />
        <Bars x={28} y={H * 0.5} w={W * 0.5} rows={[0, 0, 0]} color={txt} op={0.95} />
        <rect x={28} y={H * 0.82} width={120} height={14} rx={7} fill="#FFD900" />
      </>
    )
  } else if (variant === 'card') {
    body = (
      <>
        <rect width={W} height={H} rx={20} fill={`url(#${gid})`} />
        <circle cx={W * 0.85} cy={H * 0.2} r={W * 0.4} fill={`url(#r${uid})`} />
        <LogoChip x={26} y={26} id={gid} c={p.c} s={34} />
        <Bars x={26} y={H * 0.6} w={W * 0.45} rows={[0, 0]} color={txt} op={0.9} h={7} gap={10} />
        <rect x={W - 70} y={H - 46} width={46} height={30} rx={6} fill="#FFD900" />
      </>
    )
  } else if (variant === 'logo') {
    body = (
      <>
        <rect width={W} height={H} fill={tone === 'light' ? '#f4f7fd' : '#0a1740'} />
        <circle cx={W / 2} cy={H / 2} r={W * 0.28} fill={`url(#${gid})`} />
        <text x={W / 2} y={H / 2 + 14} textAnchor="middle" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="64" fill="#fff">BP</text>
        <Bars x={40} y={H - 60} w={W - 80} rows={[0]} color={sub} op={0.7} h={6} gap={0} />
        <circle cx={W * 0.2} cy={H * 0.2} r={14} fill="#FFD900" />
      </>
    )
  } else if (variant === 'social') {
    body = (
      <>
        <rect width={W} height={H} fill="#0a1740" />
        {/* telemóvel */}
        <rect x={W / 2 - 78} y={18} width={156} height={H - 36} rx={24} fill="#fff" />
        <rect x={W / 2 - 68} y={30} width={136} height={H - 84} rx={12} fill={`url(#${gid})`} />
        <circle cx={W / 2} cy={46} r={W * 0.16} fill={`url(#r${uid})`} />
        <LogoChip x={W / 2 - 22} y={44} id={gid} c={p.c} s={30} />
        <Bars x={W / 2 - 58} y={H * 0.66} w={116} rows={[0, 0]} color="#fff" op={0.9} h={6} gap={9} />
        <circle cx={W / 2} cy={H - 40} r={13} fill="#FFD900" />
      </>
    )
  } else if (variant === 'book') {
    body = (
      <>
        <rect width={W * 0.86} height={H} fill={`url(#${gid})`} />
        <rect x={W * 0.86} width={W * 0.14} height={H} fill="#04133f" />
        <circle cx={W * 0.45} cy={H * 0.22} r={W * 0.34} fill="#FFD900" opacity="0.92" />
        <LogoChip x={24} y={28} id={gid} c={p.c} s={30} />
        <Bars x={24} y={H * 0.62} w={W * 0.66} rows={[0, 0, 0]} color={txt} op={0.9} />
        <rect x={24} y={H * 0.88} width={100} height={12} rx={6} fill="#fff" opacity="0.5" />
      </>
    )
  } else if (variant === 'banner') {
    body = (
      <>
        <rect width={W} height={H} fill={`url(#${gid2})`} />
        <circle cx={W * 0.1} cy={H * 0.5} r={H * 0.9} fill={`url(#r${uid})`} />
        <LogoChip x={28} y={H / 2 - 16} id={gid} c={p.c} s={32} />
        <Bars x={72} y={H / 2 - 14} w={W * 0.4} rows={[0, 0]} color={txt} op={0.9} h={7} gap={10} />
        <rect x={W - 150} y={H / 2 - 18} width={120} height={36} rx={18} fill="#FFD900" />
      </>
    )
  } else if (variant === 'invite') {
    body = (
      <>
        <rect width={W} height={H} fill={`url(#${gid})`} />
        <circle cx={W / 2} cy={H * 0.34} r={W * 0.26} fill="#FFD900" opacity="0.92" />
        <circle cx={W / 2} cy={H * 0.34} r={W * 0.18} fill="#fff" opacity="0.18" />
        <Bars x={W * 0.2} y={H * 0.58} w={W * 0.6} rows={[0, 0, 0]} color={txt} op={0.92} h={9} gap={14} />
        <rect x={W * 0.34} y={H * 0.9} width={W * 0.32} height={6} rx={3} fill="#FFD900" />
      </>
    )
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {defs}
      {body}
    </svg>
  )
}
