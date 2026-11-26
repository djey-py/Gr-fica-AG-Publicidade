import { ArrowRight, PenTool, Printer, Megaphone, Shirt, Stamp, CreditCard, Gift, Sparkles } from 'lucide-react'
import { services, getWhatsAppLink } from '../data/services.js'
import SectionHeading from './SectionHeading.jsx'
import './../styles/services.css'

const ICONS = {
  PenTool,
  Printer,
  Megaphone,
  Shirt,
  Stamp,
  CreditCard,
  Gift,
  Sparkles,
}

export default function Services() {
  return (
    <section id="servicos" className="services" aria-labelledby="servicos-title">
      <div className="services-head">
        <SectionHeading
          eyebrow="O que fazemos"
          title="TUDO O QUE PRECISA. NUM SÓ LUGAR."
          subtitle="Oferecemos soluções gráficas completas para dar mais visibilidade à sua marca e transformar as suas ideias em realidade."
        />
      </div>

      <div className="services-grid">
        {services.map((svc, i) => (
          <article
            key={svc.id}
            className="service-card reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="service-media">
              <img src={svc.image} alt={svc.name} loading="lazy" />
              <span className="service-icon" aria-hidden="true">
                {(() => {
                  const Icon = ICONS[svc.icon]
                  return Icon ? <Icon size={26} strokeWidth={2} /> : null
                })()}
              </span>
            </div>
            <div className="service-body">
              <h3 className="service-name">{svc.name}</h3>
              <p className="service-short">{svc.short}</p>
              <ul className="service-items">
                {svc.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a
                className="btn btn-orange btn-block"
                href={getWhatsAppLink(svc.message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir orçamento <ArrowRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
