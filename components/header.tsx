'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import Link from 'next/link';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > 250) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <>
      {/* Invisible trigger area at the top to reveal header */}
      <div 
        className="fixed top-0 left-0 right-0 h-8 z-[60]" 
        onMouseEnter={() => setIsHovered(true)}
      />
      
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 lg:px-10 transition-colors duration-500 ${
          isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-amber-500/30 shadow-lg' : 'bg-transparent border-transparent'
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHidden && !isHovered ? '-100%' : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="/" className="group flex items-center text-xl font-bold tracking-widest uppercase text-slate-900 dark:text-white cursor-pointer whitespace-nowrap transition-colors duration-500">
          <span>C</span>
          <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-700 ease-in-out">entro&nbsp;</span>
          <span>C</span>
          <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-700 ease-in-out">ultural&nbsp;</span>
          <span>C</span>
          <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-700 ease-in-out">himango&nbsp;</span>
          <span>L</span>
          <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-700 ease-in-out">ares</span>
        </Link>
        <nav className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-medium tracking-wider uppercase text-slate-600 dark:text-slate-200 transition-colors duration-500">
          <Link href="/el-centro" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">El Centro</Link>
          <Link href="/creacion" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Creación</Link>
          <Link href="/agenda" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Agenda</Link>
          <Link href="/educatividad" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Educatividad</Link>
          <Link href="/servicios" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Trabajemos juntos</Link>
          <Link href="/recursos" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Recursos</Link>
          <Link href="/contacto" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Contacto</Link>
        </nav>
      </motion.header>
    </>
  );
}
