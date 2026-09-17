import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ConsultationForm = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="consultation" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/5 clip-path-slant pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Form Side */}
            <div className="p-10 md:p-14 md:col-span-3">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {t.form.title}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.form.subtitle}
              </p>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.form.successTitle}</h3>
                  <p className="text-gray-600">{t.form.successDesc}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-emerald-600 font-semibold hover:underline"
                  >
                    Отправить еще одну заявку
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.name}</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Алихан"
                      className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.phone}</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+7 (___) ___ __ __"
                      className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.grade}</label>
                      <select required className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors outline-none appearance-none">
                        <option value="">{t.form.selectGrade}</option>
                        <option value="10">{t.form.grade10}</option>
                        <option value="11">{t.form.grade11}</option>
                        <option value="12">{t.form.grade12}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.form.subjects}</label>
                      <select required className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-colors outline-none appearance-none">
                        <option value="">{t.form.selectSubjects}</option>
                        <option value="math-phys">{t.form.subMathPhys}</option>
                        <option value="chem-bio">{t.form.subChemBio}</option>
                        <option value="math-geo">{t.form.subMathGeo}</option>
                        <option value="bio-geo">{t.form.subBioGeo}</option>
                        <option value="hist-eng">{t.form.subHistEng}</option>
                        <option value="law-eng">{t.form.subLawEng}</option>
                        <option value="other">{t.form.subOther}</option>
                      </select>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 disabled:opacity-70 flex justify-center items-center gap-2 mt-4"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t.form.loading}
                      </>
                    ) : t.form.submit}
                  </button>
                </form>
              )}
            </div>
            
            {/* Image/Accent Side */}
            <div className="hidden md:block md:col-span-2 bg-indigo-600 relative overflow-hidden p-10 flex-col justify-end">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <div className="relative h-full flex flex-col justify-end text-white z-10 pb-8">
                <div className="w-16 h-1 bg-amber-400 mb-6 rounded-full"></div>
                <p className="text-2xl font-bold mb-4">"Инвестиции в знания платят лучшие дивиденды."</p>
                <p className="text-indigo-200 font-medium">— Бенджамин Франклин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
