import { useState } from 'react'
import { categories, portfolio } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Lightbox from './Lightbox.jsx'
import './../styles/portfolio.css'

export default function Portfolio() {
  const [active, setActive] = useState('Todos')
  const [selected, setSelected] = useState(null)

  const filtered =
    active === 'Todos' ? portfolio : portfolio.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="portfolio" aria-labelledby="portfolio-title">
      <SectionHeading
        eyebrow="Portfólio"
        title="CRIATIVIDADE QUE SE VÊ."
        subtitle="Cada trabalho é uma oportunidade para transformar uma ideia numa solução visual de qualidade."
      />

      <div className="portfolio-filters" role="tablist" aria-label="Filtrar por categoria">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'is-active' : ''}`}
            onClick={() => setActive(cat)}
            role="tab"
            aria-selected={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid" key={active}>
        {filtered.map((item, i) => (
          <button
            key={item.id}
            className={`portfolio-item size-${item.size} reveal`}
            style={{ transitionDelay: `${i * 50}ms` }}
            onClick={() => setSelected(item)}
            aria-label={`Abrir ${item.title}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <span className="portfolio-overlay">
              <span className="portfolio-cat">{item.category}</span>
              <span className="portfolio-title">{item.title}</span>
            </span>
          </button>
        ))}
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
