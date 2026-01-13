
import React from 'react';
import { ShoppingBag, PlusCircle, CheckCircle, TrendingUp } from 'lucide-react';

const Business: React.FC<{activeLanguage: string, t: any}> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
           <div className="relative z-10 space-y-6 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-black">আপনার ব্যবসার ডিজিটাল পার্টনার</h1>
              <p className="text-blue-100 text-lg">কক্সহেল্প-এ আপনার ব্যবসা যুক্ত করে পৌঁছান হাজারো পর্যটকের কাছে।</p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                 <PlusCircle className="w-6 h-6" /> ব্যবসা যুক্ত করুন - একদম ফ্রি
              </button>
           </div>
           <div className="relative z-10 grid grid-cols-2 gap-4">
              <FeatureBox icon={<CheckCircle />} text="ভেরিফাইড ব্যাজ" />
              <FeatureBox icon={<TrendingUp />} text="বেশি কাস্টমার" />
              <FeatureBox icon={<ShoppingBag />} text="অনলাইন উপস্থিতি" />
           </div>
           {/* Decor */}
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <section className="space-y-8">
           <h2 className="text-3xl font-black text-slate-900">ব্যবসার ধরণসমূহ</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CategoryCard title="হোটেল ও মোটেল" count="১২০+" color="bg-indigo-100 text-indigo-600" />
              <CategoryCard title="রেস্টুরেন্ট" count="৮৫+" color="bg-orange-100 text-orange-600" />
              <CategoryCard title="গাড়ি ও বাইক রেন্ট" count="৪৫+" color="bg-green-100 text-green-600" />
              <CategoryCard title="শুঁটকি ও হস্তশিল্প" count="৩০+" color="bg-pink-100 text-pink-600" />
              <CategoryCard title="ফটোগ্রাফার" count="১৫০+" color="bg-blue-100 text-blue-600" />
              <CategoryCard title="ট্যুর গাইড" count="৫০+" color="bg-purple-100 text-purple-600" />
           </div>
        </section>
      </div>
    </div>
  );
};

const FeatureBox = ({ icon, text }: any) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-center space-y-2">
     <div className="text-white flex justify-center">{icon}</div>
     <p className="text-sm font-bold">{text}</p>
  </div>
);

const CategoryCard = ({ title, count, color }: any) => (
  <div className={`p-8 rounded-[2rem] ${color} flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer`}>
     <h3 className="text-xl font-bold">{title}</h3>
     <span className="bg-white/50 px-4 py-1 rounded-full text-xs font-black">{count} টি তালিকাভুক্ত</span>
  </div>
);

export default Business;
