
import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Hotel, 
  Waves, 
  Camera, 
  Utensils, 
  AlertTriangle, 
  PhoneCall, 
  Bus, 
  Clock,
  Navigation,
  CheckCircle2
} from 'lucide-react';

interface TravelTipsProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
}

const TravelTips: React.FC<TravelTipsProps> = ({ activeLanguage, t }) => {
  const isBN = activeLanguage === 'BN';

  const tipsData = [
    {
      icon: <Bus className="w-8 h-8 text-blue-600" />,
      title: isBN ? "গন্তব্যে পৌঁছেই সতর্কতা" : "Safety Upon Arrival",
      content: isBN 
        ? "বাস থেকে নামার পর যেকোনো অটোতে না উঠে গন্তব্য উল্লেখ করে ভাড়া ঠিক করে তারপর যান। ট্যুরিস্ট পুলিশ নির্ধারিত ভাড়া বাস্তবায়নের উদ্যোগ নিয়েছে।"
        : "Don't just hop onto any auto-rickshaw at the bus stand. Mention your destination and fix the fare first. Tourist police ensure regulated fares."
    },
    {
      icon: <Hotel className="w-8 h-8 text-indigo-600" />,
      title: isBN ? "হোটেল বুকিং পরামর্শ" : "Hotel Booking Tips",
      content: isBN
        ? "সম্ভব হলে আগেই অনলাইনে বুকিং করুন। নিজে যাচাই করে রুম দেখে ভাড়া ঠিক করুন। অটোচালকের পরামর্শে হোটেল নির্বাচন করবেন না। এনআইডি/জন্মনিবন্ধন কপি অবশ্যই সাথে রাখুন।"
        : "Book online in advance if possible. If walk-in, check the room yourself before fixing the price. Avoid hotel suggestions from auto drivers. Carry your NID/Birth Cert."
    },
    {
      icon: <Waves className="w-8 h-8 text-cyan-600" />,
      title: isBN ? "বিচে নিরাপত্তা" : "Beach Safety",
      content: isBN
        ? "মূল্যবান জিনিসপত্র হোটেলে রেখে বিচে যান। লাইফগার্ডের কাছাকাছি জায়গায় পানিতে নামুন। জোয়ার-ভাটার সময় সম্পর্কে সচেতন থাকুন।"
        : "Leave valuables at the hotel. Always swim near lifeguard stations. Be aware of tide timings for your safety."
    },
    {
      icon: <Camera className="w-8 h-8 text-orange-600" />,
      title: isBN ? "ফটোগ্রাফার ও রাইড" : "Photographers & Rides",
      content: isBN
        ? "আগে দরদাম করে নিন। লাইসেন্স আছে কি না দেখে নিন। মোবাইল নম্বর ও ছবি তুলে রাখুন। নির্ধারিত রেট কার্ড অনুযায়ী পেমেন্ট করুন।"
        : "Negotiate prices beforehand. Check for official licenses. Note down their mobile number. Follow the official rate cards for beach bikes."
    },
    {
      icon: <Utensils className="w-8 h-8 text-emerald-600" />,
      title: isBN ? "খাবার গ্রহণে সচেতনতা" : "Food Safety",
      content: isBN
        ? "খাবারের আগে মেন্যু ও মূল্য তালিকা দেখে নিন। খোলা জায়গার অস্বাস্থ্যকর স্ট্রিট ফুড এড়িয়ে চলুন। জনপ্রিয় ও হাইজিনিক রেস্টুরেন্ট বেছে নিন।"
        : "Always check the menu and price list before ordering. Avoid unhygienic street food in open areas. Choose popular and clean restaurants."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: isBN ? "সাধারণ সতর্কতা" : "General Precautions",
      content: isBN
        ? "সন্ধ্যার পর ঝাউবন ও অন্ধকার এলাকা এড়িয়ে চলুন। হকার বা ভিক্ষুকদের দ্বারা হয়রানির শিকার হলে ট্যুরিস্ট পুলিশকে জানান।"
        : "Avoid dark areas and casuarina forests after sunset. Report any harassment by hawkers or others to the Tourist Police immediately."
    }
  ];

  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Smart & Safe Travel
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            {isBN ? "ভ্রমণ পরামর্শ ও নির্দেশিকা" : "Essential Travel Advisory"}
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            {isBN 
              ? "কক্সবাজার ভ্রমণে এসে নিরাপদ ও আনন্দদায়ক অভিজ্ঞতা নিশ্চিত করতে আমাদের এই বিশেষ পরামর্শগুলো মেনে চলুন।"
              : "Follow these essential tips to ensure a safe, hassle-free, and memorable experience in Cox's Bazar."}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tipsData.map((tip, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-start gap-6">
                <div className="bg-slate-50 p-4 rounded-3xl group-hover:scale-110 transition-transform">
                  {tip.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-800">{tip.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {tip.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contacts Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-black">{isBN ? "যেকোনো জরুরি প্রয়োজনে" : "In Case of Emergency"}</h2>
                <p className="text-slate-400">{isBN ? "ট্যুরিস্ট পুলিশ কক্সবাজার রিজিয়ন ২৪/৭ আপনাদের পাশে আছে।" : "Tourist Police Cox's Bazar is available 24/7 for your assistance."}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:01320160000" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/40">
                    <PhoneCall className="w-5 h-5" /> {isBN ? "ট্যুরিস্ট পুলিশ" : "Tourist Police"}
                 </a>
                 <a href="tel:999" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-900/40">
                    <AlertTriangle className="w-5 h-5" /> 999
                 </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <ContactInfo icon={<MapPin className="w-4 h-4" />} label={isBN ? "ঠিকানা" : "Address"} value="Police Super Office, Cox's Bazar" />
              <ContactInfo icon={<Navigation className="w-4 h-4" />} label={isBN ? "কন্ট্রোল রুম" : "Control Room"} value="01320222222" />
              <ContactInfo icon={<CheckCircle2 className="w-4 h-4" />} label={isBN ? "ইমেইল" : "Email"} value="tourist.cox.sp@police.gov.bd" />
            </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center pb-8">
           <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
             {isBN ? "সচেতন পর্যটকই নিরাপদ পর্যটক" : "A Conscious Tourist is a Safe Tourist"}
           </p>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-3">
    <div className="bg-white/10 p-2 rounded-lg">{icon}</div>
    <div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
      <p className="text-sm font-bold text-slate-200">{value}</p>
    </div>
  </div>
);

export default TravelTips;
