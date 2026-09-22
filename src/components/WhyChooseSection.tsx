import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Heart, Shield, Clock, Compass, Eye, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, getWhatsAppUrl } from '../data/content';

export const WhyChooseSection: React.FC = () => {
  const getItemIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Heart className="w-5 h-5 text-[#5B4942]" />;
      case 1:
        return <UserCheck className="w-5 h-5 text-[#5B4942]" />;
      case 2:
        return <Compass className="w-5 h-5 text-[#5B4942]" />;
      case 3:
        return <Shield className="w-5 h-5 text-[#5B4942]" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-[#5B4942]" />;
      case 5:
        return <Eye className="w-5 h-5 text-[#5B4942]" />;
      case 6:
        return <Clock className="w-5 h-5 text-[#5B4942]" />;
      default:
        return <Check className="w-5 h-5 text-[#5B4942]" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E8D8CC]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Philosophical Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase">
                DIFERENCIAIS EXCLUSIVOS
              </span>
            </div>

            <h2
              id="why-choose-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5B4942] tracking-tight mb-6 leading-tight"
            >
              Um atendimento pensado para você.
            </h2>

            <p className="text-base sm:text-lg text-[#7A6A63] leading-relaxed mb-8">
              A recuperação cirúrgica não deve ser um processo solitário ou doloroso. Cada procedimento cirúrgico exige uma leitura atenta do tecido, delicadeza no toque e respeito integral ao tempo de cicatrização do seu organismo.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#E8D8CC] shadow-xs mb-8">
              <p className="font-serif italic text-lg text-[#5B4942] mb-3">
                &ldquo;Menos inchaço com segurança é resultado de técnica correta, não de força.&rdquo;
              </p>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#7A6A63] font-semibold">
                Vanessa Chaves • Especialista
              </div>
            </div>

            <a
              id="why-choose-cta-btn"
              href={getWhatsAppUrl("Olá, Vanessa! Gostaria de entender mais sobre os benefícios do atendimento personalizado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#5B4942] hover:bg-[#CFAFA4] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-colors shadow-xs active:scale-[0.98]"
            >
              Conversar com Vanessa
            </a>
          </motion.div>

          {/* Right Column: 7 Specific Benefits List */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  id={`benefit-item-${index + 1}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="p-5 rounded-2xl bg-white border border-[#E8D8CC] hover:border-[#CFAFA4] hover:shadow-sm transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] flex items-center justify-center shrink-0">
                    {getItemIcon(index)}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#5B4942] mb-1 flex items-center gap-1.5">
                      <span className="text-[#9BA89B] text-sm">✓</span>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7A6A63] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Special 8th card to complete the visual balance */}
              <motion.div
                id="benefit-item-extra-care"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-5 rounded-2xl bg-white border border-[#E8D8CC] flex items-center gap-4 sm:col-span-2 shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] flex items-center justify-center text-[#5B4942] shrink-0">
                  <Sparkles className="w-4 h-4 text-[#5B4942]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#5B4942]">
                    Suporte contínuo para sua tranquilidade
                  </h4>
                  <p className="text-xs text-[#7A6A63] leading-relaxed">
                    Canal direto para tirar dúvidas sobre postura, repouso e cuidados domiciliares durante todo o acompanhamento.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
