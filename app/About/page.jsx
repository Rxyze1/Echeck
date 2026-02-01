'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialProofNotifications from '../components/SocialProofNotifications';
import SummerLeavesEffect from '../components/SummerLeavesEffect';


const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const whatsappNumber = '8058457070';
  const phoneNumber = '+91' + whatsappNumber;

  // Why Choose Us Points
  const whyChooseUs = [
    {
      icon: "💎",
      title: "Premium Quality Girls",
      titleHindi: "प्रीमियम क्वालिटी लड़कियां",
      description: "Sirf high-class, verified aur professionally trained companions. Har girl ki proper background check aur grooming standards maintained hain."
    },
    {
      icon: "🔒",
      title: "100% Privacy & Discretion",
      titleHindi: "पूरी गोपनीयता",
      description: "Aapki privacy hamari top priority hai. Complete confidentiality guarantee ke saath discreet service. No data leaks, no tension."
    },
    {
      icon: "✅",
      title: "Verified & Safe",
      titleHindi: "वेरिफाइड और सुरक्षित",
      description: "Sabhi girls properly verified hain health aur identity ke saath. Regular health checkups aur safety protocols follow karte hain."
    },
    {
      icon: "⚡",
      title: "Quick & Easy Booking",
      titleHindi: "आसान बुकिंग",
      description: "Simple booking process - WhatsApp ya call karo aur 30 minutes mein aapke location pe service. Fast aur hassle-free."
    },
    
    {
      icon: "🌟",
      title: "VIP Treatment",
      titleHindi: "वीआईपी ट्रीटमेंट",
      description: "Har client ko special treatment milta hai. Premium service, luxury experience aur unforgettable memories guaranteed."
    }
  ];

  // Our Standards
  const standards = [
    {
      icon: "👗",
      title: "Physical Appearance",
      points: ["Age 18-28 only", "Height 5'2\" - 5'8\"", "Fit & maintained body", "Professional grooming"]
    },
    {
      icon: "🎓",
      title: "Education & Class",
      points: ["Minimum graduate", "Good communication skills", "Fluent Hindi/English", "Well-mannered & sophisticated"]
    },
    {
      icon: "💼",
      title: "Professional Training",
      points: ["Escort etiquette training", "Client handling skills", "Dress code & styling", "Safety protocols knowledge"]
    },
    {
      icon: "🏥",
      title: "Health & Safety",
      points: ["Regular medical checkups", "STD/HIV negative certified", "Hygiene standards maintained", "Safe practices mandatory"]
    }
  ];

  // Stats
  const stats = [
    { number: "500+", label: "Happy Clients", icon: "😊" },
    { number: "50+", label: "Premium Girls", icon: "👸" },
    { number: "24/7", label: "Service Available", icon: "⏰" },
    { number: "100%", label: "Privacy Guaranteed", icon: "🔐" },
  ];

  // How We Work
  const howWeWork = [
    {
      step: "1",
      title: "Contact Us",
      titleHindi: "संपर्क करें",
      description: "WhatsApp ya call karke apni requirements batao - location, timing, aur preferences.",
      icon: "📱"
    },
    {
      step: "2",
      title: "Choose Your Girl",
      titleHindi: "अपनी पसंद की लड़की चुनें",
      description: "Hamari gallery bas ek demo hai - app whatsapp par girl select kar sakte ho jo aapko pasand ho.",
      icon: "💕"
    },
    {
      step: "3",
      title: "Confirm Booking",
      titleHindi: "बुकिंग कन्फर्म करें",
      description: "Package aur timing finalize karo.Phir aapka person receive hota hai.Payment karo — before touching her.",
      icon: "✅"
    },
    {
      step: "4",
      title: "Enjoy Service",
      titleHindi: "सेवा का आनंद लें",
      description: "Girl aapke location pe time pe pahunchegi. Complete privacy mein enjoy karo aur satisfied raho.",
      icon: "🔥"
    }
  ];

  // Floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: (i * 8.5) % 100,
      delay: i * 0.5,
      duration: 10 + (i % 5),
      scale: 0.7 + (i % 3) * 0.2,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="relative min-h-screen py-20 bg-black overflow-hidden">
<SummerLeavesEffect />
<SocialProofNotifications />

      
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el) => (
          <motion.div
            key={`float-${el.id}`}
            className="absolute text-red-500/10"
            style={{
              left: `${el.left}%`,
              fontSize: `${30 * el.scale}px`,
              bottom: -50,
            }}
            animate={{
              y: [-50, -1000],
              x: [0, Math.sin(el.id) * 80, 0],
              rotate: [0, 360],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: el.delay,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-950/30 border border-red-900/50 backdrop-blur-sm mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👑
            </motion.span>
            <span className="text-sm text-gray-400 tracking-widest">ABOUT OUR AGENCY</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #ff0000 50%, #ff6b6b 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Jaipur's Premium Escort Agency
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4"
          >
            Hum Jaipur ki <span className="text-red-400 font-semibold">#1 premium escort agency</span> hain jo sirf 
            <span className="text-pink-400 font-semibold"> high-quality, verified companions</span> provide karti hai! 💎
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[2px] w-32 mx-auto rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-black/80 to-black border-2 border-red-900/30 p-8 text-center">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <div className="relative">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Agency Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-red-950/20 to-pink-950/20 border-2 border-red-900/30 backdrop-blur-sm p-8 md:p-10">
              <motion.div
                className="text-5xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                👸
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-4">
                High-Quality Girls Only
              </h3>
              <p className="text-lg text-pink-400 mb-6 font-semibold">
                सिर्फ हाई क्वालिटी लड़कियां
              </p>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Humari agency mein <span className="text-red-400 font-semibold">sirf premium quality girls</span> hain jo properly verified, trained aur professional hain. Har girl ko personally select kiya jaata hai strict quality standards ke saath.
                </p>
                <p>
                  Hum ensure karte hain ki aapko <span className="text-pink-400 font-semibold">best possible experience</span> mile - chahe physical appearance ho, personality ho ya service quality. No compromise on standards!
                </p>
                <p>
                  Sabhi companions ko regular training di jaati hai client handling, etiquette aur safety protocols mein. <span className="text-red-400 font-semibold">Professional behavior aur discretion</span> hamari specialty hai.
                </p>
              </div>

              
            </div>
          </motion.div>

          {/* Right: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-black/80 to-black border-2 border-red-900/30 p-8 md:p-10">
              <h3 className="text-3xl font-bold text-white mb-2">
                Why Choose Us?
              </h3>
              <p className="text-pink-400 mb-8 font-semibold">
                हमें क्यों चुनें?
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
                      <span className="text-3xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold mb-1 group-hover:text-red-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-pink-400 text-xs mb-2">{item.titleHindi}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quality Standards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Quality Standards
            </h3>
            <p className="text-gray-400">
              हमारी क्वालिटी स्टैंडर्ड्स जो हमें बेस्ट बनाती हैं
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-b from-black/80 to-black border-2 border-red-900/30 p-6">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  
                  <div className="relative">
                    <div className="text-5xl mb-4">{standard.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                      {standard.title}
                    </h4>
                    <ul className="space-y-2">
                      {standard.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-red-500 mt-1">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* How We Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Work
            </h3>
            <p className="text-gray-400">
              हम कैसे काम करते हैं - सिंपल 4 स्टेप्स
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group"
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-black/80 to-black border-2 border-red-900/30 p-8 text-center">
                  {/* Step number badge */}
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center font-bold text-white">
                      {step.step}
                    </div>
                  </div>

                  <motion.div
                    className="text-6xl mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-pink-400 text-sm mb-4">{step.titleHindi}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting line (except for last item) */}
                  {index < howWeWork.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-red-600 to-transparent" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="rounded-3xl bg-gradient-to-br from-red-950/30 to-pink-950/30 border-2 border-red-900/30 backdrop-blur-sm p-12">
            <motion.div
              className="text-6xl mb-6"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              💖
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Premium Experience?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Book karo abhi aur enjoy karo <span className="text-red-400 font-semibold">unforgettable moments</span>! 🔥
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi! Main aapki agency ke baare mein jaankari chahta/chahti hoon`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="relative px-10 py-5 rounded-2xl font-bold text-white text-lg overflow-hidden"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500" />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />

                  <span className="relative flex items-center gap-3">
                    <span className="text-2xl">💬</span>
                    WhatsApp pe Contact Karo
                  </span>
                </motion.button>
              </a>

              <a href={`tel:${phoneNumber}`}>
                <motion.button
                  className="px-10 py-5 rounded-2xl font-bold text-white text-lg border-2 border-red-500 hover:bg-red-500/10 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    Call Karke Poochho
                  </span>
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;