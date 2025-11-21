import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
            Let's get loud.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light backdrop-blur-sm p-4 rounded-lg">
            Ready to unmute your potential? Let's discuss how we can amplify your vision.
          </p>
          
          <a 
            href="mailto:hello@unmute.design" 
            className="inline-flex items-center justify-center px-12 py-6 bg-white text-black text-lg font-bold rounded-full hover:scale-110 hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            hello@unmute.design
          </a>
        </motion.div>
      </div>

      {/* Decorative giant typography */}
      <div className="absolute -bottom-20 left-0 right-0 text-center select-none pointer-events-none overflow-hidden opacity-10">
        <span className="text-[15vw] font-bold text-white leading-none">UNMUTE</span>
      </div>
    </section>
  );
};

export default Contact;