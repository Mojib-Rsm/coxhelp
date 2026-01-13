
import React from 'react';
import { User, LogIn, UserPlus, Heart, History, Settings, ShieldCheck } from 'lucide-react';

interface AccountProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
  setPage: (page: string) => void;
}

const Account: React.FC<AccountProps> = ({ activeLanguage, t, setPage }) => {
  const isBN = activeLanguage === 'BN';

  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
           <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-slate-300 border-4 border-white shadow-lg">
              <User size={48} />
           </div>
           <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
             {isBN ? 'স্বাগতম, ভ্রমণপিপাসু!' : 'Welcome, Traveler!'}
           </h1>
           <p className="text-slate-500 font-medium">
             {isBN ? 'আপনার একাউন্টে লগইন করুন বুকিং হিস্ট্রি ও ফেভারিট লিস্ট দেখতে।' : 'Log in to your account to view booking history and your favorite list.'}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <button className="bg-blue-600 text-white p-10 rounded-[2.5rem] flex flex-col items-center gap-4 hover:shadow-2xl transition-all shadow-blue-100 group">
              <div className="bg-white/20 p-4 rounded-3xl group-hover:scale-110 transition-transform">
                <LogIn size={32} />
              </div>
              <span className="text-xl font-black">{isBN ? 'লগইন করুন' : 'Log In'}</span>
           </button>
           <button className="bg-white border-2 border-slate-100 text-slate-800 p-10 rounded-[2.5rem] flex flex-col items-center gap-4 hover:shadow-xl transition-all group">
              <div className="bg-slate-50 p-4 rounded-3xl group-hover:scale-110 transition-transform">
                <UserPlus size={32} />
              </div>
              <span className="text-xl font-black">{isBN ? 'নতুন একাউন্ট' : 'Create Account'}</span>
           </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           <QuickLink icon={<Heart />} title={isBN ? "ফেভারিট" : "Favorites"} />
           <QuickLink icon={<History />} title={isBN ? "বুকিং হিস্ট্রি" : "Booking History"} />
           <QuickLink icon={<Settings />} title={isBN ? "সেটিংস" : "Settings"} />
        </div>

        {/* Admin Portal Access Section */}
        <div className="pt-12 border-t border-slate-100">
          <div 
            onClick={() => setPage('admin')}
            className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex items-center justify-between cursor-pointer hover:bg-black transition-colors group shadow-xl"
          >
            <div className="flex items-center gap-6">
              <div className="bg-white/10 p-4 rounded-2xl group-hover:rotate-12 transition-transform">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-black">{isBN ? 'এডমিন পোর্টাল' : 'Admin Portal'}</h3>
                <p className="text-slate-400 text-sm font-medium">{isBN ? 'অ্যাপ ম্যানেজমেন্ট ও অ্যানালিটিক্স' : 'App management & analytics'}</p>
              </div>
            </div>
            <button className="bg-white/10 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              {isBN ? 'প্রবেশ করুন' : 'Enter'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({ icon, title }: any) => (
  <button className="p-6 bg-slate-50 rounded-[2rem] flex flex-col items-center gap-2 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group">
     <div className="text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</div>
     <span className="text-sm font-bold text-slate-700">{title}</span>
  </button>
);

export default Account;
