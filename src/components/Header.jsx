import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import logo from '../assets/images/logo-ag.png'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import '../styles/header.css'

const LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'sobre', label: 'Sobre nós' },
  { id: 'contactos', label: 'Contactos' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const pos = window.scrollY + 140
      let current = 'inicio'
      LINKS.forEach((l) => {
        const el = document.getElementById(l.id)
        if (el && el.offsetTop <= pos) current = l.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#inicio" className="brand" onClick={closeMenu}>
            <img src={logo} alt="Logótipo AG Publicidade" />
            <span className="brand-text">
              <span className="brand-name">
                AG <span>Publicidade</span>
              </span>
              <span className="brand-tag">Qualidade e rapidez moram aqui</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navegação principal">
            {LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                {l.label}
              </a>
            ))}
          </nav>

          <a
            className="btn btn-primary header-cta"
            href={whatsappLink(wa.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
            Solicitar orçamento
          </a>

          <button
            className="burger"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <Menu />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="mm-top">
          <a href="#inicio" className="brand brand-light" onClick={closeMenu}>
            <img src={logo} alt="Logótipo AG Publicidade" />
            <span className="brand-name">AG <span>Publicidade</span></span>
          </a>
          <button className="mm-close" onClick={closeMenu} aria-label="Fechar menu">
            <X />
          </button>
        </div>

        <nav className="mm-links" aria-label="Navegação móvel">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mm-bottom">
          <a
            className="btn btn-whatsapp btn-lg"
            href={whatsappLink(wa.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
            Solicitar orçamento
          </a>
          <p className="mm-contact">WhatsApp: 956 967 295 · Luanda, Kilamba</p>
        </div>
      </div>
    </>
  )
}
