import { MessageCircle } from 'lucide-react'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import '../styles/whatsapp-float.css'

export default function WhatsAppFloat() {
  return (
    <div className="wa-float">
      <span className="wa-tip">Fale connosco pelo WhatsApp</span>
      <a
        className="wa-btn"
        href={whatsappLink(wa.geral)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a AG Publicidade no WhatsApp"
      >
        <MessageCircle />
      </a>
    </div>
  )
}
