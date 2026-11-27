import { PenTool, Megaphone, Fingerprint, Target, Share2, MousePointerClick, Video, Mail, Sparkles, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import WorkMockup from './WorkMockup.jsx'
import { services } from '../data/services.js'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/services.css'

const ICONS = { PenTool, Megaphone, Fingerprint, Target, Share2, MousePointerClick, Video, Mail, Sparkles }

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <SectionHeading
          eyebrow="Os nossos serviços"
          title={<>Tudo o que a sua marca precisa para se <span className="hl-e">destacar.</span></>}
          subtitle="Oferecemos soluções criativas e profissionais para fortalecer a presença da sua marca no mercado."
        />

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || Sparkles
            return (
              <article
                key={s.id}
                className={`svc-card svc-card--${s.size} reveal d${(i % 5) + 1}`}
              >
                <div className="svc-card__media">
                  <WorkMockup variant={s.mockup} accent={s.accent} tone={s.tone || 'dark'} className="svc-card__art" />
                  <span className="svc-card__icon"><Icon size={22} /></span>
                </div>
                <div className="svc-card__body">
                  <h3 className="svc-card__title">{s.nome}</h3>
                  <p className="svc-card__desc">{s.descricao}</p>
                  {s.tags && (
                    <ul className="svc-card__tags">
                      {s.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={whatsappLink(wa.servico(s.nome))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svc-card__btn"
                  >
                    Solicitar este serviço <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
