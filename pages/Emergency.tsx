
import React, { useState } from 'react';
import { Phone, MapPin, Search, Heart, User, ShieldAlert, AlertTriangle, UserPlus, Info, ArrowRight } from 'lucide-react';
import { MOCK_EMERGENCY } from '../constants';

interface EmergencyProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
  setPage: (page: string) => void;
}

const Emergency: React.FC<EmergencyProps> = ({ activeLanguage, t, setPage }) => {
  const [filter, setFilter] = useState<'all' | 'hospital' | 'police' | 'fire'>('all');
  const [showLostFoundForm, setShowLostFoundForm] = useState(false);

  const filtered = filter === 'all' 
    ? MOCK_EMERGENCY 
    : MOCK_EMERGENCY.filter(item => item.type === filter);

  const handleSOS = () => {
    if (confirm(activeLanguage === 'BN' ? "আপনি কি ৯৯৯-এ কল করতে চান?" : "Do you want to call 999?")) {
      window.location.href = "tel:999";
    }
  };

  return (
    <div className="px-4 md:px-8 py-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Massive SOS Section */}
        <section className="bg-red-600 rounded-[3rem] p-8 text-white text-center space-y-6 shadow-2xl shadow-red-200">
          <div className="flex justify-center">
            <div className="bg-white/20 p-6 rounded-full animate-ping absolute opacity-20 w-32 h-32"></div>
            <div className="bg-white/20 p-6 rounded-full relative">
              <ShieldAlert className="w-16 h-16" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black">{activeLanguage === 'BN' ? 'জরুরি বিপদ?' : 'Emergency?'}</h2>
            <p className="text-red-100 font-medium">সরাসরি সাহায্য পেতে নিচে ক্লিক করুন।</p>
          </div>
          <button 
            onClick={handleSOS}
            className="w-full bg-white text-red-600 py-6 rounded-[2rem] font-black text-2xl hover:bg-red-50 transition-all shadow-xl flex items-center justify-center gap-4 group"
          >
            <AlertTriangle className="w-8 h-8 group-hover:scale-125 transition-transform" /> 
            {activeLanguage === 'BN' ? '৯৯৯ কল দিন' : 'Call 999'}
          </button>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center">
          {['all', 'hospital', 'police', 'fire'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-8 py-3 rounded-2xl font-black text-sm uppercase transition-all shadow-sm ${
                filter === f ? 'bg-slate-900 text-white scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:border-red-400'
              }`}
            >
              {f === 'all' ? (activeLanguage === 'BN' ? 'সবগুলো' : 'ALL') : f}
            </button>
          ))}
        </div>

        {/* Directory List */}
        <div className="grid gap-4">
          {filtered.map(contact => (
            <div key={contact.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-2xl ${
                  contact.type === 'hospital' ? 'bg-green-100 text-green-600' :
                  contact.type === 'police' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
                }`}>
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-black text-xl text-slate-800">{contact.name}</h3>
                  <p className="text-slate-500 font-medium flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-slate-400" /> {contact.location}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a 
                  href={`tel:${contact.phone}`}
                  className="flex-grow sm:flex-grow-0 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" /> {t.callNow}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lost & Found Post Tool */}
        <section className="bg-indigo-600 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl"><Search className="w-8 h-8" /></div>
              <h3 className="text-3xl font-black">{activeLanguage === 'BN' ? 'হারিয়ে গেছে / পাওয়া গেছে' : 'Lost & Found'}</h3>
            </div>
            <p className="text-indigo-100 max-w-lg">আপনার কোনো জিনিস হারিয়ে গেলে বা কুড়িয়ে পেলে এখানে পোস্ট করুন। আমরা তা লোকাল এডমিনকে অবহিত করব।</p>
            {!showLostFoundForm ? (
              <button 
                onClick={() => setShowLostFoundForm(true)}
                className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform"
              >
                {activeLanguage === 'BN' ? 'পোস্ট করুন' : 'Post Now'}
              </button>
            ) : (
              <form className="space-y-4 animate-in fade-in slide-in-from-top-2" onSubmit={(e) => { e.preventDefault(); alert("Success! Your report has been submitted."); setShowLostFoundForm(false); }}>
                <input required placeholder="Item Name" className="w-full bg-white/10 border border-white/30 rounded-xl px-5 py-3 placeholder:text-indigo-200 outline-none focus:bg-white/20" />
                <textarea required placeholder="Description & Location" className="w-full bg-white/10 border border-white/30 rounded-xl px-5 py-3 placeholder:text-indigo-200 outline-none focus:bg-white/20" rows={3} />
                <div className="flex gap-2">
                  <button type="submit" className="flex-grow bg-white text-indigo-600 py-3 rounded-xl font-black">Submit</button>
                  <button type="button" onClick={() => setShowLostFoundForm(false)} className="px-6 py-3 bg-indigo-800 rounded-xl font-bold">Cancel</button>
                </div>
              </form>
            )}
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
        </section>

        {/* Blood Donors Link Card */}
        <div 
          onClick={() => setPage('donors')}
          className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 cursor-pointer hover:shadow-xl transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-red-50 p-6 rounded-[2rem] text-red-500 group-hover:scale-110 transition-transform">
                <Heart className="w-12 h-12 fill-current" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-800">{activeLanguage === 'BN' ? 'ব্লাড ডোনার নেটওয়ার্ক' : 'Blood Donor Network'}</h3>
                <p className="text-slate-400 font-medium">কক্সবাজারের লোকাল ডোনারদের সাথে যোগাযোগ করুন।</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-full group-hover:translate-x-2 transition-transform">
              <ArrowRight className="w-8 h-8 text-slate-300" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Emergency;
