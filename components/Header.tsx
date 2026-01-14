
import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050614]/90 backdrop-blur-md py-2 border-b border-white/10' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold font-display tracking-tight text-white">
              CHISWICK <span className="text-purple-500">PLUMBERS</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold">Boiler Repair W4</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-purple-400 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-purple-400 transition-colors">About</a>
            <a href="#faq" className="text-sm font-medium hover:text-purple-400 transition-colors">FAQ</a>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-0.5 active:scale-95">
              GET A QUOTE
            </a>
          </nav>

          <div className="flex flex-col items-end md:hidden">
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-purple-400 font-bold text-sm">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
