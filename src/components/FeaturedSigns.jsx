import { Check, MessageCircle } from 'lucide-react'
import signFoto from '../assets/images/sign-foto.jpg'
import signRefletora from '../assets/images/sign-refletora.jpg'
import signNormal from '../assets/images/sign-normal.jpg'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/featured.css'

const SIGNS = [
  {
    img: signFoto,
    tag: 'Brilham no escuro',
    title: 'Placas fotoluminescentes',
    desc: 'Sinalização de segurança e orientação que permanece visível mesmo sem luz.',
  },
  {
    img: signRefletora,
    tag: 'Visibilidade 24h',
    title: 'Placas refletoras',
    desc: 'Reflectem a luz dos faróis e mantêm a sua marca visível à distância, dia e noite.',
  },
  {
    img: signNormal,
    tag: 'Durabilidade e elegância',
    title: 'Placas normais',
    desc: 'Acabamento profissional em alumínio composto e PVC para a fachada do seu negócio.',
  },
]

export default function FeaturedSigns() {
  return (
    <section className="section featured" id="produtos">
      <span className="watermark" aria-hidden="true">PLACAS</span>

      <div className="container featured-grid">
        <div className="featured-copy">
          <SectionHeading
            onDark
            kicker="Especialistas em placas"
            title={
              <>
                PLACAS PUBLICITÁRIAS QUE <span className="hl">NÃO PASSAM DESPERCEBIDAS.</span>
              </>
            }
            desc="Fabricamos soluções de sinalização e publicidade visual para dar mais visibilidade ao seu negócio."
          />

          <ul className="featured-points">
            <li className="point">
              <span className="pi"><Check /></span>
              Produção própria com materiais resistentes
            </li>
            <li className="point">
              <span className="pi"><Check /></span>
              Medidas e acabamentos personalizados
            </li>
            <li className="point">
              <span className="pi"><Check /></span>
              Fabricação e montagem incluídas
            </li>
          </ul>

          <div className="featured-actions">
            <a
              className="btn btn-whatsapp btn-lg"
              href={whatsappLink(wa.placas)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              Quero encomendar a minha placa
            </a>
          </div>
        </div>

        <div className="signs-list">
          {SIGNS.map((s) => (
            <article className="sign-card reveal" key={s.title}>
              <img src={s.img} alt={s.title} loading="lazy" />
              <div className="sign-info">
                <span className="sign-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
