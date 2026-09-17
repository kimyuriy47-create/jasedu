/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Courses } from './components/Courses';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-200 selection:text-indigo-900">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Courses />
          <ConsultationForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
