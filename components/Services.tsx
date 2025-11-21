import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Creative Education',
    subtitle: 'For Youth',
    description: 'Empowering the next generation of creators through workshops, mentorship, and hands-on design curriculums. We teach not just tools, but thinking.',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: '02',
    title: 'Creative Partner',
    subtitle: 'For NPO',
    description: 'Strategic design support for Non-Profits. We translate complex social missions into compelling visual narratives that drive action and donations.',
    icon: <HeartHandshake className="w-8 h-8" />,
  },
  {
    id: '03',
    title: 'Community Organizing',
    subtitle: 'Brand & Culture',
    description: 'Building resilient communities around shared values. We design the spaces and events that allow meaningful connections to flourish.',
    icon: <Users className="w-8 h-8" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 border-b border-white/10 pb-8 backdrop-blur-sm inline-block pr-12"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-2">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-light text-white">How we make noise.</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-black/40 backdrop-blur-lg border border-white/10 p-10 hover:bg-white/5 transition-colors duration-500 overflow-hidden rounded-xl"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-sm font-mono text-gray-500">/{service.id}</span>
                    <div className="p-3 bg-white/5 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold mb-1">{service.title}</h4>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">{service.subtitle}</p>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;