import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';

interface Props {
  onComplete: () => void;
}

export const OpeningIntro: React.FC<Props> = ({ onComplete }) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 3500),
      setTimeout(() => setStep(2), 7000),
      setTimeout(() => setStep(3), 10500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 1 } }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950 text-ivory overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.p key="step0" {...variants} className="text-xl md:text-3xl font-serif font-light tracking-wide text-balance">
              {t('intro.line1')}
            </motion.p>
          )}
          
          {step === 1 && (
            <motion.p key="step1" {...variants} className="text-xl md:text-3xl font-serif font-light tracking-wide text-balance">
              {t('intro.line2')}
            </motion.p>
          )}

          {step >= 2 && (
            <motion.div key="step2" {...variants} className="flex flex-col items-center gap-6">
              <div className="text-2xl md:text-4xl font-serif tracking-widest text-gold-400">
                {language === 'te' ? parents.fatherNameTe : parents.fatherName}
              </div>
              <div className="text-xl text-burgundy/80">❤</div>
              <div className="text-2xl md:text-4xl font-serif tracking-widest text-gold-400">
                {language === 'te' ? parents.motherNameTe : parents.motherName}
              </div>
              
              <div className="mt-8 text-sm md:text-base tracking-[0.3em] font-sans text-ivory/70 uppercase">
                {language === 'te' ? '30 జూన్ 2004' : '30 JUNE 2004'}
              </div>

              {step === 3 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
                  onClick={onComplete}
                  className="mt-12 px-8 py-3 border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-500 uppercase tracking-widest text-sm font-sans"
                >
                  {t('intro.enter')}
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step < 3 && (
        <button 
          onClick={onComplete}
          className="absolute bottom-8 right-8 text-xs text-ivory/40 hover:text-ivory transition-colors uppercase tracking-widest font-sans"
        >
          {t('intro.skip')}
        </button>
      )}
    </motion.div>
  );
};
