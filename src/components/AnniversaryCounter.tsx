import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { parents } from '../data/parents';
import { differenceInYears, differenceInMonths, differenceInDays, differenceInSeconds, addYears, addMonths } from 'date-fns';

export const AnniversaryCounter: React.FC = () => {
  const { t, language } = useLanguage();
  
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const [year, month, day] = parents.weddingDate.split('-').map(Number);
      const start = new Date(year, month - 1, day);
      const now = new Date();
      
      const years = differenceInYears(now, start);
      const afterYears = addYears(start, years);
      
      const months = differenceInMonths(now, afterYears);
      const afterMonths = addMonths(afterYears, months);
      
      const days = differenceInDays(now, afterMonths);
      const totalSeconds = Math.max(0, differenceInSeconds(now, start));
      const totalMinutes = Math.floor(totalSeconds / 60);
      
      setTimeTogether({
        years,
        months,
        days,
        totalDays: Math.floor(totalSeconds / 86400),
        hours: Math.floor(totalMinutes / 60) % 24,
        minutes: totalMinutes % 60,
        seconds: totalSeconds % 60
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-ivory text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-6xl md:text-9xl font-serif text-charcoal-900 mb-4">
            {timeTogether.years}
          </div>
          <div className="text-xl md:text-3xl font-serif text-gold-500 uppercase tracking-widest mb-12">
            {t('counter.yearsTogether')}
          </div>
          
          <div className="flex justify-center items-center gap-4 text-sm font-sans tracking-widest uppercase text-charcoal-900/60 mb-12">
            <span>{language === 'te' ? '30 జూన్ 2004' : '30 June 2004'}</span>
            <span className="text-gold-400">→</span>
            <span>{t('counter.today')}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-x-14">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-2">{timeTogether.years}</span>
              <span className={`text-sm tracking-widest uppercase text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>{t('counter.years')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-2">{timeTogether.months}</span>
              <span className={`text-sm tracking-widest uppercase text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>{t('counter.months')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-2">{timeTogether.days}</span>
              <span className={`text-sm tracking-widest uppercase text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>{t('counter.days')}</span>
            </div>
            <div className="flex w-full flex-col items-center border-t border-gold-400/20 pt-8 md:w-auto md:border-t-0 md:pt-0">
              <span className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-2">{timeTogether.totalDays.toLocaleString()}</span>
              <span className={`text-sm tracking-widest uppercase text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>{t('counter.totalDays')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-2">{timeTogether.hours}</span>
              <span className={`text-sm tracking-widest uppercase text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>{t('counter.hours')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-2">{timeTogether.minutes}</span>
              <span className={`text-sm tracking-widest uppercase text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>{t('counter.minutes')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-2">{timeTogether.seconds}</span>
              <span className={`text-sm tracking-widest uppercase text-gold-500 ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>{t('counter.seconds')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
