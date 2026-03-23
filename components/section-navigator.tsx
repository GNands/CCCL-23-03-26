'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Home, Info, Calendar, Briefcase, GraduationCap, Palette, Library, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  { id: 'hero', name: 'Inicio', href: '/#hero', icon: <Home className="w-4 h-4" /> },
  { id: 'el-centro', name: 'El Centro', href: '/#el-centro', icon: <Info className="w-4 h-4" /> },
  { id: 'creacion', name: 'Creación', href: '/#creacion', icon: <Palette className="w-4 h-4" /> },
  { id: 'agenda', name: 'Agenda', href: '/#agenda', icon: <Calendar className="w-4 h-4" /> },
  { id: 'educatividad', name: 'Educatividad', href: '/#educatividad', icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'servicios', name: 'Trabajemos juntos', href: '/#servicios', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'recursos', name: 'Recursos', href: '/#recursos', icon: <Library className="w-4 h-4" /> },
  { id: 'contacto', name: 'Contacto', href: '/#contacto', icon: <Mail className="w-4 h-4" /> },
];

export default function SectionNavigator() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('Inicio');
  const [isHovered, setIsHovered] = useState(false);

  // Calculate active section for subpages directly
  const currentSubpage = sections.find(s => s.id !== 'hero' && pathname.includes(s.id));
  const displaySection = pathname === '/' ? activeSection : (currentSubpage?.name || 'Inicio');

  useEffect(() => {
    // Only use IntersectionObserver on home page
    if (pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = sections.find(s => s.id === entry.target.id);
          if (section) setActiveSection(section.name);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div 
      className="fixed top-32 left-6 z-[100] pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-xl overflow-hidden transition-opacity duration-500"
        initial={false}
        animate={{ 
          width: isHovered ? 240 : 'auto',
          height: isHovered ? 'auto' : 48,
          opacity: isHovered ? 1 : 0.15
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Current Section Display */}
        <div className="flex items-center h-12 px-4 gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
            {sections.find(s => s.name === displaySection)?.icon || <Home className="w-4 h-4" />}
          </div>
          <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap uppercase tracking-wider text-sm">
            {displaySection}
          </span>
          <motion.div
            animate={{ rotate: isHovered ? 90 : 0 }}
            className="ml-auto text-slate-400"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Expanded Navigation List */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="px-2 pb-4 space-y-1"
            >
              <div className="h-px bg-slate-200 dark:bg-slate-800 mx-2 mb-2" />
              {sections.map((section) => (
                <Link 
                  key={section.id} 
                  href={section.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                    displaySection === section.name 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400'
                  }`}
                >
                  <div className={displaySection === section.name ? 'text-white' : 'text-amber-500/60'}>
                    {section.icon}
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {section.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
