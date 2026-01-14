
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import ServiceAreas from './components/ServiceAreas';
import ChatAssistant from './components/ChatAssistant';
import { BUSINESS_INFO, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white">
      <Header />
      <Hero />
      
      {/* Trust Badges Section */}
      <section className="py-12 bg-white/5 border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-60">
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl">🛡️</span>
            <span className="font-bold tracking-tighter uppercase text-sm">Gas Safe Registered</span>
          </div>
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl">🛡️</span>
            <span className="font-bold tracking-tighter uppercase text-sm">24/7 Availability</span>
          </div>
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl">🛡️</span>
            <span className="font-bold tracking-tighter uppercase text-sm">No Call Out Charge</span>
          </div>
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl">🛡️</span>
            <span className="font-bold tracking-tighter uppercase text-sm">12 Month Warranty</span>
          </div>
        </div>
      </section>

      <Services />

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#08091e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Customer Testimonials</h2>
            <div className="flex justify-center text-yellow-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl relative">
                <div className="absolute top-8 right-8 text-6xl text-white/5">"</div>
                <p className="text-lg italic text-slate-300 mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-purple-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <FAQ />
      <QuoteForm />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#050614]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="text-xl font-bold font-display tracking-tight text-white mb-4 block">
                CHISWICK <span className="text-purple-500">PLUMBERS</span>
              </span>
              <p className="text-slate-500 text-sm leading-relaxed">
                Professional plumbing and heating services since 2019. Available 24/7 for all your home maintenance needs in West London.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>{BUSINESS_INFO.address}</li>
                <li>Phone: {BUSINESS_INFO.phone}</li>
                <li>Email: {BUSINESS_INFO.email}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Business Hours</h4>
              <p className="text-sm text-slate-400">
                Monday - Sunday: 24 Hours<br />
                Emergency Response: Guaranteed
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
