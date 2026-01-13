
import React from 'react';
import { Gift, ShoppingCart, Info, Check } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

interface ProductsProps {
  activeLanguage: 'EN' | 'BN';
  t: any;
}

const Products: React.FC<ProductsProps> = ({ activeLanguage, t }) => {
  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{t.sectionProducts}</h1>
            <p className="text-slate-500 max-w-2xl">
              কক্সবাজারের খাঁটি শুঁটকি, আচার এবং হস্তশিল্পের সেরা সংগ্রহ।
            </p>
          </div>
          <div className="bg-emerald-50 text-emerald-600 px-6 py-3 rounded-2xl font-black flex items-center gap-2 border border-emerald-100">
             <Check className="w-5 h-5" /> 100% Verified Vendors
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map(product => (
            <div key={product.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col overflow-hidden">
              <div className="h-64 relative">
                <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-emerald-600 shadow-md">
                   {product.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="flex justify-between items-start">
                   <h3 className="text-2xl font-black text-slate-800">{product.name}</h3>
                   <span className="text-emerald-600 font-black text-xl">{product.price}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">{product.description}</p>
                <div className="flex gap-2">
                   <button className="flex-grow bg-emerald-600 text-white py-4 rounded-2xl font-black hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-100">
                      <ShoppingCart className="w-5 h-5" /> {t.buyNow}
                   </button>
                   <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100">
                      <Info className="w-6 h-6" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
