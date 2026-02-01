
import Hero from  '../app/components/Hero.jsx'
import SnowEffect from './components/SnowEffect.jsx'
import Gallery from './components/Gallery.jsx'
// import Service from './Service/Service.jsx'
import SEOFaq from '../app/components/SEOFaq.tsx'
import Footer from '../app/components/Footer.jsx'
import SummerLeavesEffect from '../app/components/SummerLeavesEffect.jsx'
//import SocialProofNotifications from '../app/components/SocialProofNotifications.jsx'
import Areainjaipur from '../app/components/Areasinjaipur.jsx'

const page = () => {
  return (
    <div className="relative overflow-hidden">

      <SummerLeavesEffect />
      {/* <SocialProofNotifications /> */}
      {/* <SnowEffect /> */}
      <Hero />
      <Gallery />
      {/* <Service /> */}
      
      <SEOFaq />
      
      <Footer />
      <Areainjaipur />
      
    </div>
  )
}

export default page
