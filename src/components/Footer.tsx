import React, { useState } from 'react';
import { MapPin, MessageCircle, Instagram, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/content';
import { PrivacyModal } from './PrivacyModal';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Agendamento', href: '#agendamento' },
    { label: 'Dúvidas Frequentes', href: '#duvidas' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#FAF8F5] border-t border-[#E8D8CC] pt-16 pb-12 text-[#5B4942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E8D8CC]">
          {/* Column 1: Main Brand & Specialization */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a
              id="footer-brand-link"
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="group focus:outline-none mb-3"
              aria-label="Vanessa Chaves - Voltar ao início"
            >
              <Logo variant="footer" />
            </a>

            <p className="text-sm font-medium text-[#5B4942] mb-4 mt-2">
              Taping • Fibrose • Drenagem Linfática
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#5B4942] bg-[#E8D8CC] px-3.5 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[#5B4942]" />
              <span className="font-medium text-[11px]">{CLINIC_INFO.locationDisplay}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#5B4942] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#7A6A63]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#5B4942] hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-[#5B4942] hover:underline transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 className="font-serif text-base font-bold text-[#5B4942] mb-4">
              Canais de Atendimento
            </h4>
            <p className="text-xs sm:text-sm text-[#7A6A63] mb-5 leading-relaxed">
              Agendamentos e dúvidas diretamente no WhatsApp ou acompanhe novidades e conteúdos no Instagram.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                id="footer-whatsapp-link"
                href={getWhatsAppUrl("Olá, Vanessa! Vim pelo rodapé do seu site e gostaria de agendar uma avaliação.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase font-bold tracking-widest px-6 py-2.5 rounded-full transition-colors shadow-xs"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.807 1.594 5.397l-.997 3.646 3.892-.942zm11.366-7.327c-.314-.157-1.858-.917-2.148-1.022-.289-.104-.5-.157-.71.157-.21.314-.813 1.022-.996 1.231-.183.209-.367.235-.68.079-.314-.157-1.328-.489-2.53-1.562-.936-.836-1.566-1.868-1.749-2.182-.183-.314-.02-.485.137-.641.141-.14.314-.367.471-.55.157-.183.209-.314.314-.524.105-.21.052-.393-.026-.55-.079-.157-.71-1.711-.973-2.34-.256-.611-.516-.529-.71-.539-.183-.01-.393-.012-.603-.012s-.55.079-.838.393c-.289.314-1.101 1.074-1.101 2.62s1.127 3.038 1.284 3.248c.157.209 2.218 3.388 5.373 4.75.751.324 1.336.518 1.792.663.753.239 1.439.206 1.982.125.604-.09 1.858-.759 2.121-1.492.262-.733.262-1.362.183-1.492-.08-.131-.289-.209-.603-.366z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              <a
                id="footer-instagram-link"
                href={CLINIC_INFO.instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#5B4942] border border-[#E8D8CC] text-xs uppercase font-bold tracking-widest px-6 py-2.5 rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#5B4942]" />
                <span>Instagram {CLINIC_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Responsible Medical Disclaimer */}
        <div className="pt-8 pb-8 text-center max-w-4xl mx-auto">
          <p
            id="footer-medical-disclaimer"
            className="text-xs text-[#7A6A63] leading-relaxed"
          >
            {CLINIC_INFO.medicalDisclaimer}
          </p>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-4 border-t border-[#E8D8CC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6A63]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:underline hover:text-[#5B4942]"
            >
              Privacidade
            </button>
            <span className="text-[#CFAFA4]">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#5B4942] transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </footer>
  );
};
