import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink, wa, PHONE_DISPLAY } from '../utils/whatsapp.js'
import './../styles/whatsapp.css'

// Botão flutuante de WhatsApp — sempre acessível (desktop e mobile).
export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={getWhatsAppLink(wa.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a MAIS FÁCIL no WhatsApp: ${PHONE_DISPLAY}`}
    >
      <span className="wa-float-pulse" aria-hidden="true" />
      <MessageCircle size={28} strokeWidth={2.2} />
      <span className="wa-float-label">Fale connosco</span>
    </a>
  )
}
