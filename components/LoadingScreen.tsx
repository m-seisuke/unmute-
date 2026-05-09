import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const updateCounter = () => {
      const increment = Math.floor(Math.random() * 15) + 5;
      current = Math.min(current + increment, 100);
      setCount(current);
      
      if (current < 100) {
        // Random delay between updates for organic feel
        setTimeout(updateCounter, Math.random() * 150 + 50);
      } else {
        // Wait a moment at 100% before lifting
        setTimeout(onComplete, 800);
      }
    };
    
    // Start after small delay
    const startTimer = setTimeout(updateCounter, 500);
    
    return () => clearTimeout(startTimer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { 
          duration: 1.0, 
          ease: [0.76, 0, 0.24, 1] // Custom dramatic ease
        } 
      }}
    >
      {/* Center Counter */}
      <div className="relative">
        <motion.h1 
          className="text-[18vw] md:text-[12vw] font-bold text-[#dbff00] leading-none tracking-tighter font-['Space_Grotesk'] tabular-nums"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
        >
          {count}%
        </motion.h1>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-4">
          <div className="w-2 h-2 bg-[#dbff00] rounded-full animate-pulse" />
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
            System Initializing...
          </span>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#dbff00]" style={{ width: `${count}%`, transition: 'width 0.2s ease-out' }} />
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
      }}></div>
    </motion.div>
  );
};

export default LoadingScreen;