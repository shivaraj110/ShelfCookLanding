import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

// Duplicate testimonials to create a seamless loop
const SCROLL_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 relative border-t border-stone-200/50 dark:border-stone-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-display font-bold text-stone-900 dark:text-white mb-6 tracking-tight"
            >
              Loved by <span className="text-orange-500">home chefs</span>.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center items-center space-x-2"
            >
                 <div className="flex text-orange-500 space-x-0.5">
                    {[1,2,3,4,5].map((s) => (
                         <Star key={s} className="w-5 h-5 fill-current" />
                    ))}
                </div>
                <span className="text-stone-600 dark:text-stone-400 font-medium ml-2">4.9/5 Average Rating</span>
            </motion.div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full mask-gradient-x">
          {/* Left fading mask */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-r from-stone-50 dark:from-stone-950 to-transparent pointer-events-none"></div>
          {/* Right fading mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-l from-stone-50 dark:from-stone-950 to-transparent pointer-events-none"></div>

          {/* Scrolling Row 1 */}
          <div className="flex w-max space-x-8 animate-scroll hover:pause py-4">
              {SCROLL_TESTIMONIALS.map((testimonial, i) => (
                  <TestimonialCard key={`${testimonial.id}-1-${i}`} testimonial={testimonial} />
              ))}
          </div>
          
          {/* Scrolling Row 2 (Reverse) */}
          <div className="flex w-max space-x-8 animate-scroll-reverse hover:pause py-4 mt-4">
              {SCROLL_TESTIMONIALS.map((testimonial, i) => (
                  <TestimonialCard key={`${testimonial.id}-2-${i}`} testimonial={testimonial} />
              ))}
          </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="w-[350px] md:w-[450px] bg-white dark:bg-stone-900 p-8 rounded-[2rem] border border-stone-200 dark:border-stone-800 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-none flex-shrink-0 hover:border-orange-500/30 transition-colors">
        <div className="mb-6 text-orange-500/30">
            <Quote className="w-8 h-8 fill-current" />
        </div>
        <p className="text-stone-700 dark:text-stone-300 text-lg mb-8 leading-relaxed font-medium">"{testimonial.content}"</p>
        <div className="flex items-center space-x-4 pt-4 border-t border-stone-100 dark:border-stone-800">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-stone-100 dark:ring-stone-800" />
            <div>
            <h4 className="font-bold text-stone-900 dark:text-white text-sm">{testimonial.name}</h4>
            <p className="text-xs text-stone-500 dark:text-stone-500 uppercase tracking-wide font-bold">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

export default Testimonials;