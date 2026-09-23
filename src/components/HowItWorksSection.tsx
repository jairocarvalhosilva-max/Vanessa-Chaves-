import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MessageCircle, UserCheck, ClipboardCheck, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, getWhatsAppUrl } from '../data/content';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const stepCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const HowItWorksSection: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <MessageCircle className="w-5 h-5 text-[#5B4942]" />;
      case '02':
        return <UserCheck className="w-5 h-5 text-[#5B4942]" />;
      case '03':
        return <ClipboardCheck className="w-5 h-5 text-[#5B4942]" />;
      case '04':
        return <Sparkles className="w-5 h-5 text-[#5B4942]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#5B4942]" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="mb-4">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase"
            >
              PROCESSO CLARO E SEGURO
            </motion.span>
          </div>

          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5B4942] tracking-tight mb-4"
          >
            Como funciona seu acompanhamento
          </h2>

          <p className="text-base sm:text-lg text-[#7A6A63] leading-relaxed">
            Do primeiro contato ao término da sua recuperação, cada etapa é pensada com carinho e precisão.
          </p>
        </motion.div>

        {/* Steps Grid with Staggered Scroll Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              id={`how-it-works-step-${step.stepNumber}`}
              variants={stepCardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: '0 16px 28px -8px rgba(91, 73, 66, 0.08)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="group relative p-7 rounded-2xl bg-[#FAF8F5] border border-[#E8D8CC] hover:border-[#CFAFA4] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    className="w-11 h-11 rounded-full bg-white border border-[#CFAFA4] group-hover:bg-[#CFAFA4] flex items-center justify-center text-[#5B4942] group-hover:text-white transition-colors shadow-xs"
                  >
                    {getStepIcon(step.stepNumber)}
                  </motion.div>
                  <span className="font-serif text-3xl font-bold text-[#CFAFA4] group-hover:text-[#5B4942] transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#5B4942] mb-2 group-hover:text-[#43332D] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[#7A6A63] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#E8D8CC] flex items-center justify-between text-[10px] uppercase tracking-wider text-[#7A6A63] font-semibold">
                <span>Etapa {index + 1} de 4</span>
                {index < 3 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#CFAFA4] group-hover:translate-x-1 transition-transform hidden lg:block" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Fast Action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
          <motion.a
            id="how-it-works-bottom-cta"
            href={getWhatsAppUrl("Olá, Vanessa! Gostaria de iniciar o passo 1 e tirar dúvidas sobre meu atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(37,211,102,0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.807 1.594 5.397l-.997 3.646 3.892-.942zm11.366-7.327c-.314-.157-1.858-.917-2.148-1.022-.289-.104-.5-.157-.71.157-.21.314-.813 1.022-.996 1.231-.183.209-.367.235-.68.079-.314-.157-1.328-.489-2.53-1.562-.936-.836-1.566-1.868-1.749-2.182-.183-.314-.02-.485.137-.641.141-.14.314-.367.471-.55.157-.183.209-.314.314-.524.105-.21.052-.393-.026-.55-.079-.157-.71-1.711-.973-2.34-.256-.611-.516-.529-.71-.539-.183-.01-.393-.012-.603-.012s-.55.079-.838.393c-.289.314-1.101 1.074-1.101 2.62s1.127 3.038 1.284 3.248c.157.209 2.218 3.388 5.373 4.75.751.324 1.336.518 1.792.663.753.239 1.439.206 1.982.125.604-.09 1.858-.759 2.121-1.492.262-.733.262-1.362.183-1.492-.08-.131-.289-.209-.603-.366z"/>
            </svg>
            <span>Começar Agora Pelo WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
