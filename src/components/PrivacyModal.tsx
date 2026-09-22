import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8D8CC] max-h-[85vh] overflow-y-auto text-[#5B4942]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="privacy-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7E6961] bg-[#FAF8F5] hover:bg-[#E8D8CC]/50 transition-colors focus:outline-none"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-[#9BA89B]" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#7A6A63]">
            Termos & Privacidade
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold mb-4 text-[#5B4942]">
          Política de Privacidade & Termos de Uso
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#7A6A63] leading-relaxed">
          <p>
            Bem-vinda ao site oficial de <strong>{CLINIC_INFO.brandName}</strong>. A sua privacidade, segurança e o sigilo de todas as informações compartilhadas conosco são valores inegociáveis.
          </p>

          <h4 className="font-serif font-bold text-sm text-[#5B4942] pt-2">
            1. Tratamento de Informações e Contato
          </h4>
          <p>
            Os dados fornecidos por você através de mensagens diretas no WhatsApp (como nome, tipo de procedimento cirúrgico, data ou queixas de pós-operatório) são utilizados exclusivamente para fins de esclarecimento de dúvidas, agendamento de consultas e elaboração do seu plano de atendimento individualizado.
          </p>

          <h4 className="font-serif font-bold text-sm text-[#5B4942] pt-2">
            2. Sigilo Profissional e Ética em Saúde
          </h4>
          <p>
            Nenhum dado, relato, fotografia de evolução ou prontuário é compartilhado com terceiros sem sua prévia e expressa autorização formal. Todas as condutas respeitam rigorosamente a legislação brasileira de proteção de dados (LGPD) e o sigilo profissional da atuação terapêutica.
          </p>

          <h4 className="font-serif font-bold text-sm text-[#5B4942] pt-2">
            3. Aviso de Responsabilidade em Saúde
          </h4>
          <p>
            O conteúdo disponibilizado nesta landing page possui caráter informativo e educacional. Os cuidados terapêuticos de pré e pós-operatório (como drenagem linfática reversa, taping terapêutico e manejo de fibroses) são complementares e não substituem o acompanhamento, as prescrições medicamentosas nem as revisões com o médico cirurgião responsável.
          </p>

          <h4 className="font-serif font-bold text-sm text-[#5B4942] pt-2">
            4. Atendimento Local
          </h4>
          <p>
            As sessões presenciais são realizadas em consultório higienizado na cidade de Imperatriz – Maranhão, seguindo normas de biossegurança vigentes.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#E8D8CC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-7 py-3 bg-[#5B4942] hover:bg-[#CFAFA4] text-white text-xs uppercase font-bold tracking-widest rounded-full transition-colors"
          >
            Entendido e fechar
          </button>
        </div>
      </div>
    </div>
  );
};
