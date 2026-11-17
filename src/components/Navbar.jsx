import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = "https://wa.me/6285330614986?text=" + encodeURIComponent("Halo Fachrizal, saya melihat portofolio Anda dan ingin berdiskusi.");

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur-md bg-white/80 dark:bg-[#070a12]/80 border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand with subtle Pixel touch */}
        <a href="#beranda" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-pixel font-bold text-base shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {/* Subtle pixel corners */}
            <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-blue-400"></span>
            <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-blue-400"></span>
            FP
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="block font-bold text-slate-900 dark:text-white tracking-tight leading-none text-base">
                Fachrizal Pambudi
              </span>
              <span className="font-pixel text-[10px] text-blue-600 dark:text-blue-400 font-semibold px-1 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60">
                v2.0
              </span>
            </div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5 block">
              D3 Teknologi Informasi • PNM
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#beranda" className="px-4 py-1.5 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Beranda</a>
          <a href="#tentang" className="px-4 py-1.5 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tentang</a>
          <a href="#keahlian" className="px-4 py-1.5 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Keahlian</a>
          <a href="#karya" className="px-4 py-1.5 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Karya</a>
          <a href="#kontak" className="px-4 py-1.5 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kontak</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Ganti Tema"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Direct CTA with pixel bracket */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Kontak</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu"
            className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070a12]/95 backdrop-blur-md">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Tentang
            </a>
            <a
              href="#keahlian"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Keahlian
            </a>
            <a
              href="#karya"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Karya
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Kontak
            </a>
            <div className="pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Diskusi WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
