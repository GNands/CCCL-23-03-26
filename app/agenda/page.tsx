'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Info,
  ChevronDown,
  ChevronUp,
  Search,
  Grid,
  List,
  Layout
} from 'lucide-react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  addWeeks, 
  subWeeks,
  isToday,
  getDay
} from 'date-fns';
import { es } from 'date-fns/locale';
import CursorLights from '@/components/cursor-lights';
import DynamicText from '@/components/dynamic-text';
import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';

type CalendarVersion = 'interactive' | 'grid' | 'list';

// Mock events for the calendar
const mockEvents: Record<string, { id: string, title: string, time: string, location: string, type: 'taller' | 'espectaculo' | 'exposicion', description: string, image?: string }[]> = {
  '2026-03-15': [{ id: 'e1', title: 'Taller de Retablo', time: '10:00', location: 'Aula 3', type: 'taller', description: 'Aprende las técnicas tradicionales del retablo ayacuchano con maestros artesanos.', image: 'https://picsum.photos/seed/art1/400/300' }],
  '2026-03-20': [{ id: 'e2', title: 'Voces de la Tierra', time: '19:30', location: 'Teatro Principal', type: 'espectaculo', description: 'Un concierto que reúne las voces más representativas del canto andino contemporáneo.', image: 'https://picsum.photos/seed/music1/400/300' }],
  '2026-03-23': [
    { id: 'e0', title: 'Ensayo Abierto: Danza de Tijeras', time: '16:00', location: 'Patio de Honor', type: 'espectaculo', description: 'Observa el proceso de preparación de nuestros danzantes en un ambiente íntimo.', image: 'https://picsum.photos/seed/dance1/400/300' },
    { id: 'e6', title: 'Desafío Lector Bibliogam 2026', time: '10:00', location: 'Biblioteca', type: 'taller', description: 'Actividad de fomento a la lectura para todas las edades.' }
  ],
  '2026-03-24': [
    { id: 'e7', title: 'Hecho en China', time: '10:00', location: 'Galería 2', type: 'exposicion', description: 'Muestra de arte contemporáneo asiático.' },
    { id: 'e8', title: 'Ventanal Alameda', time: '19:00', location: 'Sala de Cine', type: 'espectaculo', description: 'Proyección y conversatorio sobre urbanismo.' }
  ],
  '2026-03-25': [
    { id: 'e3', title: 'Danza de Tijeras', time: '18:00', location: 'Plaza de las Artes', type: 'espectaculo', description: 'Espectáculo ritual de danza de tijeras con músicos tradicionales.', image: 'https://picsum.photos/seed/dance2/400/300' },
    { id: 'e4', title: 'Expo Fotográfica: Rostros del Ande', time: 'Todo el día', location: 'Galería Central', type: 'exposicion', description: 'Muestra fotográfica que captura la esencia de las comunidades altoandinas.', image: 'https://picsum.photos/seed/photo1/400/300' }
  ],
  '2026-04-05': [{ id: 'e5', title: 'Una vida y un violín', time: '20:00', location: 'Teatro Principal', type: 'espectaculo', description: 'Recital de violín andino celebrando la trayectoria del maestro Chimango Lares.', image: 'https://picsum.photos/seed/violin1/400/300' }],
};

const proximosEventos = [
  {
    id: '1',
    title: 'Hatun Yaku Raymi',
    date: '15 de Mayo, 2026',
    time: '19:00 hrs',
    location: 'Gran Teatro Nacional',
    image: 'https://picsum.photos/seed/yaku1/800/600',
    type: 'espectaculo'
  },
  {
    id: '2',
    title: 'Taller de Violín Andino',
    date: 'Inicios: 1er de cada mes',
    time: 'Varios horarios',
    location: 'Centro Cultural Chimango Lares',
    image: 'https://picsum.photos/seed/talleres1/800/600',
    type: 'taller'
  }
];

export default function AgendaPage() {
  const [version, setVersion] = useState<CalendarVersion>('interactive');
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1)); // March 2026
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 23)); // Today-ish for the demo
  const [expandedDay, setExpandedDay] = useState<string | null>(format(new Date(2026, 2, 23), 'yyyy-MM-dd'));
  const [categoryFilter, setCategoryFilter] = useState<string>('todos');
  const [moodFilter, setMoodFilter] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredEvent, setHoveredEvent] = useState<any>(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  // Calculate days for the month grid
  const monthDays = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  // Group days into weeks
  const weeks = useMemo(() => {
    const weeksArray = [];
    for (let i = 0; i < monthDays.length; i += 7) {
      weeksArray.push(monthDays.slice(i, i + 7));
    }
    return weeksArray;
  }, [monthDays]);

  // Derive expanded week index from selectedDate
  const activeWeekIndex = useMemo(() => {
    return weeks.findIndex(week => week.some(day => isSameDay(day, selectedDate)));
  }, [weeks, selectedDate]);

  // Calculate days for the expanded week view
  const weekDays = useMemo(() => {
    const start = startOfWeek(selectedDate, { weekStartsOn: 1 });
    const end = endOfWeek(selectedDate, { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [selectedDate]);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const nextWeek = () => setSelectedDate(addWeeks(selectedDate, 1));
  const prevWeek = () => setSelectedDate(subWeeks(selectedDate, 1));

  const goToToday = () => {
    const today = new Date(2026, 2, 23); // Mock today
    setCurrentMonth(startOfMonth(today));
    setSelectedDate(today);
    setExpandedDay(format(today, 'yyyy-MM-dd'));
  };

  const getEventsForDay = (date: Date) => {
    const key = format(date, 'yyyy-MM-dd');
    let events = mockEvents[key] || [];
    
    if (categoryFilter !== 'todos') {
      events = events.filter(ev => ev.type === categoryFilter);
    }

    if (moodFilter !== 'todos') {
      events = events.filter(ev => {
        if (moodFilter === 'familiar') return ev.description.toLowerCase().includes('niños') || ev.description.toLowerCase().includes('edades');
        if (moodFilter === 'gratis') return ev.description.toLowerCase().includes('gratuito') || ev.description.toLowerCase().includes('libre');
        if (moodFilter === 'intensivo') return ev.description.toLowerCase().includes('intensivo') || ev.description.toLowerCase().includes('técnicas');
        return true;
      });
    }
    
    if (searchQuery) {
      events = events.filter(ev => 
        ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return events;
  };

  const toggleDayExpansion = (dateKey: string) => {
    setExpandedDay(expandedDay === dateKey ? null : dateKey);
  };

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'espectaculo', name: 'Espectáculos' },
    { id: 'taller', name: 'Talleres' },
    { id: 'exposicion', name: 'Exposiciones' },
  ];

  const moods = [
    { id: 'todos', name: 'Cualquier Mood' },
    { id: 'familiar', name: 'Familiar' },
    { id: 'gratis', name: 'Gratuito' },
    { id: 'intensivo', name: 'Intensivo' },
  ];

  const handleEventHover = (e: React.MouseEvent, event: any) => {
    setHoveredEvent(event);
    setHoverPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 transition-colors duration-500">
      <CursorLights />
      <Sidebar />
      
      {/* Selector de Versiones Flotante (Solo en Agenda) */}
      <div className="fixed top-[184px] left-6 z-[90] pointer-events-none group/version">
        <div className="pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 opacity-15 group-hover/version:opacity-100 w-auto group-hover/version:w-48">
          {/* Header del Selector */}
          <div className="flex items-center h-12 px-4 gap-3 cursor-default">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              {version === 'list' ? <List className="w-4 h-4" /> : version === 'grid' ? <Grid className="w-4 h-4" /> : <Layout className="w-4 h-4" />}
            </div>
            <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap uppercase tracking-wider text-xs">
              Vista: {version === 'list' ? 'Simple' : version === 'grid' ? 'Grid' : 'Interactivo'}
            </span>
            <ChevronDown className="ml-auto w-4 h-4 text-slate-400 group-hover/version:rotate-180 transition-transform" />
          </div>

          {/* Opciones Expandibles */}
          <div className="max-h-0 group-hover/version:max-h-48 transition-all duration-500 overflow-hidden">
            <div className="px-2 pb-4 space-y-1">
              <div className="h-px bg-slate-200 dark:bg-slate-800 mx-2 mb-2" />
              {[
                { id: 'list', name: 'Vista Simple', icon: List },
                { id: 'grid', name: 'Grid', icon: Grid },
                { id: 'interactive', name: 'Interactivo', icon: Layout }
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVersion(v.id as CalendarVersion)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                    version === v.id 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400'
                  }`}
                >
                  <div className={version === v.id ? 'text-white' : 'text-amber-500/60'}>
                    <v.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap">
                    {v.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="fixed top-1/4 left-1/4 w-[800px] h-[800px] bg-amber-400/10 dark:bg-amber-600/5 blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-600/5 blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500" />

      {/* Portada */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/50 dark:via-slate-950/50 to-transparent pointer-events-none z-0 transition-colors duration-500" />
        
        <div className="relative z-10 px-6 lg:px-10 max-w-4xl mx-auto flex flex-col items-center w-full mt-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 mb-4">Explora</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            Vive la <DynamicText words={["Cultura", "Música", "Danza", "Historia", "Experiencia"]} highlightClass="text-amber-600 dark:text-amber-500" /> en primera fila
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200 transition-colors duration-500 italic">
            Descubre nuestros próximos eventos y espectáculos
          </h2>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">
            Nuestra programación
          </h2>
          <h3 className="text-xs text-amber-600 dark:text-amber-500 font-bold mb-8 uppercase tracking-[0.2em]">Eventos destacados</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto transition-colors duration-500 font-light">
            Mantente al día con todas las actividades, presentaciones, talleres y exposiciones que el Centro Cultural Chimango Lares tiene para ofrecer.
          </p>
        </div>

        {/* Filtros y Controles Superiores */}
        <div className="flex flex-col gap-6 mb-12 glass p-8 rounded-[2rem] shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                    categoryFilter === cat.id 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-amber-100 dark:hover:bg-amber-900/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-grow lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Buscar eventos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-amber-500/20 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                />
                {searchQuery && (
                  <div className="absolute -bottom-6 left-4 text-[10px] text-amber-600 font-bold animate-pulse">
                    Filtrando resultados...
                  </div>
                )}
              </div>
              <button 
                onClick={goToToday}
                className="px-6 py-2 bg-white dark:bg-slate-900 border border-amber-500/20 text-amber-600 font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all shadow-md flex items-center gap-2 whitespace-nowrap text-xs uppercase tracking-widest"
              >
                <CalendarIcon className="w-4 h-4" />
                Hoy
              </button>
            </div>
          </div>

          {/* Mood Filters */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-amber-500/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mood:</span>
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setMoodFilter(mood.id)}
                className={`text-[10px] font-bold uppercase tracking-widest transition-all ${
                  moodFilter === mood.id 
                    ? 'text-amber-500 underline underline-offset-4' 
                    : 'text-slate-500 hover:text-amber-500/70'
                }`}
              >
                {mood.name}
              </button>
            ))}
          </div>
        </div>

        {/* Versiones del Calendario */}
        <AnimatePresence mode="wait">
          {version === 'interactive' && (
            <motion.div
              key="interactive"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24"
            >
              {/* Sidebar: Mini Calendario Mensual */}
              <div className="lg:col-span-4 space-y-8">
                <div className="glass rounded-3xl p-8 shadow-2xl sticky top-24">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-serif font-bold text-slate-900 dark:text-white capitalize">
                      {format(currentMonth, 'MMMM yyyy', { locale: es })}
                    </h4>
                    <div className="flex gap-2">
                      <button onClick={prevMonth} className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-600 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button onClick={nextMonth} className="p-2 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-600 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                      <div key={i} className="text-center text-[9px] font-bold text-amber-600/60 uppercase tracking-[0.2em]">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {monthDays.map((day, i) => {
                      const events = getEventsForDay(day);
                      const hasEvents = events.length > 0;
                      const isSelected = isSameDay(day, selectedDate);
                      const isCurrentMonth = isSameMonth(day, currentMonth);
                      
                      // Highlight if search matches events on this day
                      const isSearchMatch = searchQuery && events.some(ev => 
                        ev.title.toLowerCase().includes(searchQuery.toLowerCase())
                      );

                      return (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedDate(day);
                            setExpandedDay(format(day, 'yyyy-MM-dd'));
                          }}
                          className={`
                            relative aspect-square flex items-center justify-center text-xs rounded-xl transition-all duration-500
                            ${!isCurrentMonth ? 'text-slate-300 dark:text-slate-700 opacity-40' : 'text-slate-700 dark:text-slate-300'}
                            ${isSelected ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/40 scale-110 z-10 font-bold' : 'hover:bg-amber-100 dark:hover:bg-amber-900/20'}
                            ${isToday(day) && !isSelected ? 'border-2 border-amber-500/50 text-amber-600 font-bold' : ''}
                            ${isSearchMatch ? 'ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-slate-900 animate-pulse' : ''}
                          `}
                        >
                          {format(day, 'd')}
                          {hasEvents && !isSelected && (
                            <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-6 border-t border-amber-500/10">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Info className="w-4 h-4 text-amber-500" />
                      Leyenda
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-blue-500" /> Espectáculos
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Talleres
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-purple-500" /> Exposiciones
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content: Vista Semanal Expandida */}
              <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                      Semana del {format(weekDays[0], 'd')} al {format(weekDays[6], 'd')} de {format(weekDays[0], 'MMMM', { locale: es })}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600/60 mt-2">Explora los eventos de esta semana</p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={prevWeek}
                      className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-500/20 text-amber-600 hover:bg-amber-500 hover:text-white transition-all shadow-md"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextWeek}
                      className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-500/20 text-amber-600 hover:bg-amber-500 hover:text-white transition-all shadow-md"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {weekDays.map((day, i) => {
                    const dayKey = format(day, 'yyyy-MM-dd');
                    const events = getEventsForDay(day);
                    const isExpanded = expandedDay === dayKey;
                    const isSelected = isSameDay(day, selectedDate);

                    return (
                      <motion.div
                        key={dayKey}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`
                          group relative overflow-hidden rounded-2xl border transition-all duration-500
                          ${isSelected ? 'border-amber-500/50 ring-1 ring-amber-500/20' : 'border-slate-200 dark:border-slate-800 hover:border-amber-500/30'}
                          ${isExpanded ? 'bg-white dark:bg-slate-900 shadow-2xl' : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm'}
                        `}
                      >
                        <div 
                          className="p-6 cursor-pointer flex items-center justify-between"
                          onClick={() => toggleDayExpansion(dayKey)}
                        >
                          <div className="flex items-center gap-6">
                            <div className={`
                              flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-colors
                              ${isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 group-hover:text-amber-600'}
                            `}>
                              <span className="text-[10px] font-bold uppercase tracking-tighter">{format(day, 'EEE', { locale: es })}</span>
                              <span className="text-2xl font-black">{format(day, 'd')}</span>
                            </div>
                            
                            <div>
                              <h4 className={`text-lg font-bold transition-colors ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                                {events.length > 0 ? `${events.length} ${events.length === 1 ? 'Evento' : 'Eventos'}` : 'Sin eventos programados'}
                              </h4>
                              <div className="flex gap-2 mt-1">
                                {events.map((ev, idx) => (
                                  <span 
                                    key={idx} 
                                    className={`w-2 h-2 rounded-full ${
                                      ev.type === 'espectaculo' ? 'bg-blue-500' : 
                                      ev.type === 'taller' ? 'bg-emerald-500' : 'bg-purple-500'
                                    }`} 
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            {events.length > 0 && (
                              <div className="hidden md:flex -space-x-2">
                                {events.slice(0, 3).map((ev, idx) => (
                                  <div key={idx} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                    <span className="text-[10px] font-bold">{ev.title[0]}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            {isExpanded ? <ChevronUp className="w-6 h-6 text-amber-500" /> : <ChevronDown className="w-6 h-6 text-slate-400" />}
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden border-t border-slate-100 dark:border-slate-800"
                            >
                              <div className="p-6 space-y-6">
                                {events.length > 0 ? (
                                  events.map((ev) => (
                                    <div key={ev.id} className="flex flex-col md:flex-row gap-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 group/item hover:border-amber-500/30 transition-colors">
                                      <div className="md:w-1/4">
                                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 mb-2">
                                          <Clock className="w-4 h-4" />
                                          <span className="text-sm font-bold">{ev.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                          <MapPin className="w-4 h-4" />
                                          <span className="text-xs">{ev.location}</span>
                                        </div>
                                      </div>
                                      <div className="md:w-3/4">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block ${
                                          ev.type === 'espectaculo' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                          ev.type === 'taller' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                        }`}>
                                          {ev.type}
                                        </span>
                                        <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{ev.title}</h5>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                          {ev.description}
                                        </p>
                                        <Link 
                                          href={`/agenda/${ev.id}`}
                                          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold text-sm hover:gap-3 transition-all"
                                        >
                                          Ver detalles completos <ArrowRight className="w-4 h-4" />
                                        </Link>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <div className="text-center py-8">
                                    <CalendarIcon className="w-12 h-12 text-slate-200 dark:text-slate-800 mx-auto mb-4" />
                                    <p className="text-slate-500 dark:text-slate-400 italic">No hay eventos programados para este día.</p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {version === 'grid' && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-24"
            >
              <div className="flex items-center justify-center gap-8 mb-16">
                <button onClick={prevMonth} className="text-amber-500 hover:scale-110 transition-transform">
                  <ChevronLeft className="w-10 h-10 stroke-[3px]" />
                </button>
                <h3 className="text-5xl md:text-7xl font-serif font-light text-slate-900 dark:text-white tracking-tight capitalize">
                  {format(currentMonth, 'MMMM yyyy', { locale: es })}
                </h3>
                <button onClick={nextMonth} className="text-amber-500 hover:scale-110 transition-transform">
                  <ChevronRight className="w-10 h-10 stroke-[3px]" />
                </button>
              </div>

              <div className="grid grid-cols-7 mb-2">
                {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
                  <div key={day} className="p-4 text-xs font-bold text-amber-600/60 uppercase tracking-widest text-center">
                    {day}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {weeks.map((week, weekIdx) => {
                  const isExpanded = activeWeekIndex === weekIdx;
                  
                  return (
                    <motion.div 
                      key={weekIdx}
                      layout
                      className={`
                        relative overflow-hidden border transition-all duration-700 cursor-pointer
                        ${isExpanded 
                          ? 'glass-darker shadow-2xl border-amber-500/40 rounded-[2.5rem] z-20' 
                          : 'glass border-stone-200 dark:border-slate-800 hover:bg-stone-200/50 dark:hover:bg-slate-800/50 rounded-2xl h-16 opacity-40 hover:opacity-100 grayscale-[0.5] hover:grayscale-0'
                        }
                      `}
                      onClick={() => setSelectedDate(week[0])}
                    >
                      <div className="grid grid-cols-7 h-full">
                        {week.map((day, dayIdx) => {
                          const events = getEventsForDay(day);
                          const isCurrentMonth = isSameMonth(day, currentMonth);
                          const isTodayDay = isToday(day);
                          
                          return (
                            <div 
                              key={dayIdx} 
                              className={`
                                relative p-2 border-r last:border-r-0 border-stone-200 dark:border-slate-800 flex flex-col transition-all duration-500
                                ${isExpanded ? 'min-h-[220px]' : 'justify-center items-center'}
                                ${!isCurrentMonth && isExpanded ? 'bg-stone-50/50 dark:bg-slate-950/20' : ''}
                                ${isTodayDay && !isExpanded ? 'bg-amber-500/10' : ''}
                              `}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDate(day);
                              }}
                            >
                              <div className={`flex justify-between items-start ${isExpanded ? 'mb-4' : ''}`}>
                                <span className={`
                                  font-light transition-all duration-500
                                  ${isExpanded ? 'text-3xl' : 'text-sm font-bold'}
                                  ${!isCurrentMonth ? 'text-slate-300 dark:text-slate-700' : 'text-slate-900 dark:text-white'}
                                  ${isTodayDay && isExpanded ? 'text-amber-500 font-bold' : ''}
                                `}>
                                  {format(day, 'd')}
                                </span>
                                {isTodayDay && isExpanded && (
                                  <div className="px-2 py-0.5 bg-amber-500 text-white text-[8px] font-bold rounded-full uppercase tracking-tighter">
                                    Hoy
                                  </div>
                                )}
                              </div>
                              
                              {isExpanded && (
                                <div className="space-y-3 overflow-y-auto max-h-[140px] pr-1 custom-scrollbar">
                                  {events.length > 0 ? (
                                    events.map((ev) => (
                                      <div 
                                        key={ev.id}
                                        onMouseEnter={(e) => handleEventHover(e, ev)}
                                        onMouseLeave={() => setHoveredEvent(null)}
                                        className="group/ev cursor-pointer border-l-2 border-amber-500/30 hover:border-amber-500 pl-2 transition-all"
                                      >
                                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight mb-0.5">
                                          {ev.time}
                                        </p>
                                        <h5 className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-tight group-hover/ev:text-amber-600 transition-colors uppercase line-clamp-2">
                                          {ev.title}
                                        </h5>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="h-full flex items-center justify-center opacity-10">
                                      <CalendarIcon className="w-8 h-8 text-slate-400" />
                                    </div>
                                  )}
                                </div>
                              )}

                              {!isExpanded && events.length > 0 && (
                                <div className="absolute bottom-1 flex gap-0.5">
                                  {events.slice(0, 3).map((_, idx) => (
                                    <div key={idx} className="w-1 h-1 rounded-full bg-amber-500" />
                                  ))}
                                  {events.length > 3 && <div className="w-1 h-1 rounded-full bg-amber-500/40" />}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Hover Tooltip/Card */}
              <AnimatePresence>
                {hoveredEvent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    style={{ 
                      position: 'fixed', 
                      left: hoverPos.x + 20, 
                      top: hoverPos.y - 100,
                      zIndex: 100
                    }}
                    className="w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-amber-500/20 overflow-hidden pointer-events-none"
                  >
                    {hoveredEvent.image && (
                      <div className="relative h-32 w-full">
                        <Image src={hoveredEvent.image} alt={hoveredEvent.title} fill className="object-cover" />
                      </div>
                    )}
                    <div className="p-4">
                      <p className="text-[10px] font-bold text-amber-600 uppercase mb-1">{hoveredEvent.type}</p>
                      <h6 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{hoveredEvent.title}</h6>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{hoveredEvent.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400">{hoveredEvent.time}</span>
                        <div className="px-3 py-1 bg-black text-white text-[10px] font-bold rounded-full">Ver más</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {version === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto mb-24 space-y-8"
            >
              {monthDays.filter(day => isSameMonth(day, currentMonth)).map((day, i) => {
                const events = getEventsForDay(day);
                if (events.length === 0) return null;

                return (
                  <div key={i} className="flex gap-8">
                    <div className="w-24 flex-shrink-0 text-right">
                      <span className="block text-4xl font-black text-slate-900 dark:text-white">{format(day, 'd')}</span>
                      <span className="block text-xs font-bold text-amber-600 uppercase">{format(day, 'MMMM', { locale: es })}</span>
                    </div>
                    <div className="flex-grow space-y-4">
                      {events.map(ev => (
                        <div key={ev.id} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 transition-all">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">{ev.title}</h4>
                            <span className="text-xs font-bold text-amber-600">{ev.time}</span>
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{ev.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selector de Versiones (Eliminado de aquí y movido al lateral) */}

        {/* Próximos eventos destacados */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Eventos Imperdibles</h3>
            <Link href="/servicios" className="text-amber-600 dark:text-amber-500 font-bold flex items-center gap-2 hover:underline">
              Ver todos los servicios <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proximosEventos.map((evento) => (
              <div key={evento.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/10 group flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-2/5 relative aspect-video sm:aspect-auto overflow-hidden">
                  <Image src={evento.image} alt={evento.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-60" />
                </div>
                <div className="p-8 w-full sm:w-3/5 flex flex-col">
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 inline-block px-3 py-1 rounded-full ${
                    evento.type === 'espectaculo' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  }`}>
                    {evento.type}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{evento.title}</h4>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-8">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-4 h-4 text-amber-500" />
                      <span>{evento.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>{evento.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span>{evento.location}</span>
                    </div>
                  </div>
                  <Link href={`/agenda/${evento.id}`} className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20">
                    Reservar Lugar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
