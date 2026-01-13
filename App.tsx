
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Emergency from './pages/Emergency.tsx';
import Tourism from './pages/Tourism.tsx';
import Hotels from './pages/Hotels.tsx';
import GuideBooking from './pages/GuideBooking.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import Food from './pages/Food.tsx';
import Transport from './pages/Transport.tsx';
import Business from './pages/Business.tsx';
import News from './pages/News.tsx';
import Account from './pages/Account.tsx';
import Packages from './pages/Packages.tsx';
import Products from './pages/Products.tsx';
import Community from './pages/Community.tsx';
import TravelTips from './pages/TravelTips.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import About from './pages/About.tsx';
import BloodDonors from './pages/BloodDonors.tsx';
import { TRANSLATIONS } from './constants.tsx';

const App: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<'EN' | 'BN'>(() => {
    const saved = localStorage.getItem('coxhelp_lang');
    return (saved as 'EN' | 'BN') || 'BN';
  });
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('coxhelp_favs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('coxhelp_lang', activeLanguage);
  }, [activeLanguage]);

  useEffect(() => {
    localStorage.setItem('coxhelp_favs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const t = TRANSLATIONS[activeLanguage];

  const renderPage = () => {
    const props = { 
      activeLanguage, 
      t, 
      setPage: setCurrentPage,
      favorites,
      toggleFavorite
    };

    switch(currentPage) {
      case 'emergency': return <Emergency {...props} />;
      case 'tourism': return <Tourism {...props} />;
      case 'hotels': return <Hotels {...props} />;
      case 'food': return <Food {...props} />;
      case 'transport': return <Transport {...props} />;
      case 'guides': return <GuideBooking {...props} />;
      case 'donors': return <BloodDonors {...props} />;
      case 'business': return <Business {...props} />;
      case 'news': return <News {...props} />;
      case 'account': return <Account {...props} />;
      case 'packages': return <Packages {...props} />;
      case 'products': return <Products {...props} />;
      case 'community': return <Community {...props} />;
      case 'tips': return <TravelTips {...props} />;
      case 'privacy': return <Privacy {...props} />;
      case 'terms': return <Terms {...props} />;
      case 'about': return <About {...props} />;
      case 'admin': return <AdminDashboard activeLanguage={activeLanguage} />;
      default: return <Home {...props} />;
    }
  };

  return (
    <Layout activeLanguage={activeLanguage} setLanguage={setActiveLanguage} setPage={setCurrentPage}>
      <div className="max-w-7xl mx-auto min-h-screen">
        {currentPage !== 'home' && (
          <div className="px-4 md:px-8 pt-6 pb-2">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all shadow-sm active:scale-95 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {activeLanguage === 'BN' ? 'হোমে ফিরে যান' : 'Back to Home'}
            </button>
          </div>
        )}
        {renderPage()}
      </div>
      
      {/* SOS Floating Button */}
      <button 
        onClick={() => setCurrentPage('emergency')}
        className="fixed bottom-20 right-4 bg-red-600 text-white p-5 rounded-full shadow-2xl z-40 hover:scale-110 active:scale-95 transition-all animate-bounce flex items-center justify-center border-4 border-white"
      >
        <span className="font-black text-xl tracking-tighter">SOS</span>
      </button>

      {/* Admin Toggle */}
      <button 
        onClick={() => setCurrentPage('admin')}
        className="fixed bottom-4 left-4 bg-slate-800 text-white/30 p-2 rounded-lg text-[10px] z-40 hover:text-white"
      >
        Dashboard
      </button>
    </Layout>
  );
};

export default App;
