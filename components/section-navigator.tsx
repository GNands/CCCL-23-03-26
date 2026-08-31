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
  { id: 'trabajemos-juntos', name: 'Trabajemos juntos', href: '/#trabajemos-juntos', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'recursos', name: 'Recursos', href: '/#recursos', icon: <Library className="w-4 h-4" /> },
  { id: 'contacto', name: 'Contacto', href: '/#contacto', icon: <Mail className="w-4 h-4" /> },
];

export default function SectionNavigator() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('Inicio');
  const [isHovered, setIsHovered] = useState(false);
  const [isForcedClosed, setIsForcedClosed] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    try {
      const visited = localStorage.getItem('navigator_visited');
      if (visited) {
        requestAnimationFrame(() => {
          setHasInteracted(true);
        });
      }
    } catch {
      // ignore local storage errors
    }
  }, []);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      try {
        localStorage.setItem('navigator_visited', 'true');
      } catch {
        // ignore
      }
    }
  };

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

  const isOpen = isHovered && !isForcedClosed;

  return (
    <div 
      className="fixed top-32 left-6 z-[100] pointer-events-none"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsForcedClosed(false);
        handleInteraction();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsForcedClosed(false);
      }}
      onClick={handleInteraction}
    >
      <motion.div 
        layout
        className={`pointer-events-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-amber-500/40 rounded-2xl shadow-xl overflow-hidden ${
          !isOpen ? 'animate-pulse-subtle hover:animate-none' : ''
        }`}
        initial={false}
        animate={{ 
          width: isOpen ? 240 : 'auto',
          opacity: isOpen ? 1 : 0.85
        }}
        transition={{
          type: 'spring',
          stiffness: 420,
          damping: 30,
          mass: 0.8
        }}
      >
        {/* Current Section Display */}
        <div 
          className="flex items-center h-12 px-4 gap-3 cursor-pointer select-none"
          onClick={() => setIsForcedClosed(true)}
        >
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
            {sections.find(s => s.name === displaySection)?.icon || <Home className="w-4 h-4" />}
          </div>
          <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap uppercase tracking-wider text-sm">
            {displaySection}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="ml-auto text-slate-400 shrink-0"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Expanded Navigation List */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="px-2 pb-3 space-y-1 overflow-hidden"
            >
              <div className="h-px bg-slate-200 dark:bg-slate-800 mx-2 mb-2" />
              {sections.map((section) => (
                <Link 
                  key={section.id} 
                  href={section.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-150 ${
                    displaySection === section.name 
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20 font-medium' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400'
                  }`}
                >
                  <div className={`shrink-0 ${displaySection === section.name ? 'text-white' : 'text-amber-500/70'}`}>
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
