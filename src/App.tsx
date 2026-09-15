import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'cv', 'languages', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollMiddle = scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollMiddle) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
