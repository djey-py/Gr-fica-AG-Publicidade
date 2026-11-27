import { MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/contact.css'

const MAP_SRC =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Escongolense, Rua C9 de Cima, Angola') +
  '&output=embed'

export default function Contact() {
  return (
    <section className="section contact" id="contactos">
      <div className="container">
        <SectionHeading
          eyebrow="Contactos"
          title={<>Vamos transformar a sua <span className="hl-e">ideia</span> em realidade.</>}
          subtitle="Fale connosco pelo WhatsApp ou visite-nos. Estamos prontos para criar a solução visual ideal para o seu negócio."
        />

        <div className="contact__grid reveal d1">
          <div className="contact__info">
            <a
              href={whatsappLink(wa.orcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__wa"
            >
              <span className="contact__wa-icon"><MessageCircle size={26} /></span>
              <span className="contact__wa-text">
                <strong>Fale pelo WhatsApp</strong>
                <span>+244 976 508 422</span>
              </span>
              <ExternalLink size={18} className="contact__wa-arrow" />
            </a>

            <ul className="contact__list">
              <li>
                <span className="contact__list-icon"><MapPin size={20} /></span>
                <div>
                  <strong>Localização</strong>
                  <p>Escongolense, Rua C9 de Cima</p>
                </div>
              </li>
              <li>
                <span className="contact__list-icon"><Clock size={20} /></span>
                <div>
                  <strong>Atendimento</strong>
                  <p>Contacte-nos a qualquer altura via WhatsApp</p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink(wa.orcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--block contact__cta"
            >
              <MessageCircle /> Solicitar Orçamento
            </a>
          </div>

          <div className="contact__map">
            <iframe
              title="Localização da Gráfica Online BP"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="contact__map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Escongolense, Rua C9 de Cima, Angola')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
