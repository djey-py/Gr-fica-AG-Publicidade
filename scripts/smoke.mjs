// Teste de fumo: carrega o build de produção num DOM simulado (jsdom)
// e valida secções, navegação, CTAs de WhatsApp e imagens para a MAIS FÁCIL.
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
  'navigator',
  'HTMLElement',
  'HTMLIFrameElement',
  'MutationObserver',
  'Element',
  'Node',
  'SVGElement',
  'DocumentFragment',
  'Event',
  'CustomEvent',
  'KeyboardEvent',
  'MouseEvent',
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

// 1. Conteúdo renderizado
check('App renderizou conteúdo', document.getElementById('root').children.length > 0)

// 2. Secções obrigatórias
const sections = ['inicio', 'servicos', 'produtos', 'portfolio', 'sobre', 'contactos']
sections.forEach((id) => check(`Secção #${id}`, !!document.getElementById(id)))

// 3. Navegação interna sem destinos quebrados
const navLinks = [...document.querySelectorAll('a[href^="#"]')]
let brokenNav = 0
navLinks.forEach((a) => {
  const id = a.getAttribute('href').slice(1)
  if (id && !document.getElementById(id)) brokenNav++
})
check(`Navegação interna (${navLinks.length} links) sem destinos quebrados`, brokenNav === 0)

// 4. CTAs de WhatsApp com número correcto
const waLinks = [...document.querySelectorAll('a[href*="wa.me/244928809963"]')]
check(`Links de WhatsApp: ${waLinks.length} (esperados >= 10)`, waLinks.length >= 10)
const badWa = waLinks.filter((a) => !a.href.includes('text='))
check('Todos os CTAs WhatsApp têm mensagem pré-preenchida', badWa.length === 0)
check('Botão flutuante de WhatsApp', !!document.querySelector('.wa-float[href*="wa.me"]'))

// 5. Contactos confirmados (sem inventar email/redes)
check('Telefone principal visível: 928 809 963', html.includes('928 809 963'))
check('Telefone alternativo visível: 950 716 080', html.includes('950 716 080'))
check('Link tel: principal', !!document.querySelector('a[href="tel:+244928809963"]'))
check('Localização: Kilamba Kiaxi', html.includes('Kilamba Kiaxi'))
check('Localização: Palanca', html.includes('Palanca'))
check('Localização: Stara', html.includes('Stara'))
check('Sem email inventado', !html.toLowerCase().includes('@maisfacil') && !html.includes('grafica'))
check('Sem redes sociais inventadas', !document.querySelector('a[href*="facebook.com"], a[href*="instagram.com"], a[href*="linkedin.com"]'))

// 6. Imagens: todas resolvidas no build e com alt
const imgs = [...document.querySelectorAll('img')]
const missing = imgs.filter((i) => {
  const src = i.getAttribute('src') || ''
  if (src.startsWith('data:')) return false
  const rel = src.startsWith('/') ? src.slice(1) : src
  return !existsSync(join(dist, rel))
})
check(`${imgs.length} imagens todas resolvidas no build`, missing.length === 0 && imgs.length >= 20)
check('Nenhuma imagem sem alt (acessibilidade)', imgs.every((i) => (i.getAttribute('alt') || '').length > 0))

// 7. Sem Lorem / undefined
check('Sem "Lorem"', !html.toLowerCase().includes('lorem'))
check('Sem "undefined" no HTML', !html.includes('>undefined<') && !html.includes('undefined '))

// 8. Animações .reveal activadas
const reveals = document.querySelectorAll('.reveal')
const visible = document.querySelectorAll('.reveal.visible')
check(`Animações .reveal: ${visible.length}/${reveals.length} activadas`, reveals.length > 10 && visible.length === reveals.length)

// 9. Bundle razoável
const size = statSync(join(assets, jsFile)).size
check(`Bundle JS razoável (${Math.round(size / 1024)} kB)`, size < 600 * 1024)

let failed = 0
results.forEach(({ label, ok }) => {
  console.log(`${ok ? '✅' : '❌'} ${label}`)
  if (!ok) failed++
})
console.log(failed === 0 ? '\nTODOS OS TESTES PASSARAM' : `\n${failed} TESTES FALHARAM`)
process.exit(failed === 0 ? 0 : 1)
