import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { children } from '../data/children';

export const ChildrenMemories: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-6">
            {t('memories.title')}
          </h2>
          <div className="w-24 h-[1px] bg-gold-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Yuvaraj Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-[4/5] bg-ivory border border-gold-400/20 shadow-xl mb-8 p-3 relative group overflow-hidden">
              <img 
                src="/images/children%20now/chukka%20yuvaraj.jpg"
                alt="Yuvaraj" 
                className="w-full h-full object-contain bg-ivory transition-transform duration-700 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750"><rect fill="%23f5f5dc" width="600" height="750"/><text fill="%23c2b36c" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Yuvaraj Photo</text></svg>';
                }}
              />
            </div>
            <h3 className={`text-2xl mb-2 text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}`}>
              {language === 'te' ? children[0].nameTe : children[0].name}
            </h3>
            <p className="text-gold-500 font-sans tracking-widest text-sm uppercase">
              {language === 'te' ? 'యువరాజ్ జ్ఞాపకాలు' : 'Memories of Yuvaraj'}
            </p>
          </motion.div>

          {/* Hemanth Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-[4/5] bg-ivory border border-gold-400/20 shadow-xl mb-8 p-3 relative group overflow-hidden">
              <img 
                src="/images/children%20now/chukka%20hemanth%20kumar.jpg"
                alt="Hemanth" 
                className="w-full h-full object-contain bg-ivory transition-transform duration-700 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750"><rect fill="%23f5f5dc" width="600" height="750"/><text fill="%23c2b36c" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Hemanth Photo</text></svg>';
                }}
              />
            </div>
            <h3 className={`text-2xl mb-2 text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}`}>
              {language === 'te' ? children[1].nameTe : children[1].name}
            </h3>
            <p className="text-gold-500 font-sans tracking-widest text-sm uppercase">
              {language === 'te' ? 'హేమంత్ జ్ఞాపకాలు' : 'Memories of Hemanth'}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
