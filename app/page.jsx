
import Hero from  '../app/components/Hero.jsx'
import SnowEffect from './components/SnowEffect.jsx'
import Gallery from './components/Gallery.jsx'


const page = () => {
  return (
    <div className="relative overflow-hidden">
      <SnowEffect />
      <Hero />
      <Gallery />
      
    </div>
  )
}

export default page
