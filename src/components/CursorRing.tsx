'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorRing() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to mimic the physics from the vanilla version
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 50 is half of the size-100 (100px) tailwind class to center it
      x.set(e.clientX - 50);
      y.set(e.clientY - 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 w-[100px] h-[100px] hidden lg:block bg-[radial-gradient(circle,transparent_30%,var(--color-slate-100))] dark:bg-[radial-gradient(circle,var(--color-slate-800),transparent)] opacity-30 rounded-full pointer-events-none z-40 transform-gpu"
    />
  );
}
