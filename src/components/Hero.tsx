import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/content';
import heroImage from '../assets/images/vanessa_hero_clinic.png';

export const Hero: React.FC = () => {
  const scrollToTreatments = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#tratamentos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F7F2EC] to-[#FAF8F5]"
    >
      {/* Background Soft Organic Shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#E8D8CC]/40 via-[#CFAFA4]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#9BA89B]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Highlight Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase">
                CUIDADO ESPECIALIZADO • IMPERATRIZ - MA
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-title"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#5B4942] leading-[1.1] mb-6"
            >
              Menos inchaço,<br />
              <span className="italic text-[#CFAFA4]">mais definição.</span>
            </h1>

            {/* Subtitle / Paragraph Description */}
            <p
              id="hero-description"
              className="text-lg text-[#7A6A63] leading-relaxed max-w-lg mb-8"
            >
              Cuidados especializados para acompanhar você antes e depois do procedimento, com técnicas personalizadas e atendimento humanizado para sua recuperação plena.
            </p>

            {/* Specialist & Location Credential Card */}
            <div
              id="hero-specialist-info"
              className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-white/80 border border-[#E8D8CC] shadow-xs mb-8 max-w-xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#CFAFA4] flex items-center justify-center text-[#5B4942]">
                <Heart className="w-4 h-4 text-[#5B4942]" />
              </div>
              <div className="flex-1 min-w-[180px]">
                <div className="font-serif font-bold text-base text-[#5B4942]">
                  {CLINIC_INFO.name}
                </div>
                <div className="text-xs text-[#7A6A63]">
                  {CLINIC_INFO.role}
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B4942] bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#E8D8CC]">
                <MapPin className="w-3.5 h-3.5 text-[#5B4942]" />
                <span>Imperatriz – MA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-cta-whatsapp"
                href={getWhatsAppUrl("Olá, Vanessa! Vi a página inicial e gostaria de agendar um atendimento para pré/pós-operatório.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] transition-all active:scale-[0.98] group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0 group-hover:scale-110 transition-transform"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.807 1.594 5.397l-.997 3.646 3.892-.942zm11.366-7.327c-.314-.157-1.858-.917-2.148-1.022-.289-.104-.5-.157-.71.157-.21.314-.813 1.022-.996 1.231-.183.209-.367.235-.68.079-.314-.157-1.328-.489-2.53-1.562-.936-.836-1.566-1.868-1.749-2.182-.183-.314-.02-.485.137-.641.141-.14.314-.367.471-.55.157-.183.209-.314.314-.524.105-.21.052-.393-.026-.55-.079-.157-.71-1.711-.973-2.34-.256-.611-.516-.529-.71-.539-.183-.01-.393-.012-.603-.012s-.55.079-.838.393c-.289.314-1.101 1.074-1.101 2.62s1.127 3.038 1.284 3.248c.157.209 2.218 3.388 5.373 4.75.751.324 1.336.518 1.792.663.753.239 1.439.206 1.982.125.604-.09 1.858-.759 2.121-1.492.262-.733.262-1.362.183-1.492-.08-.131-.289-.209-.603-.366z"/>
                </svg>
                <span>Agendar via WhatsApp</span>
              </a>

              <a
                id="hero-secondary-treatments"
                href="#tratamentos"
                onClick={scrollToTreatments}
                className="border border-[#5B4942]/20 text-[#5B4942] px-8 py-4 rounded-full font-bold hover:bg-[#E8D8CC]/30 transition-colors flex items-center justify-center gap-2"
              >
                <span>Conhecer Tratamentos</span>
                <ArrowRight className="w-4 h-4 text-[#7A6A63]" />
              </a>
            </div>

            {/* Micro assurance note & form link */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-[#7A6A63]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9BA89B] shrink-0" />
                <span>Avaliação individualizada • Imperatriz – MA</span>
              </div>
              <span className="hidden sm:inline text-[#E8D8CC]">|</span>
              <a
                href="#agendamento"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#agendamento')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-bold underline text-[#5B4942] hover:text-[#CFAFA4] transition-colors"
              >
                Preencher formulário no site →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Asset with Arched Geometry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center py-4"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FAF8F5] -z-10 pointer-events-none" />

            {/* Arched Polish Frame */}
            <div className="w-[85%] sm:w-[82%] aspect-[3/4] sm:aspect-[4/5] rounded-t-full bg-[#CFAFA4] overflow-hidden border-[10px] sm:border-[12px] border-white z-0 relative shadow-2xl group">
              <img
                id="hero-care-image"
                src={heroImage}
                alt="Atendimento especializado e humanizado de pós-operatório com Vanessa Chaves em clínica higienizada e acolhedora em Imperatriz MA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Bottom Badge - Compact and discreet to keep the photo visible */}
              <div
                id="hero-floating-card"
                className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 w-max max-w-[92%] bg-white/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full border border-[#E8D8CC]/90 shadow-sm flex items-center gap-2 z-20 pointer-events-none"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FAF8F5] border border-[#CFAFA4]/80 flex items-center justify-center text-[#5B4942] shrink-0">
                  <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#5B4942]" />
                </div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-[#5B4942] whitespace-nowrap">
                    Atendimento Humanizado
                  </span>
                  <span className="text-[9px] text-[#7A6A63] hidden sm:inline whitespace-nowrap">
                    • Imperatriz-MA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
