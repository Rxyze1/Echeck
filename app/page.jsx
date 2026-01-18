
import Hero from  '../app/components/Hero.jsx'
import SnowEffect from './components/SnowEffect.jsx'
import Gallery from './components/Gallery.jsx'
import Service from './components/Service.jsx'
import SEOFaq from '../app/components/SEOFaq.tsx'

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <SnowEffect />
      <Hero />
      <Gallery />
      <Service />
      <SEOFaq />
      
    </div>
  )
}

export default page
