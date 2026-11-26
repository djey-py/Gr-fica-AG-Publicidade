import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowDown } from 'lucide-react'
import { getWhatsAppLink } from '../utils/whatsapp.js'

const AUTOPLAY = 6500

export default function HeroSwiper({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const count = slides.length

  const goTo = useCallback(
    (i) => setIndex(((i % count) + count) % count),
    [count]
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Autoplay com pausa controlada pela interação do utilizador.
  useEffect(() => {
    if (paused) return
    timer.current = setTimeout(() => goTo(index + 1), AUTOPLAY)
    return () => clearTimeout(timer.current)
  }, [index, paused, goTo])

  // Navegação por teclado (quando o carrossel tem foco).
  const onKey = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  const scrollToServices = () => {
    const el = document.getElementById('servicos')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const slide = slides[index]

  return (
    <section
      className={`hero-swiper layout-${slide.layout}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onKeyDown={onKey}
      aria-roledescription="carrossel"
      aria-label="Destaques de serviços"
      tabIndex={0}
    >
      {/* Camadas decorativas (diagonais em laranja) */}
      <span className="hero-diag hero-diag-1" aria-hidden="true" />
      <span className="hero-diag hero-diag-2" aria-hidden="true" />
      <span className="hero-glow" aria-hidden="true" />

      <div className="hero-track">
        <article
          className="hero-slide"
          key={index}
          aria-hidden={false}
        >
          {slide.layout === 'split' ? (
            <div className="hero-split">
              <div className="hero-split-content">
                <span className="hero-eyebrow">{slide.eyebrow}</span>
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-desc">{slide.description}</p>
                <div className="hero-actions">
                  <a
                    className="btn btn-orange"
                    href={getWhatsAppLink(slide.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar orçamento
                  </a>
                  <button className="btn btn-ghost-light" onClick={scrollToServices}>
                    Conhecer serviços <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="hero-split-media">
                <img src={slide.image} alt={slide.eyebrow} loading="eager" />
                <span className="hero-media-badge">MAIS FÁCIL</span>
              </div>
            </div>
          ) : (
            <>
            <div
              className={`hero-bg align-${slide.layout}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden="true"
            />
              <div className={`hero-overlay align-${slide.layout}`}>
              <div className="hero-content">
                <span className="hero-eyebrow">{slide.eyebrow}</span>
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-desc">{slide.description}</p>
                <div className="hero-actions">
                  <a
                    className="btn btn-orange"
                    href={getWhatsAppLink(slide.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar orçamento
                  </a>
                  <button className="btn btn-ghost-light" onClick={scrollToServices}>
                    Conhecer serviços <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            </>
          )}
        </article>
      </div>

      {/* Navegação anterior / seguinte */}
      <button className="hero-nav hero-prev" onClick={prev} aria-label="Slide anterior">
        <ChevronLeft size={26} />
      </button>
      <button className="hero-nav hero-next" onClick={next} aria-label="Slide seguinte">
        <ChevronRight size={26} />
      </button>

      {/* Indicadores de progresso (clicáveis) */}
      <div className="hero-progress" role="tablist" aria-label="Selecionar slide">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={s.eyebrow}
          >
            <span
              className="hero-dot-fill"
              style={i === index ? { animationDuration: `${AUTOPLAY}ms` } : undefined}
            />
          </button>
        ))}
      </div>

      <button className="hero-scroll" onClick={scrollToServices} aria-label="Ir para os serviços">
        <ArrowDown size={20} />
      </button>
    </section>
  )
}
