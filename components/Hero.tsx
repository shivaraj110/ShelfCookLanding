import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, PlayCircle, Loader2, ArrowUpRight, ShoppingCart, Heart, Camera, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import { generateQuickRecipe } from '../services/geminiService';

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState<{ data: string; mimeType: string } | null>(null);
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      {/* Ethereal Background Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/20 via-amber-300/10 to-transparent rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/15 via-transparent to-amber-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Subtle Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 hidden md:block">
        {[...Array(4)].map((_, i) => (
            <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-float"
                style={{
                    background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(251, 146, 60, 0.4)' : 'rgba(245, 158, 11, 0.3)'}, transparent)`,
                    left: `${15 + i * 25}%`,
                    top: `${40 + (i % 3) * 15}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${20 + i * 4}s`,
                    filter: 'blur(1px)',
                    transform: 'translateZ(0)'
                }}
            />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl relative z-20 opacity-0" style={{ animation: 'fadeIn 0.6s ease-out 0.1s forwards' }}>
            <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-stone-900/60 backdrop-blur-xl rounded-full px-5 py-2 border border-orange-200/40 dark:border-orange-900/40 mb-8 hover:border-orange-400/60 hover:bg-white/80 dark:hover:bg-stone-900/80 transition-all duration-300 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-orange-500 to-amber-500"></span>
              </span>
              <span className="text-xs font-bold text-stone-700 dark:text-stone-200 tracking-wider uppercase">AI-Powered Kitchen</span>
            </div>
            
            <h1 className="text-6xl lg:text-[6rem] font-display font-bold text-stone-950 dark:text-white leading-[0.9] mb-8 tracking-[-0.02em]">
              Cook with{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-orange-500 dark:to-amber-400 animate-gradient">
                  Purpose
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 dark:from-orange-400 dark:via-orange-500 dark:to-amber-400 rounded-full transform origin-left animate-expand-line"></span>
              </span>
            </h1>
            
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-12 leading-relaxed font-light max-w-xl">
              Transform your pantry into chef-quality meals. AI-powered meal planning, 
              smart shopping, and zero-waste cooking—all in your pocket.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a 
                href="#download" 
                className="group relative inline-flex justify-center items-center px-9 py-4.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-full font-bold text-lg overflow-hidden shadow-[0_20px_60px_-15px_rgba(251,146,60,0.5)] hover:shadow-[0_20px_80px_-15px_rgba(251,146,60,0.7)] transition-all duration-300 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Get Started Free</span>
                <ArrowUpRight className="relative z-10 ml-2 h-5 w-5 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <button 
                className="inline-flex justify-center items-center px-9 py-4.5 bg-white/80 dark:bg-stone-900/80 text-stone-900 dark:text-white border border-stone-300/50 dark:border-stone-700/50 rounded-full font-semibold text-lg hover:bg-white dark:hover:bg-stone-900 hover:border-stone-400 dark:hover:border-stone-600 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              >
                <PlayCircle className="mr-2 h-5 w-5 text-orange-500" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 text-stone-500 dark:text-stone-400 font-medium text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-900 bg-gradient-to-br from-orange-400 to-amber-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-900 bg-gradient-to-br from-orange-500 to-amber-500"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-stone-900 bg-gradient-to-br from-orange-600 to-amber-600"></div>
                </div>
                <span className="text-stone-600 dark:text-stone-300 font-semibold">10k+ happy cooks</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-orange-500" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                ))}
                <span className="ml-1 font-semibold text-stone-600 dark:text-stone-300">4.9</span>
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockup & Floating Elements */}
          <div className="relative lg:h-[800px] flex items-center justify-center perspective-[2000px] z-10 opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}>
            {/* Background Gradient Blob behind phone - Localized intensify */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/20 to-stone-500/10 rounded-full blur-[60px] -z-10" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>

            {/* Floating Element 1: Shopping List */}
            <div className="absolute top-20 left-0 md:-left-8 z-20 bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-100 dark:border-stone-700 w-48 hidden md:block opacity-0" style={{ animation: 'fadeIn 0.6s ease-out 0.5s forwards', transform: 'translateZ(0)' }}>
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
            </div>

             {/* Floating Element 2: Favorites */}
             <div className="absolute bottom-40 right-0 md:-right-4 z-20 bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-100 dark:border-stone-700 w-40 hidden md:block opacity-0" style={{ animation: 'fadeIn 0.6s ease-out 0.6s forwards', transform: 'translateZ(0)' }}>
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
            </div>

            <div className="animate-float-phone" style={{ transform: 'translateZ(0)' }}>
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
                         layout
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
                             layout
                             initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                             animate={shouldReduceMotion ? {} : { opacity: 1, height: 'auto' }}
                             transition={{ duration: 0.3, ease: "easeOut" }}
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
                             whileHover={shouldReduceMotion ? {} : { y: -2 }}
                             transition={{ duration: 0.15, ease: "easeOut" }}
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
                             whileHover={shouldReduceMotion ? {} : { y: -2 }}
                             transition={{ duration: 0.15, ease: "easeOut" }}
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
                                 whileHover={shouldReduceMotion ? {} : { x: 3 }}
                                 transition={{ duration: 0.15, ease: "easeOut" }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;