import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Removed heavy solid backgrounds to let 3D show through */}
      
      <div className="z-10 text-center px-4 max-w-5xl mx-auto select-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base text-gray-400 tracking-[0.3em] uppercase mb-6 backdrop-blur-sm inline-block px-4 py-1 rounded-full bg-black/30 border border-white/5">
            Creative Agency & Education
          </h2>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.610, 0.355, 1.000] }}
              className="block mix-blend-difference"
            >
              We
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.610, 0.355, 1.000] }}
              className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
            >
              Unmute
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }}
              className="block text-stroke cursor-pointer"
            >
              your potentials.
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed backdrop-blur-md bg-black/20 p-4 rounded-xl border border-white/5"
        >
          Amplifying the voices of purpose-driven organizations through sophisticated design and creative strategy.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ArrowDown className="text-white/50 w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;