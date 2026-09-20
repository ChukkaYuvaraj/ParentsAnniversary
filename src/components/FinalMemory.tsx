import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';

export const FinalMemory: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-charcoal-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/images/wedding/WhatsApp Image 2026-09-20 at 7.03.00 PM (2) - Copy.jpeg" 
          alt="Recent Portrait" 
          className="w-full h-full object-cover object-center opacity-80"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000"><rect fill="%23263038" width="1000" height="1000"/><text fill="%23dcd5a4" font-family="sans-serif" font-size="32" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Recent Photo Placeholder</text></svg>';
          }}
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="text-xl md:text-3xl font-serif text-ivory leading-relaxed mb-4 text-balance">
            {t('final.quote1')}
          </p>
          <p className="text-xl md:text-3xl font-serif text-gold-400 leading-relaxed text-balance whitespace-pre-line">
            {t('final.quote2')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16"
        >
          <p className="text-lg md:text-2xl font-serif text-ivory/80 uppercase tracking-[0.2em] leading-loose whitespace-pre-line">
            {t('final.summary')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4 text-2xl md:text-4xl text-ivory mb-2">
            <span className={language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}>
              {language === 'te' ? parents.fatherNameTe : parents.fatherName}
            </span>
            <span className="text-burgundy">❤</span>
            <span className={language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}>
              {language === 'te' ? parents.motherNameTe : parents.motherName}
            </span>
          </div>
          
          <div className="text-sm md:text-base font-sans tracking-[0.3em] uppercase text-gold-400">
            {language === 'te' ? '30 జూన్ 2004' : '30 JUNE 2004'} — {t('final.forever')}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-24"
        >
          <p className="text-sm font-sans tracking-[0.4em] uppercase text-ivory/40">
            {t('final.continues')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
