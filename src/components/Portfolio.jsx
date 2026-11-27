import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import WorkMockup from './WorkMockup.jsx'
import Lightbox from './Lightbox.jsx'
import { portfolioItems, portfolioCats } from '../data/portfolio.js'
import '../styles/portfolio.css'

export default function Portfolio() {
  const [cat, setCat] = useState('Todos')
  const [active, setActive] = useState(null)

  const filtered =
    cat === 'Todos' ? portfolioItems : portfolioItems.filter((p) => p.cat === cat)

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Portfólio"
          title={<>Criatividade que se transforma em <span className="hl-e">resultados.</span></>}
          subtitle="Uma vitrine visual das possibilidades de produção da Gráfica Online BP — flyers, cartazes, identidades, redes sociais e muito mais."
        />

        <div className="portfolio__filters reveal d1" role="tablist" aria-label="Categorias do portfólio">
          {portfolioCats.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              className={`portfolio__filter ${cat === c ? 'is-active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((p, i) => (
            <button
              key={p.id}
              className={`pf-item pf-item--${p.span} reveal d${(i % 5) + 1}`}
              onClick={() => setActive(p)}
              aria-label={`Ver ${p.title}`}
            >
              <div className="pf-item__media">
                <WorkMockup variant={p.variant} accent={p.accent} tone={p.tone || 'dark'} />
              </div>
              <span className="pf-item__overlay">
                <Maximize2 size={20} />
                <span className="pf-item__title">{p.title}</span>
                <span className="pf-item__cat">{p.cat}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  )
}
