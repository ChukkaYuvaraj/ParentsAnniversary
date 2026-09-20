import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';

export const WeddingDay: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="wedding" className="py-24 md:py-32 bg-cream relative">
      <div className="absolute inset-0 bg-[radial-gradient(#dcd5a4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-6">
            {t('wedding.title')}
          </h2>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-ivory border-[8px] border-double border-gold-400/30 p-8 md:p-16 shadow-2xl relative"
        >
          {/* Corner ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-500/40"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-500/40"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-500/40"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-500/40"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16">
            <div className="text-center flex-1">
              <h3 className={`text-2xl md:text-3xl mb-4 text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}`}>
                {language === 'te' ? parents.fatherNameTe : parents.fatherName}
              </h3>
              <p className="text-sm font-sans tracking-widest uppercase text-charcoal-900/60 mb-2">
                {t('wedding.sonOf')}
              </p>
              <p className="font-serif italic text-charcoal-900/80">
                {parents.fatherParents.father}<br/>
                &amp; {parents.fatherParents.mother}
              </p>
            </div>

            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gold-400/50 flex-shrink-0">
              <span className="text-gold-500 text-sm font-serif italic">With</span>
            </div>

            <div className="text-center flex-1">
              <h3 className={`text-2xl md:text-3xl mb-4 text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}`}>
                {language === 'te' ? parents.motherNameTe : parents.motherName}
              </h3>
              <p className="text-sm font-sans tracking-widest uppercase text-charcoal-900/60 mb-2">
                {t('wedding.daughterOf')}
              </p>
              <p className="font-serif italic text-charcoal-900/80">
                {parents.motherParents.father}<br/>
                &amp; {parents.motherParents.mother}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center border-t border-gold-400/20 pt-12">
            <div>
              <p className="text-sm font-sans tracking-widest uppercase text-gold-500 mb-2">
                {t('wedding.date')}
              </p>
              <p className="font-serif text-lg text-charcoal-900">
                {language === 'te' ? 'బుధవారం, 30 జూన్ 2004' : 'Wednesday, 30 June 2004'}
              </p>
            </div>
            
            <div>
              <p className="text-sm font-sans tracking-widest uppercase text-gold-500 mb-2">
                {t('wedding.muhurtam')}
              </p>
              <p className="font-serif text-lg text-charcoal-900">
                {language === 'te' ? parents.muhurthamTe : parents.muhurtham}
              </p>
              <p className="text-sm text-charcoal-900/60 mt-1">
                ({language === 'te' ? parents.lagnamTe : parents.lagnam})
              </p>
            </div>

            <div className="md:col-span-2 mt-4">
              <p className="text-sm font-sans tracking-widest uppercase text-gold-500 mb-2">
                {t('wedding.venue')}
              </p>
              <p className={`text-lg text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif'}`}>
                {language === 'te' ? parents.weddingVenueTe : parents.weddingVenue}
              </p>
            </div>

            <div className="md:col-span-2 mt-4 pt-8 border-t border-gold-400/10">
              <p className="text-sm font-sans tracking-widest uppercase text-gold-500 mb-2">
                {t('wedding.dinner')}
              </p>
              <p className="font-serif text-lg text-charcoal-900">
                {language === 'te' ? '29 జూన్ 2004 — సాయంత్రం 7:00 గంటలకు' : '29 June 2004 — 7:00 PM'}
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
