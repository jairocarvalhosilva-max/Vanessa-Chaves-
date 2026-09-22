import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Layers, Fingerprint, Droplets, Calendar, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { TREATMENTS } from '../data/content';
import { Treatment } from '../types';
import { TreatmentModal } from './TreatmentModal';

// Subtle, graceful fade-in-up variant with staggered reveal per card
const cardFadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const TreatmentsSection: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const getTreatmentIcon = (id: string) => {
    switch (id) {
      case 'taping':
        return <Layers className="w-6 h-6 text-[#5B4942]" />;
      case 'fibrose':
        return <Fingerprint className="w-6 h-6 text-[#5B4942]" />;
      case 'drenagem':
        return <Droplets className="w-6 h-6 text-[#5B4942]" />;
      case 'pre-operatorio':
        return <Calendar className="w-6 h-6 text-[#5B4942]" />;
      case 'pos-operatorio':
        return <ShieldCheck className="w-6 h-6 text-[#5B4942]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#5B4942]" />;
    }
  };

  return (
    <section id="tratamentos" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase">
              ABORDAGEM INDIVIDUALIZADA
            </span>
          </div>

          <h2
            id="treatments-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5B4942] tracking-tight mb-4"
          >
            Tratamentos especializados
          </h2>

          <p className="text-base sm:text-lg text-[#7A6A63] leading-relaxed">
            Técnicas selecionadas de acordo com as necessidades de cada pessoa.
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TREATMENTS.map((treatment, index) => {
            const isLastTwoOnLg = index >= 3;
            return (
              <motion.div
                key={treatment.id}
                id={`treatment-card-${treatment.id}`}
                variants={cardFadeInUpVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
                whileHover={{
                  scale: 1.025,
                  y: -4,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.99 }}
                className={`group relative rounded-3xl p-7 bg-[#FAF8F5] border border-[#E8D8CC] hover:border-[#CFAFA4] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between ${
                  isLastTwoOnLg ? 'lg:translate-x-0' : ''
                }`}
              >
                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-full bg-white border border-[#CFAFA4] group-hover:bg-[#CFAFA4] flex items-center justify-center transition-all shadow-xs">
                      {getTreatmentIcon(treatment.id)}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A6A63] bg-white px-2.5 py-1 rounded-full border border-[#E8D8CC]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B4942] mb-1.5 group-hover:text-[#43332D] transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#7A6A63] font-semibold mb-4">
                    {treatment.subtitle}
                  </p>

                  <p className="text-sm text-[#7A6A63] leading-relaxed mb-6">
                    {treatment.shortDescription}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#E8D8CC] flex items-center justify-between">
                  <button
                    id={`btn-saiba-mais-${treatment.id}`}
                    type="button"
                    onClick={() => setSelectedTreatment(treatment)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#5B4942] hover:text-[#CFAFA4] focus:outline-none transition-colors"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 text-[#CFAFA4] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[10px] uppercase tracking-wider text-[#7A6A63] font-medium">
                    Individualizado
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible Disclaimer Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#7A6A63] max-w-2xl mx-auto leading-relaxed">
            * Cada recurso terapêutico é indicado estritamente após avaliação clínica e respeitando a orientação do cirurgião plástico responsável. Não realizamos promessas de cura ou de resultados imediatos sem a cooperação fisiológica individual.
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </section>
  );
};
