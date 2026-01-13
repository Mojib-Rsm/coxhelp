
import React from 'react';
import { Bus, Car, Bike, Ship, Phone, MapPin } from 'lucide-react';

const Transport: React.FC<{activeLanguage: string, t: any}> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">যাতায়াত ও ভাড়া</h1>
          <p className="text-slate-500">ঢাকা থেকে কক্সবাজার বা লোকাল ঘোরাঘুরি—সব তথ্য এখানে।</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <TransportCard icon={<Bus />} title="বাস সার্ভিস" desc="সব বাস কাউন্টার ও সময়সূচী" color="bg-blue-600" />
           <TransportCard icon={<Car />} title="গাড়ি ভাড়া" desc="প্রতিদিন বা দূরপাল্লার ট্রিপ" color="bg-green-600" />
           <TransportCard icon={<Bike />} title="বাইক/স্কুটি" desc="লোকাল ভ্রমণের জন্য সহজ উপায়" color="bg-orange-600" />
           <TransportCard icon={<Ship />} title="বোট সার্ভিস" desc="সেন্টমার্টিন বা মহেশখালী ট্রিপ" color="bg-cyan-600" />
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
           <h2 className="text-2xl font-black">লোকাল যাতায়াত ভাড়া (একনজরে)</h2>
           <div className="grid gap-4">
              <FareRow from="কলাতলী" to="সুগন্ধা" vehicle="অটো/ইজিবাইক" price="১০ টাকা" />
              <FareRow from="কলাতলী" to="ইনানী" vehicle="চাঁদের গাড়ি (রিজার্ভ)" price="১৫০০-২৫০০ টাকা" />
              <FareRow from="শহর" to="হিমছড়ি" vehicle="টমটম" price="৩০ টাকা" />
           </div>
        </div>
      </div>
    </div>
  );
};

const TransportCard = ({ icon, title, desc, color }: any) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all text-center space-y-4 group">
     <div className={`${color} w-16 h-16 rounded-3xl mx-auto flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
        {React.cloneElement(icon, { size: 32 })}
     </div>
     <h3 className="text-xl font-bold text-slate-800">{title}</h3>
     <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
     <button className="text-blue-600 font-bold text-sm">বিস্তারিত দেখুন</button>
  </div>
);

const FareRow = ({ from, to, vehicle, price }: any) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
     <div className="flex gap-4 items-center">
        <MapPin className="text-blue-600 w-5 h-5" />
        <div>
           <p className="font-bold text-slate-800 text-sm">{from} - {to}</p>
           <p className="text-[10px] text-slate-400 font-bold uppercase">{vehicle}</p>
        </div>
     </div>
     <span className="font-black text-slate-900">{price}</span>
  </div>
);

export default Transport;
