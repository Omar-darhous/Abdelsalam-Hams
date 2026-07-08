import { useState } from 'react';
import { MusicProvider, useMusic } from './context/MusicContext';
import EnvelopeIntro from './components/EnvelopeIntro';
import Navbar from './components/Navbar';
import SaveTheDate from './components/SaveTheDate';
import HeroImage from './components/HeroImage';
import LoveStory from './components/LoveStory';
import Quote from './components/Quote';
import Memories from './components/Memories';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';
import './App.css';

function AppContent() {
  const [introDone, setIntroDone] = useState(false);
  const { play } = useMusic();

  const handleIntroOpen = () => {
    setIntroDone(true);
    void play();
  };

  return (
    <div className="app">
      {!introDone && <EnvelopeIntro onOpen={handleIntroOpen} />}

      <Navbar visible={introDone} />
      <main className={`app__main ${introDone ? 'app__main--visible' : ''}`}>
        <SaveTheDate />
        <HeroImage />
        <LoveStory />
        <Quote />
        <Memories />
        <EventDetails />
        <Footer />
      </main>

      {introDone && <MusicToggle />}
    </div>
  );
}

function App() {
  return (
    <MusicProvider>
      <AppContent />
    </MusicProvider>
  );
}

export default App;
