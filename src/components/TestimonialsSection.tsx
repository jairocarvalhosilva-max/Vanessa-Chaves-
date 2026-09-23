import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Star, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { TESTIMONIALS, getWhatsAppUrl } from '../data/content';

const testimonialsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const testimonialCardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase">
              ACOLHIMENTO & CUIDADO
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#5B4942] tracking-tight mb-4"
          >
            Experiências de quem recebeu nosso cuidado
          </h2>

          <p className="text-base sm:text-lg text-[#7A6A63] leading-relaxed">
            Veja o que dizem as pacientes que confiaram seu período de recuperação ao atendimento humanizado da Vanessa.
          </p>

          <div className="mt-3 inline-block bg-white border border-[#E8D8CC] rounded-full px-4 py-1 text-[10px] uppercase tracking-wider text-[#7A6A63] font-medium">
            <span>Nota: Relatos estruturados para acolher avaliações de pacientes acompanhadas em Imperatriz.</span>
          </div>
        </motion.div>

        {/* Testimonials Cards */}
        <motion.div
          variants={testimonialsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              id={`testimonial-card-${index + 1}`}
              variants={testimonialCardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: '0 16px 28px -8px rgba(91, 73, 66, 0.08)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E8D8CC] hover:border-[#CFAFA4] shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#CFAFA4] text-[#CFAFA4] group-hover:scale-110 transition-transform"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-[#5B4942] italic leading-relaxed mb-6 font-serif">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-[#E8D8CC] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#5B4942]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#7A6A63]">
                    {t.procedure}
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#9BA89B] bg-[#EEF3EE] px-2.5 py-1 rounded-full border border-[#9BA89B]/20">
                  Verificado
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Invitation Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl bg-white/70 border border-[#E8D8CC] text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7E6961] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#CFAFA4]" />
            <span>Já foi atendida por Vanessa Chaves?</span>
          </div>
          <p className="text-xs sm:text-sm text-[#7E6961] mb-4">
            Seu relato é precioso e ajuda outras pessoas a tomarem decisões com mais segurança e tranquilidade.
          </p>
          <a
            id="testimonial-share-cta"
            href={getWhatsAppUrl("Olá, Vanessa! Gostaria de deixar um depoimento sobre o meu atendimento com você.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5B4942] hover:text-[#43332D] underline"
          >
            <MessageCircle className="w-4 h-4 text-[#CFAFA4]" />
            <span>Compartilhar sua experiência pelo WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
