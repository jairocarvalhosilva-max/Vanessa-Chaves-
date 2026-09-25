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

          {/* Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#7A6A63] bg-[#E8D8CC]/40 px-3 py-1.5 rounded-full border border-[#E8D8CC]">
              <MapPin className="w-3.5 h-3.5 text-[#5B4942]" />
              Imperatriz – MA
            </span>
            <a
              id="header-cta-button"
              href="#agendamento"
              onClick={(e) => handleNavClick(e, '#agendamento')}
              className="inline-flex items-center gap-2 bg-[#5B4942] hover:bg-[#43332D] text-white px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-full transition-colors shadow-xs active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#CFAFA4]" />
              <span>Agendar Horário</span>
            </a>
            <a
              id="header-whatsapp-cta"
              href={getWhatsAppUrl("Olá, Vanessa! Gostaria de agendar meu atendimento pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-xs hover:shadow-md active:scale-95 animate-whatsapp-pulse cursor-pointer"
              aria-label="Falar no WhatsApp"
              title="Falar com Vanessa no WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-badge-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              id="header-mobile-quick-cta"
              href="#agendamento"
              onClick={(e) => handleNavClick(e, '#agendamento')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5B4942] hover:bg-[#43332D] text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
              aria-label="Agendar Horário"
            >
              <Calendar className="w-3.5 h-3.5 text-[#CFAFA4]" />
              <span>Agendar</span>
            </a>
            <a
              id="header-mobile-whatsapp-cta"
              href={getWhatsAppUrl("Olá, Vanessa! Gostaria de agendar meu atendimento pelo WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xs transition-all active:scale-95 animate-whatsapp-pulse"
              aria-label="Falar no WhatsApp"
              title="Falar com Vanessa no WhatsApp"
            >
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-badge-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <MessageCircle className="w-4 h-4 text-white" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#5B4942] bg-[#E8D8CC]/30 hover:bg-[#E8D8CC]/60 focus:outline-none transition-colors"
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
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-bold text-center shadow-xs active:scale-[0.99] animate-whatsapp-pulse"
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
