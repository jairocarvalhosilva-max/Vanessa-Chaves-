import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Sparkles, Heart } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';
import sectionBgImage from '../assets/images/section_bg.png';

export const CtaSection: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(sectionBgImage);

  return (
    <section id="contato" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      {/* Background Image Container with Multi-layer Warm Contrast Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={imgSrc}
          onError={() => setImgSrc("https://i.ibb.co/KcnKdvwW/Chat-GPT-Image-22-de-set-de-2026-21-29-58.png")}
          onLoad={() => setImgLoaded(true)}
          alt="Ambiente acolhedor e seguro de pós-operatório - Vanessa Chaves"
          className={`w-full h-full object-cover object-center transition-all duration-1000 ${
            imgLoaded ? 'scale-100 blur-none' : 'scale-105 blur-xs'
          }`}
        />
        {/* Elegant warm overlay that keeps the image vividly visible while ensuring high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#251C17]/75 via-[#251C17]/45 to-[#251C17]/80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          id="final-cta-card"
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#2B211C]/75 backdrop-blur-md text-white text-center shadow-2xl border border-white/20 overflow-hidden"
        >
          {/* Subtle glowing ambient accents */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#CFAFA4]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#9BA89B]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/15 text-[#E8D8CC] text-[11px] font-bold tracking-[0.15em] rounded-full uppercase border border-white/20 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#CFAFA4]" />
              <span>RECUPERAÇÃO COM SEGURANÇA E ACOLHIMENTO</span>
            </span>
          </div>

          {/* Heading */}
          <h2
            id="cta-final-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6 leading-tight max-w-2xl mx-auto drop-shadow-sm"
          >
            Seu pós-operatório merece cuidado e atenção.
          </h2>

          {/* Subtext */}
          <p
            id="cta-final-text"
            className="text-base sm:text-xl text-[#F2E8E1] leading-relaxed max-w-2xl mx-auto mb-8 font-light drop-shadow-2xs"
          >
            Conte com um atendimento humanizado, científico e personalizado durante essa etapa crucial para os seus resultados.
          </p>

          {/* Location highlight */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-9 font-medium shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#CFAFA4]" />
            <span>Atendimento presencial em Imperatriz – MA</span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="cta-final-whatsapp-btn"
              href={getWhatsAppUrl("Olá, Vanessa! Gostaria de agendar meu atendimento pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all active:scale-[0.98] group cursor-pointer"
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
              id="cta-final-form-btn"
              href="#agendamento"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#agendamento')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 px-8 py-4 sm:py-5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all cursor-pointer backdrop-blur-xs"
            >
              <span>Preencher Formulário</span>
            </a>
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-widest text-[#E8D8CC]/80 font-medium">
            Horários com agendamento prévio • Atendimento individualizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};
