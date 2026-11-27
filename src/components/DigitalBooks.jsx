import { BookOpen, Gift, MessageCircle, ArrowRight } from 'lucide-react'
import WorkMockup from './WorkMockup.jsx'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/digitalbooks.css'

const BOOKS = [
  { variant: 'book', accent: 'navy', tone: 'dark', rot: -10, z: 1 },
  { variant: 'book', accent: 'royal', tone: 'dark', rot: -3, z: 2 },
  { variant: 'book', accent: 'blue', tone: 'dark', rot: 4, z: 3 },
  { variant: 'book', accent: 'mix', tone: 'dark', rot: 11, z: 4 },
]

export default function DigitalBooks() {
  return (
    <section className="section digital-books" id="livros">
      <span className="glow db__glow" aria-hidden="true" />
      <div className="container db__inner">
        {/* Texto + oferta */}
        <div className="db__content reveal">
          <span className="eyebrow"><BookOpen size={15} /> Livros Digitais</span>
          <h2 className="db__title">Conhecimento ao seu <span className="hl-grad">alcance!</span></h2>
          <p className="db__text">
            Temos mais de <strong>100 livros digitais</strong> disponíveis para si! Desenvolva os seus
            conhecimentos, melhore a sua vida financeira, os seus relacionamentos, a comunicação e o
            desenvolvimento pessoal.
          </p>

          <div className="db__promo">
            <div className="db__price">
              <span className="db__price-label">Promoção especial</span>
              <span className="db__price-value">10 LIVROS POR APENAS <b>1.000 Kz!</b></span>
            </div>

            <div className="db__free">
              <span className="db__free-icon"><Gift size={22} /></span>
              <p>
                Antes de efectuar a sua compra, oferecemos <b>1 livro à sua escolha</b>,
                totalmente <b>GRÁTIS!</b>
              </p>
            </div>
          </div>

          <a
            href={whatsappLink(wa.livros)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--yellow db__cta"
          >
            <MessageCircle /> Escolher o meu livro grátis <ArrowRight size={18} />
          </a>
        </div>

        {/* Composição visual de livros */}
        <div className="db__visual reveal d2" aria-hidden="true">
          <div className="db__stack">
            {BOOKS.map((b, i) => (
              <div
                key={i}
                className="db__book"
                style={{ transform: `rotate(${b.rot}deg)`, zIndex: b.z }}
              >
                <WorkMockup variant={b.variant} accent={b.accent} tone={b.tone} />
              </div>
            ))}
            <span className="db__free-tag">GRÁTIS</span>
          </div>
          <div className="db__device">
            <WorkMockup variant="social" accent="mix" />
            <span className="db__device-label">Leia onde quiser</span>
          </div>
        </div>
      </div>
    </section>
  )
}
