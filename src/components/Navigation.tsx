import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', key: 'nav.home' },
  { id: 'story', key: 'nav.story' },
  { id: 'wedding', key: 'nav.wedding' },
  { id: 'timeline', key: 'nav.memories' },
  { id: 'children', key: 'nav.children' },
  { id: 'family-memories', key: 'familyWall.title' },
  { id: 'letter', key: 'nav.letter' }
];

export const Navigation: React.FC = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-ivory/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm tracking-widest uppercase hover:text-gold-500 transition-colors ${language === 'te' ? 'font-telugu font-medium' : 'font-sans'}`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          <div className="flex-1 md:hidden"></div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <button 
              className="md:hidden p-2 text-charcoal-900"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-cream/95 backdrop-blur-xl flex flex-col pt-20 px-6"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-charcoal-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="flex flex-col space-y-8 mt-12 items-center text-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`tracking-widest uppercase hover:text-gold-500 transition-colors ${language === 'te' ? 'font-telugu font-semibold' : 'font-sans'}`}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
