
import React, { useState } from 'react';
import { Menu, Search, Globe, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  activeLanguage: 'EN' | 'BN';
  setLanguage: (lang: 'EN' | 'BN') => void;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLanguage, setLanguage, setPage }) => {
  const [val, setVal] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!val.trim()) return;
    const lower = val.toLowerCase();
    if (lower.includes('hotel')) setPage('hotels');
    else if (lower.includes('food')) setPage('food');
    else if (lower.includes('police')) setPage('emergency');
    else setPage('tourism');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 h-16 flex items-center px-4 md:px-8">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <div className="bg-blue-600 p-2 rounded-lg">
          <ShieldAlert className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          CoxHelp
        </span>
      </div>

      <div className="hidden md:flex flex-grow justify-center max-w-xl mx-auto">
        <form onSubmit={handleSearch} className="relative w-full">
          <input 
            type="text" 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder={activeLanguage === 'EN' ? "Find hotels, food, spots..." : "হোটেল, খাবার বা স্পট খুঁজুন..."}
            className="w-full bg-slate-100 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
        </form>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button 
          onClick={() => setLanguage(activeLanguage === 'EN' ? 'BN' : 'EN')}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <Globe className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium">{activeLanguage === 'EN' ? 'BN' : 'EN'}</span>
        </button>
        <button className="p-2 md:hidden">
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
        <div className="hidden md:block">
          <button 
            onClick={() => setPage('account')}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
          >
            {activeLanguage === 'EN' ? 'Login' : 'লগইন'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
