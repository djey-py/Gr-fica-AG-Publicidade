// Slides do carrossel principal (Hero). Cada slide tem composição visual própria.
import { heroImpressao, heroIdentidade, heroPersonalizacao, heroPublicidade, heroEmpresarial } from '../assets/images.js'
import { wa, getWhatsAppLink } from '../utils/whatsapp.js'

export const slides = [
  {
    id: 'impressao',
    eyebrow: 'Impressão Digital',
    title: 'IMPRESSÃO QUE DÁ VIDA ÀS SUAS IDEIAS.',
    description:
      'Qualidade e precisão em cada detalhe. Produzimos materiais gráficos que fazem a sua marca destacar-se.',
    image: heroImpressao,
    layout: 'split',
    message: wa.impressao,
  },
  {
    id: 'identidade',
    eyebrow: 'Identidade Visual',
    title: 'A SUA MARCA MERECE SER INESQUECÍVEL.',
    description:
      'Criamos logótipos e materiais de identidade visual que representam a personalidade do seu negócio.',
    image: heroIdentidade,
    layout: 'right',
    message: wa.design,
  },
  {
    id: 'personalizacao',
    eyebrow: 'Personalização',
    title: 'PERSONALIZE. DESTAQUE-SE. IMPRESSIONE.',
    description:
      'T-shirts, polos, chapéus, canecas, cantis e muito mais. Transformamos os seus produtos em peças únicas.',
    image: heroPersonalizacao,
    layout: 'left',
    message: wa.personalizacao,
  },
  {
    id: 'publicidade',
    eyebrow: 'Material Publicitário',
    title: 'FAÇA A SUA PUBLICIDADE CHEGAR MAIS LONGE.',
    description:
      'Banners, lonas, roll-ups e bandeiras para comunicar a sua marca com impacto.',
    image: heroPublicidade,
    layout: 'center',
    message: wa.banners,
  },
  {
    id: 'empresarial',
    eyebrow: 'Soluções Empresariais',
    title: 'TUDO O QUE A SUA EMPRESA PRECISA NUM SÓ LUGAR.',
    description:
      'Carimbos, blocos de factura certificados pela AGT, passes PVC, crachás e materiais profissionais.',
    image: heroEmpresarial,
    layout: 'split',
    message: wa.documentacao,
  },
]

export { getWhatsAppLink }
