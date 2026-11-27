// Teste de fumo: carrega o build de produção num DOM simulado (jsdom)
// e valida secções, navegação, CTAs de WhatsApp, conteúdo e acessibilidade.
import { JSDOM } from 'jsdom'
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { join } from 'node:path'

const dist = new URL('../dist', import.meta.url).pathname

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/',
  pretendToBeVisual: true,
})

global.window = dom.window
global.document = dom.window.document
for (const key of [
  'navigator', 'HTMLElement', 'HTMLIFrameElement', 'MutationObserver',
  'Element', 'Node', 'SVGElement', 'DocumentFragment', 'Event',
  'CustomEvent', 'KeyboardEvent', 'MouseEvent',
]) {
  try {
    Object.defineProperty(globalThis, key, { value: dom.window[key], configurable: true })
  } catch { /* mantém o global existente */ }
}
global.getComputedStyle = dom.window.getComputedStyle
global.requestAnimationFrame = dom.window.requestAnimationFrame
global.cancelAnimationFrame = dom.window.cancelAnimationFrame
window.scrollTo = () => {}

const assets = join(dist, 'assets')
const jsFile = readdirSync(assets).find((f) => f.endsWith('.js'))
if (!jsFile) throw new Error('JS do build não encontrado')

await import(pathToFileURL(join(assets, jsFile)).href)
await new Promise((r) => setTimeout(r, 400))

const html = document.body.innerHTML
const results = []
const check = (label, ok) => results.push({ label, ok })

// 1. App renderizou
check('App renderizou conteúdo', document.getElementById('root').children.length > 0)

// 2. Secções obrigatórias
const sections = ['inicio', 'servicos', 'portfolio', 'livros', 'sobre', 'contactos', 'falar']
sections.forEach((id) => check(`Secção #${id} presente`, !!document.getElementById(id)))

// 3. Navegação interna sem destinos quebrados
const navLinks = [...document.querySelectorAll('a[href^="#"]')]
let brokenNav = 0
navLinks.forEach((a) => {
  const id = a.getAttribute('href').slice(1)
  if (id && !document.getElementById(id)) brokenNav++
})
check(`Navegação interna (${navLinks.length} links) sem destinos quebrados`, brokenNav === 0)

// 4. WhatsApp — número correcto e mensagens pré-preenchidas
const WA = 'wa.me/244976508422'
const waLinks = [...document.querySelectorAll(`a[href*="${WA}"]`)]
check(`Links de WhatsApp (${waLinks.length}) com número correcto`, waLinks.length >= 12)
const badWa = waLinks.filter((a) => !a.href.includes('text='))
check('Todos os CTAs WhatsApp têm mensagem pré-preenchida', badWa.length === 0)
check('Mensagem por serviço inclui o nome do serviço',
  waLinks.some((a) => a.href.includes(encodeURIComponent('no serviço "Design Gráfico Profissional"'))))
check('CTA de livros com mensagem própria',
  waLinks.some((a) => a.href.includes(encodeURIComponent('livros digitais'))))
check('Botão flutuante de WhatsApp presente',
  !!document.querySelector('.wa-float__btn[href*="wa.me"]'))

// 5. Sem redes sociais inventadas
check('Sem links de redes sociais inventados',
  !document.querySelector('a[href*="facebook.com"], a[href*="instagram.com"], a[href*="twitter.com"], a[href*="linkedin.com"]'))

// 6. Imagens: nenhuma <img> quebrada; fundo do hero presente no build
const imgs = [...document.querySelectorAll('img')]
const missing = imgs.filter((i) => {
  const src = i.getAttribute('src') || ''
  if (src.startsWith('data:') || src.startsWith('http')) return false
  return !existsSync(join(dist, decodeURIComponent(src)))
})
check(`${imgs.length} <img> todas resolvidas (sem quebradas)`, missing.length === 0)
check('Imagem de fundo do hero presente no build',
  readdirSync(assets).some((f) => f.startsWith('hero-bg')))
check('Favicon SVG presente', existsSync(join(dist, 'favicon.svg')))
check('OG image presente', existsSync(join(dist, 'og-image.jpg')))

// 7. Conteúdo comercial real (sem Lorem / undefined)
check('Sem "Lorem"', !html.toLowerCase().includes('lorem'))
check('Sem "undefined" no HTML', !html.includes('>undefined<') && !html.includes('undefined '))
check('Telefone visível: 976 508 422', html.includes('976 508 422'))
check('Localização visível: Escongolense', html.includes('Escongolense'))
check('Localização visível: Rua C9 de Cima', html.includes('Rua C9 de Cima'))
check('Slogan visível', html.includes('A sua marca em outro nível'))
check('Promoção 10 livros / 1.000 Kz', html.includes('1.000 Kz'))
check('Oferta grátis (GRÁTIS)', html.toUpperCase().includes('GRÁTIS'))

// 8. Contagens de componentes
check(`9 serviços renderizados (${document.querySelectorAll('.svc-card').length})`,
  document.querySelectorAll('.svc-card').length === 9)
check(`12 itens de portfólio (${document.querySelectorAll('.pf-item').length})`,
  document.querySelectorAll('.pf-item').length === 12)

// 9. Fallback de animações .reveal (sem IntersectionObserver no jsdom)
const reveals = document.querySelectorAll('.reveal')
const visible = document.querySelectorAll('.reveal.visible')
check(`Animações .reveal activadas no fallback (${visible.length}/${reveals.length})`,
  reveals.length > 10 && visible.length === reveals.length)

// 10. Tamanho do bundle
const size = statSync(join(assets, jsFile)).size
check(`Bundle JS razoável (${Math.round(size / 1024)} kB)`, size < 500 * 1024)

let failed = 0
results.forEach(({ label, ok }) => {
  console.log(`${ok ? '✅' : '❌'} ${label}`)
  if (!ok) failed++
})
console.log(failed === 0 ? '\nTODOS OS TESTES PASSARAM' : `\n${failed} TESTES FALHARAM`)
process.exit(failed === 0 ? 0 : 1)
