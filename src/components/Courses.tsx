import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, Microscope, Globe, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const Courses = () => {
  const { t } = useLanguage();

  const icons = [Calculator, Microscope, Globe, BookOpen];
  const colors = [
    { bg: 'bg-indigo-50', text: 'text-indigo-600' },
    { bg: 'bg-emerald-50', text: 'text-emerald-600' },
    { bg: 'bg-amber-50', text: 'text-amber-500' },
    { bg: 'bg-rose-50', text: 'text-rose-500' }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-indigo-600 font-bold text-sm uppercase tracking-wider mb-4 shadow-sm">
            {t.courses.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t.courses.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.courses.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.courses.items.map((course, i) => {
            const Icon = icons[i % icons.length];
            const color = colors[i % colors.length];

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col sm:flex-row gap-6"
              >
                <div className={`shrink-0 w-16 h-16 rounded-2xl ${color.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className={color.text} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
