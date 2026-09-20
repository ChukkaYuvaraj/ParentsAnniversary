import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 'wedding-1',
    src: '/images/wedding/WhatsApp Image 2026-09-20 at 7.03.00 PM (2) - Copy.jpeg',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'wedding-2',
    src: '/images/wedding/WhatsApp Image 2026-09-20 at 7.03.00 PM (2) - Copy.jpeg',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'wedding-3',
    src: '/images/wedding/WhatsApp Image 2026-09-20 at 7.03.00 PM (2) - Copy.jpeg',
    aspect: 'aspect-[4/3]'
  }
];

export const WeddingGallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-6">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-[1px] bg-gold-400 mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden break-inside-avoid cursor-pointer group ${image.aspect} bg-cream border border-gold-400/10`}
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={image.src}
                alt="Wedding Memory"
                className="w-full h-full object-contain bg-charcoal-950/5 transition-transform duration-700 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect fill="%23f5f5dc" width="600" height="800"/><text fill="%23c2b36c" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Wedding Photo ${idx + 1}</text></svg>`;
                }}
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              className="absolute top-6 right-6 text-ivory hover:text-gold-400 transition-colors z-50 p-2"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory hover:text-gold-400 transition-colors z-50 p-2"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory hover:text-gold-400 transition-colors z-50 p-2"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              src={galleryImages[selectedIndex].src}
              alt="Lightbox View"
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect fill="%23f5f5dc" width="600" height="800"/><text fill="%23c2b36c" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Wedding Photo ${selectedIndex + 1}</text></svg>`;
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
