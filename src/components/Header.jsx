import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/header.css'

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contactos', href: '#contactos' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const variant = scrolled || open ? 'dark' : 'light'

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container site-header__inner">
        <a href="#inicio" className="site-header__logo" aria-label="Gráfica Online BP — início">
          <Logo variant={variant} height={42} />
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={whatsappLink(wa.orcamento)} target="_blank" rel="noopener noreferrer" className="btn btn--yellow site-header__cta">
            <MessageCircle /> Solicitar Orçamento
          </a>
          <button
            className="site-header__burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className="site-header__mobile" role="dialog" aria-hidden={!open}>
        <nav className="site-header__mobile-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink(wa.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--yellow btn--block"
            onClick={() => setOpen(false)}
          >
            <MessageCircle /> Solicitar Orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
