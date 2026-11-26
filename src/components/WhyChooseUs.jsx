import { Award, Lightbulb, Zap, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import './../styles/why.css'

const PILLARS = [
  {
    icon: Award,
    title: 'Qualidade',
    text: 'Compromisso com acabamentos e materiais de qualidade.',
  },
  {
    icon: Lightbulb,
    title: 'Criatividade',
    text: 'Soluções gráficas que dão personalidade à sua marca.',
  },
  {
    icon: Zap,
    title: 'Rapidez',
    text: 'Agilidade e dedicação na execução dos seus trabalhos.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiança',
    text: 'Profissionalismo e compromisso com cada cliente.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="why-head">
        <SectionHeading
          dark
          eyebrow="Porquê escolher"
          title="MAIS DO QUE SERVIÇOS GRÁFICOS. SOMOS PARCEIROS DAS SUAS IDEIAS."
        />
      </div>

      <div className="why-grid">
        {PILLARS.map((p, i) => {
          const Icon = p.icon
          return (
            <article key={p.title} className="why-card reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="why-icon">
                <Icon size={30} strokeWidth={2} />
              </span>
              <h3 className="why-title">{p.title}</h3>
              <p className="why-text">{p.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
