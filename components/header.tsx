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
        <Link href="/" className="group flex items-center gap-3 cursor-pointer select-none">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all">
            {/* Cultural Andean & Violin/Scissors Emblem */}
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
              <path d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <circle cx="20" cy="20" r="4" fill="currentColor"/>
              <path d="M12 12L28 28M28 12L12 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base lg:text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-amber-500 transition-colors">
              Chimango <span className="text-amber-600 dark:text-amber-500">Lares</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Centro Cultural
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-medium tracking-wider uppercase text-slate-600 dark:text-slate-200 transition-colors duration-500">
          <Link href="/el-centro" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">El Centro</Link>
          <Link href="/creacion" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Creación</Link>
          <Link href="/agenda" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Agenda</Link>
          <Link href="/educatividad" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Educatividad</Link>
          <Link href="/trabajemos-juntos" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Trabajemos juntos</Link>
          <Link href="/recursos" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Recursos</Link>
          <Link href="/contacto" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Contacto</Link>
        </nav>
      </motion.header>
    </>
  );
}
