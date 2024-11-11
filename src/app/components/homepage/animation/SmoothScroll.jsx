'use client'

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Adjust scroll speed (default is 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Clean up on unmount
  }, []);

  return null; // This component doesn’t render anything
}

export default SmoothScroll;
