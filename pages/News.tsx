
import React from 'react';
import { Newspaper, Bell, Cloud, Waves } from 'lucide-react';
import { MOCK_ALERTS } from '../constants';

const News: React.FC<{activeLanguage: string, t: any}> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
              <h1 className="text-4xl font-black text-slate-900">খবর ও নোটিশ</h1>
              <p className="text-slate-500">কক্সবাজারের লেটেস্ট আপডেট ও সতর্কতা জানুন।</p>
           </div>
           <button className="bg-blue-600 text-white p-4 rounded-2xl">
              <Bell className="w-6 h-6" />
           </button>
        </header>

        <section className="space-y-6">
           <h2 className="text-2xl font-black flex items-center gap-2">
              <Cloud className="text-blue-600" /> আজকের লাইভ আপডেট
           </h2>
           <div className="grid gap-4">
              {MOCK_ALERTS.map(alert => (
                <div key={alert.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex gap-6 items-start">
                   <div className={`p-4 rounded-2xl ${alert.type === 'sea' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                      {alert.type === 'sea' ? <Waves /> : <Cloud />}
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-2">
                         <h3 className="text-xl font-bold text-slate-800">{alert.title}</h3>
                         <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded uppercase">{alert.timestamp}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{alert.content}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[3rem] text-center space-y-6">
           <h2 className="text-3xl font-black">সতর্ক থাকুন, নিরাপদে থাকুন</h2>
           <p className="text-slate-400 max-w-xl mx-auto">যেকোনো জরুরি প্রয়োজনে আমাদের হটলাইন নাম্বারে কল করুন অথবা আমাদের 'জরুরি সহায়তা' পেজটি ভিজিট করুন।</p>
           <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-shadow">
              জরুরি হটলাইন: ৯৯৯
           </button>
        </section>
      </div>
    </div>
  );
};

export default News;
