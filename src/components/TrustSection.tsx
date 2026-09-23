import React from 'react';
import { motion, Variants } from 'framer-motion';
import { HeartHandshake, Sparkles, Award, MapPin } from 'lucide-react';
import { DIFFERENTIALS } from '../data/content';

const trustContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const trustItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const TrustSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#5B4942] group-hover:text-white transition-colors" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#5B4942] group-hover:text-white transition-colors" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#5B4942] group-hover:text-white transition-colors" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#5B4942] group-hover:text-white transition-colors" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#5B4942] group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section
      id="secao-confianca"
      className="relative z-10 py-8 sm:py-10 bg-white border-y border-[#E8D8CC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={trustContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={index}
              id={`trust-card-${index + 1}`}
              variants={trustItemVariants}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 group p-2 transition-all"
            >
              <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] flex items-center justify-center group-hover:bg-[#CFAFA4] shrink-0 transition-all shadow-xs">
                {getIcon(item.iconName)}
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-tight text-[#5B4942] group-hover:text-[#43332D] transition-colors">
                  {item.title}
                </p>
                <p className="text-[10px] text-[#7A6A63] leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
