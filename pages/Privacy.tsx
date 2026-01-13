
import React from 'react';
import { Shield } from 'lucide-react';

const Privacy: React.FC<{activeLanguage: string}> = ({ activeLanguage }) => {
  const isBN = activeLanguage === 'BN';
  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            {isBN ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
          </h1>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{isBN ? '১. তথ্য সংগ্রহ' : '1. Information Collection'}</h2>
            <p>
              {isBN 
                ? 'আমরা আপনার নাম, ইমেইল এবং লোকেশন সংগ্রহ করতে পারি যা আপনাকে সঠিক ভ্রমণ সেবা প্রদানে সহায়তা করে।'
                : 'We may collect your name, email, and location data to help provide accurate travel services.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{isBN ? '২. তথ্যের ব্যবহার' : '2. Use of Information'}</h2>
            <p>
              {isBN 
                ? 'সংগৃহীত তথ্যগুলো শুধুমাত্র আপনার অ্যাপ অভিজ্ঞতা উন্নত করতে এবং আপনাকে জরুরি নোটিফিকেশন পাঠাতে ব্যবহৃত হয়।'
                : 'Collected info is strictly used to improve your app experience and send emergency notifications.'}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{isBN ? '৩. কুকিজ' : '3. Cookies'}</h2>
            <p>
              {isBN 
                ? 'আমরা অ্যাপের কার্যকারিতা বজায় রাখতে ব্রাউজার স্টোরেজ ব্যবহার করি।'
                : 'We use browser storage to maintain app state and functionality.'}
            </p>
          </section>

          <section className="pt-8 border-t border-slate-50 italic text-sm">
            {isBN 
              ? 'সর্বশেষ আপডেট: জানুয়ারি ২০২৬' 
              : 'Last Updated: January 2026'}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
