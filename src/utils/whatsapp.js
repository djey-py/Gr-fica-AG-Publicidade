// Centraliza a comunicação com o WhatsApp da Gráfica Online BP.
// Número oficial: +244 976 508 422
const WHATSAPP_NUMBER = '244976508422'

/** Gera um link wa.me com mensagem pré-preenchida (usa encodeURIComponent). */
export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Mensagens pré-definidas para os CTAs do website. */
export const wa = {
  geral:
    'Olá! Encontrei a Gráfica Online BP através do vosso website e gostaria de solicitar informações sobre os vossos serviços.',
  orcamento:
    'Olá! Visitei o website da Gráfica Online BP e gostaria de solicitar um orçamento para o meu projecto.',
  /** Mensagem automática que identifica o serviço seleccionado. */
  servico: (nome) =>
    `Olá! Visitei o website da Gráfica Online BP e tenho interesse no serviço "${nome}". Gostaria de receber mais informações e um orçamento.`,
  /** Mensagem automática para um trabalho do portfólio. */
  produto: (nome) =>
    `Olá! Vi no website da Gráfica Online BP o trabalho "${nome}" e gostaria de solicitar algo semelhante.`,
  /** Mensagem para a oferta de livros digitais. */
  livros:
    'Olá! Vi a promoção dos livros digitais no website da Gráfica Online BP. Gostaria de escolher o meu livro gratuito e conhecer os livros disponíveis.',
  /** Mensagem para a chamada final de conversão. */
  especialista:
    'Olá! Tenho um projecto em mente e gostaria de falar com um especialista da Gráfica Online BP.',
}
