
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card text-purple-400 text-xs font-bold tracking-widest uppercase animate-bounce">
          Available 24/7 Across Chiswick W4
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight">
          EMERGENCY <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text animate-gradient">PLUMBERS</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Reliable heating and plumbing services in West London. From urgent boiler repairs to professional installations, we keep your home running smoothly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-purple-50 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            CALL: {BUSINESS_INFO.phone}
          </a>
          <a href="#contact" className="w-full sm:w-auto px-10 py-4 glass-card text-white font-bold rounded-full hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95">
            REQUEST A QUOTE
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">24/7</span>
            <span className="text-xs uppercase tracking-widest">Service</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">1hr</span>
            <span className="text-xs uppercase tracking-widest">Arrival</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">100%</span>
            <span className="text-xs uppercase tracking-widest">Safe</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">5★</span>
            <span className="text-xs uppercase tracking-widest">Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
