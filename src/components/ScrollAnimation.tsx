import React, { useRef, useEffect, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  type?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'rotate-in' | 'stagger';
  delay?: number;
  threshold?: number;
  duration?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  type = 'fade-in',
  delay = 0,
  threshold = 0.1,
  duration = 0.8,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const typeClass = {
    'fade-in': 'scroll-fade-in',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right',
    'scale-in': 'scroll-scale-in',
    'rotate-in': 'scroll-rotate-in',
    'stagger': 'scroll-stagger',
  }[type];

  return (
    <div
      ref={ref}
      className={`${typeClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};
