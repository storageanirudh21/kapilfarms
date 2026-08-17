import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiCheckCircle, 
  FiZap, 
  FiFileText, 
  FiHome, 
  FiDroplet, 
  FiTrendingUp, 
  FiUsers, 
  FiSun 
} from 'react-icons/fi';
import { GiSprout, GiTreeGrowth } from 'react-icons/gi';

const features = [
  {
    icon: FiDroplet,
    title: 'Automated Drip Irrigation',
    description: 'Precision water management system ensuring optimal moisture for every tree and crop 365 days a year.',
  },
  {
    icon: FiShield,
    title: '24/7 Security & CCTV',
    description: 'Fully fenced perimeter with manned security gates, mobile patrols, and smart CCTV surveillance.',
  },
  {
    icon: GiTreeGrowth,
    title: '10-Year Maintenance',
    description: 'End-to-end farm management included. Professional agronomists handle pruning, soil enrichment, and care.',
  },
  {
    icon: GiSprout,
    title: 'Organic Cultivation',
    description: 'Sustainable farming practices using natural fertilizers, pest control, and high-yield organic techniques.',
  },
  {
    icon: FiZap,
    title: 'Water & Power Infrastructure',
    description: 'Dedicated borewells, solar pumps, high-capacity water storage tanks, and robust electricity connection.',
  },
  {
    icon: FiTrendingUp,
    title: 'High-Yield Timber Trees',
    description: 'Planted with valuable Malabar Neem, Teak, and Sandalwood offering substantial harvest returns.',
  },
  {
    icon: FiHome,
    title: 'Clubhouse & Eco Resort',
    description: 'Enjoy weekend getaways with access to luxurious cottages, swimming pool, dining, and outdoor sports.',
  },
  {
    icon: FiFileText,
    title: '100% Clear Legal Title',
    description: 'Spot registration with transparent documentation, clear survey boundaries, and individual passbooks.',
  },
  {
    icon: FiUsers,
    title: 'Dedicated Agronomist',
    description: 'Quarterly crop health reports and personal farm manager to keep you updated on plantation growth.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 bg-[#0A2619] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#86E89E] font-display"
          >
            Everything included with your plot
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-emerald-200 font-medium"
          >
            We handle the heavy lifting so you can enjoy stress-free land ownership and compounding returns.
          </motion.p>
        </div>

        {/* 3x3 Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative bg-[#0E3222] hover:bg-[#123E2A] p-8 rounded-2xl border border-[#1B4531] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#0A2619] border border-[#1B4531] text-[#86E89E] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#86E89E] group-hover:text-[#0A2619] transition-all">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-[#86E89E] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1B4531]/50 flex items-center text-xs font-semibold text-[#86E89E]">
                  <span>Included In Maintenance</span>
                  <FiCheckCircle className="ml-2 text-sm" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
