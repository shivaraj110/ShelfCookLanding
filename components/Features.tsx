import React from 'react';
import { FEATURES } from '../constants';
import { ArrowUpRight, Sparkles, Bell } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Features: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const SmartDiscoveryIcon = FEATURES[0].icon;
  const WeeklyPlannerIcon = FEATURES[1].icon;
  const ShoppingListIcon = FEATURES[2].icon;
  const PantryTrackerIcon = FEATURES[3].icon;
  const ScanImportIcon = FEATURES[4].icon;
  const CookModeIcon = FEATURES[5].icon;

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-display font-bold text-stone-900 dark:text-white mb-6 tracking-tighter"
          >
            Designed for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">modern kitchen</span>.
          </motion.h2>
          <motion.p 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed font-light max-w-2xl"
          >
            A suite of powerful tools carefully crafted to make your cooking experience seamless, enjoyable, and virtually waste-free.
          </motion.p>
        </div>

        {/* Elegant Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* Card 1 - Smart Discovery (Large) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group md:col-span-4 md:row-span-2 relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-[2rem] p-8 md:p-12 overflow-hidden border border-orange-400"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Featured</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                  {FEATURES[0].title}
                </h3>
                <p className="text-lg text-orange-50 leading-relaxed max-w-xl mb-8">
                  {FEATURES[0].description}
                </p>

                {/* Decorative UI Element */}
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <SmartDiscoveryIcon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="h-3 w-32 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-20 flex-1 bg-white/10 rounded-xl border border-white/20"></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-medium text-orange-100">Learn more</span>
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Card 2 - Weekly Planner (Tall) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group md:col-span-2 md:row-span-2 relative bg-white dark:bg-stone-900 rounded-[2rem] p-8 overflow-hidden border border-stone-200 dark:border-stone-800 hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-colors"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 p-3 bg-stone-100 dark:bg-stone-800 rounded-2xl w-fit">
                <WeeklyPlannerIcon className="w-6 h-6 text-stone-900 dark:text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3 tracking-tight">
                {FEATURES[1].title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
                {FEATURES[1].description}
              </p>

              {/* Calendar Preview */}
              <div className="flex-1 space-y-3">
                {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                  <div key={day} className="flex items-center space-x-3 p-3 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700/50">
                    <div className="text-xs font-bold text-stone-400 w-8">{day}</div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" style={{ width: `${60 + i * 10}%` }}></div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-3 bg-stone-100 dark:bg-stone-800 rounded-full ml-auto group-hover:bg-orange-500 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-stone-900 dark:text-white group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Shopping List */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group md:col-span-2 relative bg-white dark:bg-stone-950 rounded-[2rem] p-8 overflow-hidden border border-stone-200 dark:border-stone-800 hover:border-orange-500/30 dark:hover:border-stone-700 transition-colors"
          >
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-orange-50 dark:bg-stone-800 rounded-2xl w-fit">
                <ShoppingListIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3 tracking-tight">
                {FEATURES[2].title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                {FEATURES[2].description}
              </p>

              {/* Shopping Items */}
              <div className="space-y-2">
                {['Tomatoes', 'Olive Oil', 'Pasta'].map((item, i) => (
                  <div key={item} className="flex items-center space-x-3 text-stone-700 dark:text-stone-300">
                    <div className="w-5 h-5 rounded border-2 border-stone-300 dark:border-stone-700"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-3 bg-stone-100 dark:bg-stone-800 rounded-full ml-auto w-fit group-hover:bg-orange-500 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-stone-900 dark:text-white group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Pantry Tracker */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group md:col-span-2 relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-[2rem] p-8 overflow-hidden border border-emerald-200 dark:border-emerald-900/50"
          >
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-white dark:bg-stone-800 rounded-2xl w-fit shadow-sm">
                <PantryTrackerIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3 tracking-tight">
                {FEATURES[3].title}
              </h3>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                {FEATURES[3].description}
              </p>

              {/* Inventory Stats */}
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-xs font-medium text-amber-700 dark:text-amber-300">2 items running low</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-white dark:bg-stone-800 rounded-xl p-3 text-center border border-emerald-200 dark:border-stone-700">
                  <div className="text-2xl font-bold text-stone-900 dark:text-white">24</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">Items</div>
                </div>
                <div className="flex-1 bg-white dark:bg-stone-800 rounded-xl p-3 text-center border border-emerald-200 dark:border-stone-700">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">95%</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">Fresh</div>
                </div>
              </div>

              <div className="mt-6 p-3 bg-white dark:bg-stone-800 rounded-full ml-auto w-fit group-hover:bg-emerald-600 transition-colors shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-stone-900 dark:text-white group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Card 5 - Scan & Import */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group md:col-span-2 relative bg-white dark:bg-stone-900 rounded-[2rem] p-8 overflow-hidden border border-stone-200 dark:border-stone-800 hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-colors"
          >
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl w-fit shadow-lg">
                <ScanImportIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3 tracking-tight">
                {FEATURES[4].title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                {FEATURES[4].description}
              </p>

              {/* Scan Illustration */}
              <div className="relative h-24 bg-stone-100 dark:bg-stone-800 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ScanImportIcon className="w-12 h-12 text-stone-300 dark:text-stone-600" strokeWidth={1} />
                </div>
              </div>

              <div className="mt-6 p-3 bg-stone-100 dark:bg-stone-800 rounded-full ml-auto w-fit group-hover:bg-orange-500 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-stone-900 dark:text-white group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Card 6 - Cook Mode */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="group md:col-span-2 relative bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-950 dark:to-black rounded-[2rem] p-8 overflow-hidden border border-stone-200 dark:border-stone-800"
          >
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-white dark:bg-stone-800 rounded-2xl w-fit shadow-sm">
                <CookModeIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-3 tracking-tight">
                {FEATURES[5].title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                {FEATURES[5].description}
              </p>

              {/* Timer Display */}
              <div className="bg-white dark:bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-sm">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-stone-900 dark:text-white mb-2">12:45</div>
                  <div className="flex items-center justify-center space-x-2 text-orange-500 dark:text-orange-400">
                    <div className="w-2 h-2 rounded-full bg-orange-500 dark:bg-orange-400 animate-pulse"></div>
                    <span className="text-xs font-medium">In Progress</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 bg-white dark:bg-stone-800 rounded-full ml-auto w-fit group-hover:bg-orange-500 transition-colors shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-stone-900 dark:text-white group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/10 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;