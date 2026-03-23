'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, LayoutGrid, List, ArrowRight } from 'lucide-react';
import CursorLights from '@/components/cursor-lights';
import DynamicText from '@/components/dynamic-text';
import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';

const DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Mock events for the calendar
const mockEvents: Record<string, { title: string, type: 'taller' | 'espectaculo' | 'exposicion' }[]> = {
  '2026-3-15': [{ title: 'Taller de Retablo', type: 'taller' }],
  '2026-3-20': [{ title: 'Voces de la Tierra', type: 'espectaculo' }],
  '2026-3-25': [{ title: 'Danza de Tijeras', type: 'espectaculo' }, { title: 'Expo Fotográfica', type: 'exposicion' }],
  '2026-4-5': [{ title: 'Una vida y un violín', type: 'espectaculo' }],
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
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026
  const [viewMode, setViewMode] = useState<'mensual' | 'semanal' | 'semestral'>('mensual');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const prevPeriod = () => {
    if (viewMode === 'mensual') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    } else if (viewMode === 'semanal') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7));
    } else {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, 1));
    }
  };

  const nextPeriod = () => {
    if (viewMode === 'mensual') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    } else if (viewMode === 'semanal') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7));
    } else {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, 1));
    }
  };

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const renderMensual = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    // Empty cells for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 md:h-32 border border-slate-200 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/20 transition-colors duration-500"></div>);
    }
    
    // Days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateKey = `${year}-${month + 1}-${i}`;
      const dayEvents = mockEvents[dateKey] || [];
      const isSelected = selectedDate?.getDate() === i && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year;
      
      days.push(
        <div 
          key={`day-${i}`} 
          onClick={() => setSelectedDate(new Date(year, month, i))}
          className={`h-24 md:h-32 border border-slate-200 dark:border-slate-800/50 p-2 cursor-pointer transition-all hover:bg-slate-100 dark:hover:bg-slate-800/50 flex flex-col ${isSelected ? 'bg-amber-100 dark:bg-amber-900/20 border-amber-500/50 shadow-[inset_0_0_15px_rgba(245,158,11,0.1)]' : 'bg-white/40 dark:bg-slate-900/40'}`}
        >
          <span className={`text-sm font-medium transition-colors duration-500 ${isSelected ? 'text-amber-600 dark:text-amber-400' : 'text-slate-600 dark:text-slate-400'}`}>{i}</span>
          <div className="mt-1 flex flex-col gap-1 overflow-y-auto no-scrollbar">
            {dayEvents.map((ev, idx) => (
              <div key={idx} className={`text-[10px] md:text-xs px-1.5 py-0.5 rounded truncate transition-colors duration-500 ${
                ev.type === 'espectaculo' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-500/30' : 
                ev.type === 'taller' ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-500/30' : 
                'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-500/30'
              }`}>
                {ev.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full">
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center text-xs font-medium text-amber-600/80 dark:text-amber-500/70 uppercase tracking-wider py-2 transition-colors duration-500">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-px bg-slate-200 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-amber-500/20 shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-colors duration-500">
          {days}
        </div>
      </div>
    );
  };

  const renderSemanal = () => {
    // Simplified weekly view
    return (
      <div className="w-full h-96 flex items-center justify-center border border-amber-500/20 rounded-xl bg-white/40 dark:bg-slate-900/40 transition-colors duration-500">
        <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500">Vista semanal en construcción</p>
      </div>
    );
  };

  const renderSemestral = () => {
    // Simplified semester view
    return (
      <div className="w-full h-96 flex items-center justify-center border border-amber-500/20 rounded-xl bg-white/40 dark:bg-slate-900/40 transition-colors duration-500">
        <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500">Vista semestral en construcción</p>
      </div>
    );
  };

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 transition-colors duration-500">
      <CursorLights />
      <Sidebar />
      
      {/* Background Glow */}
      <div className="fixed top-1/4 left-1/4 w-[800px] h-[800px] bg-amber-400/10 dark:bg-amber-600/5 blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-600/5 blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500" />

      {/* Portada */}
      <section className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/50 dark:via-slate-950/50 to-transparent pointer-events-none z-0 transition-colors duration-500" />

        <div className="relative z-10 px-6 lg:px-10 max-w-4xl mx-auto flex flex-col items-center w-full mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            Vive la <DynamicText words={["Cultura", "Música", "Danza", "Historia", "Experiencia"]} highlightClass="text-amber-500" /> en primera fila
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 transition-colors duration-500">
            Descubre nuestros próximos eventos y espectáculos
          </h2>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-500">
            Nuestra programación
          </h2>
          <h3 className="text-xl text-amber-600 dark:text-amber-500 font-medium mb-8">Eventos destacados</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto transition-colors duration-500">
            Mantente al día con todas las actividades, presentaciones, talleres y exposiciones que el Centro Cultural Chimango Lares tiene para ofrecer.
          </p>
        </div>

        {/* Próximos eventos */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-amber-500/20 pb-2">Próximos eventos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proximosEventos.map((evento) => (
              <div key={evento.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-amber-500/20 group flex flex-col sm:flex-row">
                <div 
                  className="w-full sm:w-2/5 relative aspect-video sm:aspect-auto"
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.image-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <Image src={evento.image} alt={evento.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="image-overlay absolute inset-0 bg-black/20 transition-opacity duration-500" />
                </div>
                <div className="p-6 w-full sm:w-3/5 flex flex-col justify-center">
                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 inline-block ${
                    evento.type === 'espectaculo' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {evento.type}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{evento.title}</h4>
                  <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <p><strong>Fecha:</strong> {evento.date}</p>
                    <p><strong>Hora:</strong> {evento.time}</p>
                    <p><strong>Lugar:</strong> {evento.location}</p>
                  </div>
                  <Link href={`/agenda/${evento.id}`} className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors mt-auto">
                    Ver detalles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Header Calendario */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-amber-500/20 pb-2 flex-grow">Calendario interactivo</h3>
          
          {/* View Toggles */}
          <div className="flex bg-white/80 dark:bg-slate-900/80 p-1 rounded-lg border border-amber-500/20 backdrop-blur-sm self-start md:self-auto transition-colors duration-500">
            <button 
              onClick={() => setViewMode('semanal')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${viewMode === 'semanal' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
            >
              Semanal
            </button>
            <button 
              onClick={() => setViewMode('mensual')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${viewMode === 'mensual' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
            >
              Mensual
            </button>
            <button 
              onClick={() => setViewMode('semestral')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${viewMode === 'semestral' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
            >
              Semestral
            </button>
          </div>
        </div>

        {/* Calendar Controls */}
        <div className="flex items-center justify-between mb-8 bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm transition-colors duration-500">
          <button 
            onClick={prevPeriod}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 transition-colors duration-500">
            <CalendarIcon className="w-6 h-6 text-amber-600 dark:text-amber-500" />
            {viewMode === 'mensual' ? `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}` : 
             viewMode === 'semestral' ? `Semestre ${currentDate.getMonth() < 6 ? '1' : '2'} - ${currentDate.getFullYear()}` :
             `Semana del ${currentDate.getDate()} de ${MONTHS[currentDate.getMonth()]}`}
          </h2>
          
          <button 
            onClick={nextPeriod}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Calendar Grid */}
        <motion.div 
          key={`${viewMode}-${currentDate.getTime()}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          {viewMode === 'mensual' && renderMensual()}
          {viewMode === 'semanal' && renderSemanal()}
          {viewMode === 'semestral' && renderSemestral()}
        </motion.div>

        {/* Selected Date Details */}
        {selectedDate && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white/80 dark:bg-slate-900/80 border border-amber-500/30 rounded-xl p-6 md:p-8 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4 transition-colors duration-500">
              Eventos para el {selectedDate.getDate()} de {MONTHS[selectedDate.getMonth()]} de {selectedDate.getFullYear()}
            </h3>
            
            {mockEvents[`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`] ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockEvents[`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`].map((ev, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-amber-500/50 transition-colors duration-500">
                    <div>
                      <span className={`text-xs font-medium uppercase tracking-wider mb-1 block transition-colors duration-500 ${
                        ev.type === 'espectaculo' ? 'text-blue-600 dark:text-blue-400' : 
                        ev.type === 'taller' ? 'text-emerald-600 dark:text-emerald-400' : 
                        'text-purple-600 dark:text-purple-400'
                      }`}>
                        {ev.type}
                      </span>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{ev.title}</h4>
                    </div>
                    <button className="px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-amber-500/20 hover:text-amber-700 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md transition-colors duration-500">
                      Detalles
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 dark:text-slate-400 italic transition-colors duration-500">No hay eventos programados para esta fecha.</p>
            )}
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}
