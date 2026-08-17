import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhoneCall, FiArrowRight } from 'react-icons/fi';
import logoImg from '../assets/mruganayani-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Crops & ROI', href: '#crops' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#0A2619]/95 backdrop-blur-md shadow-lg border-b border-[#1B4531]' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mruganayani Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="flex flex-col items-start">
              <img
                src={logoImg}
                alt="Mruganayani - Kapil Farms"
                className={`h-9 sm:h-11 w-auto object-contain transition-all duration-300 ${
                  scrolled ? 'brightness-0 invert' : 'brightness-0 opacity-90'
                }`}
              />
              <span className={`text-[9px] font-bold tracking-widest uppercase font-display mt-0.5 ${scrolled ? 'text-[#86E89E]' : 'text-[#0A2619]'}`}>
                Kapil Farms Project
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#86E89E] ${
                  scrolled ? 'text-gray-200' : 'text-[#0A2619]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all ${
                scrolled
                  ? 'text-gray-200 hover:text-white border border-[#1B4531]'
                  : 'text-[#0A2619] hover:text-[#061B11] border border-[#0A2619]/20'
              }`}
            >
              <FiPhoneCall className="text-[#86E89E]" />
              <span>+91 98765 43210</span>
            </a>
            
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#0A2619] text-[#86E89E] hover:bg-[#061B11] px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all hover:shadow-xl hover:scale-105 border border-[#86E89E]/20"
            >
              <span>Book Site Visit</span>
              <FiArrowRight className="text-base" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-white hover:bg-[#1B4531]' : 'text-[#0A2619] hover:bg-[#0A2619]/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A2619] border-b border-[#1B4531] px-4 pt-4 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-200 text-lg font-medium py-2 border-b border-[#1B4531]/50 hover:text-[#86E89E]"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-white border border-[#1B4531] py-3 rounded-xl font-medium"
                >
                  <FiPhoneCall className="text-[#86E89E]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#86E89E] text-[#0A2619] font-bold py-3 rounded-xl shadow-lg"
                >
                  <span>Book Site Visit</span>
                  <FiArrowRight />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
