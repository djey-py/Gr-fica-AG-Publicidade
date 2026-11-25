import paineis from '../assets/images/hero-panel.jpg'
import letras3d from '../assets/images/pf-letras3d.jpg'
import placa from '../assets/images/pf-placa.jpg'
import banner from '../assets/images/pf-banner.jpg'
import rollup from '../assets/images/pf-rollup.jpg'
import uniformes from '../assets/images/pf-uniformes.jpg'
import vinil from '../assets/images/pf-vinil.jpg'
import cartoes from '../assets/images/pf-cartoes.jpg'
import sacolas from '../assets/images/pf-sacolas.jpg'

export const portfolioCats = ['Todos', 'Sinalização', 'Impressão', 'Personalização', 'Gráfico']

// Galeria de demonstração: apresenta possibilidades de produção,
// não trabalhos específicos entregues a clientes.
export const portfolioItems = [
  { id: 'paineis', title: 'Painéis luminosos', cat: 'Sinalização', img: paineis, span: 'sp-big' },
  { id: 'letras', title: 'Letras 3D', cat: 'Sinalização', img: letras3d, span: '' },
  { id: 'placas', title: 'Placas comerciais', cat: 'Sinalização', img: placa, span: '' },
  { id: 'banners', title: 'Banners', cat: 'Impressão', img: banner, span: '' },
  { id: 'rollups', title: 'Roll-ups', cat: 'Impressão', img: rollup, span: '' },
  { id: 'uniformes', title: 'Uniformes personalizados', cat: 'Personalização', img: uniformes, span: '' },
  { id: 'vinil', title: 'Impressão de vinil', cat: 'Impressão', img: vinil, span: '' },
  { id: 'cartoes', title: 'Cartões de visita', cat: 'Gráfico', img: cartoes, span: '' },
  { id: 'sacolas', title: 'Sacolas personalizadas', cat: 'Gráfico', img: sacolas, span: '' },
]
