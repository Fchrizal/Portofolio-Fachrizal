import React from 'react';
import {
  SiEspressif,
  SiArduino,
  SiFirebase,
  SiMikrotik,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma
} from 'react-icons/si';
import { FaMicrochip, FaNetworkWired, FaEthernet } from 'react-icons/fa6';
import { Cpu, Network, Code2, Layout } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  // 1. IoT & Embedded Systems
  const iotSkills = [
    {
      name: 'ESP32 & Arduino',
      description: 'Mikrokontroler & IoT logic',
      icon: SiEspressif,
      color: 'text-red-500',
      bg: 'group-hover:bg-red-500/10'
    },
    {
      name: 'Multi-Sensor Suite',
      description: 'DHT11, DS18B20, Soil Moisture, MQ',
      icon: FaMicrochip,
      color: 'text-amber-500',
      bg: 'group-hover:bg-amber-500/10'
    },
    {
      name: 'Firebase Realtime DB',
      description: 'Sinkronisasi data cloud real-time',
      icon: SiFirebase,
      color: 'text-yellow-500',
      bg: 'group-hover:bg-yellow-500/10'
    },
    {
      name: 'Embedded C / C++',
      description: 'Pemrograman firmware sensor',
      icon: SiArduino,
      color: 'text-teal-500',
      bg: 'group-hover:bg-teal-500/10'
    },
  ];

  // 2. Networking & Fiber Optic
  const networkSkills = [
    {
      name: 'MikroTik RouterOS',
      description: 'Routing & konfigurasi protokol PPPoE',
      icon: SiMikrotik,
      color: 'text-slate-800 dark:text-slate-100',
      bg: 'group-hover:bg-slate-500/10'
    },
    {
      name: 'Fiber Optic Splicing',
      description: 'Fusion splicer 12 core & Joint Box Closure',
      icon: FaEthernet,
      color: 'text-cyan-500',
      bg: 'group-hover:bg-cyan-500/10'
    },
    {
      name: 'Computer Networking',
      description: 'TCP/IP, Subnetting, VLAN, LAN/WAN',
      icon: FaNetworkWired,
      color: 'text-blue-500',
      bg: 'group-hover:bg-blue-500/10'
    },
  ];

  // 3. Web & Software Development
  const webSkills = [
    {
      name: 'React.js',
      description: 'Komponen modular & modern web UI',
      icon: SiReact,
      color: 'text-cyan-400',
      bg: 'group-hover:bg-cyan-500/10'
    },
    {
      name: 'Tailwind CSS',
      description: 'Styling responsif, modern, dan clean',
      icon: SiTailwindcss,
      color: 'text-sky-400',
      bg: 'group-hover:bg-sky-500/10'
    },
    {
      name: 'JavaScript (ES6+)',
      description: 'Logika interaktif & manipulasi data',
      icon: SiJavascript,
      color: 'text-yellow-400',
      bg: 'group-hover:bg-yellow-500/10'
    },
    {
      name: 'PHP & MySQL',
      description: 'Backend logic & database relasional',
      icon: SiPhp,
      color: 'text-indigo-400',
      bg: 'group-hover:bg-indigo-500/10'
    },
    {
      name: 'Git & GitHub',
      description: 'Version control & kolaborasi repositori',
      icon: SiGit,
      color: 'text-rose-500',
      bg: 'group-hover:bg-rose-500/10'
    },
  ];

  // 4. UI/UX & Industrial Ops
  const designOpsSkills = [
    {
      name: 'Figma UI/UX Design',
      description: 'Prototyping aplikasi & wireframing',
      icon: SiFigma,
      color: 'text-pink-500',
      bg: 'group-hover:bg-pink-500/10'
    },
    {
      name: 'Smart Home Integration',
      description: 'Integrasi otomasi IoT gedung',
      icon: Layout,
      color: 'text-emerald-500',
      bg: 'group-hover:bg-emerald-500/10'
    },
    {
      name: 'Scanner Inventory System',
      description: 'Pengembangan sistem stok barcode/QR',
      icon: Code2,
      color: 'text-purple-500',
      bg: 'group-hover:bg-purple-500/10'
    },
  ];

  return (
    <section id="keahlian" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clean 'Skills' with Pixel Index */}
        <ScrollReveal>
          <div className="mb-10 sm:mb-14">
            <span className="font-pixel text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-widest uppercase block mb-1.5">
              // 02. TECHNICAL STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Skills
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 font-normal">
              Kombinasi keahlian perangkat keras (IoT), infrastruktur jaringan, serta pengembangan web dan desain antarmuka.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill Categories with Staggered Scroll Reveal */}
        <div className="space-y-12">
          
          {/* 1. IoT & Embedded Systems */}
          <ScrollReveal delay={100}>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>IoT &amp; Embedded Systems</span>
                  <span className="font-pixel text-[11px] text-red-500 font-normal">[HARDWARE]</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {iotSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 cursor-default"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-2xl transition-colors ${skill.bg}`}>
                        <IconComponent className={skill.color} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Jaringan & Fiber Optic */}
          <ScrollReveal delay={150}>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Network className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Networking &amp; Fiber Optic</span>
                  <span className="font-pixel text-[11px] text-cyan-500 font-normal">[INFRA]</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {networkSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 cursor-default"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-2xl transition-colors ${skill.bg}`}>
                        <IconComponent className={skill.color} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Web & Software Development */}
          <ScrollReveal delay={200}>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Software &amp; Web Development</span>
                  <span className="font-pixel text-[11px] text-blue-500 font-normal">[DEV]</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {webSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 cursor-default"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-2xl transition-colors ${skill.bg}`}>
                        <IconComponent className={skill.color} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 4. UI/UX & Industrial Integration */}
          <ScrollReveal delay={250}>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Layout className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>UI/UX Design &amp; Sistem Industri</span>
                  <span className="font-pixel text-[11px] text-purple-500 font-normal">[APPLIED]</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {designOpsSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 cursor-default"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center text-2xl transition-colors ${skill.bg}`}>
                        <IconComponent className={skill.color} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
