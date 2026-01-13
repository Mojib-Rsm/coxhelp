
import React from 'react';
import { Star, CheckCircle, Languages, Calendar, UserPlus } from 'lucide-react';
import { MOCK_GUIDES } from '../constants';

interface GuideBookingProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
}

const GuideBooking: React.FC<GuideBookingProps> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-purple-600 rounded-[2rem] p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 space-y-4 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-black">{t.localGuides}</h1>
            <p className="text-purple-100 text-lg">
              Empowering local youth by connecting them with tourists. Get the true Cox's Bazar experience through their eyes.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-purple-50">
                Book a Guide
              </button>
              <button className="flex items-center gap-2 bg-purple-700 border border-purple-400 px-8 py-3 rounded-full font-bold hover:bg-purple-800 transition-all">
                <UserPlus className="w-5 h-5" /> Become a Guide
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 flex justify-center">
             <div className="bg-white/10 backdrop-blur-xl p-8 rounded-full border border-white/20">
                <Star className="w-24 h-24 text-yellow-400 fill-yellow-400 animate-bounce" />
             </div>
          </div>
          {/* Abstract blobs */}
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-purple-400 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-indigo-400 rounded-full blur-[100px] opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_GUIDES.map(guide => (
            <div key={guide.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img src={guide.image} alt={guide.name} className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 group-hover:border-purple-200 transition-all" />
                  {guide.isVerified && (
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border-2 border-slate-50 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-50" />
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-slate-800">{guide.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-slate-500">{guide.rating} (20+ reviews)</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {guide.languages.map(lang => (
                    <span key={lang} className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="w-full pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-purple-600">৳{guide.price}</span>
                    <span className="text-[10px] text-slate-400 block font-bold">PER DAY</span>
                  </div>
                  <button className="bg-purple-600 text-white px-5 py-2 rounded-2xl font-bold text-sm hover:bg-purple-700 shadow-md">
                    Check
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideBooking;
