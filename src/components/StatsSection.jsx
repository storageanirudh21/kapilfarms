import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Farmland Developed', value: '100+', subText: 'Acres of pristine gated land' },
  { label: 'Available Plot Sizes', value: '2 - 5', subText: 'Acres per individual unit' },
  { label: 'Developer Track Record', value: '20+', subText: 'Years of real estate excellence' },
  { label: 'Group Legacy Year', value: '1961', subText: 'Building trust for generations' },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-[#DCEAE1] border-b border-[#0A2619]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0A2619] font-display"
          >
            More Than Numbers.{' '}
            <span className="block font-serif-italic font-normal text-2xl sm:text-4xl text-[#185338] mt-1">
              A Legacy You Can Trust.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#0A2619]/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <span className="text-4xl sm:text-6xl font-black text-[#0A2619] font-display tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-bold text-[#0A2619] uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-[#3C5B4C]">
                {stat.subText}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
