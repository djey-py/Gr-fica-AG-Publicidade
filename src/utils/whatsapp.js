// Centraliza a comunicação com o WhatsApp da AG Publicidade.
// Número oficial: +244 956 967 295
const WHATSAPP_NUMBER = '244956967295'

/** Gera um link wa.me com mensagem pré-preenchida. */
export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Mensagens pré-definidas para os CTAs do website. */
export const wa = {
  geral:
    'Olá! Visitei o vosso website e gostaria de solicitar um orçamento.',
  placas:
    'Olá! Tenho interesse em encomendar placas publicitárias. Gostaria de receber mais informações e um orçamento.',
  impressao:
    'Olá! Gostaria de solicitar um orçamento para serviços de impressão.',
  personalizacao:
    'Olá! Tenho interesse em serviços de estampagem, bordado ou serigrafia.',
  /** Mensagem automática que identifica o serviço selecionado. */
  servico: (nome) =>
    `Olá! Visitei o vosso website e tenho interesse no serviço de ${nome}. Gostaria de receber mais informações e um orçamento.`,
  /** Mensagem automática para um produto do portfólio. */
  produto: (nome) =>
    `Olá! Vi no vosso website o produto "${nome}" e gostaria de solicitar um orçamento.`,
}
