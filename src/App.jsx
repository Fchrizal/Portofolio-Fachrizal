import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ScrollReveal from './components/ScrollReveal';
import PixelCanvas from './components/PixelCanvas';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  const waLink = "https://wa.me/6285330614986?text=" + encodeURIComponent("Halo Fachrizal, saya melihat portofolio Anda dan ingin berdiskusi.");

  return (
    <div className="relative min-h-screen bg-[#fafbfc] dark:bg-[#070a12] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 overflow-x-hidden bg-pixel-grid">
      
      {/* Interactive Pixel Canvas in Background */}
      <PixelCanvas />

      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <Hero />

      {/* Main Flow: About -> Skills -> Projects */}
      <main className="relative z-10">
        {/* 1. About Me & Education / Internship */}
        <About />

        {/* 2. Skills & Tech Stack */}
        <Skills />

        {/* 3. Selected Works & Projects */}
        <Projects />
      </main>

      {/* Footer / Kontak */}
      <footer id="kontak" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-950 text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="font-pixel text-xs font-semibold text-blue-400 tracking-widest uppercase block mb-1.5">
                // 04. GET IN TOUCH
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 leading-tight">
                Tertarik Berkolaborasi atau Berdiskusi?
              </h2>
              <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed font-normal">
                Terbuka untuk kesempatan kerja sama di bidang implementasi IoT, instalasi jaringan komputer, pengembangan sistem web terintegrasi, maupun proyek digital lainnya.
              </p>
              <div className="mt-8">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[11px] text-emerald-400">■ SYS.ONLINE</span>
              <span>— Fachrizal Pambudi Luhur (D3 TI, Politeknik Negeri Madiun)</span>
            </div>
            <p className="font-pixel text-[11px] text-slate-500">&copy; 2026 FACHRIZAL // ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
