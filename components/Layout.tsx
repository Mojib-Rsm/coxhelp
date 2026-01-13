
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  activeLanguage: 'EN' | 'BN';
  setLanguage: (lang: 'EN' | 'BN') => void;
  setPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeLanguage, setLanguage, setPage }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeLanguage={activeLanguage} setLanguage={setLanguage} setPage={setPage} />
      <main className="flex-grow pt-16 pb-20">
        {children}
      </main>
      <Footer activeLanguage={activeLanguage} setPage={setPage} />
    </div>
  );
};

export default Layout;
