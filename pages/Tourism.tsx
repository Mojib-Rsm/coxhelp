
import React from 'react';
import { Compass, MapPin, Camera, Clock } from 'lucide-react';
import { MOCK_SPOTS } from '../constants';

interface TourismProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
}

const Tourism: React.FC<TourismProps> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-8 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Explore the Horizon
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">{t.popularSpots}</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From world-class beaches to breathtaking hills, find your perfect escape in Cox's Bazar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_SPOTS.map(spot => (
            <div key={spot.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="relative h-72">
                <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-2xl font-bold text-white mb-2">{spot.name}</h3>
                   <div className="flex items-center gap-2 text-white/90 text-sm">
                      <MapPin className="w-4 h-4 text-blue-400" /> {spot.location}
                   </div>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <p className="text-slate-500 leading-relaxed">
                  {spot.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Best Time</p>
                      <p className="text-sm font-bold text-slate-800">{spot.bestTime}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3">
                    <Compass className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Entry Fee</p>
                      <p className="text-sm font-bold text-slate-800">{spot.entryFee}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-2">
                  <button className="flex-grow bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                    <Camera className="w-5 h-5" /> View Gallery
                  </button>
                  <button className="p-3 bg-slate-900 text-white rounded-2xl hover:bg-black">
                    <MapPin className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Packages Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           <div className="relative z-10 space-y-4">
              <h2 className="text-3xl font-black">Ready-made Tour Packages</h2>
              <p className="text-blue-100 max-w-md">1 Day, 2 Day, and 3 Day all-inclusive luxury packages designed by locals.</p>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-xl">Explore Packages</button>
           </div>
           <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center">
                 <h4 className="text-3xl font-black">৳3,500</h4>
                 <p className="text-xs font-bold text-blue-100 uppercase mt-1">Starting from</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center">
                 <h4 className="text-3xl font-black">20+</h4>
                 <p className="text-xs font-bold text-blue-100 uppercase mt-1">Tour Plans</p>
              </div>
           </div>
           {/* Decor */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;
