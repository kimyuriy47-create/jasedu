import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32">
      <div className="absolute inset-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
              {t.hero.title1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 relative inline-block">
                {t.hero.titleHighlight}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200"
              >
                {t.hero.cta}
                <ArrowRight size={20} />
              </a>
              <a 
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 font-semibold text-lg hover:bg-gray-50 transition-all hover:border-gray-300"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-amber-50 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 border border-white/50">
              <div className="absolute top-6 left-6 w-20 h-20 bg-indigo-50 rounded-2xl -z-10"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-50 rounded-full -z-10"></div>
              
              <div className="flex flex-col items-center justify-center text-center max-w-sm">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap size={48} className="text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jas Education</h3>
                <p className="text-gray-500 font-medium">Твой проводник в мир высшего образования</p>
              </div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">🏆</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Топ результаты</p>
                <p className="font-bold text-gray-900 text-lg">140 баллов</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
