import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

export const InvitationViewer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal-900 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMzNjQ1NGYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjYzMDM4Ii8+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gold-400 mb-4">
            {t('invitation.title')}
          </h2>
          <p className="text-ivory/60 uppercase tracking-widest text-sm font-sans">
            {t('invitation.caption')}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto bg-ivory p-4 md:p-8 rounded-sm shadow-2xl relative"
        >
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={4}
            centerOnInit
            wheel={{ step: 0.1 }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20 flex flex-col gap-2 bg-charcoal-900/80 backdrop-blur-sm p-2 rounded shadow-lg">
                  <button onClick={() => zoomIn()} className="p-2 text-ivory hover:text-gold-400 transition-colors" aria-label="Zoom In">
                    <ZoomIn size={20} />
                  </button>
                  <button onClick={() => zoomOut()} className="p-2 text-ivory hover:text-gold-400 transition-colors" aria-label="Zoom Out">
                    <ZoomOut size={20} />
                  </button>
                  <button onClick={() => resetTransform()} className="p-2 text-ivory hover:text-gold-400 transition-colors" aria-label="Reset Zoom">
                    <Maximize size={20} />
                  </button>
                </div>

                <div className="overflow-hidden border border-gold-400/20 bg-cream flex justify-center items-center min-h-[50vh] cursor-grab active:cursor-grabbing">
                  <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex justify-center items-center">
                    <img
                      src="/images/invitation/invitation.jpeg"
                      alt="Original Wedding Invitation"
                      className="max-w-full max-h-[80vh] object-contain drop-shadow-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect fill="%23f5f5dc" width="800" height="600"/><text fill="%23c2b36c" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">Place Original Invitation Here (public/images/invitation/invitation.jpg)</text></svg>';
                      }}
                    />
                  </TransformComponent>
                </div>
              </>
            )}
          </TransformWrapper>
        </motion.div>
      </div>
    </section>
  );
};
