import {
  ArrowRight,
  BadgeCheck,
  Lightbulb,
  MapPin,
  MessageCircle,
  Shirt,
  Signpost,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import heroMain from '../assets/images/hero-main.jpg'
import heroPanel from '../assets/images/hero-panel.jpg'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import '../styles/hero.css'

const TICKER = [
  'Placas publicitárias',
  'Painéis luminosos',
  'Letras 3D',
  'Impressão de lonas',
  'Banners',
  'Roll-up',
  'Estampagem',
  'Bordados',
  'Serigrafia',
  'Cartões de visita',
  'Uniformes personalizados',
  'Sacolas personalizadas',
]

export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-badge hero-anim a1">
              <Sparkles />
              Gráfica &amp; Comunicação Visual · Luanda
            </span>

            <h1 className="hero-title hero-anim a2">
              DA SUA IDEIA À REALIDADE.{' '}
              <span className="hl">NÓS DAMOS VIDA À SUA MARCA.</span>
            </h1>

            <p className="hero-sub hero-anim a3">
              Transformamos ideias em comunicação visual de impacto. Da impressão à
              publicidade exterior, criamos soluções que fazem a sua empresa destacar-se.
            </p>

            <div className="hero-actions hero-anim a4">
              <a
                className="btn btn-whatsapp btn-lg"
                href={whatsappLink(wa.geral)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                Solicitar orçamento
              </a>
              <a className="btn btn-ghost btn-lg" href="#servicos">
                Explorar serviços
                <ArrowRight />
              </a>
            </div>

            <ul className="hero-trust hero-anim a5">
              <li className="trust-item">
                <span className="ti"><BadgeCheck /></span>
                Impressão de qualidade
              </li>
              <li className="trust-item">
                <span className="ti"><SlidersHorizontal /></span>
                Soluções personalizadas
              </li>
              <li className="trust-item">
                <span className="ti"><MapPin /></span>
                Atendimento em Luanda
              </li>
            </ul>
          </div>

          <div className="hero-visual hero-anim a5">
            <figure className="hero-photo">
              <img
                src={heroMain}
                alt="Impressão de grande formato na produção da AG Publicidade"
                loading="eager"
              />
            </figure>

            <figure className="hero-card">
              <img
                src={heroPanel}
                alt="Painel luminoso fabricado pela AG Publicidade"
                loading="eager"
              />
            </figure>

            <div className="hero-chip c1">
              <span className="ci"><Signpost /></span>
              Placas publicitárias
            </div>
            <div className="hero-chip c2">
              <span className="ci"><Lightbulb /></span>
              Painéis luminosos
            </div>
            <div className="hero-chip c3">
              <span className="ci"><Shirt /></span>
              Uniformes personalizados
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((dup) => (
            <div className="ticker-group" key={dup}>
              {TICKER.map((t) => (
                <span className="tick" key={t}>
                  {t}
                  <i>✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
