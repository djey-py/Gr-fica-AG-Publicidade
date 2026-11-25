import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { portfolioCats, portfolioItems } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Lightbox from './Lightbox.jsx'
import '../styles/portfolio.css'

export default function Portfolio() {
  const [filter, setFilter] = useState('Todos')
  const [current, setCurrent] = useState(null)

  const items =
    filter === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((p) => p.cat === filter)

  const openItem = (i) => setCurrent(i)

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <SectionHeading
          center
          kicker="Portfólio"
          title="IDEIAS QUE GANHAM VIDA."
          desc="Conheça algumas das possibilidades que podemos criar para valorizar a sua marca."
        />

        <div className="pf-filters reveal" role="group" aria-label="Filtrar portfólio">
          {portfolioCats.map((c) => (
            <button
              key={c}
              type="button"
              className={`pf-filter ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="pf-grid reveal">
          {items.map((item, i) => (
            <div
              className={`pf-item ${item.span}`}
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`Ampliar: ${item.title}`}
              onClick={() => openItem(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openItem(i)
                }
              }}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
              <span className="pf-zoom"><ZoomIn /></span>
              <span className="pf-meta">
                <span className="cat">{item.cat}</span>
                <h3>{item.title}</h3>
              </span>
            </div>
          ))}
        </div>

        <p className="pf-note reveal">
          Galeria de demonstração — cada projecto é desenvolvido à medida de cada cliente.
        </p>
      </div>

      {current !== null && (
        <Lightbox
          items={items}
          index={current}
          onClose={() => setCurrent(null)}
          onNav={(d) =>
            setCurrent((c) => (c + d + items.length) % items.length)
          }
        />
      )}
    </section>
  )
}
