
import React from 'react';
import { MessageSquare, Star, Users, Share2, Image as ImageIcon } from 'lucide-react';

interface CommunityProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
}

const Community: React.FC<CommunityProps> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Community Hub</h1>
          <p className="text-slate-500">
            শেয়ার করুন আপনার ভ্রমণের অভিজ্ঞতা, মতামত এবং চমৎকার সব ছবি।
          </p>
        </header>

        {/* Post Box */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600">👤</div>
              <div className="flex-grow bg-slate-50 p-4 rounded-2xl text-slate-400 font-medium cursor-text">
                 How was your trip? Share a story...
              </div>
           </div>
           <div className="flex justify-between items-center border-t border-slate-50 pt-4">
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-indigo-600">
                    <ImageIcon className="w-5 h-5" /> Photo
                 </button>
                 <button className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-yellow-600">
                    <Star className="w-5 h-5" /> Rate
                 </button>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-2 rounded-xl font-black shadow-lg">Post</button>
           </div>
        </div>

        {/* Feed */}
        <div className="space-y-8">
           {[1, 2, 3].map(i => (
             <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                <div className="flex justify-between items-start">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-300 text-xl">👤</div>
                      <div>
                         <h3 className="font-black text-slate-800">Tourist Name {i}</h3>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Posted 3 hours ago</p>
                      </div>
                   </div>
                   <div className="flex text-yellow-500">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                   </div>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                   কক্সবাজারের এই ট্রিপটা ছিল অসাধারণ! বিশেষ করে ইনানী বিচের সূর্যাস্ত সারাজীবন মনে রাখার মতো। কক্সহেল্প অ্যাপ দিয়ে হোটেল বুকিং করে অনেক সুবিধা হয়েছে।
                </p>
                <div className="flex items-center gap-6 border-t border-slate-50 pt-6">
                   <button className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-indigo-600">
                      <MessageSquare className="w-5 h-5" /> 12 Comments
                   </button>
                   <button className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-blue-600">
                      <Share2 className="w-5 h-5" /> Share
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
