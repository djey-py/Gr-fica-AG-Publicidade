import { MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react'
import { getWhatsAppLink, wa, PHONE_DISPLAY, PHONE_ALT_DISPLAY } from '../utils/whatsapp.js'
import SectionHeading from './SectionHeading.jsx'
import './../styles/contact.css'

const ADDRESS = 'Município do Kilamba Kiaxi, Distrito Urbano do Palanca, Rua L, junto à loja da Stara.'

export default function Contact() {
  return (
    <section id="contactos" className="contact" aria-labelledby="contactos-title">
      <SectionHeading
        eyebrow="Contactos"
        title="VAMOS CRIAR ALGO JUNTOS?"
        subtitle="Fale com a MAIS FÁCIL e transforme a sua ideia num projecto real. Atendemos pelo WhatsApp e por telefone."
      />

      <div className="contact-grid">
        <a
          className="contact-card reveal"
          href={getWhatsAppLink(wa.geral)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon contact-icon--wa">
            <MessageCircle size={26} strokeWidth={2} />
          </span>
          <h3>WhatsApp</h3>
          <p>{PHONE_DISPLAY}</p>
          <span className="contact-link">
            Iniciar conversa <ArrowRight size={16} />
          </span>
        </a>

        <a className="contact-card reveal" href={`tel:+244${PHONE_DISPLAY.replace(/\s/g, '')}`}>
          <span className="contact-icon contact-icon--phone">
            <Phone size={26} strokeWidth={2} />
          </span>
          <h3>Telefone</h3>
          <p>{PHONE_DISPLAY}</p>
          <p className="contact-alt">Alt: {PHONE_ALT_DISPLAY}</p>
          <span className="contact-link">
            Ligar diretamente <ArrowRight size={16} />
          </span>
        </a>

        <div className="contact-card reveal">
          <span className="contact-icon contact-icon--pin">
            <MapPin size={26} strokeWidth={2} />
          </span>
          <h3>Localização</h3>
          <p className="contact-address">{ADDRESS}</p>
        </div>
      </div>

      {/* Representação visual da localização (sem coordenadas inventadas). */}
      <div className="contact-map reveal" role="img" aria-label={`Localização: ${ADDRESS}`}>
        <svg viewBox="0 0 800 320" className="map-svg" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="320" fill="#09165B" />
          <g stroke="#1B2A7A" strokeWidth="14" opacity="0.9">
            <line x1="0" y1="90" x2="800" y2="70" />
            <line x1="0" y1="210" x2="800" y2="240" />
            <line x1="160" y1="0" x2="190" y2="320" />
            <line x1="520" y1="0" x2="560" y2="320" />
          </g>
          <g stroke="#FF6500" strokeWidth="4" opacity="0.5" strokeDasharray="2 14">
            <line x1="0" y1="150" x2="800" y2="150" />
            <line x1="350" y1="0" x2="350" y2="320" />
          </g>
          <circle cx="400" cy="160" r="46" fill="#FF6500" opacity="0.18" />
          <circle cx="400" cy="160" r="22" fill="#FF6500" />
          <path d="M400 182 L400 205" stroke="#FF6500" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <div className="map-label">
          <MapPin size={18} />
          <span>{ADDRESS}</span>
        </div>
      </div>
    </section>
  )
}
