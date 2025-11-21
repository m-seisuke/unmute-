import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import CustomCursor from './components/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  
  useEffect(() => {
    // Global GSAP animations for section transitions could go here
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Custom Cursor & Noise Trail */}
      <CustomCursor />

      {/* 3D Background */}
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