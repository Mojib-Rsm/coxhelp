
import React from 'react';
import { User, LogIn, UserPlus, Heart, History, Settings } from 'lucide-react';

const Account: React.FC<{activeLanguage: string, t: any}> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
           <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-slate-300">
              <User size={48} />
           </div>
           <h1 className="text-3xl font-black text-slate-900">স্বাগতম, ভ্রমণপিপাসু!</h1>
           <p className="text-slate-500">আপনার একাউন্টে লগইন করুন বুকিং হিস্ট্রি ও ফেভারিট লিস্ট দেখতে।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <button className="bg-blue-600 text-white p-10 rounded-[2.5rem] flex flex-col items-center gap-4 hover:shadow-2xl transition-all shadow-blue-100">
              <LogIn size={32} />
              <span className="text-xl font-black">লগইন করুন</span>
           </button>
           <button className="bg-white border-2 border-slate-100 text-slate-800 p-10 rounded-[2.5rem] flex flex-col items-center gap-4 hover:shadow-xl transition-all">
              <UserPlus size={32} />
              <span className="text-xl font-black">নতুন একাউন্ট</span>
           </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           <QuickLink icon={<Heart />} title="ফেভারিট" />
           <QuickLink icon={<History />} title="বুকিং হিস্ট্রি" />
           <QuickLink icon={<Settings />} title="সেটিংস" />
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({ icon, title }: any) => (
  <button className="p-6 bg-slate-50 rounded-3xl flex flex-col items-center gap-2 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100">
     <div className="text-slate-400 group-hover:text-blue-600">{icon}</div>
     <span className="text-sm font-bold">{title}</span>
  </button>
);

export default Account;
