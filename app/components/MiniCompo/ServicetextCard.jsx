'use client';


import { motion } from 'framer-motion';

const ServicetextCard = () => {
  const catchyTaglines = [
    { icon: "💃", text: "Strip-tease – Seductive Unveiling", color: "from-pink-500 to-rose-500" },
  { icon: "👄", text: "BBBJ – Bareback Blowjob Bliss", color: "from-red-500 to-pink-500" },
  { icon: "🛏️", text: "Extended Time in My Rooms", color: "from-purple-500 to-indigo-600" },
  { icon: "😏", text: "Unprotected BJ – Pure Pleasure", color: "from-rose-500 to-pink-600" },
  { icon: "💦", text: "COF – Cum On Face Finish", color: "from-orange-500 to-red-500" },
  { icon: "🔥", text: "Completion – To the End", color: "from-amber-500 to-orange-600" },
  { icon: "👅", text: "Oral to Completion – Non-Covered", color: "from-red-400 to-pink-500" },
  { icon: "🍑", text: "DATY – Dining At The Y", color: "from-teal-400 to-cyan-500" },
  { icon: "💋", text: "DSL – Dick Sucking Lips Expertise", color: "from-pink-400 to-fuchsia-500" },
  { icon: "🌀", text: "DT – Deep Throat Intensity", color: "from-purple-600 to-indigo-700" },
  { icon: "🐕", text: "Doggie – From Behind Passion", color: "from-blue-500 to-indigo-600" },
  { icon: "👭", text: "Duo Sandwich – Threesome Delight", color: "from-pink-500 to-purple-600" },
  { icon: "💖", text: "S-GFE – Special Girlfriend Experience", color: "from-rose-400 to-red-500" },
  { icon: "✋", text: "HJ – Sensual Hand Job", color: "from-yellow-400 to-amber-500" },
  { icon: "👐", text: "Special Massage – Erotic Touch", color: "from-teal-500 to-blue-600" },
  { icon: "👅", text: "O-Level – Full Oral Service", color: "from-red-500 to-rose-600" },
  { icon: "♾️", text: "69 – Mutual Oral Ecstasy", color: "from-purple-400 to-pink-500" },
  { icon: "❤️", text: "GFE – True Girlfriend Experience", color: "from-pink-300 to-rose-400" },
  { icon: "💦", text: "COB – Cum On Body", color: "from-amber-400 to-yellow-500" },
  { icon: "🔄", text: "Extraball – Multiple Rounds", color: "from-orange-500 to-red-600" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(136,13,30,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-700/50 backdrop-blur-sm mb-6"
          >
            <span className="text-lg">💫</span>
            <span className="text-xs font-bold text-purple-300 tracking-widest uppercase">Our Promises</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-3"
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              What Makes Us Different
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            20+ reasons why we&apos;re Jaipur&apos;s most trusted companion service
          </motion.p>
        </div>

        {/* Smaller Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {catchyTaglines.map((tagline, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: idx * 0.02,
                duration: 0.4,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-xl overflow-hidden backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300">
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${tagline.color} opacity-5 group-hover:opacity-15 transition-opacity`}
                />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-100%] group-hover:translate-x-[100%] duration-700" />
                
                {/* Content */}
                <div className="relative z-10 p-3 flex flex-col items-center justify-center text-center min-h-[100px]">
                  <div className="text-3xl mb-2">
                    {tagline.icon}
                  </div>
                  
                  <h3 className="text-white font-semibold text-[10px] sm:text-xs leading-tight px-1">
                    {tagline.text}
                  </h3>
                  
                  {/* Decorative Dot */}
                  <motion.div 
                    className={`mt-2 w-1 h-1 rounded-full bg-gradient-to-r ${tagline.color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.02 + 0.2 }}
                  />
                </div>

                {/* Corner Glow */}
                <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${tagline.color} opacity-10 rounded-bl-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-2xl bg-gradient-to-r from-purple-900/20 via-pink-900/10 to-red-900/20 border border-purple-700/30 backdrop-blur-lg p-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span className="text-gray-300">20+ Guarantees</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="text-gray-300">100% Privacy</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-gray-300">24/7 Service</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-gray-300">Verified Profiles</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicetextCard;