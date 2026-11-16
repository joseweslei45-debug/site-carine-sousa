import { Header } from './components/sections/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Gallery } from './components/sections/Gallery'
import { Differentials } from './components/sections/Differentials'
import { Testimonials } from './components/sections/Testimonials'
import { Courses } from './components/sections/Courses'
import { Booking } from './components/sections/Booking'
import { Location } from './components/sections/Location'
import { Footer } from './components/sections/Footer'
import { WhatsAppFloat } from './components/sections/WhatsAppFloat'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-cocoa px-4 py-2 text-xs text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Differentials />
        <Testimonials />
        <Courses />
        <Booking />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
