import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiTrendingUp, FiSmile } from 'react-icons/fi';

const WhyInvest = () => {
  return (
    <section className="py-24 bg-[#0A2619] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#86E89E]/10 border border-[#86E89E]/20 text-[#86E89E] text-xs font-bold uppercase tracking-wider">
              <FiShield />
              <span>Why Kapil Farmlands</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
              Built for Trust.{' '}
              <span className="block text-[#86E89E] font-serif-italic font-normal text-2xl sm:text-4xl mt-1">
                Managed for Generational Wealth.
              </span>
            </h2>

            <p className="text-emerald-100/80 text-base sm:text-lg leading-relaxed">
              Farmland is proven to outperform traditional real estate in capital appreciation while providing tax-free agricultural income and a serene retreat for your family.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E3222] border border-[#1B4531]">
                <div className="w-10 h-10 rounded-lg bg-[#86E89E] text-[#0A2619] flex items-center justify-center text-xl shrink-0 font-bold">
                  <FiCheckCircle />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-display">Zero-Hassle Farm Operations</h4>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    Our team of experienced agronomists manages irrigation, fertilization, pruning, and crop harvesting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E3222] border border-[#1B4531]">
                <div className="w-10 h-10 rounded-lg bg-[#86E89E] text-[#0A2619] flex items-center justify-center text-xl shrink-0 font-bold">
                  <FiTrendingUp />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-display">Dual Return Model</h4>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    Benefit from both high land value appreciation along major infrastructure corridors and high-yield timber harvests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E3222] border border-[#1B4531]">
                <div className="w-10 h-10 rounded-lg bg-[#86E89E] text-[#0A2619] flex items-center justify-center text-xl shrink-0 font-bold">
                  <FiSmile />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-display">A Weekend Sanctuary</h4>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    Escape city noise. Stay at our eco-cottages, enjoy fresh organic produce, and create unforgettable family memories.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1B4531]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Happy Farm Landowners"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619]/90 via-transparent to-transparent" />
              
              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0A2619]/95 backdrop-blur-md rounded-2xl border border-[#1B4531]">
                <p className="text-sm italic text-emerald-100 font-serif">
                  "Investing in Kapil Farmlands was the best financial move for our family's future. We get high timber returns while having our private weekend resort!"
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#86E89E] text-[#0A2619] font-bold flex items-center justify-center text-xs">
                    RK
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white font-display block">Rajesh K. & Family</span>
                    <span className="text-[10px] text-[#86E89E]">Plot Owner since 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
