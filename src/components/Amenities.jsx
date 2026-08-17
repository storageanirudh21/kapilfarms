import React from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiSun, FiCoffee } from 'react-icons/fi';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiCampfire, GiWoodCabin } from 'react-icons/gi';

const amenitiesList = [
  {
    title: 'Resort Swimming Pool & Deck',
    subtitle: 'Infinity pool overlooking lush green plantation fields',
    icon: FaSwimmingPool,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Luxury Wooden Eco-Cottages',
    subtitle: 'Comfortable stay options for plot owners and family weekends',
    icon: GiWoodCabin,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Clubhouse & Farm Dining',
    subtitle: 'Farm-to-table organic dining serving fresh local cuisine',
    icon: FiCoffee,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Evening Bonfire & Star Gaze Arena',
    subtitle: 'Outdoor lounge for evening gatherings and starry night skies',
    icon: GiCampfire,
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop',
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-[#DCEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0A2619] font-display"
          >
            More Than Just Land.{' '}
            <span className="block font-serif-italic font-normal text-2xl sm:text-4xl text-[#185338] mt-1">
              A Lifestyle Community.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#3C5B4C] font-medium"
          >
            Every plot owner enjoys exclusive access to our world-class clubhouse, leisure facilities, and eco-resort amenities.
          </motion.p>
        </div>

        {/* 2x2 Grid of Resort Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenitiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-[#0A2619]/10 bg-[#0A2619] h-[360px] flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-[#0A2619]/40 to-transparent" />

                <div className="relative z-10 p-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#86E89E] text-[#0A2619] flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-100/80">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
