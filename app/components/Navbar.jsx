'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import LOGO from '../../public/logo/LOGO.png';



// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  phoneNumber: '+918058457070',
  whatsappNumber: '8058457070',
  whatsappMessage: "Hi! I'm interested in your premium service",
};

const NAV_LINKS = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Gallery', href: '/Gallery', icon: '📸' },
  { name: 'Service Categories', href: '/Service', icon: '🥵' },
  { name: 'Pricing', href: '/Pricing', icon: '💎' },
  { name: 'About', href: '/About', icon: '✨' },
];

// ============================================
// MEMOIZED SUB-COMPONENTS (no unnecessary re-renders)
// ============================================

const NavLogo = memo(() => (
  <Link href="/" className="group flex items-center gap-3 px-4 py-2 rounded-2xl bg-red-950/30 border border-red-900/30 transition-all duration-300 hover:bg-red-950/40 hover:scale-105 active:scale-95">
    <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-red-600/50 group-hover:ring-red-500 transition-all duration-300">
      <Image src={LOGO} alt="Logo" fill className="object-cover" priority sizes="44px" />
    </div>
    <div className="hidden sm:flex flex-col">
      <h1 className="text-base lg:text-lg font-bold leading-tight bg-gradient-to-r from-white via-red-400 to-pink-400 bg-clip-text text-transparent">
        Jaipur Call Girls
      </h1>
      <span className="text-[9px] text-gray-500 font-light tracking-widest">
        PREMIUM • EXCLUSIVE
      </span>
    </div>
  </Link>
));
NavLogo.displayName = 'NavLogo';

// Desktop Nav Link — pure CSS transitions, no motion.div
const DesktopNavLink = memo(({ link }) => (
  <Link
    href={link.href}
    className="relative px-4 py-2.5 rounded-xl overflow-hidden group transition-transform duration-200 hover:scale-105 active:scale-95"
  >
    {/* Hover bg - CSS only */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" />

    <span className="relative z-10 flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
      <span className="text-base">{link.icon}</span>
      {link.name}
    </span>

    {/* Bottom indicator - CSS only */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all duration-300" />
  </Link>
));
DesktopNavLink.displayName = 'DesktopNavLink';

// Action Button — simplified, CSS transitions
const ActionButton = memo(({ type = 'phone', onClick, mobile = false }) => {
  const isPhone = type === 'phone';
  const href = isPhone
    ? `tel:${CONFIG.phoneNumber}`
    : `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

  const baseClass = mobile
    ? 'flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl text-sm font-semibold text-white transition-all duration-200 active:scale-95'
    : 'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95';

  const styleClass = isPhone
    ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
    : 'bg-gradient-to-r from-green-600 to-emerald-500 shadow-lg shadow-green-600/30 hover:shadow-green-600/50';

  return (
    <a
      href={href}
      target={!isPhone ? '_blank' : undefined}
      rel={!isPhone ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`${baseClass} ${styleClass}`}
    >
      <span className="text-lg">{isPhone ? '📞' : '💬'}</span>
      <span>{isPhone ? 'Call' : 'WhatsApp'}</span>
    </a>
  );
});
ActionButton.displayName = 'ActionButton';

// Mobile Menu Item — lightweight motion only for stagger entry
const MobileMenuItem = memo(({ link, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.06, duration: 0.3 }}
  >
    <Link
      href={link.href}
      onClick={onClick}
      className="flex items-center justify-between px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-200 active:scale-[0.98] group"
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{link.icon}</span>
        <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
          {link.name}
        </span>
      </div>
      <svg
        className="w-5 h-5 text-gray-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </motion.div>
));
MobileMenuItem.displayName = 'MobileMenuItem';

// Hamburger — CSS only animation
const MobileMenuToggle = memo(({ isOpen, onClick }) => (
  <button
    className="lg:hidden p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-600/10 hover:border-red-600/30 transition-all duration-200 active:scale-95"
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <div className="flex flex-col justify-between w-6 h-5">
      <span
        className={`block h-0.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 origin-left ${
          isOpen ? 'rotate-45 translate-x-[2px] -translate-y-[1px] w-[26px]' : 'w-full'
        }`}
      />
      <span
        className={`block h-0.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 ${
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      />
      <span
        className={`block h-0.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 origin-left ${
          isOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px] w-[26px]' : 'w-full'
        }`}
      />
    </div>
  </button>
));
MobileMenuToggle.displayName = 'MobileMenuToggle';

// ============================================
// MAIN NAVBAR COMPONENT
// ============================================
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll — requestAnimationFrame throttle
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] md:w-[95%] max-w-7xl"
    >
      {/* Main Container — single transition for scroll state */}
      <div
        className={`
          relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]
          transition-all duration-500 ease-out border-2 will-change-[background-color,box-shadow,border-color]
          ${
            isScrolled
              ? 'bg-black/90 backdrop-blur-2xl shadow-2xl shadow-red-900/20 border-red-900/30'
              : 'bg-black/70 backdrop-blur-xl shadow-xl shadow-black/50 border-red-900/20'
          }
        `}
      >
        {/* Subtle top highlight — static, no animation */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <NavLogo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
                {NAV_LINKS.map((link) => (
                  <DesktopNavLink key={link.name} link={link} />
                ))}
              </div>

              {/* Divider */}
              <div className="h-12 w-[2px] mx-2 rounded-full bg-gradient-to-b from-transparent via-red-600/50 to-transparent" />
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
                <ActionButton type="phone" />
                <ActionButton type="whatsapp" />
              </div>

              <Link
                href="/admin/login"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-600/30 hover:bg-red-600/10 transition-all duration-200 hover:scale-110 hover:rotate-12 active:scale-90"
                aria-label="Admin login"
              >
                <span className="text-gray-600 hover:text-gray-400 transition-colors">🔒</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute top-full left-0 right-0 mt-4 lg:hidden px-4"
            >
              <div className="relative rounded-3xl bg-black/95 backdrop-blur-2xl border-2 border-red-900/30 shadow-2xl overflow-hidden">
                {/* Static gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-pink-950/20 pointer-events-none" />

                <div className="relative p-6 space-y-3">
                  {NAV_LINKS.map((link, index) => (
                    <MobileMenuItem
                      key={link.name}
                      link={link}
                      index={index}
                      onClick={closeMobileMenu}
                    />
                  ))}

                  {/* Divider */}
                  <div className="h-[2px] my-4 rounded-full bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <ActionButton type="phone" onClick={closeMobileMenu} mobile />
                    <ActionButton type="whatsapp" onClick={closeMobileMenu} mobile />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;