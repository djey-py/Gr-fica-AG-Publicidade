import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X, MessageCircle, ArrowUpRight } from 'lucide-react'
import WorkMockup from './WorkMockup.jsx'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/lightbox.css'

export default function Lightbox({ item, onClose }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!item) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="lightbox__dialog"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
          >
            <button className="lightbox__close" onClick={onClose} aria-label="Fechar">
              <X size={22} />
            </button>

            <div className="lightbox__media">
              <WorkMockup variant={item.variant} accent={item.accent} tone={item.tone || 'dark'} />
            </div>

            <div className="lightbox__info">
              <span className="lightbox__cat">{item.cat}</span>
              <h3>{item.title}</h3>
              <p>
                Demonstração visual das possibilidades de produção da Gráfica Online BP.
                Quer algo com esta qualidade para a sua marca? Fale connosco.
              </p>
              <a
                href={whatsappLink(wa.produto(item.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--yellow"
              >
                <MessageCircle /> Solicitar algo semelhante <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
