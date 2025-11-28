import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
             <div className="flex items-center justify-center space-x-2 bg-stone-100 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-widest">Workflow</span>
             </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-stone-900 dark:text-white mb-8 tracking-tighter"
          >
            Simplicity is the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">ultimate sophistication.</span>
          </motion.h2>

           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-500 dark:text-stone-400 font-light"
          >
            Streamlined for your busy life. No clutter, just cooking.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
                <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    className="relative z-10 group"
                >
                    {/* Card Container */}
                    <div className="bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl border border-stone-100 dark:border-stone-800 rounded-[2.5rem] p-6 transition-all duration-500 hover:bg-white/80 dark:hover:bg-stone-900/80 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-2 h-full flex flex-col">
                        
                        {/* Image */}
                        <div className="mb-8 rounded-[2rem] overflow-hidden aspect-[4/3] relative shadow-sm">
                             <div className="absolute inset-0 bg-stone-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                             <img 
                                src={step.image} 
                                alt={step.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             />
                             {/* Floating Number Badge inside image */}
                             <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-stone-950/90 backdrop-blur-md rounded-2xl flex items-center justify-center border border-stone-200 dark:border-stone-800 z-20 shadow-lg">
                                <span className="font-display font-bold text-lg text-stone-900 dark:text-white">{index + 1}</span>
                             </div>
                        </div>

                        {/* Content */}
                        <div className="px-2 pb-2 mt-auto">
                            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">{step.title}</h3>
                            <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light">{step.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;