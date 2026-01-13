
import React, { useState, useMemo } from 'react';
import { 
  Droplet, 
  Search, 
  MapPin, 
  Phone, 
  UserPlus, 
  ShieldCheck, 
  Clock, 
  Heart,
  Calendar,
  Filter
} from 'lucide-react';
import { MOCK_DONORS } from '../constants';

interface BloodDonorsProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
}

const BloodDonors: React.FC<BloodDonorsProps> = ({ activeLanguage, t }) => {
  const isBN = activeLanguage === 'BN';
  const [activeGroup, setActiveGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showRegForm, setShowRegForm] = useState(false);

  const bloodGroups = ['All', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  const filteredDonors = useMemo(() => {
    return MOCK_DONORS.filter(d => {
      const matchesGroup = activeGroup === 'All' || d.group === activeGroup;
      const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            d.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }, [activeGroup, searchQuery]);

  return (
    <div className="px-4 md:px-8 py-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Hero */}
        <header className="bg-rose-600 rounded-[3.5rem] p-10 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              <Heart className="w-4 h-4" /> Save a Life Today
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              {isBN ? "রক্তের ডোনর নেটওয়ার্ক" : "Blood Donor Network"}
            </h1>
            <p className="text-rose-100 text-xl font-medium leading-relaxed">
              {isBN 
                ? "কক্সবাজারের মানুষের বিপদে পাশে দাঁড়াতে আমাদের এই ডিজিটাল প্ল্যাটফর্ম। আপনার এক ব্যাগ রক্ত বাঁচাতে পারে একটি প্রাণ।"
                : "A digital sanctuary for those in need of life-saving blood in Cox's Bazar. Your contribution can save a soul."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => setShowRegForm(true)}
                className="bg-white text-rose-600 px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-rose-50 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <UserPlus className="w-6 h-6" /> {isBN ? "ডোনার হিসেবে যুক্ত হন" : "Register as Donor"}
              </button>
              <a href="tel:999" className="bg-rose-700 text-white border border-rose-400 px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-rose-800 transition-all flex items-center justify-center gap-3">
                 <Droplet className="w-6 h-6" /> {isBN ? "জরুরি ব্লাড ব্যাংক" : "Emergency Blood"}
              </a>
            </div>
          </div>
          <div className="relative z-10 flex justify-center lg:w-1/3">
             <div className="relative w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-3xl animate-pulse">
                <Droplet className="w-32 h-32 text-white fill-current" />
             </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        </header>

        {/* Search & Filters */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
               {isBN ? "ডোনার খুঁজুন" : "Find a Donor"}
            </h2>
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder={isBN ? "নাম বা এলাকা দিয়ে খুঁজুন..." : "Search by name or area..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-14 focus:ring-4 focus:ring-rose-500/20 transition-all outline-none font-medium shadow-sm"
              />
              <Search className="absolute left-5 top-4.5 text-slate-400 w-6 h-6" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {bloodGroups.map(group => (
              <button 
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`px-6 py-3 rounded-2xl font-black text-sm transition-all shadow-sm ${
                  activeGroup === group 
                    ? 'bg-rose-600 text-white scale-110' 
                    : 'bg-white text-slate-600 border border-slate-100 hover:border-rose-200'
                }`}
              >
                {group === 'All' ? (isBN ? "সবগুলো" : "ALL") : group}
              </button>
            ))}
          </div>
        </section>

        {/* Donors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {filteredDonors.map(donor => (
            <div key={donor.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="bg-rose-50 w-20 h-20 rounded-[2rem] flex items-center justify-center text-rose-600 font-black text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    {donor.group}
                  </div>
                  {donor.isVerified && (
                    <div className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> Verified
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">{donor.name}</h3>
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                    <MapPin className="w-4 h-4" /> {donor.location}, Cox's Bazar
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl space-y-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Last Donated</span>
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-xs">
                      <Calendar className="w-3 h-3" /> {donor.lastDonated}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl space-y-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Status</span>
                    <div className="flex items-center gap-2 text-green-600 font-bold text-xs">
                      <Clock className="w-3 h-3" /> Available
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-50 flex gap-3">
                <a 
                  href={`tel:${donor.phone}`}
                  className="flex-grow bg-slate-900 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl"
                >
                  <Phone className="w-4 h-4" /> {isBN ? "কল দিন" : "Call Now"}
                </a>
                <button className="p-4 bg-rose-50 text-rose-600 rounded-2xl hover:bg-rose-100 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          {filteredDonors.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-4">
              <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-slate-200">
                <Droplet className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-black text-slate-400">No donors found in this group.</h3>
            </div>
          )}
        </div>

        {/* Registration Modal (Simulated) */}
        {showRegForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowRegForm(false)}></div>
            <div className="bg-white w-full max-w-xl rounded-[3rem] p-10 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300">
               <h2 className="text-3xl font-black text-slate-900 mb-2">ডোনার হিসেবে নিবন্ধন</h2>
               <p className="text-slate-500 mb-8 font-medium">নিচে আপনার সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন।</p>
               <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Registration successful! Thank you."); setShowRegForm(false); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase ml-2">Full Name</label>
                      <input required placeholder="আপনার নাম" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-rose-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase ml-2">Blood Group</label>
                      <select className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-rose-500 outline-none">
                        {bloodGroups.filter(g => g !== 'All').map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase ml-2">Mobile Number</label>
                      <input required type="tel" placeholder="01XXXXXXXXX" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-rose-500 outline-none" />
                  </div>
                  <div className="space-y-1">
                      <label className="text-xs font-black text-slate-400 uppercase ml-2">Location</label>
                      <input required placeholder="আপনার এলাকা (যেমন: কলাতলী)" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-rose-500 outline-none" />
                  </div>
                  <button type="submit" className="w-full bg-rose-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-100 mt-4">
                    রেজিস্ট্রেশন সম্পন্ন করুন
                  </button>
               </form>
               <button onClick={() => setShowRegForm(false)} className="w-full mt-4 text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-slate-600 transition-colors">
                 Cancel
               </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BloodDonors;
