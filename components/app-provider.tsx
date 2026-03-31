'use client';

import { createContext, useContext, useState, useEffect, useRef } from 'react';

const COLORS = [
  'rgba(59, 130, 246, 0.15)', // Blue
  'rgba(245, 158, 11, 0.15)', // Amber
  'rgba(16, 185, 129, 0.15)', // Emerald
  'rgba(139, 92, 246, 0.15)', // Purple
  'rgba(244, 63, 94, 0.15)',  // Rose
];

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

type AppContextType = {
  cursorColor: string;
  randomizeCursorColor: () => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  language: Language;
  toggleLanguage: () => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  es: {
    'hero.btn1': '¡Conoce más historias!',
    'hero.btn2': 'Agenda una Cita',
    'elcentro.btn': 'Vamos al Centro',
    'elcentro.title1': 'Un espacio para',
    'elcentro.title2': 'encontrarnos',
    'elcentro.desc': 'Con más de diez años de actividad, somos un espacio para conectarte con tu identidad, la fuerza de tu cultura y la creación artística.',
    'educatividad.title': 'Educatividad',
    'educatividad.subtitle': 'Aprende con nosotros',
    'cta.title1': '¿Listo para crear algo',
    'cta.title2': 'increíble?',
    'cta.desc': 'Ponte en contacto con nosotros para cotizar tu próximo evento, proyecto cultural o experiencia inmersiva.',
    'cta.btn': 'Solicitar Cotización',
    'footer.rights': '© {year} Centro Cultural Chimango Lares. Todos los derechos reservados.',
    'agenda.title': 'Agenda y Noticias',
    'agenda.subtitle': 'Mantente al día',
    'agenda.btn': 'Ver Calendario Completo',
    'creacion.title': 'Creación',
    'creacion.subtitle': 'Nuestras obras',
    'servicios.title': 'Trabajemos juntos',
    'servicios.subtitle': 'Trabajemos juntos',
    'servicios.btn': 'Conoce más',
    'recursos.title': 'Conocimiento',
    'recursos.title2': 'es poder',
    'recursos.subtitle': 'Ponemos a tu alcance recursos que complementen tus iniciativas culturales. Explora nuestra biblioteca.',
  },
  en: {
    'hero.btn1': 'Discover more stories!',
    'hero.btn2': 'Schedule an Appointment',
    'elcentro.btn': 'Go to the Center',
    'elcentro.title1': 'A space to',
    'elcentro.title2': 'find ourselves',
    'elcentro.desc': 'With more than ten years of activity, we are a space to connect you with your identity, the strength of your culture and artistic creation.',
    'educatividad.title': 'Educativity',
    'educatividad.subtitle': 'Learn with us',
    'cta.title1': 'Ready to create something',
    'cta.title2': 'incredible?',
    'cta.desc': 'Get in touch with us to quote your next event, cultural project or immersive experience.',
    'cta.btn': 'Request Quote',
    'footer.rights': '© {year} Chimango Lares Cultural Center. All rights reserved.',
    'agenda.title': 'Agenda & News',
    'agenda.subtitle': 'Stay up to date',
    'agenda.btn': 'View Full Calendar',
    'creacion.title': 'Creation',
    'creacion.subtitle': 'Our works',
    'servicios.title': 'Artistic Services',
    'servicios.subtitle': 'Let\'s work together',
    'servicios.btn': 'Learn more',
    'recursos.title': 'Knowledge',
    'recursos.title2': 'is power',
    'recursos.subtitle': 'We provide resources that complement your cultural initiatives. Explore our library.',
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [colorIndex, setColorIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('light');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) {
      // eslint-disable-next-line
      setTheme(storedTheme);
      if (storedTheme === 'dark') document.documentElement.classList.add('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // eslint-disable-next-line
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const randomizeCursorColor = () => {
    setColorIndex((prev) => {
      let next = Math.floor(Math.random() * COLORS.length);
      while (next === prev && COLORS.length > 1) {
        next = Math.floor(Math.random() * COLORS.length);
      }
      return next;
    });
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the clicked element or its parents are interactive
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], [tabindex]');
      if (!isInteractive) {
        randomizeCursorColor();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        // Play might fail if user hasn't interacted with the document yet
        audioRef.current.play().catch((err) => {
          console.error('Error playing audio:', err);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <AppContext.Provider value={{ cursorColor: COLORS[colorIndex], randomizeCursorColor, isMusicPlaying, toggleMusic, language, toggleLanguage, theme, toggleTheme, t }}>
      {/* Hidden audio element with a public domain/royalty-free track */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
      />
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
