import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md text-gray-500 py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-white tracking-tighter text-xl">unmute</span>
          <p className="text-xs mt-2">© {new Date().getFullYear()} unmute design agency.</p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;