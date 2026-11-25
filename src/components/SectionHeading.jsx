export default function SectionHeading({ kicker, title, desc, center = false, onDark = false }) {
  return (
    <div
      className={`section-head reveal ${center ? 'center' : ''} ${onDark ? 'on-dark' : ''}`}
    >
      <span className="kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  )
}
