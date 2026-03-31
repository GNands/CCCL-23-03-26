'use client';

import { useState, useEffect } from 'react';
import { User, Search, Settings, Globe, ChevronLeft, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { useAppContext } from '@/components/app-provider';

export default function Sidebar() {
  const { isMusicPlaying, toggleMusic, language, toggleLanguage, theme, toggleTheme } = useAppContext();

  return (
    <div className="fixed right-0 top-1/3 -translate-y-1/2 z-50 group">
      <div className="bg-white/95 dark:bg-blue-900/95 backdrop-blur-md border border-amber-500/50 border-r-0 rounded-l-2xl p-2 flex flex-col gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-300 relative shadow-[-10px_0_30px_rgba(245,158,11,0.2)]">
        {/* The visible tab when closed */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-blue-900/95 backdrop-blur-md border border-amber-500/50 border-r-0 rounded-l-lg w-8 h-16 flex items-center justify-center cursor-pointer group-hover:opacity-0 transition-opacity duration-300 shadow-[-5px_0_15px_rgba(245,158,11,0.2)]">
          <ChevronLeft className="w-5 h-5 text-amber-600 dark:text-amber-400 animate-bounce-left" />
        </div>
        
        {/* Icons */}
        <button onClick={toggleTheme} className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-blue-100" title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}>
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
        <button onClick={toggleMusic} className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-blue-100" title={isMusicPlaying ? "Pausar música" : "Reproducir música"}>
          {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
        <button className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-blue-100" title="Usuario">
          <User className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-blue-100" title="Buscar">
          <Search className="w-5 h-5" />
        </button>
        <button onClick={toggleLanguage} className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-blue-100 relative" title="Idioma">
          <Globe className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-amber-600 dark:bg-amber-500 text-[10px] font-bold px-1 rounded-full text-white">{language.toUpperCase()}</span>
        </button>
        <button className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/20 transition-colors text-slate-600 dark:text-blue-100" title="Ajustes">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
