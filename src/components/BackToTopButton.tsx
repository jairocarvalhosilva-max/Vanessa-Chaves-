import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const heroElement = document.getElementById('inicio');
      if (heroElement) {
        // Appears once the user has scrolled past the hero section
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 80);
      } else {
        // Fallback if hero id is not yet loaded
        setIsVisible(window.scrollY > 450);
      }
    };

    // Check on mount and add passive scroll listener
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="back-to-top-container"
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[990] pointer-events-auto"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <motion.button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Voltar ao início da página"
            title="Voltar ao topo"
            className="group flex items-center gap-2 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8D8CC] text-[#5B4942] shadow-[0_4px_20px_rgba(91,73,66,0.12)] hover:border-[#CFAFA4] hover:bg-[#FAF8F5] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#CFAFA4] focus:ring-offset-2"
          >
            <div className="w-5 h-5 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-[#E8D8CC] group-hover:bg-[#CFAFA4] group-hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-[#5B4942] group-hover:text-white transition-colors group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
            <span className="text-xs font-semibold tracking-wide hidden sm:inline text-[#5B4942]">
              Topo
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
