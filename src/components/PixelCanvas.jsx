import React, { useEffect, useRef } from 'react';

export default function PixelCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const cellSize = 28; // Ukuran kotak pixel grid
    const activePixels = new Map(); // key: "x,y", value: { x, y, alpha, color }

    const colors = [
      'rgba(59, 130, 246,', // Blue
      'rgba(99, 102, 241,', // Indigo
      'rgba(6, 182, 212,',  // Cyan
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const col = Math.floor(e.clientX / cellSize);
      const row = Math.floor(e.clientY / cellSize);
      const key = `${col},${row}`;
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      activePixels.set(key, {
        x: col * cellSize,
        y: row * cellSize,
        alpha: 0.35, // Soft & subtle
        color: randomColor,
      });

      // Tambahkan sedikit tetangga secara acak untuk efek pixel cluster
      if (Math.random() > 0.6) {
        const neighborCol = col + (Math.random() > 0.5 ? 1 : -1);
        const neighborRow = row + (Math.random() > 0.5 ? 1 : -1);
        const nKey = `${neighborCol},${neighborRow}`;
        activePixels.set(nKey, {
          x: neighborCol * cellSize,
          y: neighborRow * cellSize,
          alpha: 0.2,
          color: randomColor,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Spawner acak ambient pixel halus
    let lastAmbientSpawn = 0;

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Spawn pixel acak sesekali di background (ambient)
      if (time - lastAmbientSpawn > 800) {
        lastAmbientSpawn = time;
        const col = Math.floor(Math.random() * (width / cellSize));
        const row = Math.floor(Math.random() * (height / cellSize));
        const key = `${col},${row}`;
        if (!activePixels.has(key)) {
          activePixels.set(key, {
            x: col * cellSize,
            y: row * cellSize,
            alpha: 0.22,
            color: colors[0],
          });
        }
      }

      // Render dan kurangi alpha setiap pixel aktif
      activePixels.forEach((pixel, key) => {
        ctx.fillStyle = `${pixel.color} ${pixel.alpha})`;
        // Gambar kotak pixel dengan sedikit margin 2px
        ctx.fillRect(pixel.x + 2, pixel.y + 2, cellSize - 4, cellSize - 4);

        pixel.alpha -= 0.007; // Fade out perlahan
        if (pixel.alpha <= 0) {
          activePixels.delete(key);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity"
      style={{
        maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
      }}
    />
  );
}
