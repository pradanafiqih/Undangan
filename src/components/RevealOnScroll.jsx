import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function RevealOnScroll({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
