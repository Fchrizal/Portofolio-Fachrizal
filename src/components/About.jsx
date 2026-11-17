import React from 'react';
import { GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="tentang" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with subtle Pixel Index */}
        <ScrollReveal>
          <div className="mb-10 sm:mb-14">
            <span className="font-pixel text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase block mb-1.5">
              // 01. PROFILE & JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              About Me
            </h2>
          </div>
        </ScrollReveal>

        {/* 2 Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Full Narrative (Col 7) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <div className="space-y-5 text-base sm:text-[16.5px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-justify">
                <p>
                  Saya mahasiswa <strong className="font-bold text-slate-900 dark:text-white">D3 Teknologi Informasi Politeknik Negeri Madiun</strong> yang tertarik pada pertemuan antara <strong className="font-bold text-slate-900 dark:text-white">perangkat keras (hardware)</strong>, <strong className="font-bold text-slate-900 dark:text-white">jaringan komputer</strong>, dan <strong className="font-bold text-slate-900 dark:text-white">sistem digital</strong>. Perjalanan saya dimulai dari dunia IoT dan sistem tertanam. Dengan mikrokontroler <strong className="font-semibold text-blue-600 dark:text-blue-400">ESP32</strong> serta sensor seperti DHT11, DS18B20, dan soil moisture, saya membangun sistem monitoring suhu ruangan, kadar gas, dan kelembapan tanah yang terkirim ke <strong className="font-semibold text-slate-900 dark:text-white">Firebase Realtime Database</strong>. Dari situ saya belajar bahwa eksperimen hardware menuntut ketelitian tinggi, dan data baru bermakna ketika disajikan ke pengguna secara rapi.
                </p>
                
                <p>
                  Di sisi jaringan, saya menguasai dasar-dasar networking dan konfigurasi router <strong className="font-bold text-slate-900 dark:text-white">MikroTik</strong> dengan protokol PPPoE. Saya juga berpengalaman dalam instalasi fisik jaringan <strong className="font-bold text-slate-900 dark:text-white">fiber optic</strong>, mulai dari menyambung kabel 12 core menggunakan <em>fusion splicer</em> hingga penataan sambungan di dalam <em>joint box closure</em>. Ditopang pemahaman <strong className="font-semibold text-slate-900 dark:text-white">UI/UX design</strong> (seperti prototype aplikasi manajemen waktu), saya terbiasa memikirkan sistem secara menyeluruh dari kacamata pengguna akhir.
                </p>

                <p>
                  Pengalaman berharga saya peroleh saat magang di <strong className="font-bold text-slate-900 dark:text-white">Smart Building Inovasi</strong> (Januari – Juni 2026). Di sana saya mengembangkan <strong className="font-semibold text-slate-900 dark:text-white">sistem inventaris berbasis scanner</strong> untuk pencatatan barang dan mengerjakan integrasi smarthome terpusat. Sekaligus, saya dipercaya menjadi <strong className="font-semibold text-slate-900 dark:text-white">admin toko resmi di Tokopedia</strong>. Menangani produk dan operasional toko secara langsung memberi saya wawasan nyata tentang bagaimana teknologi yang dirancang akhirnya dipakai dan bernilai di dunia bisnis nyata.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Riwayat Pendidikan & Pengalaman Magang (Col 5) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* 1. Riwayat Pendidikan */}
            <ScrollReveal delay={150}>
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3.5">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Riwayat Pendidikan</span>
                </div>

                <div className="space-y-3">
                  {/* PNM */}
                  <div className="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                        Politeknik Negeri Madiun (PNM)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        D3 Teknologi Informasi
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        2023 — Sekarang
                      </span>
                      <span className="font-pixel text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-700/40">
                        ■ AKTIF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Pengalaman Kerja / Magang */}
            <ScrollReveal delay={200}>
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3.5">
                  <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Pengalaman Industri / Magang</span>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        Smart Building Inovasi
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                        Technical IoT Intern &amp; E-Commerce Store Admin
                      </p>
                    </div>
                    <span className="font-pixel text-[10px] font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 shrink-0">
                      Jan – Jun 2026
                    </span>
                  </div>

                  <ul className="mt-3.5 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Mengembangkan sistem inventaris berbasis barcode/scanner untuk pelacakan barang gudang.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Integrasi perangkat smarthome ke sistem otomasi terpusat.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Admin etalase toko resmi di Tokopedia &amp; penanganan transaksi nyata.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
