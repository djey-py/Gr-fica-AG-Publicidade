// Galeria de portfólio (demonstração). Imagens ilustrativas — não representam
// trabalhos efectivamente realizados pela MAIS FÁCIL.
import {
  svcDesign,
  svcImpressao,
  svcBanners,
  svcPersonalizacao,
  svcCarimbos,
  svcIdentificacao,
  svcBrindes,
  heroIdentidade,
  heroPersonalizacao,
  heroPublicidade,
  heroEmpresarial,
  pfDesign,
  pfBanner,
  pfTshirt,
  pfGifts,
} from '../assets/images.js'

// Categorias usadas nos filtros.
export const categories = [
  'Todos',
  'Design gráfico',
  'Impressão',
  'Publicidade',
  'Personalização',
  'Identificação',
  'Brindes',
]

// size controla o destaque na grelha assimétrica: 'lg' (grande), 'md' (médio), 'sm' (pequeno).
export const portfolio = [
  { id: 1, category: 'Design gráfico', title: 'Identidade visual corporativa', image: heroIdentidade, size: 'lg' },
  { id: 2, category: 'Design gráfico', title: 'Criação de logótipo', image: pfDesign, size: 'md' },
  { id: 3, category: 'Design gráfico', title: 'Cartões de visita', image: svcDesign, size: 'sm' },
  { id: 4, category: 'Impressão', title: 'Flyers e panfletos', image: svcImpressao, size: 'md' },
  { id: 5, category: 'Impressão', title: 'Material promocional', image: pfGifts, size: 'lg' },
  { id: 6, category: 'Impressão', title: 'Brochuras', image: heroEmpresarial, size: 'sm' },
  { id: 7, category: 'Publicidade', title: 'Banners e lonas', image: heroPublicidade, size: 'lg' },
  { id: 8, category: 'Publicidade', title: 'Roll-up e bandeiras', image: svcBanners, size: 'md' },
  { id: 9, category: 'Publicidade', title: 'Campanha exterior', image: pfBanner, size: 'sm' },
  { id: 10, category: 'Personalização', title: 'T-shirts personalizadas', image: heroPersonalizacao, size: 'md' },
  { id: 11, category: 'Personalização', title: 'Estampagem de produtos', image: pfTshirt, size: 'lg' },
  { id: 12, category: 'Personalização', title: 'Uniformes de equipa', image: svcPersonalizacao, size: 'sm' },
  { id: 13, category: 'Identificação', title: 'Passes PVC', image: svcIdentificacao, size: 'md' },
  { id: 14, category: 'Identificação', title: 'Crachás profissionais', image: svcCarimbos, size: 'sm' },
  { id: 15, category: 'Brindes', title: 'Canecas e cantis', image: svcBrindes, size: 'lg' },
  { id: 16, category: 'Brindes', title: 'Brindes empresariais', image: pfGifts, size: 'md' },
]
