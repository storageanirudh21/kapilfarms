import React from 'react';
import { motion } from 'framer-motion';
import { GiSprout, GiRibbonMedal } from 'react-icons/gi';
import { FiCheckCircle } from 'react-icons/fi';

const LegacySection = () => {
  return (
    <section className="py-24 bg-[#DCEAE1] border-t border-[#0A2619]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Legacy Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#C4F4CE] p-8 md:p-12 rounded-3xl border border-[#0A2619]/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0A2619] text-[#86E89E] flex items-center justify-center text-2xl shadow-md">
                  <GiRibbonMedal />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A2619] block">
                    Kapil Group Enterprise
                  </span>
                  <span className="text-sm font-semibold text-[#185338]">
                    Established 1961
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2619] font-display leading-tight">
                Backed by a Legacy.{' '}
                <span className="block font-serif-italic font-normal text-2xl sm:text-3xl text-[#185338] mt-1">
                  Built For Your Future.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#244E39] leading-relaxed">
                Kapil Group is a multi-industry conglomerate with over 6 decades of trust spanning real estate, financial services, media, and agriculture. When you buy from Kapil Farms, you invest with rock-solid security and verified legal transparency.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A2619]/15 flex flex-wrap gap-4 text-xs font-bold text-[#0A2619]">
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-base text-[#0A2619]" />
                <span>60+ Years Trust</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-base text-[#0A2619]" />
                <span>10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-base text-[#0A2619]" />
                <span>Zero Debt Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right Metrics Vertical Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-white p-6 rounded-2xl border border-[#0A2619]/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0A2619] font-display">100+</span>
                <span className="block text-xs font-bold text-[#3C5B4C] uppercase tracking-wider mt-0.5">
                  Total Acres under Management
                </span>
              </div>
              <span className="text-xs font-medium text-[#185338] bg-[#C4F4CE] px-3 py-1.5 rounded-full">
                Phase 1 & 2
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#0A2619]/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0A2619] font-display">2 - 5</span>
                <span className="block text-xs font-bold text-[#3C5B4C] uppercase tracking-wider mt-0.5">
                  Acres Plot Sizes Available
                </span>
              </div>
              <span className="text-xs font-medium text-[#185338] bg-[#C4F4CE] px-3 py-1.5 rounded-full">
                Custom Demarcation
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#0A2619]/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0A2619] font-display">0 - 30 min</span>
                <span className="block text-xs font-bold text-[#3C5B4C] uppercase tracking-wider mt-0.5">
                  From Express Highways & Airport
                </span>
              </div>
              <span className="text-xs font-medium text-[#185338] bg-[#C4F4CE] px-3 py-1.5 rounded-full">
                Prime Location
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#0A2619]/10 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0A2619] font-display">1961</span>
                <span className="block text-xs font-bold text-[#3C5B4C] uppercase tracking-wider mt-0.5">
                  Kapil Group Foundation Year
                </span>
              </div>
              <span className="text-xs font-medium text-[#185338] bg-[#C4F4CE] px-3 py-1.5 rounded-full">
                Proven Track Record
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LegacySection;
