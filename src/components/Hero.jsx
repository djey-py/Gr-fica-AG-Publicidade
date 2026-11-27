import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, ArrowDown, Sparkles, Printer, Share2 } from 'lucide-react'
import heroBg from '../assets/images/hero-bg.jpg'
import WorkMockup from './WorkMockup.jsx'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

function Float({ y = 14, duration = 5, children, className }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      animate={reduce ? {} : { y: [0, -y, 0] }}
      transition={reduce ? {} : { duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <span className="glow hero__glow-1" aria-hidden="true" />
      <span className="glow hero__glow-2" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Coluna de texto */}
        <motion.div
          className="hero__content"
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.span className="hero__eyebrow" variants={item}>
            <Sparkles size={16} /> Gráfica Online BP · A sua marca em outro nível!
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            Transformamos as suas <span className="hl">ideias</span> em{' '}
            <span className="hl-grad">resultados!</span>
          </motion.h1>

          <motion.p className="hero__text" variants={item}>
            Do design à impressão, criamos soluções visuais que destacam a sua marca,
            comunicam profissionalismo e fazem o seu negócio crescer.
          </motion.p>

          <motion.div className="hero__cta" variants={item}>
            <a href={whatsappLink(wa.orcamento)} target="_blank" rel="noopener noreferrer" className="btn btn--yellow">
              <MessageCircle /> Solicitar Orçamento
            </a>
            <a href="#servicos" className="btn btn--ghost">
              Explorar Serviços
            </a>
          </motion.div>

          <motion.ul className="hero__trust" variants={item}>
            <li><span className="hero__trust-dot" /> Atendimento directo via WhatsApp</li>
            <li><span className="hero__trust-dot" /> Do design à impressão</li>
            <li><span className="hero__trust-dot" /> Entrega de qualidade</li>
          </motion.ul>
        </motion.div>

        {/* Palco de mockups */}
        <motion.div
          className="hero__stage"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__panel" aria-hidden="true">
            <WorkMockup variant="poster" accent="blue" className="hero__panel-art" />
          </div>

          <Float y={16} duration={6} className="hero__card hero__card--flyer">
            <div className="hero__card-frame">
              <WorkMockup variant="flyer" accent="royal" />
            </div>
            <span className="hero__card-chip"><Printer size={14} /> Flyer promocional</span>
          </Float>

          <Float y={12} duration={5.2} className="hero__card hero__card--card">
            <div className="hero__card-frame">
              <WorkMockup variant="card" accent="blue" />
            </div>
            <span className="hero__card-chip"><Sparkles size={14} /> Cartão de visita</span>
          </Float>

          <Float y={20} duration={6.6} className="hero__card hero__card--social">
            <div className="hero__card-frame">
              <WorkMockup variant="social" accent="mix" />
            </div>
            <span className="hero__card-chip"><Share2 size={14} /> Post social</span>
          </Float>

          <span className="hero__badge hero__badge--yellow">100% criativo</span>
          <span className="hero__badge hero__badge--electric">Design + Impressão</span>
        </motion.div>
      </div>

      <a href="#servicos" className="hero__scroll" aria-label="Explorar serviços">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
