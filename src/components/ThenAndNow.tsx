import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ThenAndNow: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-4">
            {t('thenAndNow.title')}
          </h2>
          <p className="text-xl font-serif italic text-gold-500 mb-8">
            {t('thenAndNow.subtitle')}
          </p>
          <p className="text-lg text-charcoal-900/80 font-serif leading-relaxed text-balance max-w-2xl mx-auto whitespace-pre-line">
            {t('thenAndNow.quote')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
        >
          <figure className="relative aspect-[4/3] overflow-hidden bg-cream border-[10px] border-ivory shadow-2xl">
            <img
              src="/images/then-now/WhatsApp Image 2026-09-20 at 7.03.01 PM.jpeg"
              alt="Then, 2004"
              className="w-full h-full object-contain bg-charcoal-950/5"
              draggable={false}
            />
            <figcaption className="absolute bottom-4 left-4 bg-charcoal-950/70 px-3 py-1 text-sm font-sans tracking-widest text-ivory">
              2004
            </figcaption>
          </figure>

          <figure className="relative aspect-[4/3] overflow-hidden bg-cream border-[10px] border-ivory shadow-2xl">
            <img
              src="/images/then-now/20240512_184038.jpg"
              alt="Now, 2026"
              className="w-full h-full object-contain bg-charcoal-950/5"
              draggable={false}
            />
            <figcaption className="absolute bottom-4 left-4 bg-charcoal-950/70 px-3 py-1 text-sm font-sans tracking-widest text-ivory">
              2026
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
};
