import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiPhoneCall, FiMapPin } from 'react-icons/fi';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-[#DCEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-[#0A2619] text-white p-8 md:p-14 shadow-2xl border border-[#1B4531]">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
              alt="Kapil Farmlands Estate"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2619] via-[#0A2619]/90 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#86E89E] mb-3">
                <FiMapPin />
                <span>Complimentary Weekend Farm Visits Available</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
                Ready for your investment?{' '}
                <span className="block text-[#86E89E] font-serif-italic font-normal">
                  Schedule a private site visit today.
                </span>
              </h2>
              <p className="mt-4 text-emerald-100/80 text-sm sm:text-base max-w-xl">
                We provide free air-conditioned luxury transport from the city for you and your family. Experience the lush greenery firsthand.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#86E89E] text-[#0A2619] hover:bg-[#A3F5B6] py-4 px-6 rounded-2xl text-base font-bold shadow-lg transition-all hover:scale-105"
              >
                <FiCalendar className="text-lg" />
                <span>Book Site Tour Now</span>
              </a>

              <a
                href="tel:+919876543210"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0E3222] text-white hover:bg-[#154630] border border-[#1B4531] py-4 px-6 rounded-2xl text-base font-medium transition-all"
              >
                <FiPhoneCall className="text-[#86E89E]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
