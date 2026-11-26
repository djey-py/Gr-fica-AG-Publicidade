import HeroSwiper from './HeroSwiper.jsx'
import { slides } from '../data/slides.js'
import './../styles/hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Destaques da MAIS FÁCIL">
      <HeroSwiper slides={slides} />
    </section>
  )
}
