import { MessageCircle } from 'lucide-react'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import '../styles/cta.css'

export default function CTA() {
  return (
    <section className="section cta" id="fale-connosco">
      <span className="cta-circle c1" aria-hidden="true" />
      <span className="cta-circle c2" aria-hidden="true" />

      <div className="container cta-inner">
        <span className="kicker kicker-center reveal">Vamos conversar</span>

        <h2 className="cta-title reveal" data-delay="1">
          A SUA PRÓXIMA IDEIA <span className="hl">COMEÇA AQUI.</span>
        </h2>

        <p className="cta-text reveal" data-delay="2">
          Precisa de uma placa, um painel luminoso, uniformes personalizados ou materiais
          gráficos? Fale connosco e solicite o seu orçamento.
        </p>

        <div className="cta-actions reveal" data-delay="3">
          <a
            className="btn btn-whatsapp btn-lg"
            href={whatsappLink(wa.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
            FALAR COM A AG PUBLICIDADE
          </a>
        </div>

        <p className="cta-note reveal" data-delay="4">
          Atendimento directo e resposta rápida pelo WhatsApp.
        </p>
      </div>
    </section>
  )
}
