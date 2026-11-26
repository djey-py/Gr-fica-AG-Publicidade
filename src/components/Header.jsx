import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { getWhatsAppLink, wa, PHONE_DISPLAY } from '../utils/whatsapp.js'
import './../styles/header.css'

const NAV = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'sobre', label: 'Sobre nós' },
  { id: 'contactos', label: 'Contactos' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloqueia o scroll do fundo quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="header-inner">
        <a href="#inicio" onClick={go('inicio')} className="header-logo" aria-label="MAIS FÁCIL — início">
          <Logo variant="light" height={38} />
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={go(item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-orange header-cta"
            href={getWhatsAppLink(wa.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento
          </a>
          <button
            className="header-burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className="mobile-menu" role="dialog" aria-modal="true" aria-hidden={!open}>
        <nav className="mobile-nav">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={go(item.id)}>
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-orange mobile-cta"
            href={getWhatsAppLink(wa.geral)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento
          </a>
          <a className="mobile-phone" href={`tel:+244${PHONE_DISPLAY.replace(/\s/g, '')}`}>
            Ligar: {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  )
}
