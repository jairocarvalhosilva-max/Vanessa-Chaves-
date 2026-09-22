import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, MapPin, Heart, Sparkles } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/content';
import vanessaPortrait from '../assets/images/vanessa_about_portrait.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Portrait & Visual Badge */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Arched Polish Frame */}
            <div className="w-[85%] sm:w-[82%] aspect-[3/4] rounded-t-full bg-[#CFAFA4] overflow-hidden border-[10px] sm:border-[12px] border-white z-0 relative shadow-2xl group">
              <img
                id="about-vanessa-portrait"
                src={vanessaPortrait}
                alt="Retrato profissional de Vanessa Chaves, especialista em pré e pós-operatório em Imperatriz MA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Badge Over Image - Compact and discreet to keep the portrait unobstructed */}
              <div
                id="about-portrait-caption"
                className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 w-max max-w-[92%] bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E8D8CC]/90 shadow-sm flex items-center gap-2 z-20 pointer-events-none"
              >
                <span className="font-serif font-bold text-xs text-[#5B4942] whitespace-nowrap">
                  {CLINIC_INFO.name}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#CFAFA4] shrink-0" />
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-[#7A6A63] whitespace-nowrap">
                  <MapPin className="w-2.5 h-2.5 text-[#5B4942]" />
                  Imperatriz
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Institutional Content */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase">
                SOBRE O ATENDIMENTO
              </span>
            </div>

            <h2
              id="about-section-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5B4942] leading-[1.15] mb-6"
            >
              Cuidar de você também faz parte da recuperação.
            </h2>

            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-[#5B4942] block">
                {CLINIC_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A6A63] font-semibold">
                {CLINIC_INFO.role}
              </span>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#7A6A63] leading-relaxed mb-6">
              <p>
                &ldquo;Meu propósito é oferecer um atendimento acolhedor, cuidadoso e individualizado para pessoas que estão vivendo o período pré ou pós-operatório.
              </p>
              <p>
                Cada corpo possui necessidades diferentes. Por isso, o atendimento é realizado com atenção aos detalhes, respeitando cada etapa e buscando proporcionar mais conforto durante esse processo.&rdquo;
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E8D8CC]">
                <CheckCircle2 className="w-4 h-4 text-[#9BA89B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#5B4942] font-medium">
                  Alinhamento ético com as orientações médicas
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E8D8CC]">
                <CheckCircle2 className="w-4 h-4 text-[#9BA89B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#5B4942] font-medium">
                  Abordagem suave e livre de agressões ao tecido
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E8D8CC]">
                <CheckCircle2 className="w-4 h-4 text-[#9BA89B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#5B4942] font-medium">
                  Suporte humanizado para diminuir ansiedades
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E8D8CC]">
                <CheckCircle2 className="w-4 h-4 text-[#9BA89B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#5B4942] font-medium">
                  Acolhimento exclusivo em Imperatriz – MA
                </span>
              </div>
            </div>

            {/* Special Highlight Callout */}
            <div
              id="about-callout"
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8D8CC] shadow-xs mb-8 w-full"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#CFAFA4]" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B4942]">
                  Seu cuidado merece atenção em cada etapa.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#7A6A63] leading-relaxed">
                Um acompanhamento atento transforma a experiência cirúrgica em um período com muito mais leveza, segurança e bem-estar.
              </p>
            </div>

            {/* Action CTA */}
            <a
              id="about-cta-button"
              href={getWhatsAppUrl("Olá, Vanessa! Li sobre o seu atendimento no site e gostaria de conversar sobre meu pós-operatório.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] active:scale-[0.98]"
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
              <span>Quero Conhecer o Atendimento</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
