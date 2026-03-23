'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { useAppContext } from '@/components/app-provider';

export default function CursorLights() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { cursorColor } = useAppContext();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isVisible]);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const x1 = useSpring(0, springConfig);
  const y1 = useSpring(0, springConfig);
  
  const x2 = useSpring(0, { damping: 40, stiffness: 60, mass: 0.8 });
  const y2 = useSpring(0, { damping: 40, stiffness: 60, mass: 0.8 });

  useEffect(() => {
    x1.set(mousePosition.x - 200);
    y1.set(mousePosition.y - 200);
    
    x2.set(mousePosition.x - 300);
    y2.set(mousePosition.y - 300);
  }, [mousePosition, x1, y1, x2, y2]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ x: x1, y: y1, backgroundColor: cursorColor }}
        className="absolute h-[400px] w-[400px] rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-30 dark:opacity-100 transition-colors duration-1000"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute h-[600px] w-[600px] rounded-full bg-red-600/20 dark:bg-red-600/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-30 dark:opacity-100 transition-colors duration-500"
      />
      <motion.div
        style={{ x: x1, y: y1, backgroundColor: cursorColor }}
        className="absolute h-[200px] w-[200px] rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-70 transition-colors duration-1000"
      />
    </div>
  );
}
