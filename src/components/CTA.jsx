import { ArrowRight } from 'lucide-react'
import { heroEmpresarial } from '../assets/images.js'
import { getWhatsAppLink, wa } from '../utils/whatsapp.js'
import './../styles/cta.css'

export default function CTA() {
  const scrollToServices = () => {
    const el = document.getElementById('servicos')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="cta" aria-labelledby="cta-title">
      <span className="cta-diag" aria-hidden="true" />
      <span className="cta-glow" aria-hidden="true" />
      <div className="cta-inner">
        <div className="cta-content reveal">
          <span className="cta-eyebrow">Prontos a ajudar</span>
          <h2 id="cta-title" className="cta-title">
            A SUA IDEIA MERECE SAIR DO PAPEL.
          </h2>
          <p className="cta-text">
            Tem um projecto em mente? Precisa de materiais gráficos para a sua empresa ou de
            produtos personalizados? Estamos prontos para ajudar.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-orange btn-lg"
              href={getWhatsAppLink(wa.geral)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir orçamento pelo WhatsApp
            </a>
            <button className="btn btn-ghost-light btn-lg" onClick={scrollToServices}>
              Explorar serviços <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="cta-media reveal">
          <img src={heroEmpresarial} alt="Soluções gráficas empresariais MAIS FÁCIL" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
