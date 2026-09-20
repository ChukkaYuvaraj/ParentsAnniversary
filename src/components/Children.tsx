import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';
import { children } from '../data/children';

export const Children: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="children" className="py-24 md:py-32 bg-ivory">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-4">
            {t('children.title')}
          </h2>
          <p className="text-lg text-charcoal-900/60 font-serif italic mb-8">
            {t('children.subtitle')}
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto"></div>
        </div>

        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-xl md:text-2xl text-charcoal-900 mb-8"
          >
            <span className={language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}>
              {language === 'te' ? parents.fatherNameTe : parents.fatherName}
            </span>
            <span className="text-burgundy">❤</span>
            <span className={language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}>
              {language === 'te' ? parents.motherNameTe : parents.motherName}
            </span>
          </motion.div>

          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[1px] bg-gold-400"
          ></motion.div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%', maxWidth: '24rem' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-[1px] bg-gold-400 relative"
          >
            <div className="absolute left-0 top-0 w-[1px] h-8 bg-gold-400"></div>
            <div className="absolute right-0 top-0 w-[1px] h-8 bg-gold-400"></div>
          </motion.div>

          <div className="flex justify-between w-full max-w-md mt-8 px-4">
            {children.map((child, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 2.5 + (idx * 0.2) }}
                className="text-center flex-1"
              >
                <div className={`text-lg md:text-xl text-charcoal-900 mb-2 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-wider'}`}>
                  {language === 'te' ? child.nameTe : child.name}
                </div>
                <div className={`text-sm text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans uppercase tracking-widest'}`}>
                  {language === 'te' ? child.relationshipTe : child.relationship}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
