import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-xl text-white">
            <BookOpen size={20} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight">Jas Education</span>
        </div>
        
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Jas Education. {t.footer.rights}
        </div>
        
        <div className="text-gray-400 text-sm font-medium flex gap-4">
          <span>{t.footer.address}</span>
        </div>
      </div>
    </footer>
  );
};
