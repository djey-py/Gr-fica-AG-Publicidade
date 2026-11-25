import { BadgeCheck, SlidersHorizontal, Sparkles, Zap } from 'lucide-react'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import aboutWorkshop from '../assets/images/about-workshop.jpg'
import aboutPress from '../assets/images/about-press.jpg'
import SectionHeading from './SectionHeading.jsx'
import '../styles/about.css'

const FEATURES = [
  { icon: Sparkles, title: 'Criatividade', desc: 'Concepção original para cada marca' },
  { icon: BadgeCheck, title: 'Qualidade', desc: 'Materiais e acabamentos garantidos' },
  { icon: Zap, title: 'Rapidez', desc: 'Prazos curtos sem perder o detalhe' },
  { icon: SlidersHorizontal, title: 'Soluções personalizadas', desc: 'Cada projecto feito à medida' },
]

export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-grid">
        <div className="about-media reveal">
          <span className="am-frame" aria-hidden="true" />
          <img
            className="am-main"
            src={aboutWorkshop}
            alt="Equipa da AG Publicidade a controlar a qualidade de uma impressão de grande formato"
            loading="lazy"
          />
          <span className="am-back">
            <img
              src={aboutPress}
              alt="Impressão industrial na oficina da AG Publicidade"
              loading="lazy"
            />
          </span>
          <span className="am-badge">
            <BadgeCheck />
            Qualidade garantida
          </span>
        </div>

        <div className="about-copy">
          <SectionHeading
            kicker="Sobre nós"
            title={
              <>
                A PUBLICIDADE <span className="hl">MORA AQUI.</span>
              </>
            }
            desc="Somos a AG Publicidade, uma empresa dedicada à criação, fabricação, impressão e montagem de soluções publicitárias. Trabalhamos para transformar ideias em resultados visuais de qualidade, ajudando empresas e particulares a comunicar melhor as suas marcas."
          />

          <div className="about-tags reveal" data-delay="1">
            <span className="tag">Designer</span>
            <span className="tag">Criação</span>
            <span className="tag">Fabricação</span>
            <span className="tag">Montagem</span>
            <span className="tag">&amp; Qualidade</span>
          </div>

          <div className="about-features reveal" data-delay="2">
            {FEATURES.map((f) => (
              <div className="af" key={f.title}>
                <span className="afi"><f.icon /></span>
                <span>
                  <strong>{f.title}</strong>
                  <small>{f.desc}</small>
                </span>
              </div>
            ))}
          </div>

          <div className="about-actions reveal" data-delay="3">
            <a
              className="btn btn-primary"
              href={whatsappLink(wa.geral)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale connosco
            </a>
            <a className="btn btn-ghost" href="#portfolio">Ver portfólio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
