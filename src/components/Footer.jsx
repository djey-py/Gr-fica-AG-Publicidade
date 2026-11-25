import { ArrowUp, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import logo from '../assets/images/logo-ag.png'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import '../styles/footer.css'

const NAV = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'sobre', label: 'Sobre nós' },
  { id: 'contactos', label: 'Contactos' },
]

const SERVICES = [
  'Comunicação Visual',
  'Placas e Sinalização',
  'Impressão Digital',
  'Personalização',
  'Material Gráfico',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <img src={logo} alt="Logótipo AG Publicidade" loading="lazy" />
            <p>
              Gráfica e empresa de comunicação visual em Luanda. Criamos, fabricamos,
              imprimimos e montamos soluções publicitárias que dão vida à sua marca.
            </p>
            <span className="f-slogan">AG Publicidade — Qualidade e rapidez moram aqui.</span>
            <div className="f-social">
              <span className="f-soc" title="Facebook: Gráfica AG Publicidade"><Facebook /></span>
              <span className="f-soc" title="Instagram: Gráfica AG Publicidade"><Instagram /></span>
            </div>
          </div>

          <div className="f-col">
            <h4>Navegação</h4>
            <ul>
              {NAV.map((l) => (
                <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="f-col">
            <h4>Serviços</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s}><a href="#servicos">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="f-col">
            <h4>Contactos</h4>
            <ul className="f-contact">
              <li>
                <MessageCircle />
                <a href={whatsappLink(wa.geral)} target="_blank" rel="noopener noreferrer">
                  WhatsApp: 956 967 295
                </a>
              </li>
              <li>
                <Phone />
                <a href="tel:+244931354068">Tel: 931 354 068</a>
              </li>
              <li>
                <Mail />
                <a href="mailto:graficaagpublicidade@gmail.com">graficaagpublicidade@gmail.com</a>
              </li>
              <li>
                <MapPin />
                <span>Luanda · Kilamba, Bairro Vila Flor</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AG Publicidade. Todos os direitos reservados.</span>
          <a className="to-top" href="#inicio">
            Voltar ao topo
            <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}
