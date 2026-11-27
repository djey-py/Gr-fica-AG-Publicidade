// Cabeçalho reutilizável de secção.
// title e subtitle aceitam JSX (ex.: <span className="hl">...</span>).
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  return (
    <header
      className={`section-heading ${align} ${light ? 'is-light' : ''} ${className}`}
    >
      {eyebrow && <span className="eyebrow reveal">{eyebrow}</span>}
      <h2 className="section-heading__title reveal d1">{title}</h2>
      {subtitle && <p className="section-heading__sub reveal d2">{subtitle}</p>}
    </header>
  )
}
