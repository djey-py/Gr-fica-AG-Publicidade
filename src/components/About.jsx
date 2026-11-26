import { aboutProducao, aboutEquipa } from '../assets/images.js'
import { getWhatsAppLink, wa } from '../utils/whatsapp.js'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import './../styles/about.css'

export default function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="sobre-title">
      <div className="about-grid">
        <div className="about-media reveal">
          <img className="about-img-main" src={aboutProducao} alt="Produção gráfica MAIS FÁCIL" loading="lazy" />
          <img className="about-img-sub" src={aboutEquipa} alt="Equipa e acabamentos MAIS FÁCIL" loading="lazy" />
          <span className="about-mark" aria-hidden="true">MAIS + FÁCIL</span>
        </div>

        <div className="about-content reveal">
          <SectionHeading
            align="left"
            eyebrow="Sobre nós"
            title="TRANSFORMAMOS A SUA IDEIA EM UMA REALIDADE."
          />
          <p className="about-text">
            Na MAIS FÁCIL, damos vida às suas ideias através de soluções gráficas criativas,
            modernas e de alta qualidade.
          </p>
          <p className="about-text">
            Oferecemos serviços de impressão, personalização e identidade visual, com
            profissionalismo, dedicação e compromisso com a satisfação dos nossos clientes.
          </p>
          <p className="about-text">
            Acreditamos que cada projeto merece atenção aos detalhes e uma solução à altura da
            sua visão.
          </p>
          <a
            className="btn btn-orange"
            href={getWhatsAppLink(wa.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a MAIS FÁCIL <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
