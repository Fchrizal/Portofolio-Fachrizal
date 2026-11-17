import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, GraduationCap, MapPin } from 'lucide-react';
import TiltPhoto from './TiltPhoto';

export default function Hero() {
  const waLink = "https://wa.me/6285330614986?text=" + encodeURIComponent("Halo Fachrizal, saya melihat portofolio Anda dan ingin berdiskusi.");

  // Typing animation for sub-header based on real narrative
  const subHeaderWords = [
    "an IoT & Hardware Developer",
    "a Network & Fiber Optic Tech",
    "a Web & UI/UX Developer",
    "a D3 IT Student at PNM"
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = subHeaderWords[wordIndex];
    let typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 2200;
    } else if (isDeleting && currentText === '') {
      typingSpeed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % subHeaderWords.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section id="beranda" className="relative pt-8 sm:pt-14 pb-16 md:pb-20 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-fade-in" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Info & Copywriting (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Status Pill Badge with Pixel Square Accent */}
            <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/80 dark:border-blue-900/50 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="font-pixel text-[10px] text-emerald-500 animate-pulse">■</span>
              <span className="font-pixel text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mr-1">ACTIVE</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-xs sm:text-sm font-medium">Mahasiswa D3 Teknologi Informasi • PNM</span>
            </div>

            {/* 2. Main Headline - Static, Bold & Clean */}
            <div className="animate-fade-in-up delay-200 w-full mb-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hello, I'm <span className="text-blue-600 dark:text-blue-400">Fachrizal Pambudi Luhur</span>
              </h1>
            </div>

            {/* 3. Sub-headline with Typing Animation */}
            <div className="animate-fade-in-up delay-300 w-full mb-5">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 min-h-[2.4rem] flex items-center flex-wrap">
                <span className="text-slate-500 dark:text-slate-400 font-medium mr-2">I am</span>
                <span className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-500/30 pb-0.5">
                  {currentText}
                </span>
                <span className="inline-block w-[3px] h-[0.9em] bg-blue-600 dark:bg-blue-400 ml-1.5 animate-blink align-middle rounded-full"></span>
              </div>
            </div>

            {/* 4. Value Proposition / Short Narrative */}
            <p className="animate-fade-in-up delay-300 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-6 font-normal">
              Mahasiswa D3 Teknologi Informasi Politeknik Negeri Madiun yang berfokus pada titik temu antara <strong className="text-slate-900 dark:text-white font-semibold">perangkat keras (IoT)</strong>, <strong className="text-slate-900 dark:text-white font-semibold">jaringan komputer</strong>, dan <strong className="text-slate-900 dark:text-white font-semibold">sistem web digital</strong> yang berorientasi pada kepraktisan pengguna serta operasional bisnis nyata.
            </p>

            {/* 5. Clean Info Tags */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>D3 TI - Politeknik Negeri Madiun</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Madiun, Jawa Timur</span>
              </span>
            </div>

            {/* 6. Action Buttons */}
            <div className="animate-fade-in-up delay-500 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ajak Diskusi</span>
              </a>

              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto text-sm"
              >
                <span>Tentang Saya</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right: Tilt Photo Frame (Col 5) */}
          <div className="animate-fade-in-up delay-300 lg:col-span-5 flex justify-center lg:justify-end">
            <TiltPhoto
              src="/assets/profile.png"
              alt="Foto Profil Fachrizal Pambudi Luhur"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
