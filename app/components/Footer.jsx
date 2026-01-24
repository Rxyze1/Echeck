'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LOGO from '../../public/logo/LOGO.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Main navigation links
  const quickLinks = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Gallery', href: '/Gallery', icon: '📸' },
    { name: 'Pricing', href: '/Pricing', icon: '💎' },
    { name: 'About', href: '/About', icon: '✨' },
  ];

  // Service area pages for SEO
  const serviceAreas = [
    { name: 'Call Girls in C-Scheme Jaipur', href: '/call-girls-in-c-scheme-jaipur' },
    { name: 'Call Girls in Malviya Nagar Jaipur', href: '/call-girls-in-malviya-nagar-jaipur' },
    { name: 'Call Girls in Mansarovar Jaipur', href: '/call-girls-in-mansarovar-jaipur' },
    { name: 'Call Girls in Vaishali Nagar Jaipur', href: '/call-girls-in-vaishali-nagar-jaipur' },
    { name: 'Call Girls in Jagatpura Jaipur', href: '/call-girls-in-jagatpura-jaipur' },
    { name: 'Call Girls in Tonk Road Jaipur', href: '/call-girls-in-tonk-road-jaipur' },
    { name: 'College Call Girls Jaipur', href: '/college-call-girls-jaipur' },
    { name: 'Best Hotels Jaipur Private', href: '/best-hotels-jaipur-private' },
    { name: 'Call Girls in Jaipur', href: '/call-girls-in-jaipur' },
  ];

  // Contact info
  const contactInfo = {
    phone: '+918058457070',
    whatsapp: '8058457070',
    email: 'info@jaipurcallgirls.com',
  };

  // Social links (optional)
  const socialLinks = [
    { name: 'WhatsApp', icon: '💬', href: `https://wa.me/${contactInfo.whatsapp}` },
    { name: 'Call', icon: '📞', href: `tel:${contactInfo.phone}` },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-black border-t-2 border-red-900/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/5 to-transparent pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`footer-particle-${i}`}
            className="absolute w-32 h-32 rounded-full bg-red-600/5 blur-3xl"
            style={{
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 md:py-16"
        >
          
          {/* Column 1: Brand & Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-red-600/50 group-hover:ring-red-500 transition-all">
                <Image 
                  src={LOGO} 
                  alt="Jaipur Call Girls Logo" 
                  fill 
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                  Jaipur Call Girls
                </h3>
                <p className="text-[10px] text-gray-500 tracking-wider">PREMIUM • EXCLUSIVE</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Jaipur's #1 trusted escort service since 2020. Verified profiles, 100% discreet, no advance payment. Available 24/7 across all major areas.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-green-950/30 border border-green-900/50 text-green-400 text-xs font-medium">
                ✓ Verified Profiles
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-blue-950/30 border border-blue-900/50 text-blue-400 text-xs font-medium">
                ✓ 24/7 Available
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-purple-950/30 border border-purple-900/50 text-purple-400 text-xs font-medium">
                ✓ No Advance
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-red-500">━</span> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <span className="text-sm">{link.icon}</span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="pt-4 space-y-3">
              <h5 className="text-sm font-semibold text-gray-300">Contact Us</h5>
              <div className="space-y-2">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  <span>📞</span>
                  <span>{contactInfo.phone}</span>
                </a>
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <span>💬</span>
                  <span>WhatsApp: {contactInfo.whatsapp}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Service Areas (Part 1) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-red-500">━</span> Service Areas
            </h4>
            <ul className="space-y-2.5">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.href}>
                  <Link 
                    href={area.href}
                    className="group flex items-start gap-2 text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <span className="text-red-500 mt-0.5">→</span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200 leading-tight">
                      {area.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Service Areas (Part 2) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 opacity-0 md:opacity-100">
              <span className="text-red-500">━</span> More Locations
            </h4>
            <ul className="space-y-2.5">
              {serviceAreas.slice(5).map((area) => (
                <li key={area.href}>
                  <Link 
                    href={area.href}
                    className="group flex items-start gap-2 text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <span className="text-red-500 mt-0.5">→</span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200 leading-tight">
                      {area.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social/Action buttons */}
            <div className="pt-4 space-y-3">
              <h5 className="text-sm font-semibold text-gray-300">Get In Touch</h5>
              <div className="flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === 'WhatsApp' ? '_blank' : undefined}
                    rel={social.name === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-600/10 text-gray-300 hover:text-white transition-all duration-200 text-sm"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="text-red-400 font-semibold">Jaipur Call Girls</span>. All Rights Reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              18+ Only • Discreet Service • No Advance Payment
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-red-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-conditions" className="hover:text-red-400 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-red-400 transition-colors">
              Disclaimer
            </Link>
          </div>
        </motion.div>

        {/* SEO-optimized keywords section (hidden but crawlable) */}
        <div className="sr-only">
          <h2>Jaipur Escort Service Coverage</h2>
          <p>
            We provide premium escort services across Jaipur including C-Scheme, Malviya Nagar, 
            Mansarovar, Vaishali Nagar, Jagatpura, Tonk Road, Raja Park, Civil Lines, MI Road, 
            Bani Park, and all major areas. Our verified call girls are available 24/7 with 
            complete discretion and no advance payment required.
          </p>
          <ul>
            {serviceAreas.map((area) => (
              <li key={area.href}>
                <Link href={area.href}>{area.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jaipur Call Girls",
          "description": "Premium escort and companionship services in Jaipur",
          "url": "https://yourdomain.com",
          "telephone": contactInfo.phone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          },
          "areaServed": serviceAreas.map(area => ({
            "@type": "City",
            "name": area.name
          })),
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "₹₹",
        })}
      </script>
    </footer>
  );
};

export default Footer;