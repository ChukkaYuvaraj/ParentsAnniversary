import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { OpeningIntro } from './components/OpeningIntro';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { WeddingDay } from './components/WeddingDay';
import { InvitationViewer } from './components/InvitationViewer';
import { Timeline } from './components/Timeline';
import { Children } from './components/Children';
import { ChildrenMemories } from './components/ChildrenMemories';
import { Brothers } from './components/Brothers';
import { ThenAndNow } from './components/ThenAndNow';
import { FamilyMemoryWall } from './components/FamilyMemoryWall';
import { FamilyTree } from './components/FamilyTree';
import { LoveLetter } from './components/LoveLetter';
import { AnniversaryCounter } from './components/AnniversaryCounter';
import { FinalMemory } from './components/FinalMemory';
import { MusicPlayer } from './components/MusicPlayer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {!introComplete && (
          <OpeningIntro key="intro" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <div className={!introComplete ? 'h-screen overflow-hidden' : ''}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introComplete ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Navigation />
          <Hero />
          <Story />
          <WeddingDay />
          <InvitationViewer />
          <Timeline />
          <Children />
          <ChildrenMemories />
          <Brothers />
          <ThenAndNow />
          <FamilyMemoryWall />
          <FamilyTree />
          <LoveLetter />
          <AnniversaryCounter />
          <FinalMemory />
          <MusicPlayer />
        </motion.div>
      </div>
    </LanguageProvider>
  );
}

export default App;
