
import React from 'react';
import { SERVICE_AREAS } from '../constants';

const ServiceAreas: React.FC = () => {
  return (
    <section className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Areas We Cover</h2>
          <p className="text-slate-400">Rapid response plumbing & boiler repairs in West London & Surrey.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SERVICE_AREAS.map((area, index) => (
            <div key={index} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-xs text-center hover:text-white hover:border-purple-500/50 transition-all cursor-default">
              {area}
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 glass-card rounded-3xl text-center">
          <p className="text-lg text-slate-200">
            Don't see your area listed? <strong>We likely still cover it.</strong> Call us at <span className="text-purple-400 font-bold">0203 519 0811</span> to check.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
