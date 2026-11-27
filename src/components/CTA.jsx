import { MessageCircle, ArrowRight } from 'lucide-react'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/cta.css'

export default function CTA() {
  return (
    <section className="section cta" id="falar">
      <span className="glow cta__glow-1" aria-hidden="true" />
      <span className="glow cta__glow-2" aria-hidden="true" />
      <div className="container cta__inner reveal">
        <span className="eyebrow"><MessageCircle size={15} /> Vamos trabalhar juntos</span>
        <h2 className="cta__title">
          A sua próxima grande <span className="hl-grad">ideia</span> começa aqui!
        </h2>
        <p className="cta__text">
          Tem um projecto em mente? Vamos transformar a sua ideia numa solução visual
          que faça a diferença.
        </p>
        <a
          href={whatsappLink(wa.especialista)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--yellow cta__btn"
        >
          <MessageCircle /> Falar com um especialista <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
