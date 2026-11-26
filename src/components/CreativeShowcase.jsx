import {
  heroPersonalizacao,
  heroIdentidade,
  svcBrindes,
  heroPublicidade,
  pfGifts,
  svcIdentificacao,
  svcCarimbos,
} from '../assets/images.js'
import SectionHeading from './SectionHeading.jsx'
import './../styles/creative.css'

const TILES = [
  { src: heroPersonalizacao, label: 'T-shirts personalizadas', cls: 't-a' },
  { src: heroIdentidade, label: 'Cartões de visita', cls: 't-b' },
  { src: svcBrindes, label: 'Canecas', cls: 't-c' },
  { src: heroPublicidade, label: 'Banners', cls: 't-d' },
  { src: pfGifts, label: 'Sacos personalizados', cls: 't-e' },
  { src: svcIdentificacao, label: 'Crachás', cls: 't-f' },
  { src: svcCarimbos, label: 'Blocos de factura', cls: 't-g' },
]

export default function CreativeShowcase() {
  return (
    <section id="produtos" className="creative" aria-labelledby="produtos-title">
      <div className="creative-head">
        <SectionHeading
          dark
          eyebrow="A nossa criatividade"
          title="DA IDEIA À PRODUÇÃO. FAZEMOS ACONTECER."
          subtitle="Desde a criação do design até à produção final, oferecemos soluções que ajudam a sua marca a comunicar com qualidade e personalidade."
        />
      </div>

      <div className="creative-grid">
        {TILES.map((t, i) => (
          <figure key={t.label} className={`creative-tile reveal ${t.cls}`} style={{ transitionDelay: `${i * 60}ms` }}>
            <img src={t.src} alt={t.label} loading="lazy" />
            <figcaption>{t.label}</figcaption>
            <span className="creative-tile-num">{String(i + 1).padStart(2, '0')}</span>
          </figure>
        ))}
      </div>
    </section>
  )
}
