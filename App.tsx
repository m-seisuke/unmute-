import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Global GSAP animations for section transitions could go here
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Custom Cursor & Noise Trail */}
      <CustomCursor />

      {/* 3D Background - Rendered behind loading screen so it's ready when revealed */}
      <Experience />
      
      <Navbar />
      
      {/* Scrollable Content Overlay */}
      <main id="content-container" className="relative z-10 pointer-events-auto">
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;