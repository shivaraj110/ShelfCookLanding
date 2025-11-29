import React from 'react';
import { FEATURES } from '../constants';
import { Search, ScanLine, ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion';

const Features: React.FC = () => {
  const getBentoClasses = (index: number) => {
    switch (index) {
      case 0: return 'md:col-span-2 md:row-span-1';
      case 1: return 'md:col-span-1 md:row-span-2';
      case 2: return 'md:col-span-1 md:row-span-1';
      case 3: return 'md:col-span-1 md:row-span-1';
      case 4: return 'md:col-span-2 md:row-span-1';
      case 5: return 'md:col-span-1 md:row-span-1';
      default: return 'md:col-span-1';
    }
  };

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-7xl font-display font-bold text-stone-900 dark:text-white mb-6 tracking-tighter"
          >
            Designed for the <br />
            <span className="text-orange-500">modern kitchen</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed font-light max-w-2xl"
          >
            A suite of powerful tools carefully crafted to make your cooking experience seamless, enjoyable, and virtually waste-free.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 grid-flow-dense group/bento">
          {FEATURES.map((feature, index) => (
            <div key={feature.id}>
              <SpotlightCard
                  feature={feature}
                  index={index}
                  className={getBentoClasses(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard = ({ feature, index, className }: { feature: typeof FEATURES[0], index: number, className: string }) => {
    const shouldReduceMotion = useReducedMotion();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Throttle mouse move updates for better performance
    const handleMouseMove = React.useCallback(
        ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
            if (shouldReduceMotion) return;
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        },
        [shouldReduceMotion, mouseX, mouseY]
    );

    const isDark = index === 0;
    const isBrand = index === 1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`
                group relative border rounded-[2.5rem] overflow-hidden gpu-accelerate
                ${className}
                ${isBrand ? 'bg-orange-500 border-orange-400' : isDark ? 'bg-stone-900 border-stone-800' : 'bg-white/50 dark:bg-stone-900/50 border-stone-200 dark:border-stone-800'}
            `}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Overlay - Desktop only */}
            {!isBrand && !shouldReduceMotion && (
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30 hidden md:block gpu-accelerate"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                450px circle at ${mouseX}px ${mouseY}px,
                                ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(249, 115, 22, 0.12)'},
                                transparent 80%
                            )
                        `,
                    }}
                />
            )}
            
            <div className="relative h-full flex flex-col justify-between p-8 z-20">
                <div>
                  <div className={`mb-6 p-3 rounded-2xl w-fit ${
                    isBrand ? 'bg-white/20' : 
                    isDark ? 'bg-stone-800' : 
                    'bg-white dark:bg-stone-800 shadow-sm'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      isBrand ? 'text-white' : 
                      isDark ? 'text-orange-400' : 
                      'text-stone-900 dark:text-white'
                    }`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 tracking-tight ${
                    isBrand || isDark ? 'text-white' : 'text-stone-900 dark:text-white'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed max-w-[90%] font-medium ${
                    isBrand ? 'text-orange-50' : 
                    isDark ? 'text-stone-400' : 
                    'text-stone-500 dark:text-stone-400'
                  }`}>
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="mt-8 flex items-end justify-between">
                    {index === 0 && (
                        <div className="w-full h-16 bg-stone-800/50 rounded-xl border border-stone-700/50 flex items-center px-4 space-x-3 overflow-hidden">
                            <Search className="w-4 h-4 text-stone-500" />
                            <div className="h-2 w-24 bg-stone-700 rounded-full"></div>
                            <div className="h-2 w-12 bg-stone-700 rounded-full opacity-50"></div>
                        </div>
                    )}

                    {index === 2 && (
                         <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-900 bg-stone-200 dark:bg-stone-800"></div>
                            ))}
                         </div>
                    )}
                    
                    {index === 4 && (
                        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                             <ScanLine className="w-full h-full p-8" />
                        </div>
                    )}

                    {/* Action Arrow */}
                    <div className={`
                        p-2 rounded-full transition-transform duration-300 group-hover:rotate-45 ml-auto
                        ${isBrand ? 'bg-white/20 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white'}
                    `}>
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
            
            {/* Texture Overlay for cards */}
            <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none z-10"></div>
        </motion.div>
    )
}

export default Features;