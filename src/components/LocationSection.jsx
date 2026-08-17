import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiNavigation, FiClock, FiCheck } from 'react-icons/fi';
import { FaPlane, FaRoad, FaCity } from 'react-icons/fa';

const connectivityHighlights = [
  { icon: FaRoad, title: 'National Highway Connectivity', desc: 'Direct 4-lane access road connecting to main city hub in 45 mins' },
  { icon: FaPlane, title: 'International Airport', desc: 'Just 35 mins drive via signal-free expressway' },
  { icon: FaCity, title: 'Upcoming Regional Hub', desc: 'Located within 15 km of approved Industrial & Pharma Corridor' },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-[#0A2619] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#86E89E] font-display"
          >
            Strategically located for growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-emerald-200 font-medium"
          >
            High growth corridors ensure rapid capital appreciation and convenient weekend family getaways.
          </motion.p>
        </div>

        {/* 2 Stylized Location Maps & Cards matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Map Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0E3222] p-6 rounded-3xl border border-[#1B4531] relative overflow-hidden group shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#86E89E] text-[#0A2619] text-xs font-bold uppercase">
                Location Map A
              </span>
              <span className="text-xs text-emerald-200/70 flex items-center gap-1">
                <FiClock /> 45 Mins Drive
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-4">
              Corridor Access & Topography Map
            </h3>

            {/* Stylized map visual placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#1B4531] bg-[#0A2619]">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                alt="Farmland Location Map"
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-transparent to-transparent" />
              
              {/* Map Pins */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#86E89E] text-[#0A2619] flex items-center justify-center text-xl shadow-2xl animate-pulse">
                  <FiMapPin />
                </div>
                <span className="mt-1 px-3 py-1 rounded-full bg-[#0A2619] border border-[#86E89E] text-[#86E89E] text-xs font-bold shadow-lg">
                  Kapil Farmlands Phase 1
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-emerald-200">
              <span>★ High ROI Zone</span>
              <span>★ 100% Gated Security</span>
            </div>
          </motion.div>

          {/* Map Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#0E3222] p-6 rounded-3xl border border-[#1B4531] relative overflow-hidden group shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#86E89E] text-[#0A2619] text-xs font-bold uppercase">
                Location Map B
              </span>
              <span className="text-xs text-emerald-200/70 flex items-center gap-1">
                <FiClock /> Highway Radial
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display mb-4">
              Connectivity & Infrastructure Network
            </h3>

            {/* Stylized map visual placeholder */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#1B4531] bg-[#0A2619]">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop"
                alt="Highway Connectivity Map"
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-transparent to-transparent" />
              
              {/* Map Pins */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#86E89E] text-[#0A2619] flex items-center justify-center text-xl shadow-2xl animate-pulse">
                  <FiNavigation />
                </div>
                <span className="mt-1 px-3 py-1 rounded-full bg-[#0A2619] border border-[#86E89E] text-[#86E89E] text-xs font-bold shadow-lg">
                  Kapil Farmlands Phase 2
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-emerald-200">
              <span>★ Proposed 6-Lane Expressway</span>
              <span>★ 15 Mins to Eco-Tourism Park</span>
            </div>
          </motion.div>

        </div>

        {/* Connectivity Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {connectivityHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#0E3222] p-6 rounded-2xl border border-[#1B4531] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A2619] text-[#86E89E] flex items-center justify-center text-lg shrink-0">
                  <Icon />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-display">{item.title}</h4>
                  <p className="text-xs text-emerald-200/70 mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LocationSection;
