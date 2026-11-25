import luzImg from '../assets/images/svc-visual.jpg'
import placasImg from '../assets/images/svc-placas.jpg'
import impressaoImg from '../assets/images/svc-impressao.jpg'
import personalizacaoImg from '../assets/images/svc-personalizacao.jpg'
import graficoImg from '../assets/images/svc-grafico.jpg'

export const services = [
  {
    id: 'comunicacao-visual',
    icon: 'luz',
    nome: 'Comunicação Visual',
    descricao:
      'Da concepção à montagem: damos rosto e presença à sua marca, com produção própria e acabamento profissional.',
    itens: [
      'Painéis luminosos',
      'Letras 3D',
      'Cruz de farmácia',
      'Caixas luminosas',
      'Placas publicitárias',
    ],
    imagem: luzImg,
  },
  {
    id: 'placas-sinalizacao',
    icon: 'sinalizacao',
    nome: 'Placas e Sinalização',
    descricao:
      'Sinalização profissional para orientar, informar e valorizar o seu espaço comercial ou institucional.',
    itens: [
      'Placas fotoluminescentes',
      'Placas refletoras',
      'Placas normais',
      'Sinalização profissional',
    ],
    imagem: placasImg,
  },
  {
    id: 'impressao-digital',
    icon: 'impressao',
    nome: 'Impressão Digital',
    descricao:
      'Impressão de grande formato e alta definição para campanhas com verdadeiro impacto visual.',
    itens: [
      'Impressão de lonas',
      'Impressão em vinil',
      'Impressão DTF',
      'Impressão UV',
      'Banners',
      'Roll-up',
      'Balcões publicitários',
    ],
    imagem: impressaoImg,
  },
  {
    id: 'personalizacao',
    icon: 'personalizacao',
    nome: 'Personalização',
    descricao:
      'Leve a sua marca para o dia-a-dia: têxteis, uniformes e brindes personalizados com acabamento de qualidade.',
    itens: [
      'Estampagem',
      'Bordados',
      'Serigrafia',
      'Personalização de uniformes',
      'Brindes personalizados',
    ],
    imagem: personalizacaoImg,
  },
  {
    id: 'material-grafico',
    icon: 'grafico',
    nome: 'Material Gráfico',
    descricao:
      'As peças essenciais do seu negócio, impressas com cores vivas e acabamento profissional.',
    itens: [
      'Cartões de visita',
      'Cartões PVC',
      'Convites',
      'Sacolas personalizadas',
      'Materiais promocionais',
    ],
    imagem: graficoImg,
  },
]
