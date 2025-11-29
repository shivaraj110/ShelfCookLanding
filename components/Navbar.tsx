import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 gpu-accelerate ${isScrolled ? 'bg-white/70 dark:bg-stone-950/70 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-tr from-orange-500 to-amber-500 p-2 rounded-xl text-white shadow-lg shadow-orange-500/20">
              <Utensils size={20} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-display font-bold text-stone-900 dark:text-white tracking-tight">ShelfCook</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 bg-stone-100/50 dark:bg-stone-900/50 px-6 py-2 rounded-full border border-stone-200/50 dark:border-stone-800/50 backdrop-blur-md">
                {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                    {link.name}
                </a>
                ))}
            </div>
            
            <div className="flex items-center space-x-3">
                <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors"
                aria-label="Toggle dark mode"
                >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <a 
                  href="#download" 
                  className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-stone-900/10 dark:shadow-white/10 active:scale-95"
                >
                  Get App
                </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 dark:text-stone-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-stone-100 dark:border-stone-800 shadow-2xl overflow-hidden gpu-accelerate"
            >
            <div className="px-6 py-8 space-y-4">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-display font-bold text-stone-900 dark:text-white"
                >
                    {link.name}
                </a>
                ))}
                <div className="pt-8">
                <a 
                    href="#download"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-orange-500 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/20"
                >
                    Download Now
                </a>
                </div>
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;