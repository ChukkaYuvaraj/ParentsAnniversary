import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';

export const Story: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="story" className="py-24 md:py-32 bg-ivory relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-cream shadow-xl">
              <img 
                src="/images/wedding/WhatsApp Image 2026-09-20 at 7.03.00 PM (2) - Copy.jpeg" 
                alt="Where it began"
                className="w-full h-full object-contain bg-cream"
              />
              <div className="absolute inset-0 border-[12px] border-ivory/20 mix-blend-overlay"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-gold-400/50"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-gold-400/50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <span className="text-gold-500 tracking-[0.2em] uppercase text-sm mb-4 block font-sans">
              {language === 'te' ? '30 జూన్ 2004' : '30 June 2004'}
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-8 leading-tight">
              {t('story.title')}
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <span className={`text-xl md:text-2xl text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-wider'}`}>
                {language === 'te' ? parents.fatherNameTe : parents.fatherName}
              </span>
              <span className="text-burgundy">❤</span>
              <span className={`text-xl md:text-2xl text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-wider'}`}>
                {language === 'te' ? parents.motherNameTe : parents.motherName}
              </span>
            </div>

            <div className="w-16 h-[1px] bg-gold-400/50 mb-8"></div>

            <p className="text-lg text-charcoal-900/80 leading-relaxed font-serif text-balance whitespace-pre-line">
              {t('story.description')}
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
