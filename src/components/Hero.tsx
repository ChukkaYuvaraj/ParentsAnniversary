import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';
import { differenceInYears } from 'date-fns';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const weddingDate = new Date(parents.weddingDate);
  const years = differenceInYears(new Date(), weddingDate);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-charcoal-950 flex items-center justify-center">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/images/wedding/WhatsApp Image 2026-09-20 at 7.03.00 PM (2) - Copy.jpeg" 
          alt="Wedding" 
          className="w-full h-full object-cover object-center opacity-70 sepia-[.2] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-noise mix-blend-overlay z-10 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent z-10"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-4 md:gap-8"
        >
          <h1 className="text-3xl md:text-6xl font-serif text-ivory tracking-widest uppercase">
            {language === 'te' ? parents.fatherNameTe : parents.fatherName}
          </h1>
          <span className="text-2xl md:text-4xl text-gold-400 font-serif italic">&amp;</span>
          <h1 className="text-3xl md:text-6xl font-serif text-ivory tracking-widest uppercase">
            {language === 'te' ? parents.motherNameTe : parents.motherName}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 md:mt-16 flex flex-col items-center gap-6"
        >
          <div className="text-sm md:text-base tracking-[0.4em] font-sans text-ivory/80 uppercase border-y border-gold-400/30 py-3 px-8">
            {language === 'te' ? '30 జూన్ 2004' : '30 JUNE 2004'}
          </div>

          <p className="text-lg md:text-xl text-gold-400/90 font-serif italic tracking-wide max-w-lg mt-6">
            {language === 'te' 
              ? `${years} సంవత్సరాల ప్రేమ, జ్ఞాపకాలు మరియు అనుబంధం` 
              : `${years} Years of Love, Memories & Togetherness`}
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-gold-400/80 to-transparent"></div>
      </motion.div>
    </section>
  );
};
