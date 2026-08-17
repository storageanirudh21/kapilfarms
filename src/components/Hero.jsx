import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPlay, FiArrowDown, FiCheckCircle } from 'react-icons/fi';
import { GiOakLeaf, GiTreeGrowth } from 'react-icons/gi';

import logoImg from '../assets/mruganayani-logo.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroImageRef = useRef(null);

  useEffect(() => {
    const el = heroImageRef.current;
    if (el) {
      gsap.to(el, {
        scale: 1.05,
        y: 30,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#DCEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 border border-[#0A2619]/15 shadow-sm text-[#0A2619] backdrop-blur-sm">
            <img src={logoImg} alt="Mruganayani Logo" className="h-6 w-auto brightness-0" />
            <span className="text-xs font-bold tracking-wider uppercase border-l border-[#0A2619]/20 pl-3">
              Managed Farmlands By Kapil Group
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A2619] tracking-tight leading-[1.1] font-display"
          >
            For Your Future.{' '}
            <span className="block font-serif-italic font-normal text-3xl sm:text-5xl md:text-6xl text-[#185338] mt-2">
              For Generations.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[#3C5B4C] max-w-2xl mx-auto font-medium"
          >
            Invest in high-yield managed farmlands designed for eco-luxury living, organic agriculture, timber growth, and lasting generational wealth.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-[#0A2619] text-[#86E89E] hover:bg-[#061B11] px-8 py-4 rounded-full text-base font-bold shadow-xl transition-all hover:scale-105"
            >
              <span>Explore Farmlands</span>
              <FiArrowDown className="text-lg animate-bounce" />
            </a>

            <a
              href="#video"
              className="inline-flex items-center gap-3 bg-white/80 hover:bg-white text-[#0A2619] border border-[#0A2619]/20 px-7 py-4 rounded-full text-base font-semibold shadow-md transition-all hover:scale-105 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[#0A2619] text-[#86E89E] flex items-center justify-center">
                <FiPlay className="text-sm ml-0.5" />
              </div>
              <span>Watch Overview</span>
            </a>
          </motion.div>
        </div>

        {/* Feature Badges under CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm text-[#264436] font-medium"
        >
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[#0A2619] text-base" />
            <span>100% Clear Title Land</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[#0A2619] text-base" />
            <span>10-Yr Free Farm Management</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[#0A2619] text-base" />
            <span>High ROI Timber Plantation</span>
          </div>
        </motion.div>

        {/* Hero Media Container with GSAP Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 bg-[#0A2619]"
        >
          <div ref={heroImageRef} className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop"
              alt="Kapil Farms Aerial View"
              className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-700"
            />
            {/* Soft dark vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619]/80 via-transparent to-black/20" />
            
            {/* Floating Hero Badge */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-[#0A2619]/90 backdrop-blur-md border border-[#1B4531] text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#86E89E] text-[#0A2619] flex items-center justify-center font-bold text-2xl shadow-inner">
                  <GiTreeGrowth />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white font-display">Mruganayani Farmlands Phase 1 & 2</h4>
                  <p className="text-xs text-[#86E89E]">Kapil Group • Highway Corridor • Gated Community</p>
                </div>
              </div>

              <div className="flex items-center gap-6 border-t md:border-t-0 border-[#1B4531] pt-3 md:pt-0 w-full md:w-auto justify-between md:justify-end">
                <div>
                  <span className="text-2xl font-black text-[#86E89E] font-display">100+</span>
                  <span className="block text-[11px] text-gray-300 uppercase tracking-wider">Acres Project</span>
                </div>
                <div className="h-8 w-px bg-[#1B4531]" />
                <div>
                  <span className="text-2xl font-black text-[#86E89E] font-display">2 - 5</span>
                  <span className="block text-[11px] text-gray-300 uppercase tracking-wider">Acres Per Plot</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
