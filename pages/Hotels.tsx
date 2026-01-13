
import React, { useState, useMemo } from 'react';
import { Star, Wifi, Coffee, Waves, Search, Filter, Heart, Phone, ArrowUpDown, MapPin } from 'lucide-react';
import { MOCK_HOTELS } from '../constants';
import { Hotel } from '../types';

interface HotelsProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

type SortOption = 'default' | 'priceAsc' | 'priceDesc' | 'rating' | 'distance';

const Hotels: React.FC<HotelsProps> = ({ activeLanguage, t, favorites, toggleFavorite }) => {
  const [activeType, setActiveType] = useState<'all' | 'luxury' | 'medium' | 'budget'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const filteredAndSorted = useMemo(() => {
    let result = MOCK_HOTELS.filter(h => {
      const matchesType = activeType === 'all' || h.type === activeType;
      const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });

    switch (sortBy) {
      case 'priceAsc':
        result.sort((a, b) => a.minPrice - b.minPrice);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.minPrice - a.minPrice);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        result.sort((a, b) => a.distanceFromBeach - b.distanceFromBeach);
        break;
    }

    return result;
  }, [activeType, searchQuery, sortBy]);

  return (
    <div className="px-4 md:px-8 py-8 animate-in fade-in slide-in-from-top-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{t.featuredHotels}</h1>
              <p className="text-slate-500">
                {activeLanguage === 'BN' 
                  ? `${MOCK_HOTELS.length}টি হোটেলের তালিকা থেকে আপনার পছন্দেরটি বেছে নিন।` 
                  : `Choose from our database of ${MOCK_HOTELS.length} hotels.`}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <input 
                  type="text" 
                  placeholder={activeLanguage === 'BN' ? "নাম দিয়ে খুঁজুন..." : "Search by name..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-2xl py-3 px-12 focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm font-medium"
                />
                <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              </div>
              <div className="relative w-full sm:w-auto">
                <div className="absolute left-4 top-3.5 text-indigo-500 z-10 pointer-events-none">
                  <ArrowUpDown className="w-5 h-5" />
                </div>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-10 appearance-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm font-bold text-sm text-slate-700 cursor-pointer"
                >
                  <option value="default">{t.sort}</option>
                  <option value="priceAsc">{t.priceLow}</option>
                  <option value="priceDesc">{t.priceHigh}</option>
                  <option value="rating">{t.ratingHigh}</option>
                  <option value="distance">{t.distanceNear}</option>
                </select>
                <div className="absolute right-4 top-4.5 pointer-events-none border-l border-r border-b border-transparent border-t-slate-400 w-0 h-0 border-[5px]"></div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
            {['all', 'luxury', 'medium', 'budget'].map(type => (
              <button 
                key={type}
                onClick={() => setActiveType(type as any)}
                className={`whitespace-nowrap px-8 py-3 rounded-full font-black text-sm uppercase transition-all shadow-sm ${
                  activeType === type 
                    ? 'bg-indigo-600 text-white scale-105' 
                    : 'bg-white text-slate-600 border border-slate-100 hover:border-indigo-200'
                }`}
              >
                {type === 'all' ? (activeLanguage === 'BN' ? 'সবগুলো' : 'ALL') : type}
              </button>
            ))}
          </div>
        </header>

        {/* Results Info */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
            {activeLanguage === 'BN' ? `ফলাফল: ${filteredAndSorted.length}টি পাওয়া গেছে` : `Showing ${filteredAndSorted.length} results`}
          </p>
          {sortBy !== 'default' && (
             <button onClick={() => setSortBy('default')} className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:underline">
               Reset Sort
             </button>
          )}
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSorted.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <button 
                  onClick={() => toggleFavorite(hotel.id)}
                  className={`absolute top-4 left-4 p-3 rounded-2xl backdrop-blur-md transition-all shadow-lg ${
                    favorites.includes(hotel.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-slate-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(hotel.id) ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-md">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-black text-sm">{hotel.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-indigo-600/90 backdrop-blur text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">
                    {hotel.type}
                  </span>
                  <span className="bg-slate-900/90 backdrop-blur text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {hotel.distanceFromBeach === 0 ? 'Beachfront' : `${hotel.distanceFromBeach}m`}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-slate-800 mb-2 line-clamp-1">{hotel.name}</h3>
                <p className="text-indigo-600 font-black text-lg mb-4">{hotel.priceRange}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {hotel.amenities.map(item => (
                    <span key={item} className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                      {item === 'Wifi' && <Wifi className="w-3 h-3" />}
                      {item.toLowerCase().includes('pool') && <Waves className="w-3 h-3" />}
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <a 
                    href={`tel:${hotel.contact}`}
                    className="flex-grow bg-slate-100 text-slate-800 py-3.5 rounded-2xl font-black text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> {activeLanguage === 'BN' ? 'কল দিন' : 'Call'}
                  </a>
                  <button className="flex-grow bg-indigo-600 text-white py-3.5 rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 hover:-translate-y-1">
                    {activeLanguage === 'BN' ? 'বুক করুন' : 'Book'}
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

export default Hotels;
