
import React from 'react';
import { Heart, Target, MapPin, Code, Facebook, ExternalLink } from 'lucide-react';

const About: React.FC<{activeLanguage: string}> = ({ activeLanguage }) => {
  const isBN = activeLanguage === 'BN';
  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-6">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
            {isBN ? 'আমাদের সম্পর্কে' : 'About Us'}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            {isBN 
              ? 'কক্সবাজারের পর্যটন শিল্পকে ডিজিটালাইজড করার একটি ছোট উদ্যোগ।'
              : 'A small initiative to digitalize the tourism industry of Cox\'s Bazar.'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard 
            icon={<Target className="text-blue-600" />}
            title={isBN ? "লক্ষ্য" : "Mission"}
            desc={isBN ? "পর্যটকদের জন্য সব তথ্য এক জায়গায় সহজলভ্য করা।" : "Making all travel info accessible in one place for tourists."}
          />
          <AboutCard 
            icon={<Heart className="text-red-500" />}
            title={isBN ? "ভিশন" : "Vision"}
            desc={isBN ? "কক্সবাজারকে বিশ্বের অন্যতম স্মার্ট পর্যটন নগরী হিসেবে গড়ে তোলা।" : "Building Cox's Bazar as one of the smartest tourist hubs globally."}
          />
          <AboutCard 
            icon={<MapPin className="text-green-600" />}
            title={isBN ? "লোকাল সাপোর্ট" : "Local Support"}
            desc={isBN ? "লোকাল যুবকদের জন্য আয়ের পথ তৈরি করা।" : "Creating income sources for local youth through technology."}
          />
        </div>

        {/* Developer Section */}
        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-slate-100 flex items-center justify-center text-slate-300 relative overflow-hidden border-4 border-white shadow-lg">
              <span className="text-4xl font-black text-slate-400 group-hover:scale-110 transition-transform duration-500">MR</span>
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="flex-grow text-center md:text-left space-y-4">
              <div>
                <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2 border border-blue-100">
                  Lead Developer
                </span>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Mojib Rsm</h2>
                <p className="text-slate-500 font-medium max-w-md">
                  {isBN 
                    ? 'কক্সহেল্প অ্যাপের স্থপতি এবং মেইন ডেভেলপার। প্রযুক্তির মাধ্যমে সামাজিক সমস্যা সমাধানের কারিগর।' 
                    : 'The architect and lead developer of CoxHelp. Crafting technological solutions for community growth.'}
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="https://www.facebook.com/MoJiiB.RsM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                >
                  <Facebook className="w-5 h-5" /> Facebook Profile
                </a>
                <div className="bg-slate-50 px-6 py-3 rounded-2xl flex items-center gap-2 text-slate-500 font-bold border border-slate-100">
                  <Code className="w-5 h-5" /> Full-Stack Engineer
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden text-center space-y-6">
           <h2 className="text-3xl font-black">{isBN ? "যোগাযোগ করুন" : "Get In Touch"}</h2>
           <p className="text-slate-400 max-w-lg mx-auto">
             {isBN 
               ? "আপনার কোনো মতামত বা সহযোগিতার জন্য আমাদের ইমেইল করতে পারেন।" 
               : "For any suggestions or collaborations, feel free to email us."}
           </p>
           <p className="text-2xl font-bold text-blue-400">hello@coxhelp.com</p>
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

const AboutCard = ({ icon, title, desc }: any) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-shadow">
    <div className="bg-slate-50 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;
