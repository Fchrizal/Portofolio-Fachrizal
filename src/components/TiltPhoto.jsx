import React, { useState, useRef } from 'react';

export default function TiltPhoto({ src, alt }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
  });
  const [glare, setGlare] = useState({
    opacity: 0,
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 12;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: 'transform 0.1s ease-out',
    });

    setGlare({
      opacity: 0.35,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
    });
    setGlare({
      opacity: 0,
      x: 50,
      y: 50,
    });
  };

  return (
    <div className="relative group select-none">
      {/* Subtle Ambient Backlight */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 to-indigo-600/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500"></div>

      {/* Main 3D Tilt Card with Pixel Corner Accents */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl cursor-pointer will-change-transform"
      >
        {/* Subtle Pixel Frame Corners */}
        <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-blue-500/80 z-20 pointer-events-none"></div>
        <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-blue-500/80 z-20 pointer-events-none"></div>
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-blue-500/80 z-20 pointer-events-none"></div>
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-blue-500/80 z-20 pointer-events-none"></div>

        {/* Profile Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top transition duration-500"
          loading="eager"
        />

        {/* Dynamic Light Glare Effect on Tilt */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.8), transparent 60%)`,
          }}
        />

        {/* Minimal Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white">
          <p className="text-base font-bold tracking-tight">Fachrizal Pambudi Luhur</p>
          <p className="text-xs text-slate-300 font-medium">D3 Teknologi Informasi • PNM</p>
        </div>
      </div>
    </div>
  );
}
