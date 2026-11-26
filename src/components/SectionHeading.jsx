// Cabeçalho de secção reutilizável (título + subtítulo + pequeno indicador).
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  return (
    <div
      className={`section-heading reveal ${align === 'left' ? 'is-left' : ''} ${dark ? 'is-dark' : ''}`}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          <span className="section-eyebrow-dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
