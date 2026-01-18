'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import LOGO from '../../public/logo/LOGO.png';

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  phoneNumber: '+1234567890',
  whatsappNumber: '1234567890',
  whatsappMessage: 'Hi! I\'m interested in your premium service',
};

const NAV_LINKS = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Gallery', href: '/Gallery', icon: '📸' },
  { name: 'Pricing', href: '/Pricing', icon: '💎' },
  { name: 'About', href: '/About', icon: '✨' },
];

// ============================================
// ANIMATION VARIANTS
// ============================================
const ANIMATIONS = {
  navbar: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.08,
      },
    },
  },
  navItem: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  },
  mobileMenu: {
    hidden: { opacity: 0, y: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: { opacity: 0, y: -30, scale: 0.95 },
  },
  menuItem: (index) => ({
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.08 },
    },
  }),
};

// ============================================
// SUB-COMPONENTS
// ============================================

// Logo Component
const NavLogo = () => (
  <Link href="/" className="group">
    <motion.div
      className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-red-950/30 to-transparent border border-red-900/30 backdrop-blur-sm"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(127, 29, 29, 0.2)' }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Rotating glow ring */}
      <div className="relative">
        <motion.div
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-75 blur-md"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-red-600/50 group-hover:ring-red-500 transition-all">
          <Image src={LOGO} alt="Logo" fill className="object-cover" priority />
        </div>
      </div>

      {/* Animated text */}
      <div className="hidden sm:flex flex-col">
        <motion.h1
          className="text-base lg:text-lg font-bold leading-tight"
          style={{
            background: 'linear-gradient(90deg, #fff 0%, #ff0000 50%, #ff6b6b 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        >
          Jaipur Call Girls
        </motion.h1>
        <span className="text-[9px] text-gray-500 font-light tracking-widest">
          PREMIUM • EXCLUSIVE
        </span>
      </div>
    </motion.div>
  </Link>
);

// Desktop Nav Link
const DesktopNavLink = ({ link, isHovered, onHover, onLeave }) => (
  <Link href={link.href}>
    <motion.div
      className="relative px-4 py-2.5 rounded-xl overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/20 to-pink-600/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        <span className="text-base">{link.icon}</span>
        {link.name}
      </span>

      {/* Active indicator */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '80%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  </Link>
);

// Action Button Component
const ActionButton = ({ type = 'phone', onClick }) => {
  const isPhone = type === 'phone';
  const href = isPhone
    ? `tel:${CONFIG.phoneNumber}`
    : `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

  return (
    <a href={href} target={!isPhone ? '_blank' : undefined} rel={!isPhone ? 'noopener noreferrer' : undefined} onClick={onClick}>
      <motion.button
        className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden group ${
          isPhone ? 'bg-white/5 hover:bg-white/10' : ''
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isPhone && (
          <>
            {/* Animated gradient for WhatsApp */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-600"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 100%' }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            
            {/* Glow */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          </>
        )}

        {isPhone && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        )}

        <span className="relative text-lg">{isPhone ? '📞' : '💬'}</span>
        <span className="relative">{isPhone ? 'Call' : 'WhatsApp'}</span>
      </motion.button>
    </a>
  );
};

// Mobile Menu Item
const MobileMenuItem = ({ link, index, onClick }) => (
  <Link href={link.href}>
    <motion.div
      custom={index}
      variants={ANIMATIONS.menuItem}
      initial="hidden"
      animate="visible"
      className="relative group"
      onClick={onClick}
    >
      <motion.div
        className="flex items-center justify-between px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 backdrop-blur-sm transition-all"
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{link.icon}</span>
          <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
            {link.name}
          </span>
        </div>
        
        <motion.svg
          className="w-5 h-5 text-gray-600 group-hover:text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </motion.div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  </Link>
);

// Floating Particles Background
const FloatingParticles = ({ count = 8 }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: 40 + i * 10,
        left: (i * 12.5) % 100,
        delay: i * 0.5,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          className="absolute rounded-full bg-red-600/10 blur-xl"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: '50%' }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + p.id,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// Mobile Menu Button
const MobileMenuToggle = ({ isOpen, onClick }) => (
  <motion.button
    className="lg:hidden p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-600/10 hover:border-red-600/30 transition-all"
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    aria-label="Toggle menu"
  >
    <div className="flex flex-col justify-between w-6 h-5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-0.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500"
          animate={{
            rotate: isOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
            y: isOpen ? (i === 0 ? 10 : i === 2 ? -10 : 0) : 0,
            opacity: isOpen && i === 1 ? 0 : 1,
            scale: isOpen && i === 1 ? 0 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ))}
    </div>
  </motion.button>
);

// ============================================
// MAIN NAVBAR COMPONENT
// ============================================
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, -5]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.8, 1]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <AnimatePresence>
        <motion.nav
          variants={ANIMATIONS.navbar}
          initial="hidden"
          animate="visible"
          style={{ y: navY, opacity: navOpacity }}
          className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] md:w-[95%] max-w-7xl"
        >
          {/* Main Container */}
          <motion.div
            className={`
              relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]
              transition-all duration-500 ease-out border-2
              ${
                isScrolled
                  ? 'bg-black/90 backdrop-blur-2xl shadow-2xl shadow-red-900/20 border-red-900/30'
                  : 'bg-black/70 backdrop-blur-xl shadow-xl shadow-black/50 border-red-900/20'
              }
            `}
            whileHover={{ scale: 1.002 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border shimmer */}
            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden pointer-events-none">
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.3), transparent)',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Floating particles */}
            <FloatingParticles count={8} />

            {/* Content */}
            <div className="relative px-4 md:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <motion.div variants={ANIMATIONS.navItem}>
                  <NavLogo />
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2">
                  <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    {NAV_LINKS.map((link) => (
                      <motion.div key={link.name} variants={ANIMATIONS.navItem}>
                        <DesktopNavLink
                          link={link}
                          isHovered={hoveredLink === link.name}
                          onHover={() => setHoveredLink(link.name)}
                          onLeave={() => setHoveredLink(null)}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <motion.div
                    className="h-12 w-[2px] mx-2 rounded-full bg-gradient-to-b from-transparent via-red-600/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-3">
                  <motion.div
                    variants={ANIMATIONS.navItem}
                    className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <ActionButton type="phone" />
                    <ActionButton type="whatsapp" />
                  </motion.div>

                  {/* Admin */}
                  <motion.div variants={ANIMATIONS.navItem}>
                    <Link href="/admin/login">
                      <motion.button
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-600/30 hover:bg-red-600/10 transition-all"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Admin login"
                      >
                        <span className="text-gray-600 hover:text-gray-400 transition-colors">🔒</span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <motion.div variants={ANIMATIONS.navItem}>
                  <MobileMenuToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-md lg:hidden -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeMobileMenu}
                />

                {/* Menu Panel */}
                <motion.div
                  variants={ANIMATIONS.mobileMenu}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 right-0 mt-4 lg:hidden px-4"
                >
                  <div className="relative rounded-3xl bg-black/95 backdrop-blur-2xl border-2 border-red-900/30 shadow-2xl overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-pink-950/20 pointer-events-none" />
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={`menu-p-${i}`}
                          className="absolute w-20 h-20 rounded-full bg-red-600/10 blur-2xl"
                          style={{ left: `${i * 25}%`, top: `${i * 20}%` }}
                          animate={{
                            y: [-10, 10, -10],
                            x: [-5, 5, -5],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>

                    <div className="relative p-6 space-y-3">
                      {/* Links */}
                      {NAV_LINKS.map((link, index) => (
                        <MobileMenuItem key={link.name} link={link} index={index} onClick={closeMobileMenu} />
                      ))}

                      {/* Divider */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5 }}
                        className="h-[2px] my-4 rounded-full bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
                      />

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-3"
                      >
                        <ActionButton type="phone" onClick={closeMobileMenu} />
                        <ActionButton type="whatsapp" onClick={closeMobileMenu} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;