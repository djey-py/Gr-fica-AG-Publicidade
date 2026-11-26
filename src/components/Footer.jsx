import { MessageCircle, Phone, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { services } from '../data/services.js'
import { getWhatsAppLink, wa, PHONE_DISPLAY, PHONE_ALT_DISPLAY } from '../utils/whatsapp.js'
import './../styles/footer.css'

const NAV = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'sobre', label: 'Sobre nós' },
  { id: 'contactos', label: 'Contactos' },
]

const ADDRESS = 'Kilamba Kiaxi, Palanca, Rua L — junto à loja da Stara, Luanda'

export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo variant="light" height={40} />
          <p className="footer-slogan">MAIS FÁCIL — A sua ideia, a nossa criatividade!</p>
          <a
            className="btn btn-orange footer-wa"
            href={getWhatsAppLink(wa.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Pedir orçamento
          </a>
        </div>

        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={go(n.id)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Serviços</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href="#servicos"
                  onClick={go('servicos')}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contactos</h4>
          <ul>
            <li>
              <a href={getWhatsAppLink(wa.geral)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`tel:+244${PHONE_DISPLAY.replace(/\s/g, '')}`}>
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <span className="footer-muted">
                <Phone size={16} /> {PHONE_ALT_DISPLAY}
              </span>
            </li>
            <li>
              <span className="footer-muted">
                <MapPin size={16} /> {ADDRESS}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} MAIS FÁCIL — Serviços Gráficos. Todos os direitos reservados.</span>
        <span className="footer-bottom-tag">Transformamos a sua ideia em uma realidade!</span>
      </div>
    </footer>
  )
}
