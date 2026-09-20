import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';
import { children } from '../data/children';

export const FamilyTree: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-cream relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-6">
            {t('familyTree.title')}
          </h2>
          <div className="w-24 h-[1px] bg-gold-400 mx-auto"></div>
        </div>

        <div className="flex flex-col items-center">
          {/* Grandparents Layer */}
          <div className="flex flex-col md:flex-row justify-between w-full max-w-3xl gap-12 md:gap-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center flex-1"
            >
              <div className="text-sm font-sans tracking-widest text-gold-500 mb-2 uppercase">
                {language === 'te' ? 'వరుడి తల్లిదండ్రులు' : "Groom's Parents"}
              </div>
              <div className="font-serif text-lg text-charcoal-900">
                {parents.fatherParents.father}<br/>
                <span className="text-burgundy text-sm">❤</span><br/>
                {parents.fatherParents.mother}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center flex-1"
            >
              <div className="text-sm font-sans tracking-widest text-gold-500 mb-2 uppercase">
                {language === 'te' ? 'వధువు తల్లిదండ్రులు' : "Bride's Parents"}
              </div>
              <div className="font-serif text-lg text-charcoal-900">
                {parents.motherParents.father}<br/>
                <span className="text-burgundy text-sm">❤</span><br/>
                {parents.motherParents.mother}
              </div>
            </motion.div>
          </div>

          {/* Connection to Parents */}
          <div className="flex w-full max-w-md justify-between mt-4">
            <div className="w-1/2 flex justify-end">
              <div className="w-[1px] h-12 bg-gold-400/50 mr-[25%] md:mr-[50%]"></div>
            </div>
            <div className="w-1/2 flex justify-start">
              <div className="w-[1px] h-12 bg-gold-400/50 ml-[25%] md:ml-[50%]"></div>
            </div>
          </div>
          <div className="w-full max-w-md h-[1px] bg-gold-400/50 relative">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-12 bg-gold-400/50"></div>
          </div>

          {/* Parents Layer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center bg-ivory border border-gold-400/30 p-8 shadow-lg z-10"
          >
            <div className={`text-2xl md:text-3xl text-charcoal-900 mb-2 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}`}>
              {language === 'te' ? parents.fatherNameTe : parents.fatherName}
            </div>
            <div className="text-burgundy mb-2">❤</div>
            <div className={`text-2xl md:text-3xl text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-widest'}`}>
              {language === 'te' ? parents.motherNameTe : parents.motherName}
            </div>
          </motion.div>

          {/* Connection to Children */}
          <div className="w-[1px] h-12 bg-gold-400/50"></div>
          <div className="w-full max-w-xs h-[1px] bg-gold-400/50 relative">
            <div className="absolute left-0 top-0 w-[1px] h-12 bg-gold-400/50"></div>
            <div className="absolute right-0 top-0 w-[1px] h-12 bg-gold-400/50"></div>
          </div>

          {/* Children Layer */}
          <div className="flex justify-between w-full max-w-[22rem] mt-12 px-4">
            {children.map((child, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (idx * 0.2) }}
                className="text-center"
              >
                <div className={`text-xl text-charcoal-900 ${language === 'te' ? 'font-telugu' : 'font-serif uppercase tracking-wider'}`}>
                  {language === 'te' ? child.nameTe : child.name}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
