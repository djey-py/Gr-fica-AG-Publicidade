import { useEffect } from 'react'
import { X } from 'lucide-react'
import './../styles/lightbox.css'

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = item ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox-close" aria-label="Fechar" onClick={onClose}>
        <X size={24} />
      </button>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title} />
        <figcaption>
          <span className="lightbox-cat">{item.category}</span>
          <h3>{item.title}</h3>
          <p>Imagem demonstrativa — não representa um trabalho efectivamente realizado pela MAIS FÁCIL.</p>
        </figcaption>
      </figure>
    </div>
  )
}
