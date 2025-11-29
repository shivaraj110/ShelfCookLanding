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
          className="relative rounded-[3rem] overflow-hidden bg-stone-950 text-white shadow-2xl isolate border border-stone-800/50 text-center group"
        >
            {/* Background Gradients - Simplified */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[80px] opacity-40 pointer-events-none gpu-accelerate"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[60px] opacity-30 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[60px] opacity-30 pointer-events-none hidden md:block"></div>
            
            {/* Pattern Overlay */}
             <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>

            <div className="relative z-10 px-6 py-20 md:px-16 md:py-24 lg:py-32 flex flex-col items-center max-w-4xl mx-auto">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center space-x-2 mb-10 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm"
                >
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-100">Editor's Choice App</span>
                </motion.div>
                
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
                    Cook smarter,<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                        waste less.
                    </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-stone-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                    Join thousands of home chefs transforming their pantry into delicious meals. 
                    Download ShelfCook today.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center mb-16">
                        <a href="#" className="group flex items-center justify-center bg-white text-stone-950 rounded-2xl font-bold hover:bg-stone-200 transition-all shadow-xl shadow-white/5 active:scale-95 gpu-accelerate overflow-hidden">
                          <img 
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                            alt="Download on the App Store" 
                            className="h-16"
                          />
                        </a>
                        
                        <a href="#" className="group flex items-center justify-center bg-stone-900 text-white border border-stone-800 rounded-2xl font-bold hover:bg-stone-800 transition-all active:scale-95 gpu-accelerate overflow-hidden">
                          <img 
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                            alt="Get it on Google Play" 
                            className="h-16"
                          />
                        </a>
                </div>
                
                <div className="pt-10 border-t border-white/5 w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-stone-500 font-medium">
                    <div className="flex items-center gap-2">
                        <div className="bg-green-500/10 p-1 rounded-full"><Check className="w-3 h-3 text-green-500" /></div>
                        <span>Free Forever Plan</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-stone-800"></div>
                    <div className="flex items-center gap-2">
                        <div className="bg-green-500/10 p-1 rounded-full"><Check className="w-3 h-3 text-green-500" /></div>
                        <span>No Credit Card Required</span>
                    </div>
                     <div className="hidden md:block w-1 h-1 rounded-full bg-stone-800"></div>
                     <div className="flex items-center gap-2">
                        <div className="bg-green-500/10 p-1 rounded-full"><Check className="w-3 h-3 text-green-500" /></div>
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