# Gráfica Online BP — Website

Website institucional e comercial da **Gráfica Online BP** — *A sua marca em outro nível!*
Mais que impressão, criamos valor para a sua marca.

Demo comercial: mostra como uma presença digital profissional pode apresentar os
serviços, valorizar a marca e converter visitantes em contactos de orçamento
através do **WhatsApp**.

## Identidade

- **Nome:** Gráfica Online BP
- **Slogan:** A sua marca em outro nível!
- **Paleta:** azul-escuro `#071B65` · azul royal `#0646C8` · azul eléctrico `#087BFF` · amarelo `#FFD900` · branco `#FFFFFF`
- **WhatsApp oficial:** +244 976 508 422
- **Localização:** Escongolense, Rua C9 de Cima

## Secções

1. **Header** — navegação sticky (transparente → sólido no scroll) + CTA "Solicitar Orçamento" + menu mobile.
2. **Hero** — headline de impacto, CTAs para WhatsApp e composição de mockups flutuantes.
3. **Serviços** — 9 serviços numa grelha bento assimétrica, cada um com CTA "Solicitar este serviço" (WhatsApp pré-preenchido).
4. **Portfólio** — galeria assimétrica com filtros por categoria, hover effects e lightbox.
5. **Livros Digitais** — oferta especial (10 livros por 1.000 Kz + 1 grátis).
6. **Porquê escolher / Sobre nós** — diferenciais da marca.
7. **CTA final** — conversão directa para WhatsApp.
8. **Contactos** — WhatsApp, localização e mapa.
9. **Footer** + **botão flutuante de WhatsApp**.

> As imagens de portfólio e serviços são composições SVG ilustrativas (on-brand),
> apresentadas como demonstrações visuais — não trabalhos reais de clientes.

## Tecnologias

- React 18 (JSX)
- Vite 5
- Framer Motion (animações de entrada e micro-interações)
- Lucide React (ícones)
- CSS3 (design system em `src/styles/global.css` + CSS por componente)

## Scripts

```bash
npm install      # instalar dependências
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (pasta dist/)
npm run preview  # pré-visualizar o build
node scripts/smoke.mjs   # teste de fumo (valida secções, CTAs e acessibilidade)
```

## Estrutura

```
src/
  components/   Header, Hero, Services, Portfolio, Lightbox, DigitalBooks,
                WhyChoose, CTA, Contact, Footer, WhatsAppFloat,
                SectionHeading, WorkMockup (mockups SVG), Logo
  data/         services.js, portfolio.js
  utils/        whatsapp.js  (gerador de links wa.me com mensagens personalizadas)
  hooks/        useReveal.js  (animações de entrada durante o scroll)
  assets/       imagens de produção (hero, about, og)
  styles/       global.css + CSS por componente
public/         favicon.svg, og-image.jpg
```

## Contacto

- WhatsApp: [+244 976 508 422](https://wa.me/244976508422)
- Localização: Escongolense, Rua C9 de Cima
