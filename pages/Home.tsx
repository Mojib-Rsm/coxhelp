
import React, { useState } from 'react';
import { 
  ChevronRight, 
  MessageCircle, 
  Send, 
  Waves, 
  Sun, 
  Star, 
  ShieldAlert, 
  PlusCircle, 
  Phone,
  ArrowRight,
  HeartPulse,
  Search,
  Compass,
  Gift,
  MessageSquare
} from 'lucide-react';
import { CATEGORIES, MOCK_SPOTS, MOCK_ALERTS, MOCK_HOTELS, MOCK_RESTAURANTS, MOCK_GUIDES, MOCK_PACKAGES, MOCK_PRODUCTS } from '../constants';
import { getCoxieResponse } from '../services/gemini';

interface HomeProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ activeLanguage, t, setPage }) => {
  const [assistantInput, setAssistantInput] = useState('');
  const [assistantResponse, setAssistantResponse] = useState<string | null>(null);
  const [isAssistantLoading, setIsAssistantLoading] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const handleAskCoxie = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!assistantInput.trim()) return;
    setIsAssistantLoading(true);
    const response = await getCoxieResponse(assistantInput);
    setAssistantResponse(response || null);
    setIsAssistantLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchVal.trim()) return;
    const lower = searchVal.toLowerCase();
    if (lower.includes('hotel')) setPage('hotels');
    else if (lower.includes('food') || lower.includes('eat') || lower.includes('খাবার')) setPage('food');
    else if (lower.includes('police') || lower.includes('help')) setPage('emergency');
    else if (lower.includes('pack') || lower.includes('tour')) setPage('packages');
    else setPage('tourism');
  };

  return (
    <div className="space-y-12 pb-12 animate-in fade-in duration-700">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[650px] flex flex-col items-center justify-center text-center px-4 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1619177383949-f03975e50b19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y294JTIwYmF6YXIlMjBzZWElMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Cox's Bazar Beach" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
            <input 
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              type="text" 
              placeholder={activeLanguage === 'BN' ? "হোটেল, খাবার বা স্পট খুঁজুন..." : "Search hotels, food, spots..."}
              className="w-full bg-white/95 backdrop-blur-xl border-none rounded-[2rem] py-6 px-16 text-xl shadow-2xl focus:ring-4 focus:ring-blue-500/50 transition-all outline-none text-slate-900 font-medium"
            />
            <Search className="absolute left-6 top-6 text-slate-400 w-8 h-8" />
            <button type="submit" className="absolute right-3 top-3 bg-blue-600 text-white px-8 py-3 rounded-[1.5rem] font-black hover:bg-blue-700 transition-all shadow-lg">
              {activeLanguage === 'BN' ? 'খুঁজুন' : 'Search'}
            </button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setPage('tourism')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/20 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              🏖️ {t.btnTourism}
            </button>
            <button 
              onClick={() => setPage('emergency')}
              className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 border-2 border-red-500"
            >
              🆘 {t.btnEmergency}
            </button>
          </div>
        </div>
      </section>

      {/* 2. Quick Access Services */}
      <section className="px-4 md:px-8 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
          <h2 className="text-2xl font-black mb-10 text-slate-800 text-center uppercase tracking-widest">{t.sectionQuick}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setPage(cat.id)}
                className="flex flex-col items-center gap-4 group"
              >
                <div className={`${cat.color} p-6 rounded-[2rem] text-white shadow-xl group-hover:scale-110 group-active:scale-95 transition-all duration-300 ring-4 ring-transparent group-hover:ring-slate-100`}>
                  {cat.icon}
                </div>
                <span className="text-sm font-black text-slate-700 text-center group-hover:text-blue-600 transition-colors">
                  {activeLanguage === 'BN' ? cat.nameBn : cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Alerts & Notices */}
      <section className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-amber-50 border-2 border-amber-100 rounded-[2.5rem] p-10 flex flex-col lg:flex-row gap-8 items-center">
          <div className="bg-amber-100 p-6 rounded-full text-amber-600 animate-pulse flex-shrink-0">
            <ShieldAlert className="w-12 h-12" />
          </div>
          <div className="flex-grow space-y-3 text-center lg:text-left">
            <h3 className="text-2xl font-black text-amber-900 uppercase tracking-tighter">{t.sectionNotices}</h3>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
               <span className="flex items-center gap-3 text-lg font-bold text-amber-800">
                  <Waves className="w-6 h-6" /> {MOCK_ALERTS[0].content}
               </span>
               <span className="flex items-center gap-3 text-lg font-bold text-amber-800 border-l-2 border-amber-200 pl-6 hidden md:flex">
                  <Sun className="w-6 h-6" /> {MOCK_ALERTS[1].content}
               </span>
            </div>
          </div>
          <button onClick={() => setPage('news')} className="bg-amber-900 text-white px-10 py-3 rounded-full font-black text-sm transition-transform hover:scale-105 shadow-xl">
             View Updates
          </button>
        </div>
      </section>

      {/* 4. Popular Tourist Spots */}
      <section className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{t.sectionSpots}</h2>
            <button onClick={() => setPage('tourism')} className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-3 rounded-2xl font-black text-sm flex items-center gap-2 transition-all">
              {t.seeAll} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_SPOTS.map((spot) => (
              <div key={spot.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 group cursor-pointer" onClick={() => setPage('tourism')}>
                <div className="relative h-64 overflow-hidden">
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest shadow-md">
                    {spot.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-black text-2xl text-slate-800 mb-3">{spot.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 font-medium line-clamp-2 leading-relaxed">{spot.description}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    {t.details} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tour Packages Section */}
      <section className="px-4 md:px-8 bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                 <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{t.sectionPackages}</h2>
                 <p className="text-slate-500 mt-2 font-medium">স্মার্ট প্ল্যানিংয়ে আপনার ভ্রমণ হোক আনন্দদায়ক।</p>
              </div>
              <button onClick={() => setPage('packages')} className="bg-amber-600 text-white px-8 py-3 rounded-2xl font-black flex items-center gap-2">
                 Explore Plans <Compass className="w-5 h-5" />
              </button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MOCK_PACKAGES.map(pkg => (
                <div key={pkg.id} className="bg-white rounded-[2.5rem] p-4 shadow-xl border border-amber-100 hover:scale-[1.02] transition-transform">
                   <div className="relative h-56 rounded-[2rem] overflow-hidden">
                      <img src={pkg.image} className="w-full h-full object-cover" />
                      <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-4 py-1.5 rounded-xl font-black text-sm">{pkg.price}</div>
                   </div>
                   <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                         <h3 className="text-xl font-black text-slate-800">{pkg.name}</h3>
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{pkg.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                         {pkg.highlights.map(h => <span key={h} className="text-[10px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg"># {h}</span>)}
                      </div>
                      <button onClick={() => setPage('packages')} className="w-full py-3 bg-slate-900 text-white rounded-xl font-black hover:bg-black">বুক করুন</button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. AI Assistant */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 rounded-[3.5rem] p-12 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="space-y-6 lg:w-1/2">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-5 rounded-[2rem] backdrop-blur-xl">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <div>
                   <h3 className="text-3xl font-black">Coxie AI - Local Expert</h3>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div><span className="text-blue-100 text-sm font-bold uppercase tracking-widest">Always Online</span></div>
                </div>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed font-medium">হোটেল, খাবার বা আবহাওয়া নিয়ে যেকোনো কিছু জিজ্ঞাসা করুন। আমি আপনাকে কক্সবাজারের প্রতিটি গলি চিনিয়ে দেব।</p>
            </div>

            <div className="lg:w-1/2 w-full space-y-6">
              <div className="min-h-[160px] bg-black/20 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-center">
                 {assistantResponse ? (
                    <div className="animate-in slide-in-from-bottom-2 duration-500">
                      <p className="text-lg font-bold leading-relaxed mb-4">{assistantResponse}</p>
                      <button onClick={() => { setAssistantResponse(null); setAssistantInput(''); }} className="text-blue-300 text-sm font-black uppercase tracking-widest hover:text-white transition-colors">Ask Again</button>
                    </div>
                 ) : (
                    <div className="space-y-4 text-center lg:text-left">
                      <p className="text-lg text-blue-200 italic font-medium">"ভাইয়া, আজকের আবহাওয়া কেমন?" অথবা "কক্সবাজারের সেরা শুঁটকি কোথায় পাওয়া যায়?"</p>
                    </div>
                 )}
              </div>

              {!assistantResponse && (
                <form onSubmit={handleAskCoxie} className="flex gap-4">
                  <input 
                    value={assistantInput}
                    onChange={(e) => setAssistantInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-grow bg-white/10 border-white/20 placeholder:text-blue-300 text-white rounded-[1.5rem] px-8 py-5 focus:bg-white/20 outline-none transition-all text-lg font-medium"
                  />
                  <button disabled={isAssistantLoading} className="bg-white text-indigo-900 p-5 rounded-[1.5rem] font-bold hover:scale-105 transition-transform disabled:opacity-50 shadow-xl">
                    {isAssistantLoading ? <div className="w-8 h-8 border-4 border-indigo-900 border-t-transparent rounded-full animate-spin" /> : <Send className="w-8 h-8" />}
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] -ml-40 -mb-40"></div>
        </div>
      </section>

      {/* 7. Local Products Section */}
      <section className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
           <div className="flex justify-between items-center">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{t.sectionProducts}</h2>
              <button onClick={() => setPage('products')} className="text-emerald-600 font-black flex items-center gap-2 hover:gap-4 transition-all">
                 Browse Shop <ChevronRight className="w-5 h-5" />
              </button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_PRODUCTS.map(product => (
                <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                   <div className="relative h-64 overflow-hidden">
                      <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">{product.category}</div>
                   </div>
                   <div className="p-8">
                      <h3 className="text-2xl font-black text-slate-800 mb-2">{product.name}</h3>
                      <p className="text-emerald-600 font-black text-lg mb-4">{product.price}</p>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                      <button onClick={() => setPage('products')} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-black flex items-center justify-center gap-2">
                         <Gift className="w-5 h-5" /> {t.buyNow}
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. Local Business Showcase */}
      <section className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 bg-slate-900 rounded-[3.5rem] p-12 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
             <div className="space-y-6 relative z-10 text-center md:text-left">
                <h3 className="text-4xl font-black leading-tight tracking-tighter">কক্সবাজারের লোকাল ব্যবসা ডিজিটাল করুন!</h3>
                <p className="text-slate-400 text-lg font-medium">হোটেল, রেস্টুরেন্ট বা ট্রাফিক সলিউশন—সবকিছু এখানে লিস্ট করুন।</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={() => setPage('business')} className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-900/40 transition-all hover:-translate-y-1">
                     ব্যবসা যুক্ত করুন
                  </button>
                </div>
             </div>
             <img 
               src="https://i.ibb.co.com/8gs1N84F/Chat-GPT-Image-Jan-13-2026-10-41-19-PM.png" 
               className="w-64 md:w-80 rounded-[2.5rem] shadow-2xl transform hover:rotate-2 transition-transform duration-500 relative z-10" 
               alt="Local Business" 
             />
          </div>

          <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
             <h2 className="text-3xl font-black text-slate-900 tracking-tighter">{t.sectionGuides}</h2>
             <div className="space-y-6">
                {MOCK_GUIDES.map(guide => (
                  <div key={guide.id} className="bg-slate-50 p-6 rounded-[2rem] flex items-center gap-5 hover:shadow-md transition-all group">
                     <img src={guide.image} className="w-20 h-20 rounded-2xl object-cover shadow-md" />
                     <div className="flex-grow">
                        <h4 className="font-black text-lg text-slate-800">{guide.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                           <div className="flex text-yellow-500"><Star className="w-3 h-3 fill-current" /></div>
                           <span className="text-xs font-black text-slate-400 tracking-widest">{guide.rating}</span>
                        </div>
                     </div>
                     <button onClick={() => setPage('guides')} className="bg-slate-900 text-white p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                        <ArrowRight className="w-6 h-6" />
                     </button>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 9. Community/Reviews Section */}
      <section className="px-4 md:px-8 py-20 bg-indigo-50">
         <div className="max-w-7xl mx-auto space-y-12 text-center">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{t.sectionReviews}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3].map(i => (
                 <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl space-y-6 text-left relative group">
                    <MessageSquare className="absolute top-8 right-8 text-indigo-100 w-16 h-16" />
                    <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /> <Star className="w-4 h-4 fill-current" /></div>
                    <p className="text-slate-600 text-lg italic leading-relaxed relative z-10">"কক্সহেল্প ছাড়া কক্সবাজার ভ্রমণ ভাবাই যায় না! সব তথ্য এক জায়গায় পাওয়া যায়।"</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                       <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-black text-indigo-600">👤</div>
                       <div>
                          <h5 className="font-black text-slate-800">পর্যটক {i}</h5>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Traveler</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
            <button onClick={() => setPage('community')} className="bg-slate-900 text-white px-12 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-2xl">
               Join the Community
            </button>
         </div>
      </section>

    </div>
  );
};

export default Home;
