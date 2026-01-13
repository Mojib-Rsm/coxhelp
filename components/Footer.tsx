
import React from 'react';
import { Home, Map, HeartPulse, User, Code } from 'lucide-react';

interface FooterProps {
  activeLanguage: 'EN' | 'BN';
  setPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ activeLanguage, setPage }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-50 md:relative md:bg-slate-900 md:text-white md:py-12 md:mt-12">
      {/* Mobile Bottom Nav */}
      <div className="flex justify-around items-center h-16 md:hidden">
        <button onClick={() => setPage('home')} className="flex flex-col items-center gap-1 text-blue-600">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">{activeLanguage === 'EN' ? 'Home' : 'হোম'}</span>
        </button>
        <button onClick={() => setPage('tourism')} className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
          <Map className="w-5 h-5" />
          <span className="text-[10px] font-bold">{activeLanguage === 'EN' ? 'Explore' : 'এক্সপ্লোর'}</span>
        </button>
        <button onClick={() => setPage('emergency')} className="flex flex-col items-center gap-1 text-slate-400 hover:text-red-500 transition-colors">
          <HeartPulse className="w-5 h-5" />
          <span className="text-[10px] font-bold">{activeLanguage === 'EN' ? 'Emergency' : 'জরুরি'}</span>
        </button>
        <button onClick={() => setPage('account')} className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-bold">{activeLanguage === 'EN' ? 'Account' : 'একাউন্ট'}</span>
        </button>
      </div>

      {/* Desktop Footer Content */}
      <div className="hidden md:grid md:grid-cols-4 md:max-w-7xl md:mx-auto md:px-8 gap-12 pb-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-black tracking-tight cursor-pointer" onClick={() => setPage('home')}>CoxHelp</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            কক্সবাজারের ভ্রমণ ও লোকাল সেবার পূর্ণাঙ্গ ডিজিটাল সাথী। আপনার ভ্রমণকে সহজ ও নিরাপদ করাই আমাদের লক্ষ্য।
          </p>
          <div className="pt-2">
            <a 
              href="https://www.facebook.com/MoJiiB.RsM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors bg-blue-400/10 px-3 py-1.5 rounded-lg border border-blue-400/20"
            >
              <Code className="w-3 h-3" />
              Developer: Mojib Rsm
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><button onClick={() => setPage('tourism')} className="hover:text-white transition-colors">দর্শনীয় স্থান</button></li>
            <li><button onClick={() => setPage('hotels')} className="hover:text-white transition-colors">হোটেল বুকিং</button></li>
            <li><button onClick={() => setPage('emergency')} className="hover:text-white transition-colors">জরুরি সহায়তা</button></li>
            <li><button onClick={() => setPage('guides')} className="hover:text-white transition-colors">লোকাল গাইড</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><button onClick={() => setPage('privacy')} className="hover:text-white transition-colors">গোপনীয়তা নীতি</button></li>
            <li><button onClick={() => setPage('terms')} className="hover:text-white transition-colors">ব্যবহার শর্তাবলী</button></li>
            <li><button onClick={() => setPage('about')} className="hover:text-white transition-colors">আমাদের সম্পর্কে</button></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-lg">Stay Updated</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="ইমেইল দিন" className="bg-slate-800 border-none rounded-2xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
            <button className="bg-blue-600 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">যোগ দিন</button>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-xs pb-12">
        <div className="flex flex-col items-center gap-2">
          <span>&copy; {new Date().getFullYear()} CoxHelp - Cox's Bazar at Your Fingertips. Built with ❤️ for the community.</span>
          <a href="https://www.facebook.com/MoJiiB.RsM" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            App Developed by <span className="font-bold">Mojib Rsm</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
