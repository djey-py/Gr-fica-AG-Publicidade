import { Lightbulb, Award, ShieldCheck, Handshake, SlidersHorizontal, MessageCircle, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import WorkMockup from './WorkMockup.jsx'
import { whatsappLink, wa } from '../utils/whatsapp.js'
import '../styles/whychoose.css'

const REASONS = [
  { icon: Lightbulb, title: 'Criatividade', desc: 'Ideias originais que dão à sua marca uma identidade única e memorável.' },
  { icon: Award, title: 'Profissionalismo', desc: 'Atendimento sério, pontual e transparente em cada projecto que assumimos.' },
  { icon: ShieldCheck, title: 'Qualidade', desc: 'Acabamento e materiais cuidados, do digital à impressão final.' },
  { icon: Handshake, title: 'Compromisso', desc: 'Cumprimos o combinado e acompanhamos o seu projecto do início ao fim.' },
  { icon: SlidersHorizontal, title: 'Soluções personalizadas', desc: 'Criamos conforme a sua necessidade, nunca um modelo pronto.' },
]

export default function WhyChoose() {
  return (
    <section className="section why" id="sobre">
      <div className="container">
        <SectionHeading
          eyebrow="Porquê escolher-nos"
          title={<>A sua marca merece <span className="hl-grad">mais!</span></>}
          subtitle="Mais que impressão, criamos valor para a sua marca. Combinamos criatividade, técnica e compromisso para resultados que fazem a diferença."
        />

        <div className="why__grid">
          <aside className="why__brand reveal">
            <div className="why__brand-art">
              <WorkMockup variant="logo" accent="royal" tone="light" />
            </div>
            <span className="why__brand-tag">Gráfica Online BP</span>
            <p className="why__brand-text">
              Somos a ponte entre a sua ideia e o resultado visual que o seu negócio precisa
              para crescer. Design, impressão e estratégia num só lugar.
            </p>
            <a href={whatsappLink(wa.especialista)} target="_blank" rel="noopener noreferrer" className="btn btn--yellow">
              <MessageCircle /> Falar connosco <ArrowRight size={18} />
            </a>
          </aside>

          <ul className="why__list">
            {REASONS.map((r, i) => {
              const Icon = r.icon
              return (
                <li key={r.title} className={`why__item reveal d${(i % 5) + 1}`}>
                  <span className="why__item-icon"><Icon size={24} /></span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
