import React from 'react';
import { motion } from 'framer-motion';
import { GiSprout, GiFruitTree, GiPlantRoots } from 'react-icons/gi';
import { FiCheckCircle } from 'react-icons/fi';

const CropSelection = () => {
  return (
    <section id="crops" className="py-24 bg-[#DCEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0A2619] font-display"
          >
            From seed to crop,{' '}
            <span className="block font-serif-italic font-normal text-2xl sm:text-4xl text-[#185338] mt-1">
              for years to come.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#3C5B4C] font-medium"
          >
            Scientifically curated crop planning optimized for your soil profile, climate conditions, and commercial profitability.
          </motion.p>
        </div>

        {/* Bento Grid matching screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Mint card - Mango Orchards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#C4F4CE] p-8 rounded-3xl border border-[#0A2619]/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0A2619] text-[#86E89E] flex items-center justify-center text-2xl mb-6 shadow-md">
                <GiFruitTree />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2619] font-display">
                Alphonso & Banganapalli Mango Orchards
              </h3>
              <p className="mt-3 text-sm text-[#244E39] leading-relaxed">
                High-demand premium mango varieties yielding annual harvest profits starting from Year 4 onwards.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#0A2619]">
              <FiCheckCircle />
              <span>Annual Harvesting Yield</span>
            </div>
          </motion.div>

          {/* Card 2: Image - Red Soil */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl overflow-hidden shadow-md h-64 md:h-auto relative border border-[#0A2619]/10 group"
          >
            <img
              src="https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?q=80&w=800&auto=format&fit=crop"
              alt="Rich Red Farmland Soil"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
              Mineral-Rich Red Loam Soil Profile
            </div>
          </motion.div>

          {/* Card 3: Image - Tractor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-md h-64 md:h-auto relative border border-[#0A2619]/10 group"
          >
            <img
              src="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=800&auto=format&fit=crop"
              alt="Modern Agriculture Tractor"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
              Mechanized Tilling & Drip Lines
            </div>
          </motion.div>

          {/* Card 4: Mint card - Teak & Malabar Neem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#C4F4CE] p-8 rounded-3xl border border-[#0A2619]/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0A2619] text-[#86E89E] flex items-center justify-center text-2xl mb-6 shadow-md">
                <GiPlantRoots />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2619] font-display">
                Teakwood & Malabar Neem Plantation
              </h3>
              <p className="mt-3 text-sm text-[#244E39] leading-relaxed">
                Fast-growing high-value timber varieties generating massive lump-sum financial returns at 10-12 year maturity cycles.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#0A2619]">
              <FiCheckCircle />
              <span>High Commercial Value</span>
            </div>
          </motion.div>

          {/* Card 5: Mint card - Organic Spices & Veggies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#C4F4CE] p-8 rounded-3xl border border-[#0A2619]/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0A2619] text-[#86E89E] flex items-center justify-center text-2xl mb-6 shadow-md">
                <GiSprout />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2619] font-display">
                Organic Vegetables & Seasonal Crops
              </h3>
              <p className="mt-3 text-sm text-[#244E39] leading-relaxed">
                Inter-cropping organic veggies, dragon fruit, and medicinal herbs to maximize soil vitality and monthly farm basket delivery.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#0A2619]">
              <FiCheckCircle />
              <span>Farm Fresh Basket Delivery</span>
            </div>
          </motion.div>

          {/* Card 6: Image - Farmer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-md h-64 md:h-auto relative border border-[#0A2619]/10 group"
          >
            <img
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop"
              alt="Farmer Harvesting Crops"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
              Dedicated On-site Agronomists & Staff
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CropSelection;
