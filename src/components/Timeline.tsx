import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { memories } from '../data/memories';

export const Timeline: React.FC = () => {
  const { t, language } = useLanguage();
  const timelineMemories = memories.filter(m => m.category === 'timeline').sort((a, b) => a.year - b.year);

  return (
    <section id="timeline" className="py-24 md:py-32 bg-charcoal-900 text-ivory relative">
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-serif text-gold-400 mb-6">
            {t('timeline.title')}
          </h2>
          <div className="w-24 h-[1px] bg-gold-400/50 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold-400/30 md:-translate-x-1/2"></div>

          {timelineMemories.map((memory, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={memory.id} className={`relative flex flex-col md:flex-row items-center mb-24 md:mb-32 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold-400 md:-translate-x-1.5 shadow-[0_0_10px_rgba(212,175,55,0.5)] z-20"></div>

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-gold-400 text-xl font-serif tracking-widest block mb-2">{memory.year}</span>
                    <h3 className={`text-2xl md:text-3xl mb-4 ${language === 'te' ? 'font-telugu' : 'font-serif'}`}>
                      {language === 'te' ? memory.titleTe : memory.title}
                    </h3>
                    <p className={`text-ivory/70 leading-relaxed text-balance ${language === 'te' ? 'font-telugu text-[0.95rem]' : 'font-serif text-lg'}`}>
                      {language === 'te' ? memory.descriptionTe : memory.description}
                    </p>
                  </motion.div>
                </div>

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 mt-8 md:mt-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-[4/3] bg-charcoal-950 p-2 shadow-2xl border border-ivory/10"
                  >
                    <img 
                      src={memory.image} 
                      alt={memory.title} 
                      className="w-full h-full object-contain bg-charcoal-950"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect fill="%23263038" width="800" height="600"/><text fill="%23dcd5a4" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Memory ${memory.year}</text></svg>`;
                      }}
                    />
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
