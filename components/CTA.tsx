import React from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section id="download" className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-600/20 dark:via-stone-900 dark:to-stone-950 text-white shadow-2xl isolate border border-orange-400/50 dark:border-orange-900/30 text-center group"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/20 dark:bg-orange-500/30 rounded-full blur-[100px] opacity-40 pointer-events-none gpu-accelerate"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/20 dark:bg-amber-500/20 rounded-full blur-[80px] opacity-30 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400/20 dark:bg-orange-600/20 rounded-full blur-[80px] opacity-30 pointer-events-none hidden md:block"></div>
            
            {/* Pattern Overlay */}
             <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>

            <div className="relative z-10 px-6 py-20 md:px-16 md:py-24 lg:py-32 flex flex-col items-center max-w-4xl mx-auto">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center space-x-2 mb-10 bg-white/20 dark:bg-orange-500/20 border border-white/30 dark:border-orange-500/30 rounded-full px-5 py-2 backdrop-blur-sm"
                >
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Editor's Choice App</span>
                </motion.div>
                
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
                    Cook smarter,<br/>
                    <span className="text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-orange-400 dark:to-amber-300">
                        waste less.
                    </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-orange-50 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                    Join thousands of home chefs transforming their pantry into delicious meals. 
                    Download ShelfCook today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
                        <a href="#" className="group relative flex items-center gap-4 bg-white text-stone-950 rounded-2xl pl-6 pr-8 py-4 font-semibold hover:bg-stone-100 hover:shadow-2xl hover:shadow-white/10 transition-all shadow-xl shadow-white/5 active:scale-95 gpu-accelerate overflow-hidden">
                          <div className="relative">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-stone-600 font-medium -mb-0.5">Download on the</div>
                            <div className="text-xl font-bold tracking-tight">App Store</div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-500/0 group-hover:to-orange-500/5 transition-all duration-300"></div>
                        </a>
                        
                        <a href="#" className="group relative flex items-center gap-4 bg-white/10 dark:bg-stone-950 text-white border border-white/20 dark:border-stone-800 rounded-2xl pl-6 pr-8 py-4 font-semibold hover:bg-white/20 dark:hover:bg-stone-900 hover:border-white/30 dark:hover:border-stone-700 hover:shadow-2xl hover:shadow-orange-500/10 transition-all active:scale-95 backdrop-blur-sm gpu-accelerate overflow-hidden">
                          <div className="relative">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="url(#gradient)"/>
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                                  <stop offset="50%" style={{stopColor: '#ffea00', stopOpacity: 1}} />
                                  <stop offset="100%" style={{stopColor: '#00f260', stopOpacity: 1}} />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="text-left">
                            <div className="text-xs text-orange-100 dark:text-stone-400 font-medium -mb-0.5">GET IT ON</div>
                            <div className="text-xl font-bold tracking-tight">Google Play</div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-500/0 group-hover:to-orange-500/10 transition-all duration-300"></div>
                        </a>
                </div>
                
                <div className="pt-10 border-t border-white/20 dark:border-orange-900/30 w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-orange-50 font-medium">
                    <div className="flex items-center gap-2">
                        <div className="bg-white/20 dark:bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-white dark:text-green-400" /></div>
                        <span>Free Forever Plan</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-white/30 dark:bg-orange-500/40"></div>
                    <div className="flex items-center gap-2">
                        <div className="bg-white/20 dark:bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-white dark:text-green-400" /></div>
                        <span>No Credit Card Required</span>
                    </div>
                     <div className="hidden md:block w-1 h-1 rounded-full bg-white/30 dark:bg-orange-500/40"></div>
                     <div className="flex items-center gap-2">
                        <div className="bg-white/20 dark:bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-white dark:text-green-400" /></div>
                        <span>Cancel Anytime</span>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;