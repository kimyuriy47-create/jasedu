import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const Stats = () => {
  const { t } = useLanguage();

  const statsData = [
    {
      id: 1,
      icon: Target,
      title: t.stats.scoreTitle,
      desc: t.stats.scoreDesc,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      id: 2,
      icon: Users,
      title: t.stats.studentsTitle,
      desc: t.stats.studentsDesc,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      id: 3,
      icon: Award,
      title: t.stats.grantsTitle,
      desc: t.stats.grantsDesc,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {statsData.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mb-6`}>
                <stat.icon size={32} className={stat.color} />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-3">{stat.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
