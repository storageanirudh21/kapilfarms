import React from 'react';
import { GiSprout } from 'react-icons/gi';
import { FiPhoneCall, FiMail, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../assets/mruganayani-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#061B11] text-white pt-20 pb-12 relative overflow-hidden border-t border-[#1B4531]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box inside footer matching screenshot bottom CTA */}
        <div className="bg-[#0A2619] p-8 md:p-12 rounded-3xl border border-[#1B4531] mb-16 text-center max-w-4xl mx-auto shadow-2xl relative">
          <div className="w-16 h-16 rounded-full bg-[#86E89E] text-[#0A2619] flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
            <GiSprout />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Made for Generations.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-emerald-200/80 max-w-md mx-auto">
            Secure your piece of high-yield farmland today and create a lasting legacy for your family.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-[#86E89E] text-[#0A2619] font-bold px-6 py-3 rounded-full text-sm shadow-md hover:bg-[#A3F5B6] transition-all flex items-center gap-2"
            >
              <FiPhoneCall />
              <span>Talk to Farm Specialist</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md hover:bg-[#20bd5a] transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1B4531]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col items-start gap-1">
              <img
                src={logoImg}
                alt="Mruganayani - Kapil Farms"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#86E89E]">
                Kapil Farms Managed Project
              </span>
            </div>

            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              Mruganayani by Kapil Farms is a flagship managed farmland project under Kapil Group (Est. 1961). We specialize in sustainable agriculture, timber plantations, and eco-resort communities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-[#0E3222] border border-[#1B4531] text-[#86E89E] flex items-center justify-center hover:bg-[#86E89E] hover:text-[#0A2619] transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0E3222] border border-[#1B4531] text-[#86E89E] flex items-center justify-center hover:bg-[#86E89E] hover:text-[#0A2619] transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0E3222] border border-[#1B4531] text-[#86E89E] flex items-center justify-center hover:bg-[#86E89E] hover:text-[#0A2619] transition-all">
                <FaYoutube />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#0E3222] border border-[#1B4531] text-[#86E89E] flex items-center justify-center hover:bg-[#86E89E] hover:text-[#0A2619] transition-all">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-[#86E89E] font-display uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100/70">
              <li><a href="#hero" className="hover:text-[#86E89E] transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-[#86E89E] transition-colors">Plot Features</a></li>
              <li><a href="#crops" className="hover:text-[#86E89E] transition-colors">Crop & Timber ROI</a></li>
              <li><a href="#amenities" className="hover:text-[#86E89E] transition-colors">Resort Amenities</a></li>
              <li><a href="#location" className="hover:text-[#86E89E] transition-colors">Strategic Location</a></li>
              <li><a href="#faq" className="hover:text-[#86E89E] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-bold text-[#86E89E] font-display uppercase tracking-wider">
              Head Office Contact
            </h4>
            <div className="space-y-3 text-sm text-emerald-100/70">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#86E89E] text-lg shrink-0 mt-0.5" />
                <span>Kapil Towers, Financial District, Gachibowli, Hyderabad, Telangana - 500032</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-[#86E89E] text-lg shrink-0" />
                <span>+91 98765 43210 / +91 40 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-[#86E89E] text-lg shrink-0" />
                <span>enquiry@kapilfarms.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/50">
          <p>© {new Date().getFullYear()} Kapil Farms (Kapil Group). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#0E3222] border border-[#1B4531] text-[#86E89E] flex items-center justify-center hover:bg-[#86E89E] hover:text-[#0A2619] transition-all"
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
