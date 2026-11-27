import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/whatsapp-float.css'

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = whatsappLink(wa.geral)

  return (
    <div className={`wa-float ${show ? 'is-visible' : ''}`}>
      <div className="wa-float__tip" role="tooltip">
        <strong>Gráfica Online BP</strong>
        <span>Olá! 👋 Fale com a gente pelo WhatsApp</span>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float__btn"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="wa-float__ping" aria-hidden="true" />
      </a>
    </div>
  )
}
