
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';
import { QuoteRequest } from '../types';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Boiler Repair',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // In a real app, you'd send this to a backend/Google Sheet here
      console.log('Form submitted:', formData);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="glass-card p-10 rounded-3xl text-center">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
        <p className="text-slate-400 mb-8">Thank you for contacting us. One of our engineers will call you back within 15-30 minutes.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-purple-400 font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#08091e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get a Fast <span className="text-purple-500">Free Quote</span></h2>
            <p className="text-slate-400 text-lg mb-10">
              Need immediate help or a scheduled service? Fill out the form and our Chiswick-based team will respond instantly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">24/7 Phone Support</h4>
                  <p className="text-slate-400">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Our Location</h4>
                  <p className="text-slate-400">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-20"></div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-all text-white"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="07700 900000"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-all text-white"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-all text-white"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Service Needed</label>
                <select 
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-all text-white"
                  value={formData.serviceType}
                  onChange={e => setFormData({...formData, serviceType: e.target.value})}
                >
                  <option className="bg-[#050614]">Boiler Repair</option>
                  <option className="bg-[#050614]">Emergency Plumbing</option>
                  <option className="bg-[#050614]">Gas Safety Check</option>
                  <option className="bg-[#050614]">New Boiler Install</option>
                  <option className="bg-[#050614]">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Briefly describe the issue..."
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-all text-white resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className={`w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform active:scale-95 flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'GET MY FREE QUOTE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
