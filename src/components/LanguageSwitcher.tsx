import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm font-sans tracking-widest text-charcoal-900/80 bg-ivory/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-charcoal-900/10">
      <button 
        onClick={() => setLanguage('en')}
        className={cn(
          "transition-colors hover:text-gold-500",
          language === 'en' ? "font-semibold text-charcoal-900" : "opacity-60"
        )}
      >
        EN
      </button>
      <span className="opacity-30">|</span>
      <button 
        onClick={() => setLanguage('te')}
        className={cn(
          "transition-colors hover:text-gold-500 font-telugu text-[0.95rem] pb-[1px]",
          language === 'te' ? "font-semibold text-charcoal-900" : "opacity-60"
        )}
      >
        తెలుగు
      </button>
    </div>
  );
};
