import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const checkItems = [
  { title: '100% Clear Legal Title Deeds', desc: 'Independently verified by top legal advocates with zero encumbrances.' },
  { title: 'Spot Registration & Passbook', desc: 'Direct registration in your name with government land passbooks.' },
  { title: 'Demarcated Boundaries with Fencing', desc: 'Stone pillars and individual boundary fencing for every plot.' },
  { title: 'Dedicated Borewell & Drip Network', desc: 'Pre-installed drip irrigation pipelines connected to central storage.' },
  { title: 'Plantation Guarantee Agreement', desc: 'Formal contract covering 10-year plantation maintenance and care.' },
  { title: 'Resort Membership Privileges', desc: 'Complimentary lifetime clubhouse access for plot owners and family.' },
];

const ValueProps = () => {
  return (
    <section className="py-24 bg-[#DCEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Checklist Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2619]/10 text-[#0A2619] text-xs font-bold uppercase tracking-wider">
              Complete Transparency
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A2619] font-display leading-tight">
              Before You Own,{' '}
              <span className="block font-serif-italic font-normal text-2xl sm:text-4xl text-[#185338] mt-1">
                Know Everything.
              </span>
            </h2>

            <p className="text-base text-[#3C5B4C] leading-relaxed">
              We eliminate guesswork. Every buyer receives clear survey maps, soil test reports, legal opinion documents, and a formal farm management agreement.
            </p>

            <div className="space-y-4 pt-2">
              {checkItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#0A2619] text-xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#0A2619] text-base font-display">{item.title}</h4>
                    <p className="text-xs text-[#3C5B4C] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop"
                alt="Neat Rows of Farmland Plantation"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#0A2619]/10 shadow-lg text-[#0A2619]">
                <h4 className="font-bold text-lg font-display">Verifiable On-Ground Demarcation</h4>
                <p className="text-xs text-[#3C5B4C] mt-1">
                  Visit our site to inspect marked boundary pillars, drip lines, and timber trees planted on your specific plot.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ValueProps;
