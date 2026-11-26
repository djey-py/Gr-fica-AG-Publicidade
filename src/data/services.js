// Catálogo de serviços apresentado na secção "Serviços".
import {
  svcDesign,
  svcImpressao,
  svcBanners,
  svcPersonalizacao,
  svcCarimbos,
  svcIdentificacao,
  svcBrindes,
  svcOutros,
} from '../assets/images.js'
import { wa, getWhatsAppLink } from '../utils/whatsapp.js'

export const services = [
  {
    id: 'design',
    icon: 'PenTool',
    name: 'Design Gráfico',
    short: 'Criação de logótipos, identidade visual e design publicitário para a sua marca.',
    items: ['Criação de logótipos', 'Identidade visual', 'Design publicitário'],
    image: svcDesign,
    message: wa.design,
  },
  {
    id: 'impressao',
    icon: 'Printer',
    name: 'Impressão Digital e Offset',
    short: 'Impressão de materiais gráficos, flyers, cartões de visita e panfletos.',
    items: ['Impressão de materiais gráficos', 'Flyers', 'Cartões de visita', 'Panfletos'],
    image: svcImpressao,
    message: wa.impressao,
  },
  {
    id: 'banners',
    icon: 'Megaphone',
    name: 'Banners e Publicidade',
    short: 'Banners, lonas, bandeiras e roll-ups para comunicar a sua marca com impacto.',
    items: ['Banners', 'Lonas', 'Bandeiras', 'Roll-up'],
    image: svcBanners,
    message: wa.banners,
  },
  {
    id: 'personalizacao',
    icon: 'Shirt',
    name: 'Personalização',
    short: 'T-shirts, polos, coletes, chapéus e uniformes personalizados para a sua equipa.',
    items: ['T-shirts', 'Polos', 'Coletes', 'Chapéus', 'Uniformes'],
    image: svcPersonalizacao,
    message: wa.personalizacao,
  },
  {
    id: 'carimbos',
    icon: 'Stamp',
    name: 'Carimbos e Documentação',
    short: 'Carimbos personalizados e blocos de factura certificados pela AGT.',
    items: ['Carimbos personalizados', 'Blocos de factura certificados pela AGT'],
    image: svcCarimbos,
    message: wa.documentacao,
  },
  {
    id: 'identificacao',
    icon: 'CreditCard',
    name: 'Identificação',
    short: 'Passes PVC e crachás para empresas, eventos e instituições.',
    items: ['Passes PVC', 'Crachás'],
    image: svcIdentificacao,
    message: wa.identificacao,
  },
  {
    id: 'brindes',
    icon: 'Gift',
    name: 'Brindes Personalizados',
    short: 'Canecas, cantis, sacos e brindes empresariais à medida do seu negócio.',
    items: ['Canecas', 'Cantis', 'Sacos', 'Brindes empresariais'],
    image: svcBrindes,
    message: wa.brindes,
  },
  {
    id: 'outros',
    icon: 'Sparkles',
    name: 'Outros Serviços',
    short: 'Soluções gráficas personalizadas, materiais promocionais e trabalhos por encomenda.',
    items: ['Soluções gráficas personalizadas', 'Materiais promocionais', 'Trabalhos por encomenda'],
    image: svcOutros,
    message: wa.geral,
  },
]

export { getWhatsAppLink }
