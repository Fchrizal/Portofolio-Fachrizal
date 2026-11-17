import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, Cpu, Network, ScanBarcode, Home, Clock, Store } from 'lucide-react';

export default function Projects() {
  const waLink = "https://wa.me/6285330614986?text=" + encodeURIComponent("Halo Fachrizal, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek Anda.");

  const projectList = [
    {
      id: 'CASE_01',
      title: 'Sistem Inventaris Berbasis Scanner',
      organization: 'Smart Building Inovasi • Magang 2026',
      icon: ScanBarcode,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50 dark:bg-purple-950/50',
      description: 'Pengembangan sistem inventaris untuk pencatatan dan pengelolaan stok barang gudang berbasis pemindaian barcode/QR scanner guna meningkatkan akurasi dan kecepatan pelacakan barang.',
      techTags: ['Scanner Barcode/QR', 'Database System', 'Inventory Logic', 'Web App'],
    },
    {
      id: 'CASE_02',
      title: 'IoT Multi-Sensor Monitoring Real-Time',
      organization: 'Proyek IoT & Embedded System',
      icon: Cpu,
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50 dark:bg-red-950/50',
      description: 'Sistem monitoring suhu ruangan, kadar gas, dan kelembapan tanah berbasis mikrokontroler ESP32 dengan sensor DHT11, DS18B20, dan soil moisture yang tersinkronisasi live ke Firebase Realtime Database.',
      techTags: ['ESP32', 'DHT11', 'DS18B20', 'Soil Moisture', 'Firebase DB'],
    },
    {
      id: 'CASE_03',
      title: 'Integrasi Perangkat Smart Home Otomasi',
      organization: 'Smart Building Inovasi • 2026',
      icon: Home,
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/50',
      description: 'Pengerjaan integrasi perangkat cerdas otomasi gedung dan hunian yang menghubungkan berbagai modul smarthome dengan sistem kontrol terpusat agar dapat dimonitor secara terpadu.',
      techTags: ['IoT Smarthome', 'Device Pairing', 'Network Protocol', 'Centralized System'],
    },
    {
      id: 'CASE_04',
      title: 'Instalasi & Splicing Fiber Optic 12 Core',
      organization: 'Infrastruktur Jaringan & Telekomunikasi',
      icon: Network,
      iconColor: 'text-cyan-500',
      iconBg: 'bg-cyan-50 dark:bg-cyan-950/50',
      description: 'Penyambungan kabel fiber optik 12 core menggunakan fusion splicer dengan standar redaman presisi, penataan jalur di Joint Box Closure (JBC), serta konfigurasi router MikroTik via protokol PPPoE.',
      techTags: ['Fiber Optic 12 Core', 'Fusion Splicer', 'Joint Box Closure', 'MikroTik PPPoE'],
    },
    {
      id: 'CASE_05',
      title: 'Prototype UI/UX Aplikasi Manajemen Waktu',
      organization: 'Desain Antarmuka & Pengalaman Pengguna',
      icon: Clock,
      iconColor: 'text-pink-500',
      iconBg: 'bg-pink-50 dark:bg-pink-950/50',
      description: 'Perancangan antarmuka pengguna interaktif untuk aplikasi time management dengan riset kebutuhan alur pengguna, tata letak bersih, dan hierarki visual yang memudahkan produktivitas harian.',
      techTags: ['Figma UI/UX', 'Wireframing', 'User Flow', 'Interactive Prototype'],
    },
    {
      id: 'CASE_06',
      title: 'Operasional Toko Resmi E-Commerce Tokopedia',
      organization: 'Smart Building Inovasi Official Store',
      icon: Store,
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-50 dark:bg-amber-950/50',
      description: 'Pengelolaan etalase digital toko resmi perusahaan di Tokopedia, manajemen katalog produk teknologi, penanganan transaksi konsumen, dan pengamatan siklus adopsi produk di pasar nyata.',
      techTags: ['Tokopedia Official Store', 'E-Commerce Ops', 'Product Catalog', 'Customer Handling'],
    },
  ];

  return (
    <section id="karya" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with subtle Pixel Index */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-pixel text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase block mb-1.5">
              // 03. SELECTED WORKS & PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Karya &amp; Proyek Pilihan
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 font-normal">
              Portofolio proyek nyata yang mencakup rekayasa perangkat keras IoT, infrastruktur jaringan, perancangan sistem, hingga operasional bisnis digital.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Grid Project Cards with Staggered Cascade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => {
            const IconComponent = project.icon;
            const staggerDelay = (index % 3) * 100 + 100;
            return (
              <ScrollReveal key={project.id} delay={staggerDelay}>
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                  
                  <div>
                    {/* Header: Tag ID & Organization */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-pixel text-[11px] text-blue-600 dark:text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/60">
                        [{project.id}]
                      </span>
                      <div className={`w-8 h-8 rounded-xl ${project.iconBg} ${project.iconColor} flex items-center justify-center`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mb-1.5">
                      {project.organization}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer: Tech tags & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-pixel text-[10px] text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-400 text-[11px]">Proyek Tervalidasi</span>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 hover:underline group-hover:translate-x-0.5 transition-transform"
                      >
                        Diskusi detail <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
