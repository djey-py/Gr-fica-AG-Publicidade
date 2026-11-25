import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import FeaturedSigns from './components/FeaturedSigns.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedSigns />
        <Portfolio />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
