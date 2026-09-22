import React from 'react';

interface LogoProps {
  variant?: 'header' | 'footer' | 'large';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  showSubtitle = true,
  className = '',
}) => {
  const isFooter = variant === 'footer';
  const isLarge = variant === 'large';

  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {/* Emblem Icon / Seal */}
      <div
        className={`relative shrink-0 rounded-full overflow-hidden border border-[#E8D8CC] shadow-xs bg-white ${
          isFooter || isLarge ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-10 h-10 sm:w-12 sm:h-12'
        }`}
      >
        <img
          src="/vanessa_logo.jpg"
          alt="Logotipo Vanessa Chaves"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-bold tracking-tight text-[#5B4942] group-hover:text-[#43332D] transition-colors leading-none ${
            isFooter || isLarge ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          Vanessa Chaves
        </span>

        {showSubtitle && (
          <span
            className={`uppercase tracking-[0.18em] text-[#7A6A63] font-medium mt-1 leading-tight ${
              isFooter || isLarge ? 'text-[11px] sm:text-xs' : 'text-[9px] sm:text-[10px]'
            }`}
          >
            Especialista em Pré e Pós-operatório
          </span>
        )}
      </div>
    </div>
  );
};
