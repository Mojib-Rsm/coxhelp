
import React, { useState } from 'react';
import { Utensils, Star, MapPin, Clock, Search, Filter } from 'lucide-react';
import { MOCK_RESTAURANTS } from '../constants';

const Food: React.FC<{activeLanguage: string, t: any}> = ({ activeLanguage, t }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = MOCK_RESTAURANTS.filter(rest => {
    const matchesCategory = activeCategory === 'All' || rest.category.includes(activeCategory);
    const matchesSearch = rest.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Seafood', 'Indian', 'Bangladeshi', 'Cafe', 'BBQ', 'Burmese'];

  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                {activeLanguage === 'BN' ? 'কক্সবাজারের সেরা খাবার' : 'Best Dining in Cox\'s Bazar'}
              </h1>
              <p className="text-slate-500 mt-2 font-medium">
                {activeLanguage === 'BN' 
                  ? 'শুঁটকি ভর্তা থেকে ফ্রেশ সি-ফুড, সবকিছুই এখানে।' 
                  : 'From local shutki to fresh lobster, find the best flavors.'}
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder={activeLanguage === 'BN' ? "রেস্টুরেন্ট খুঁজুন..." : "Search restaurants..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 px-12 focus:ring-2 focus:ring-orange-500 outline-none transition-all shadow-sm font-medium"
              />
              <Search className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
            </div>
          </div>

          <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-full font-black text-sm uppercase transition-all shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-orange-600 text-white scale-105' 
                    : 'bg-white text-slate-600 border border-slate-100 hover:border-orange-200'
                }`}
              >
                {cat === 'All' ? (activeLanguage === 'BN' ? 'সবগুলো' : 'ALL') : cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(rest => (
            <div key={rest.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 group flex flex-col h-full">
              <div className="h-64 relative overflow-hidden">
                 <img 
                  src={rest.image} 
                  alt={rest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-md">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-black text-sm">{rest.rating}</span>
                 </div>
                 <div className="absolute bottom-4 left-4 bg-orange-600/90 backdrop-blur text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">
                    {rest.price}
                 </div>
              </div>
              <div className="p-8 flex-grow flex flex-col space-y-4">
                 <div>
                    <h3 className="text-2xl font-black text-slate-800 mb-1">{rest.name}</h3>
                    <p className="text-orange-600 font-black text-xs uppercase tracking-widest">{rest.category}</p>
                 </div>
                 
                 <div className="flex flex-col gap-2 text-slate-500 text-sm font-medium pt-2 border-t border-slate-50">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> {rest.location}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> {rest.openTime}</span>
                 </div>

                 <div className="pt-6 mt-auto">
                    <button className="w-full bg-slate-100 text-slate-800 py-4 rounded-2xl font-black text-sm hover:bg-slate-900 hover:text-white transition-all">
                       {activeLanguage === 'BN' ? 'বিস্তারিত ও মেন্যু দেখুন' : 'View Details & Menu'}
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center space-y-4">
             <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-slate-200">
                <Utensils className="w-12 h-12" />
             </div>
             <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest">No matching restaurants found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Food;
