import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import '../styles/lightbox.css'

export default function Lightbox({ items, index, onClose, onNav }) {
  const item = items[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNav])

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={onClose}>
      <span className="lb-count">{index + 1} / {items.length}</span>

      <button
        type="button"
        className="lb-btn lb-close"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X />
      </button>

      <button
        type="button"
        className="lb-btn lb-prev"
        onClick={(e) => { e.stopPropagation(); onNav(-1) }}
        aria-label="Imagem anterior"
      >
        <ChevronLeft />
      </button>

      <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.img} alt={item.title} />
        <figcaption className="lb-cap">
          <span className="cat">{item.cat}</span>
          <h3>{item.title}</h3>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lb-btn lb-next"
        onClick={(e) => { e.stopPropagation(); onNav(1) }}
        aria-label="Imagem seguinte"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
