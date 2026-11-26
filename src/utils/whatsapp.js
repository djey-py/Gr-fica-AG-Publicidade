// Centraliza a comunicação com o WhatsApp da MAIS FÁCIL — Serviços Gráficos.
// Número oficial (contacto principal): +244 928 809 963
const WHATSAPP_NUMBER = '244928809963'

/**
 * Gera um link wa.me com a mensagem pré-preenchida e codificada.
 * @param {string} message Texto que será enviado para o WhatsApp.
 * @returns {string} URL pronta a abrir o WhatsApp (web ou app).
 */
export function getWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Mensagens pré-definidas para os CTAs do website (PT-AO). */
export const wa = {
  geral:
    'Olá! Visitei o website da MAIS FÁCIL e gostaria de obter informações sobre os vossos serviços.',
  impressao:
    'Olá! Tenho interesse nos serviços de impressão da MAIS FÁCIL. Gostaria de solicitar um orçamento.',
  design:
    'Olá! Gostaria de obter um orçamento para criação de logotipo ou identidade visual.',
  personalizacao:
    'Olá! Tenho interesse em personalizar alguns produtos. Podem enviar-me mais informações?',
  banners:
    'Olá! Gostaria de solicitar um orçamento para banners, lonas ou roll-ups.',
  documentacao:
    'Olá! Gostaria de obter informações sobre blocos de factura certificados pela AGT, carimbos ou passes PVC.',
  identificacao:
    'Olá! Gostaria de obter informações sobre passes PVC e crachás da MAIS FÁCIL.',
  brindes:
    'Olá! Tenho interesse em brindes personalizados (canecas, cantis, sacos). Podem enviar-me mais informações?',
  /** Mensagem automática que identifica o serviço selecionado. */
  servico: (nome) =>
    `Olá! Visitei o website da MAIS FÁCIL e tenho interesse no serviço "${nome}". Gostaria de solicitar um orçamento.`,
}

/** Número principal em formato internacional (usado nos links tel:). */
export const PHONE_INTERNATIONAL = '+244928809963'
/** Número principal legível (usado na apresentação visual). */
export const PHONE_DISPLAY = '928 809 963'
/** Número alternativo. */
export const PHONE_ALT_DISPLAY = '950 716 080'
export const WHATSAPP_PRIMARY = WHATSAPP_NUMBER
