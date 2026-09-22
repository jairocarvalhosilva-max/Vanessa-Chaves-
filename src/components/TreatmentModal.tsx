import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { Treatment } from '../types';
import { getWhatsAppUrl } from '../data/content';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({ treatment, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (treatment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      id="treatment-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8D8CC] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="treatment-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7E6961] bg-[#FAF8F5] hover:bg-[#E8D8CC]/50 transition-colors focus:outline-none"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-[#E8D8CC] text-[#5B4942] text-[10px] font-bold tracking-[0.1em] rounded-sm uppercase">
              TRATAMENTO ESPECIALIZADO
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#5B4942]">
            {treatment.title}
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#7A6A63] font-semibold mt-1">
            {treatment.subtitle}
          </p>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 text-sm sm:text-base text-[#5B4942] leading-relaxed mb-6">
          <p>{treatment.fullDescription}</p>
        </div>

        {/* Key Benefits */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8D8CC]">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#5B4942] mb-3">
            Principais Objetivos & Cuidados
          </h4>
          <ul className="space-y-2.5">
            {treatment.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#7A6A63]">
                <CheckCircle2 className="w-4 h-4 text-[#9BA89B] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsible Guidance Note */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#FAF8F5] border-l-3 border-[#CFAFA4] flex items-start gap-3 text-xs text-[#7A6A63]">
          <AlertCircle className="w-4 h-4 text-[#CFAFA4] shrink-0 mt-0.5" />
          <p>{treatment.recommendation}</p>
        </div>

        {/* Modal Action CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            id="treatment-modal-whatsapp-btn"
            href={getWhatsAppUrl(`Olá, Vanessa! Gostaria de saber mais informações sobre o atendimento de ${treatment.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-all active:scale-[0.98]"
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
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#7A6A63] hover:text-[#5B4942] rounded-full border border-[#E8D8CC] bg-white transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
