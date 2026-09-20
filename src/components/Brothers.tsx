import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { children } from '../data/children';

export const Brothers: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-charcoal-900 text-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gold-400 mb-6">
            {t('brothers.title')}
          </h2>
          <div className="w-16 h-[1px] bg-gold-400/50 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-right"
          >
            <h3 className={`text-xl md:text-2xl ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-wider'}`}>
              {language === 'te' ? children[0].nameTe : children[0].name}
            </h3>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center text-charcoal-950 text-2xl z-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            ❤
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h3 className={`text-xl md:text-2xl ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-wider'}`}>
              {language === 'te' ? children[1].nameTe : children[1].name}
            </h3>
          </motion.div>
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          <div className="aspect-video bg-charcoal-950 border border-ivory/10 p-2">
             <img 
                src="/images/children%20now/chukka%20yuvaraj.jpeg"
                alt="Brothers Childhood" 
                className="w-full h-full object-contain bg-charcoal-950"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect fill="%23263038" width="800" height="450"/><text fill="%23dcd5a4" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Brothers Childhood</text></svg>';
                }}
              />
          </div>
          <div className="aspect-video bg-charcoal-950 border border-ivory/10 p-2">
             <img 
                src="/images/children%20now/chukka%20hemanth%20kumar.jpg"
                alt="Brothers Now" 
                className="w-full h-full object-contain bg-charcoal-950 grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect fill="%23263038" width="800" height="450"/><text fill="%23dcd5a4" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Brothers Now</text></svg>';
                }}
              />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
