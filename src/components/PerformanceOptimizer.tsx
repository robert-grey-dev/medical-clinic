import { useEffect, useCallback } from 'react';

/**
 * Performance optimization component for Core Web Vitals
 * Implements best practices for LCP, CLS, and INP improvements
 */
const PerformanceOptimizer = () => {
  // Optimize for faster interactions (INP)
  const optimizeInteractions = useCallback(() => {
    // Use requestIdleCallback for non-critical tasks
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Preload critical resources during idle time
        const criticalImages = document.querySelectorAll('img[loading="eager"]');
        criticalImages.forEach(img => {
          if (img instanceof HTMLImageElement && !img.complete) {
            img.decode().catch(() => {
              // Silently handle decode errors
            });
          }
        });
      });
    }

    // Optimize button clicks with debouncing
    const buttons = document.querySelectorAll('button, [role="button"]');
    buttons.forEach(button => {
      if (button instanceof HTMLElement) {
        button.style.touchAction = 'manipulation';
      }
    });
  }, []);

  // Reduce Cumulative Layout Shift (CLS)
  const reduceCLS = useCallback(() => {
    // Ensure images have proper dimensions
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        // Set aspect ratio to prevent layout shifts
        const aspectRatio = img.naturalWidth / img.naturalHeight || 1;
        img.style.aspectRatio = aspectRatio.toString();
      }
    });

    // Reserve space for dynamic content
    const dynamicElements = document.querySelectorAll('[data-dynamic]');
    dynamicElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.minHeight = element.style.minHeight || '2rem';
      }
    });
  }, []);

  // Optimize for Largest Contentful Paint (LCP)
  const optimizeLCP = useCallback(() => {
    // Preload hero image if not already loaded
    const heroImage = document.querySelector('img[fetchpriority="high"]');
    if (heroImage instanceof HTMLImageElement && !heroImage.complete) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = heroImage.src;
      document.head.appendChild(link);
    }

    // Optimize font loading
    if (!document.querySelector('link[rel="preload"][as="font"]')) {
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      fontPreload.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
      document.head.appendChild(fontPreload);
    }
  }, []);

  // Resource hints for better performance
  const addResourceHints = useCallback(() => {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    hints.forEach(hint => {
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
        document.head.appendChild(link);
      }
    });
  }, []);

  useEffect(() => {
    // Run optimizations on mount
    optimizeLCP();
    addResourceHints();
    
    // Run CLS and interaction optimizations after images load
    const handleLoad = () => {
      reduceCLS();
      optimizeInteractions();
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [optimizeLCP, addResourceHints, reduceCLS, optimizeInteractions]);

  // Monitor and report Core Web Vitals (optional)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('web-vitals').then((webVitals) => {
        webVitals.onCLS((metric) => console.log('CLS:', metric));
        webVitals.onINP((metric) => console.log('INP:', metric));
        webVitals.onFCP((metric) => console.log('FCP:', metric));
        webVitals.onLCP((metric) => console.log('LCP:', metric));
        webVitals.onTTFB((metric) => console.log('TTFB:', metric));
      }).catch(() => {
        // Ignore import errors
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;