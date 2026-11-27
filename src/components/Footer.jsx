import { MessageCircle, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import { services } from '../data/services.js'
import '../styles/footer.css'

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contactos', href: '#contactos' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo variant="light" height={44} />
          <p>
            Mais que impressão, criamos valor para a sua marca. Do design à impressão,
            soluções visuais que destacam o seu negócio.
          </p>
          <a
            href={whatsappLink(wa.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--yellow footer__wa"
          >
            <MessageCircle /> Falar pelo WhatsApp
          </a>
        </div>

        <div className="footer__col">
          <h4>Navegação</h4>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Serviços</h4>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href={whatsappLink(wa.servico(s.nome))} target="_blank" rel="noopener noreferrer">
                  {s.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contactos</h4>
          <ul className="footer__contact">
            <li>
              <MessageCircle size={17} />
              <a href={whatsappLink(wa.geral)} target="_blank" rel="noopener noreferrer">+244 976 508 422</a>
            </li>
            <li>
              <MapPin size={17} />
              <span>Escongolense, Rua C9 de Cima</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Gráfica Online BP. Todos os direitos reservados.</span>
        <span className="footer__slogan">A sua marca em outro nível!</span>
      </div>
    </footer>
  )
}
