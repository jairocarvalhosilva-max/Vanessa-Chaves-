import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/content';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Vídeo', href: '#video' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-xs border-b border-[#E8D8CC] py-3.5'
          : 'bg-white/50 backdrop-blur-sm border-b border-[#E8D8CC]/80 py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="header-brand-link"
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group focus:outline-none"
            aria-label="Vanessa Chaves - Início"
          >
            <Logo variant="header" />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-[#5B4942]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`desktop-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#CFAFA4] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#7A6A63] bg-[#E8D8CC]/40 px-3 py-1.5 rounded-full border border-[#E8D8CC]">
              <MapPin className="w-3.5 h-3.5 text-[#5B4942]" />
              Imperatriz – MA
            </span>
            <a
              id="header-cta-button"
              href="#agendamento"
              onClick={(e) => handleNavClick(e, '#agendamento')}
              className="inline-flex items-center gap-2 bg-[#5B4942] hover:bg-[#CFAFA4] text-white px-5 py-2.5 text-xs uppercase tracking-widest font-bold rounded-full transition-colors shadow-xs active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#CFAFA4]" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              id="header-mobile-quick-cta"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-all active:scale-95"
              aria-label="WhatsApp"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.807 1.594 5.397l-.997 3.646 3.892-.942zm11.366-7.327c-.314-.157-1.858-.917-2.148-1.022-.289-.104-.5-.157-.71.157-.21.314-.813 1.022-.996 1.231-.183.209-.367.235-.68.079-.314-.157-1.328-.489-2.53-1.562-.936-.836-1.566-1.868-1.749-2.182-.183-.314-.02-.485.137-.641.141-.14.314-.367.471-.55.157-.183.209-.314.314-.524.105-.21.052-.393-.026-.55-.079-.157-.71-1.711-.973-2.34-.256-.611-.516-.529-.71-.539-.183-.01-.393-.012-.603-.012s-.55.079-.838.393c-.289.314-1.101 1.074-1.101 2.62s1.127 3.038 1.284 3.248c.157.209 2.218 3.388 5.373 4.75.751.324 1.336.518 1.792.663.753.239 1.439.206 1.982.125.604-.09 1.858-.759 2.121-1.492.262-.733.262-1.362.183-1.492-.08-.131-.289-.209-.603-.366z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#5B4942] bg-[#E8D8CC]/30 hover:bg-[#E8D8CC]/60 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden border-t border-[#E8D8CC]/80 bg-[#FAF8F5] px-5 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3">
            <div className="pb-2 mb-1 border-b border-[#E8D8CC]/50 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7E6961]">
                Navegação
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#5B4942] bg-[#E8D8CC]/50 px-2 py-0.5 rounded-full">
                <MapPin className="w-3 h-3 text-[#5B4942]" />
                Imperatriz – MA
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 text-base font-medium text-[#5B4942] hover:text-[#43332D] border-b border-[#E8D8CC]/30 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#CFAFA4]" />
              </a>
            ))}

            <div className="pt-2 space-y-2">
              <a
                id="mobile-menu-form-btn"
                href="#agendamento"
                onClick={(e) => handleNavClick(e, '#agendamento')}
                className="w-full flex items-center justify-center gap-2.5 bg-[#5B4942] text-white py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-bold text-center shadow-xs active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-[#CFAFA4]" />
                <span>Formulário de Agendamento</span>
              </a>

              <a
                id="mobile-menu-whatsapp-btn"
                href={getWhatsAppUrl("Olá, Vanessa! Gostaria de agendar meu atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-3 px-4 rounded-xl text-xs uppercase tracking-widest font-bold text-center shadow-xs active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Falar Direto no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
