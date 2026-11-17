import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.12,
  direction = 'up', // 'up', 'down', 'none'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    if (direction === 'up') return 'translate3d(0, 28px, 0) scale(0.97)';
    if (direction === 'down') return 'translate3d(0, -28px, 0) scale(0.97)';
    return 'translate3d(0, 0, 0) scale(0.97)';
  };

  return (
    <div
      ref={domRef}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(8px)',
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      className={`will-change-[transform,opacity,filter] ${className}`}
    >
      {children}
    </div>
  );
}
