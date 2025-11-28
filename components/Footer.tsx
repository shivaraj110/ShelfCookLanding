import React from 'react';
import { Utensils, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden border-t border-stone-200/50 dark:border-stone-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-orange-500 p-2 rounded-xl text-white shadow-lg shadow-orange-500/20">
                        <Utensils size={24} strokeWidth={2} />
                    </div>
                    <span className="text-3xl font-display font-bold text-stone-900 dark:text-white tracking-tight">ShelfCook</span>
                </div>
                <p className="text-stone-500 dark:text-stone-400 text-lg max-w-sm font-light leading-relaxed">
                    Transforming the way the world cooks, one pantry at a time. Join the revolution against food waste.
                </p>
                <div className="flex space-x-5 mt-8">
                    {[Instagram, Twitter, Facebook].map((Icon, i) => (
                        <a 
                            key={i}
                            href="#" 
                            className="w-10 h-10 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-all duration-300"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="lg:pl-12"
            >
                <h4 className="font-display font-bold text-xl text-stone-900 dark:text-white mb-6">Stay delicious.</h4>
                <p className="text-stone-500 dark:text-stone-400 mb-6 font-light">
                    Get weekly curated recipes and kitchen hacks delivered to your inbox.
                </p>
                <div className="relative group max-w-md">
                    <input 
                        type="email" 
                        placeholder="email@example.com" 
                        className="w-full bg-stone-100 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-2xl py-4 pl-6 pr-14 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                    <button className="absolute right-2 top-2 p-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-xl hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white transition-colors shadow-lg">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </motion.div>
        </div>

        {/* Links Grid */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-t border-stone-200/50 dark:border-stone-800/50 pt-16"
        >
            {[
                { title: "Product", links: ["Features", "Meal Planner", "Smart List", "Pricing"] },
                { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
                { title: "Resources", links: ["Community", "Help Center", "Partners", "Status"] },
                { title: "Legal", links: ["Privacy", "Terms", "Cookie Policy", "Licenses"] }
            ].map((section, idx) => (
                <div key={idx}>
                    <h5 className="font-bold text-stone-900 dark:text-white mb-6">{section.title}</h5>
                    <ul className="space-y-4">
                        {section.links.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm font-medium transition-colors inline-block hover:translate-x-1 duration-300">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </motion.div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 dark:text-stone-600 font-medium tracking-wide">
          <p>&copy; {currentYear} ShelfCook Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-stone-900 dark:hover:text-stone-400 transition-colors">Privacy</a>
             <a href="#" className="hover:text-stone-900 dark:hover:text-stone-400 transition-colors">Terms</a>
             <a href="#" className="hover:text-stone-900 dark:hover:text-stone-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Massive Background Text "Watermark" */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0 opacity-[0.03] dark:opacity-[0.05]">
         <h1 className="text-[15vw] leading-none font-display font-bold text-center text-stone-900 dark:text-white tracking-tighter translate-y-[20%]">
            SHELFCOOK
         </h1>
      </div>
    </footer>
  );
};

export default Footer;