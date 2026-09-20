import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioExists, setAudioExists] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check if audio file exists
    const audio = new Audio('/audio/anniversary-song.mp3');
    audio.addEventListener('error', () => {
      setAudioExists(false);
    });
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle play error (e.g. browser policy)
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!audioExists) return null;

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/audio/anniversary-song.mp3" 
        loop
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-charcoal-900/80 backdrop-blur-md p-3 rounded-full border border-gold-400/20 shadow-xl"
      >
        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-gold-400 text-charcoal-900 flex items-center justify-center hover:bg-gold-500 transition-colors"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
        </button>
        
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="flex items-center overflow-hidden"
            >
              <button 
                onClick={toggleMute}
                className="text-gold-400 hover:text-ivory transition-colors px-2"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              
              {/* Animated visualizer bars */}
              <div className="flex gap-1 pr-2 ml-1 items-end h-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={
                      isPlaying && !isMuted
                        ? { height: ['4px', '16px', '4px'] }
                        : { height: '4px' }
                    }
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="w-1 bg-gold-400/80 rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
