# AG Publicidade — Website

Website institucional e comercial da **AG Publicidade**, gráfica e empresa de comunicação
visual localizada em Luanda, Kilamba (Bairro Vila Flor), Angola.

Demo comercial: mostra como uma presença digital profissional pode atrair clientes,
apresentar serviços, valorizar trabalhos e converter visitantes em contactos de orçamento
através do WhatsApp.

## Tecnologias

- React.js 18 (JSX)
- Vite 5
- CSS3 (sem frameworks)
- Lucide React (ícones)

## Executar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/   Header, Hero, Services, FeaturedSigns, Portfolio, Lightbox,
                About, CTA, Contact, Footer, WhatsAppFloat, SectionHeading
  data/         services.js, portfolio.js
  utils/        whatsapp.js  (gerador de links wa.me com mensagens personalizadas)
  hooks/        useReveal.js (animações de entrada durante o scroll)
  assets/       images/      (fotografias de produção e logótipo)
  styles/       global.css + CSS por componente
```

## Contactos da empresa

- WhatsApp: 956 967 295 (https://wa.me/244956967295)
- Telefone: 931 354 068
- Email: graficaagpublicidade@gmail.com
- Localização: Luanda, Kilamba, Bairro Vila Flor
- Facebook / Instagram: Gráfica AG Publicidade
