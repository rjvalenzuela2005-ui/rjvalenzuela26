import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NAV_LINKS = [
  { label: 'Home',         href: '#hero' },
  { label: 'Work',         href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'About',        href: '#about' },
  { label: 'Process',      href: '#process' },
  { label: 'Leadership',   href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight/90 backdrop-blur-xl border-b border-cyan/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand to-cyan flex items-center justify-center neon-glow-cyan">
            <span className="font-display text-white text-sm font-bold leading-none">RJ</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-white text-sm leading-tight tracking-wide uppercase">RJ Valenzuela</p>
            <p className="text-cyan text-[10px] leading-tight tracking-widest uppercase">UI/UX Designer &amp; Web Developer</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-sky/70 hover:text-cyan transition-colors duration-200 font-medium tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Available Badge */}
        <div className="hidden md:flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-cyan/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
          </span>
          <span className="text-xs text-cyan font-medium whitespace-nowrap">Available for new projects</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-cyan rounded-lg hover:bg-cyan/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-midnight/95 backdrop-blur-xl border-b border-cyan/10"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm text-sky hover:text-cyan transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="text-xs text-cyan">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
