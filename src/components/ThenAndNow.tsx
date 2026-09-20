import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ThenAndNow: React.FC = () => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

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
          className="relative max-w-4xl mx-auto aspect-[4/3] md:aspect-video select-none shadow-2xl bg-cream border-[12px] border-ivory"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* NOW (Bottom Image) */}
          <div className="absolute inset-0">
             <img 
                src="/images/then-now/20240512_184038.jpg" 
                alt="Now" 
                className="w-full h-full object-contain bg-charcoal-950/5"
                draggable={false}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600"><rect fill="%23f5f5dc" width="1000" height="600"/><text fill="%23c2b36c" font-family="sans-serif" font-size="32" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">2026</text></svg>';
                }}
              />
          </div>

          {/* THEN (Top Image, clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden border-r-2 border-gold-400"
            style={{ width: `${sliderPosition}%` }}
          >
             <img 
                src="/images/then-now/WhatsApp Image 2026-09-20 at 7.03.01 PM.jpeg" 
                alt="Then" 
                className="absolute inset-0 w-full h-full object-contain bg-charcoal-950/5"
                style={{
                  width: sliderPosition > 0 ? `${10000 / sliderPosition}%` : '100000%',
                  minWidth: '100%'
                }}
                draggable={false}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600"><rect fill="%23e8e5c0" width="1000" height="600"/><text fill="%23c2b36c" font-family="sans-serif" font-size="32" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">2004</text></svg>';
                }}
              />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 flex items-center justify-center -ml-4 w-8 cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center shadow-lg text-charcoal-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-charcoal-950/60 backdrop-blur text-ivory px-3 py-1 text-sm font-sans tracking-widest rounded-sm z-10 pointer-events-none">
            2004
          </div>
          <div className="absolute bottom-4 right-4 bg-charcoal-950/60 backdrop-blur text-ivory px-3 py-1 text-sm font-sans tracking-widest rounded-sm z-10 pointer-events-none">
            2026
          </div>
        </motion.div>
      </div>
    </section>
  );
};
