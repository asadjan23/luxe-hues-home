import { useEffect, useRef } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollAnimation = (
  animationType: AnimationType = 'fade-up',
  options: ScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add animation class based on type
          switch (animationType) {
            case 'fade-up':
              element.classList.add('scroll-animate-fade-up');
              break;
            case 'fade-down':
              element.classList.add('scroll-animate-fade-down');
              break;
            case 'fade-left':
              element.classList.add('scroll-animate-fade-left');
              break;
            case 'fade-right':
              element.classList.add('scroll-animate-fade-right');
              break;
            case 'scale':
              element.classList.add('scroll-animate-scale');
              break;
            case 'rotate':
              element.classList.add('scroll-animate-rotate');
              break;
          }

          // Optionally stop observing after animation
          if (once) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
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
  }, [animationType, threshold, rootMargin, once]);

  return ref;
};
