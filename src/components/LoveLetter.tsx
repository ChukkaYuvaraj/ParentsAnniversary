import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LoveLetter: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="letter" className="py-24 md:py-32 bg-charcoal-900 relative">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto bg-ivory p-8 md:p-16 shadow-2xl relative"
        >
          {/* Subtle floral watermark / ornament */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMkMxMiAyIDE1IDUgMTUgOUMxNSAxMS41IDEzLjUgMTMgMTIgMTVDMTAuNSAxMyA5IDExLjUgOSA5QzkgNSAxMiAyIDEyIDJNMTEgMjJDMTEgMjIgMTYgMTkgMTYgMTRDMTYgMTEgMTMgOSAxMSA5QzkgOSA2IDExIDYgMTRDNiAxOSAxMSAyMiExMSAyMloiLz48L3N2Zz4=')] bg-no-repeat bg-right-top bg-contain"></div>

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-charcoal-900 mb-4">
              {t('letter.title')}
            </h2>
            <div className="w-16 h-[1px] bg-gold-400 mx-auto"></div>
          </div>

          <div className={`prose prose-lg max-w-none text-charcoal-900/80 leading-relaxed whitespace-pre-line ${language === 'te' ? 'font-telugu text-[1.1rem]' : 'font-serif text-xl'}`}>
            {t('letter.content')}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};
