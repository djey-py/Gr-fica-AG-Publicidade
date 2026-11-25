import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import qrWhatsapp from '../assets/images/qr-whatsapp.png'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/contact.css'

const MAP_SRC =
  'https://maps.google.com/maps?q=Kilamba%20Vila%20Flor%2C%20Luanda%2C%20Angola&t=&z=13&ie=UTF8&iwloc=&output=embed'

export default function Contact() {
  return (
    <section className="section contact" id="contactos">
      <div className="container">
        <SectionHeading
          center
          kicker="Contactos"
          title="VAMOS DAR VIDA À SUA IDEIA?"
          desc="Fale directamente com a nossa equipa e receba o orçamento do seu projecto."
        />

        <div className="contact-grid">
          <div className="c-cards">
            <article className="c-card reveal">
              <span className="c-ico green"><MessageCircle /></span>
              <span>
                <span className="c-label">WhatsApp</span>
                <span className="c-value">956 967 295</span>
              </span>
              <a
                className="btn-mini green"
                href={whatsappLink(wa.geral)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir WhatsApp
              </a>
            </article>

            <article className="c-card reveal" data-delay="1">
              <span className="c-ico"><Phone /></span>
              <span>
                <span className="c-label">Telefone alternativo</span>
                <span className="c-value">931 354 068</span>
              </span>
              <a className="btn-mini" href="tel:+244931354068">Ligar agora</a>
            </article>

            <article className="c-card reveal" data-delay="2">
              <span className="c-ico"><Mail /></span>
              <span>
                <span className="c-label">Email</span>
                <span className="c-value">graficaagpublicidade@gmail.com</span>
              </span>
              <a className="btn-mini" href="mailto:graficaagpublicidade@gmail.com">Enviar email</a>
            </article>

            <article className="c-card reveal" data-delay="3">
              <span className="c-ico"><MapPin /></span>
              <span>
                <span className="c-label">Localização</span>
                <span className="c-value">Luanda · Kilamba, Bairro Vila Flor</span>
              </span>
              <a
                className="btn-mini"
                href="https://www.google.com/maps/search/?api=1&query=Kilamba+Vila+Flor+Luanda"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no mapa
              </a>
            </article>
          </div>

          <div className="contact-side">
            <div className="qr-card reveal" data-delay="1">
              <h3>Fale connosco agora</h3>
              <p>Aponte a câmara do seu telefone para o código e abra a conversa no WhatsApp.</p>
              <img
                className="qr"
                src={qrWhatsapp}
                alt="Código QR para o WhatsApp da AG Publicidade"
                loading="lazy"
              />
              <a
                className="qr-link"
                href={whatsappLink(wa.geral)}
                target="_blank"
                rel="noopener noreferrer"
              >
                wa.me/244956967295
              </a>
            </div>

            <div className="social-row reveal" data-delay="2">
              <div className="social-chip">
                <span className="si fb"><Facebook /></span>
                <span>
                  <strong>Facebook</strong>
                  <small>Encontre-nos: Gráfica AG Publicidade</small>
                </span>
              </div>
              <div className="social-chip">
                <span className="si ig"><Instagram /></span>
                <span>
                  <strong>Instagram</strong>
                  <small>Encontre-nos: Gráfica AG Publicidade</small>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="map-wrap reveal" data-delay="1">
          <iframe
            title="Localização da AG Publicidade — Kilamba, Luanda"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
