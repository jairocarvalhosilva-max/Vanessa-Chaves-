import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="whatsapp-floating-container"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] flex flex-col items-end gap-2 pointer-events-auto"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Friendly Tooltip / Mini Badge */}
      {showTooltip && (
        <div
          id="whatsapp-floating-tooltip"
          className="bg-white/95 backdrop-blur-md text-[#5B4942] text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#E8D8CC] flex items-center gap-2 max-w-[240px] animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping shrink-0" />
          <p className="leading-tight text-[11px] font-semibold text-[#5B4942]">
            Online agora • Fale com a Vanessa no WhatsApp
          </p>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 rounded-full text-[#7E6961] hover:text-[#5B4942] focus:outline-none shrink-0"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Green WhatsApp Button */}
      <a
        id="whatsapp-floating-btn"
        href={getWhatsAppUrl(CLINIC_INFO.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3.5 sm:px-6 sm:py-4 rounded-full shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white"
        aria-label="Falar no WhatsApp"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-pulse pointer-events-none" />

        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0 relative z-10 drop-shadow-sm"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.807 1.594 5.397l-.997 3.646 3.892-.942zm11.366-7.327c-.314-.157-1.858-.917-2.148-1.022-.289-.104-.5-.157-.71.157-.21.314-.813 1.022-.996 1.231-.183.209-.367.235-.68.079-.314-.157-1.328-.489-2.53-1.562-.936-.836-1.566-1.868-1.749-2.182-.183-.314-.02-.485.137-.641.141-.14.314-.367.471-.55.157-.183.209-.314.314-.524.105-.21.052-.393-.026-.55-.079-.157-.71-1.711-.973-2.34-.256-.611-.516-.529-.71-.539-.183-.01-.393-.012-.603-.012s-.55.079-.838.393c-.289.314-1.101 1.074-1.101 2.62s1.127 3.038 1.284 3.248c.157.209 2.218 3.388 5.373 4.75.751.324 1.336.518 1.792.663.753.239 1.439.206 1.982.125.604-.09 1.858-.759 2.121-1.492.262-.733.262-1.362.183-1.492-.08-.131-.289-.209-.603-.366z"/>
        </svg>

        <div className="flex flex-col text-left leading-none relative z-10">
          <span className="text-[10px] uppercase font-bold text-white/90 tracking-wider hidden sm:block">Fale Conosco</span>
          <span className="font-bold text-sm sm:text-base tracking-wide text-white">WhatsApp</span>
        </div>
      </a>
    </div>
  );
};
