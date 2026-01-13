
import React from 'react';
import { FileText } from 'lucide-react';

const Terms: React.FC<{activeLanguage: string}> = ({ activeLanguage }) => {
  const isBN = activeLanguage === 'BN';
  return (
    <div className="px-4 md:px-8 py-12 animate-in fade-in slide-in-from-bottom-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-indigo-100 p-3 rounded-2xl text-indigo-600">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-900">
            {isBN ? 'ব্যবহার শর্তাবলী' : 'Terms of Service'}
          </h1>
        </div>
        
        <div className="space-y-6 text-slate-600">
          <p className="font-medium text-slate-800">
            {isBN 
              ? 'কক্সহেল্প অ্যাপটি ব্যবহারের মাধ্যমে আপনি নিচের শর্তগুলোতে সম্মত হচ্ছেন:'
              : 'By using CoxHelp, you agree to the following terms and conditions:'}
          </p>

          <section className="space-y-2">
            <h2 className="font-bold text-slate-800">{isBN ? 'ব্যবহারকারীর দায়িত্ব' : 'User Responsibility'}</h2>
            <p>
              {isBN 
                ? 'অ্যাপে প্রদত্ত যেকোনো তথ্য যাচাই করে ব্যবহার করা পর্যটকের দায়িত্ব। জরুরি প্রয়োজনে সরাসরি অফিশিয়াল নাম্বারে কল করুন।'
                : 'Users are responsible for verifying any information provided. In emergencies, call official numbers directly.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-slate-800">{isBN ? 'লিংক ও থার্ড পার্টি' : 'Links & Third Parties'}</h2>
            <p>
              {isBN 
                ? 'আমাদের অ্যাপে অনেক বাইরের লিংক থাকতে পারে। সেগুলোর কন্টেন্টের জন্য আমরা দায়ী নই।'
                : 'Our app contains external links. We are not responsible for the content of third-party sites.'}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-slate-800">{isBN ? 'নিষেধাজ্ঞা' : 'Prohibited Actions'}</h2>
            <p>
              {isBN 
                ? 'কমিউনিটি সেকশনে কোনো প্রকার অশ্লীল বা আপত্তিকর মন্তব্য করা থেকে বিরত থাকুন।'
                : 'Avoid posting any offensive or inappropriate content in the community section.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
