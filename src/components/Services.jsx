import { ArrowRight, Layers, Lightbulb, MessageCircle, Printer, Shirt, Signpost } from 'lucide-react'
import { services } from '../data/services.js'
import { wa, whatsappLink } from '../utils/whatsapp.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/services.css'

const ICONS = {
  luz: Lightbulb,
  sinalizacao: Signpost,
  impressao: Printer,
  personalizacao: Shirt,
  grafico: Layers,
}

export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <SectionHeading
          kicker="Serviços"
          title={
            <>
              TUDO O QUE A SUA MARCA PRECISA PARA <span className="hl">SE DESTACAR.</span>
            </>
          }
          desc="Oferecemos soluções completas de publicidade, impressão e personalização para empresas, negócios e particulares."
        />

        <div className="svc-grid">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <article className="svc-card reveal" data-delay={i % 3} key={s.id}>
                <div className="svc-media">
                  <img src={s.imagem} alt={`Serviço de ${s.nome}`} loading="lazy" />
                  <span className="svc-num">0{i + 1}</span>
                </div>

                <div className="svc-body">
                  <div className="svc-title-row">
                    <span className="svc-ico"><Icon /></span>
                    <h3>{s.nome}</h3>
                  </div>

                  <p>{s.descricao}</p>

                  <div className="svc-tags">
                    {s.itens.slice(0, 4).map((it) => (
                      <span className="tag" key={it}>{it}</span>
                    ))}
                    {s.itens.length > 4 && <span className="tag more">+{s.itens.length - 4} mais</span>}
                  </div>

                  <a
                    className="btn btn-ghost svc-btn"
                    href={whatsappLink(wa.servico(s.nome))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir orçamento
                    <ArrowRight />
                  </a>
                </div>
              </article>
            )
          })}

          <aside className="svc-cta-card reveal" data-delay={2}>
            <h3>Não encontrou o que procurava?</h3>
            <p>
              Fale connosco e desenhamos juntos a solução ideal para o seu projecto — da
              criação à montagem final.
            </p>
            <a
              className="btn btn-whatsapp"
              href={whatsappLink(wa.geral)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              Falar com a AG
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
