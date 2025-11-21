import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const About: React.FC = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="backdrop-blur-xl bg-black/30 p-8 rounded-2xl border border-white/5">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-8"
            >
              Design is the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">volume knob</span> <br />
              for your vision.
            </motion.h2>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed font-light backdrop-blur-md bg-black/40 p-6 rounded-xl border-l-2 border-white/20"
            >
              <p className="mb-4">In a noisy world, pure intentions often go unheard. <strong className="text-white font-medium">unmute</strong> exists to change that. We are a creative agency dedicated to supporting companies and NPOs that hold deep meaning but struggle to articulate it visually.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed font-light backdrop-blur-md bg-black/40 p-6 rounded-xl border-l-2 border-white/20"
            >
               <p>Through design education and partnership, we turn the dial up on your potential, transforming quiet passion into a resonant brand voice.</p>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="pt-4"
            >
               <div className="h-[1px] w-full bg-gradient-to-r from-white/30 to-transparent mb-4"></div>
               <p className="text-sm uppercase tracking-widest text-gray-500">Est. 2024 — Tokyo, Japan</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;