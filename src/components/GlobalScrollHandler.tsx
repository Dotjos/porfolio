'use client';

import { useEffect } from 'react';

export function GlobalScrollHandler() {
  useEffect(() => {
    let scrolling = false;
    let scrollDirection = 0;
    const scrollSpeed = 20; // px per frame
    let animationFrameId: number;

    const step = () => {
      if (scrolling && scrollDirection !== 0) {
        const scrollableColumn = document.querySelector('.scrollable');
        if (scrollableColumn) {
          scrollableColumn.scrollBy({ top: scrollDirection * scrollSpeed, behavior: 'auto' });
          animationFrameId = requestAnimationFrame(step);
        }
      }
    };

    const redirectScroll = (e: WheelEvent) => {
      // Only apply custom scroll down redirection on desktop screens
      if (window.innerWidth < 1024) return;

      const scrollableColumn = document.querySelector('.scrollable');
      if (!scrollableColumn) return;

      // If they hover over the actual scrollable area, just let standard scrolling happen!
      // This is crucial for avoiding any unintentional double-scrolling bugs.
      if (scrollableColumn.contains(e.target as Node)) return;

      e.preventDefault(); // Block global body scroll

      // TRACKPAD FIX:
      // Trackpads fire hundreds of 'wheel' events very quickly with tiny `deltaY` values.
      // If we use `behavior: "smooth"`, the browser tries to animate hundreds of scrolling requests,
      // creating an enormous queue that causes massive lag. Using `behavior: "auto"` instantly 
      // applies the tiny scroll deltas which looks perfectly smooth natively on trackpads.
      scrollableColumn.scrollBy({
        top: e.deltaY,
        behavior: 'auto',
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth < 1024) return;
      if (scrolling) return;

      const scrollableColumn = document.querySelector('.scrollable');
      if (!scrollableColumn) return;

      // Prevent interacting if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollDirection = 1;
          scrolling = true;
          animationFrameId = requestAnimationFrame(step);
          break;

        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollDirection = -1;
          scrolling = true;
          animationFrameId = requestAnimationFrame(step);
          break;

        case 'Home':
          e.preventDefault();
          scrollableColumn.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        case 'End':
          e.preventDefault();
          scrollableColumn.scrollTo({ top: scrollableColumn.scrollHeight, behavior: 'smooth' });
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', 'ArrowUp', 'PageUp'].includes(e.key)) {
        scrolling = false;
        scrollDirection = 0;
        cancelAnimationFrame(animationFrameId);
      }
    };

    window.addEventListener('wheel', redirectScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('wheel', redirectScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
}
