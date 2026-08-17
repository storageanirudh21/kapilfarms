import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheck, FiArrowRight, FiFileText } from 'react-icons/fi';
import { GiReceiveMoney, GiTreeGrowth } from 'react-icons/gi';

const CalculatedAsset = () => {
  return (
    <section className="py-24 bg-[#DCEAE1] border-t border-[#0A2619]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0A2619] font-display"
          >
            Own a calculated asset{' '}
            <span className="block font-serif-italic font-normal text-2xl sm:text-4xl text-[#185338] mt-1">
              that grows with time.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#3C5B4C] font-medium"
          >
            Unlike depreciating assets, managed farmlands offer compounding land value plus recurring harvest profits.
          </motion.p>
        </div>

        {/* 2 White Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Annual Produce Yields */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl border border-[#0A2619]/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0A2619] text-[#86E89E] flex items-center justify-center text-2xl">
                  <GiReceiveMoney />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C4F4CE] text-[#0A2619] text-xs font-bold uppercase">
                  Recurring Revenue
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2619] font-display">
                Annual Fruit & Organic Harvest
              </h3>
              <p className="mt-3 text-sm text-[#3C5B4C]">
                Get steady annual passive income from mango orchards and seasonal harvests managed by Kapil Farms.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#0A2619]">
                  <FiCheck className="text-[#86E89E] bg-[#0A2619] rounded-full p-0.5" />
                  <span>Yearly crop revenue sharing starting Year 4</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#0A2619]">
                  <FiCheck className="text-[#86E89E] bg-[#0A2619] rounded-full p-0.5" />
                  <span>Free monthly organic hamper for plot owners</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#0A2619]">
                  <FiCheck className="text-[#86E89E] bg-[#0A2619] rounded-full p-0.5" />
                  <span>100% Tax-Free agricultural income in India</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0A2619] text-[#86E89E] hover:bg-[#061B11] py-3.5 px-6 rounded-2xl text-sm font-bold shadow-md transition-all"
              >
                <span>Request Financial ROI Sheet</span>
                <FiFileText />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Timber Maturity & Land Appreciation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl border border-[#0A2619]/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0A2619] text-[#86E89E] flex items-center justify-center text-2xl">
                  <GiTreeGrowth />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C4F4CE] text-[#0A2619] text-xs font-bold uppercase">
                  Long-Term Wealth
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2619] font-display">
                Timber Maturity & Land Appreciation
              </h3>
              <p className="mt-3 text-sm text-[#3C5B4C]">
                Teakwood and Sandalwood mature over 10-12 years, providing multi-fold capital lump sums while land value multiplies.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#0A2619]">
                  <FiCheck className="text-[#86E89E] bg-[#0A2619] rounded-full p-0.5" />
                  <span>Estimated 3x to 5x land appreciation along growth corridors</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#0A2619]">
                  <FiCheck className="text-[#86E89E] bg-[#0A2619] rounded-full p-0.5" />
                  <span>High-value timber commercial harvest buyout agreement</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#0A2619]">
                  <FiCheck className="text-[#86E89E] bg-[#0A2619] rounded-full p-0.5" />
                  <span>Hassle-free resale support through Kapil Group network</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0A2619] text-[#86E89E] hover:bg-[#061B11] py-3.5 px-6 rounded-2xl text-sm font-bold shadow-md transition-all"
              >
                <span>Calculate My Land Returns</span>
                <FiArrowRight />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CalculatedAsset;
