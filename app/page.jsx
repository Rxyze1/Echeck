
import Hero from  '../app/components/Hero.jsx'
import SnowEffect from './components/SnowEffect.jsx'
import Gallery from './components/Gallery.jsx'
import Service from './components/Service.jsx'
import SEOFaq from '../app/components/SEOFaq.tsx'
import Footer from '../app/components/Footer.jsx'

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <SnowEffect />
      <Hero />
      <Gallery />
      <Service />
      <SEOFaq />
      <Footer />
      
    </div>
  )
}

export default page
