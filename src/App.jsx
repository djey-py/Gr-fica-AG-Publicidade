import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import CreativeShowcase from './components/CreativeShowcase.jsx'
import Portfolio from './components/Portfolio.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CreativeShowcase />
        <Portfolio />
        <WhyChooseUs />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
