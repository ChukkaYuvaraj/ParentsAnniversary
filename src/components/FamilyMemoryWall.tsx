import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const wallImages = [
  '20240512_184038.jpg',
  '4f67ae73-a54a-4057-99a5-a85431781af9.jpg',
  'IMG-20230211-WA0000.jpg',
  'IMG-20230211-WA0017.jpg',
  'IMG-20230211-WA0027.jpg',
  'IMG-20240112-WA0034.jpg',
  'IMG-20240112-WA0035.jpg',
  'IMG20210303115139.jpg'
].map((fileName, index) => ({
  id: `wall-${index}`,
  src: `/images/memories/${fileName}`
}));

const featuredImage = {
  id: 'complete-family',
  src: '/images/family/WhatsApp Image 2024-11-09 at 8.21.54 PM (1).jpeg'
};

const viewerImages = [featuredImage, ...wallImages];

export const FamilyMemoryWall: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + viewerImages.length) % viewerImages.length);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % viewerImages.length);
    }
  };

  return (
    <section id="family-memories" className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal-900 mb-6">
            {t('familyWall.title')}
          </h2>
          <div className="w-24 h-[1px] bg-gold-400 mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16 cursor-pointer bg-charcoal-950 p-3 md:p-5 shadow-2xl"
          onClick={() => setSelectedIndex(0)}
        >
          <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-charcoal-900">
            <img
              src={featuredImage.src}
              alt="Complete family portrait"
              className="h-full w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-950/80 to-transparent px-5 pb-5 pt-16 text-ivory">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400">{t('familyTree.title')}</p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[190px] gap-3 md:gap-5">
          {wallImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, zIndex: 30, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden bg-cream p-2 md:p-3 shadow-xl cursor-pointer ${idx === 0 ? 'col-span-2 row-span-2' : idx === 3 ? 'row-span-2' : ''}`}
              onClick={() => setSelectedIndex(idx + 1)}
            >
              <img
                src={img.src}
                alt="Family Memory"
                className="w-full h-full object-contain bg-charcoal-950/5"
                draggable={false}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="%23f5f5dc" width="400" height="400"/><text fill="%23c2b36c" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Photo ${idx + 1}</text></svg>`;
                }}
              />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 p-4 backdrop-blur-xl"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              aria-label="Close family photo"
              className="absolute right-5 top-5 z-10 p-2 text-ivory transition-colors hover:text-gold-400"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={30} />
            </button>

            <button
              type="button"
              aria-label="Previous family photo"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-2 text-ivory transition-colors hover:text-gold-400 md:left-8"
              onClick={(event) => { event.stopPropagation(); showPrevious(); }}
            >
              <ChevronLeft size={42} strokeWidth={1.5} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              src={viewerImages[selectedIndex].src}
              alt="Family Memory"
              className="max-h-[88vh] max-w-[88vw] object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              aria-label="Next family photo"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-2 text-ivory transition-colors hover:text-gold-400 md:right-8"
              onClick={(event) => { event.stopPropagation(); showNext(); }}
            >
              <ChevronRight size={42} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
