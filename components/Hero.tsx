import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, PlayCircle, Loader2, ArrowUpRight, ShoppingCart, Heart, Camera, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import { generateQuickRecipe } from '../services/geminiService';

const Hero: React.FC = () => {
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState<{ data: string; mimeType: string } | null>(null);
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Extract base64 data and mime type
        const matches = base64String.match(/^data:(.+);base64,(.+)$/);
        if (matches) {
            setImage({
                mimeType: matches[1],
                data: matches[2]
            });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMagicChef = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim() && !image) return;
    
    setLoading(true);
    setRecipe(null);
    try {
      const result = await generateQuickRecipe(ingredients, image || undefined);
      setRecipe(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-visible">
      {/* Minimal Ambient Particles (Subtle Steam/Ember effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{ 
                    opacity: [0, 0.4, 0], 
                    y: -150,
                    x: Math.random() * 40 - 20 
                }}
                transition={{ 
                    duration: 12 + Math.random() * 8, 
                    repeat: Infinity, 
                    delay: Math.random() * 10,
                    ease: "linear"
                }}
                className="absolute w-1.5 h-1.5 bg-orange-500/20 dark:bg-orange-400/30 rounded-full blur-[2px]"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${40 + Math.random() * 60}%` // Start from lower/middle section
                }}
            />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl relative z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/50 dark:bg-stone-900/50 backdrop-blur-md rounded-full px-4 py-1.5 border border-stone-200 dark:border-stone-800 mb-8 hover:border-orange-500/30 transition-colors"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs font-bold text-stone-600 dark:text-stone-300 tracking-wider uppercase">AI-Powered Kitchen Assistant</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-[5.5rem] font-display font-bold text-stone-950 dark:text-white leading-[0.95] mb-8 tracking-tighter">
              Cook with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-amber-400">
                Purpose.
              </span>
            </h1>
            
            <p className="text-xl text-stone-600 dark:text-stone-400 mb-10 leading-relaxed font-light max-w-lg">
              Transform your pantry ingredients into chef-quality meals. 
              The intelligent way to shop, cook, and eat without the waste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#download" 
                className="group inline-flex justify-center items-center px-8 py-4 bg-stone-950 dark:bg-white text-white dark:text-stone-950 rounded-full font-bold text-lg hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 shadow-xl shadow-stone-900/10"
              >
                Get App
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-stone-900 dark:text-white border border-stone-200 dark:border-stone-800 rounded-full font-semibold text-lg hover:bg-stone-100 dark:hover:bg-stone-900/50 backdrop-blur-sm transition-colors"
              >
                <PlayCircle className="mr-2 h-5 w-5 text-orange-500" />
                See Action
              </motion.button>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center space-x-8 text-stone-500 dark:text-stone-500 font-medium text-sm border-t border-stone-200/50 dark:border-stone-800/50 pt-8 max-w-md"
            >
              <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-orange-500" /> iOS & Android</div>
              <div className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-orange-500" /> Free Tier Available</div>
            </motion.div>
          </motion.div>

          {/* Interactive Phone Mockup & Floating Elements */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="relative lg:h-[800px] flex items-center justify-center perspective-[2000px] z-10"
          >
            {/* Background Gradient Blob behind phone - Localized intensify */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/30 to-stone-500/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            {/* Floating Element 1: Shopping List */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-0 md:-left-8 z-20 bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-100 dark:border-stone-700 w-48 hidden md:block"
            >
                <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                        <ShoppingCart size={16} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-stone-900 dark:text-white">Smart Shop</p>
                        <p className="text-[10px] text-stone-400">3 items added</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="h-1.5 w-full bg-stone-100 dark:bg-stone-700 rounded-full"></div>
                    <div className="h-1.5 w-2/3 bg-stone-100 dark:bg-stone-700 rounded-full"></div>
                </div>
            </motion.div>

             {/* Floating Element 2: Favorites */}
             <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-40 right-0 md:-right-4 z-20 bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-100 dark:border-stone-700 w-40 hidden md:block"
            >
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-stone-900 dark:text-white">Saved</span>
                    <Heart size={14} className="fill-orange-500 text-orange-500" />
                </div>
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-800 bg-stone-200">
                        <img src="https://picsum.photos/100/100?random=1" alt="" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-800 bg-stone-200">
                        <img src="https://picsum.photos/100/100?random=2" alt="" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-800 bg-stone-900 dark:bg-stone-700 text-[10px] text-white flex items-center justify-center">
                        +12
                    </div>
                </div>
            </motion.div>

            <motion.div
                animate={{ 
                    y: [0, -15, 0],
                    rotate: [-6, -4, -6]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <PhoneMockup className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-black/60 border-stone-900 dark:border-stone-800">
                {/* In-Phone App UI */}
                <div className="bg-stone-50 dark:bg-stone-950 h-full flex flex-col font-sans">
                    {/* App Header */}
                    <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-6 pb-4 border-b border-stone-100 dark:border-stone-800 sticky top-0 z-20">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">ShelfCook</h3>
                            <div className="h-8 w-8 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden ring-2 ring-stone-100 dark:ring-stone-800">
                                <img src="https://picsum.photos/100/100?random=50" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-display font-bold text-stone-900 dark:text-white">Good evening.</h2>
                    </div>

                    {/* AI Widget */}
                    <div className="p-4 flex-1 overflow-y-auto space-y-6 no-scrollbar">
                        <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-stone-900 dark:bg-stone-800 rounded-[1.5rem] p-5 text-white shadow-xl relative overflow-hidden group"
                        >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/30 transition-colors duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="p-1.5 bg-orange-500 rounded-lg">
                                        <Sparkles className="h-4 w-4 text-white" />
                                    </div>
                                    <h3 className="font-bold text-sm tracking-wide">Chef AI</h3>
                                </div>
                                <span className="text-[10px] bg-stone-800 px-2 py-1 rounded-full text-stone-400">Beta</span>
                            </div>
                            
                            <p className="text-stone-400 text-xs mb-4 leading-relaxed">Scan ingredients or type what you have. I'll plan your dinner.</p>
                            
                            <form onSubmit={handleMagicChef} className="relative group/input">
                                {image && (
                                    <div className="mb-2 relative inline-block">
                                        <img src={`data:${image.mimeType};base64,${image.data}`} className="h-12 w-12 rounded-lg object-cover border border-stone-700" alt="Preview" />
                                        <button 
                                            type="button"
                                            onClick={() => setImage(null)}
                                            className="absolute -top-1.5 -right-1.5 bg-stone-700 text-white rounded-full p-0.5 hover:bg-stone-600 border border-stone-600"
                                        >
                                            <X size={10} />
                                        </button>
                                    </div>
                                )}

                                <input 
                                type="text" 
                                placeholder="e.g. chicken, rice, lemon"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                className="w-full bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-xl pl-4 pr-20 py-3 text-white placeholder-stone-500 focus:outline-none focus:bg-stone-800 focus:border-orange-500/50 transition-all text-xs"
                                />
                                
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    className="hidden" 
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                />
                                
                                <div className="absolute right-1.5 top-1.5 flex space-x-1">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="text-stone-400 hover:text-white hover:bg-stone-700/50 p-1.5 rounded-lg transition-colors"
                                        title="Add photo of ingredients"
                                    >
                                        <Camera className="h-4 w-4" />
                                    </button>
                                    <button 
                                        type="submit" 
                                        disabled={loading || (!ingredients.trim() && !image)}
                                        className="bg-orange-500 hover:bg-orange-400 text-white p-1.5 rounded-lg transition-colors disabled:opacity-50 shadow-lg"
                                    >
                                        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                                    </button>
                                </div>
                            </form>

                            {recipe && !recipe.error && (
                                <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4 bg-stone-800/80 backdrop-blur-md rounded-xl p-3 border border-stone-700"
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-xs text-orange-200">{recipe.title}</h4>
                                        <span className="text-[10px] bg-stone-950 px-1.5 py-0.5 rounded text-stone-300">{recipe.time}</span>
                                    </div>
                                    <p className="text-[10px] text-stone-400 line-clamp-2 leading-relaxed">{recipe.description}</p>
                                </motion.div>
                            )}
                        </div>
                        </motion.div>

                        {/* Quick Stats Bento */}
                        <div className="grid grid-cols-2 gap-3">
                            <motion.div 
                            whileHover={{ y: -2 }}
                            className="bg-white dark:bg-stone-900 p-4 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800"
                            >
                                <p className="text-[10px] text-stone-400 font-bold uppercase mb-1 tracking-wider">Daily Goal</p>
                                <div className="flex items-end space-x-1">
                                    <p className="text-xl font-display font-bold text-stone-900 dark:text-white">1,450</p>
                                    <span className="text-[10px] text-stone-400 mb-1">kcal</span>
                                </div>
                                <div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div className="bg-orange-500 h-full w-[70%] rounded-full"></div>
                                </div>
                            </motion.div>
                            <motion.div 
                            whileHover={{ y: -2 }}
                            className="bg-white dark:bg-stone-900 p-4 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 relative overflow-hidden"
                            >
                                <p className="text-[10px] text-stone-400 font-bold uppercase mb-1 tracking-wider">Planned</p>
                                <p className="text-xl font-display font-bold text-stone-900 dark:text-white">5 Meals</p>
                                <div className="absolute bottom-0 right-0 w-12 h-12 bg-orange-500/10 rounded-tl-2xl"></div>
                            </motion.div>
                        </div>

                        {/* Recent Recipes */}
                        <div>
                        <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-3 flex items-center justify-between">
                            <span>Collections</span>
                            <ArrowRight className="w-4 h-4 text-stone-400" />
                        </h4>
                        <div className="space-y-3">
                            {[
                            { title: 'Healthy Breakfast', count: '12 recipes', img: 'https://picsum.photos/100/100?random=20' },
                            { title: 'Quick Dinners', count: '8 recipes', img: 'https://picsum.photos/100/100?random=21' },
                            ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ x: 5 }}
                                className="group bg-white dark:bg-stone-900 p-2 rounded-2xl flex items-center space-x-3 shadow-sm border border-stone-200 dark:border-stone-800 hover:border-orange-500/30 transition-colors cursor-pointer"
                            >
                                <img src={item.img} alt={item.title} className="w-12 h-12 rounded-xl object-cover shadow-sm grayscale group-hover:grayscale-0 transition-all" />
                                <div>
                                <h5 className="font-bold text-stone-900 dark:text-white text-xs mb-0.5">{item.title}</h5>
                                <p className="text-[10px] text-stone-400 font-medium">{item.count}</p>
                                </div>
                            </motion.div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
                </PhoneMockup>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;