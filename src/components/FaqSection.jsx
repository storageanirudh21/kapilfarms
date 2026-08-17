import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is managed farmland and how does it work?',
    answer: 'Managed farmland is a hassle-free land ownership model where you purchase full legal title to a farmland plot, and Kapil Farms takes complete responsibility for cultivating, maintaining, and harvesting crops on your behalf using professional agronomists.',
  },
  {
    question: 'Who owns the land after purchase and registration?',
    answer: 'You own 100% of the land. The title deed, mutation, and government land passbook are registered directly in your name or your designated family members. Kapil Farms acts purely as your farm manager.',
  },
  {
    question: 'How is timber and fruit harvest revenue shared?',
    answer: 'For annual fruit harvests (mango, guava, organic vegetables), plot owners receive direct profit payouts or farm baskets. For long-term timber (Teak, Malabar Neem), revenue is shared based on agreed contract percentages at harvest maturity.',
  },
  {
    question: 'What happens after the initial 10-year free maintenance?',
    answer: 'After 10 years, plot owners can either renew the farm management agreement at a nominal annual fee or take over personal management of their farm plot.',
  },
  {
    question: 'Can non-farmers purchase agricultural farmland here?',
    answer: 'Yes! Our legal team assists with all necessary state documentation and approvals to ensure hassle-free land registration regardless of your background.',
  },
  {
    question: 'How do I access the resort and clubhouse amenities?',
    answer: 'Every plot owner receives a complimentary family membership card providing access to weekend cottages, swimming pool, dining hall, and recreational facilities at the resort center.',
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#DCEAE1] border-t border-[#0A2619]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A2619]/10 text-[#0A2619] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <FiHelpCircle className="text-sm" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0A2619] font-display"
          >
            Why Choose Kapil Farms?
          </motion.h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#0A2619]/10 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0A2619] text-lg font-display focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#DCEAE1] flex items-center justify-center text-[#0A2619] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0A2619] text-[#86E89E]' : ''}`}>
                    <FiChevronDown />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-[#3C5B4C] leading-relaxed border-t border-gray-100 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
