
import React from 'react';
import { Compass, Clock, MapPin, CheckCircle } from 'lucide-react';
import { MOCK_PACKAGES } from '../constants';

interface PackagesProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
}

const Packages: React.FC<PackagesProps> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">{t.sectionPackages}</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            এক্সক্লুসিভ ট্যুর প্ল্যান যা আপনার ভ্রমণকে করবে স্মরণীয় ও ঝামেলামুক্ত।
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PACKAGES.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden">
              <div className="h-64 relative">
                <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-5 py-2 rounded-2xl font-black shadow-lg">
                  {pkg.price}
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                    <Clock className="w-4 h-4" /> {pkg.duration}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">What's Included</p>
                  <ul className="grid gap-2">
                    {pkg.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2 text-slate-600 font-medium">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-black transition-colors flex items-center justify-center gap-2">
                   <Compass className="w-5 h-5" /> Book This Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
