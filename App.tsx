import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white overflow-x-hidden text-stone-900 dark:text-stone-50">
      
      {/* Global Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
        {/* Base Color */}
        <div className="absolute inset-0 bg-stone-50 dark:bg-stone-950 transition-colors duration-500"></div>
        
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-[0.3]"></div>

        {/* Noise Texture (The Premium Feel) */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>

        {/* Static Ambient Glows - CSS animations for better perf */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/8 dark:bg-orange-500/4 rounded-full blur-[100px] hidden md:block" style={{ animation: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite', transform: 'translateZ(0)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-amber-500/8 dark:bg-amber-500/4 rounded-full blur-[100px] hidden md:block" style={{ animation: 'pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '2s', transform: 'translateZ(0)' }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-stone-400/8 dark:bg-stone-700/4 rounded-full blur-[80px] hidden md:block" style={{ animation: 'pulse 14s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '4s', transform: 'translateZ(0)' }} />
        
        {/* Simplified mobile glows */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/8 dark:bg-orange-500/4 rounded-full blur-[40px] md:hidden" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/8 dark:bg-amber-500/4 rounded-full blur-[40px] md:hidden" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-0">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;