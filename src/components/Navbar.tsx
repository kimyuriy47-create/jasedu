import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-indigo-600 p-2 rounded-xl text-white">
              <BookOpen size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">Jas Education</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              {t.nav.about}
            </a>
            <a href="#courses" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              {t.nav.courses}
            </a>
            
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setLang('ru')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${lang === 'ru' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                RU
              </button>
              <button
                onClick={() => setLang('kz')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${lang === 'kz' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                KZ
              </button>
            </div>

            <a
              href="#consultation"
              className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-indigo-200 hover:shadow-lg"
            >
              {t.nav.consultation}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
