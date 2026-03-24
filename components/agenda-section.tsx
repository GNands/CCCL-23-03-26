'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, X, Ticket, Download, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/components/app-provider';

const agendaEvents = [
  {
    id: 'event-1',
    title: 'Una vida y un violín',
    date: '16/05/2025',
    time: '19:30',
    location: 'Teatro Principal',
    shortDesc: 'Espectáculo que reúne música, danza, narración y audiovisuales para celebrar al maestro Andrés "Chimango" Lares.',
    fullDesc: '"Una vida y un violín” es un espectáculo que reúne música, danza, narración y audiovisuales como principales lenguajes escénicos, con el propósito de celebrar y representar los hitos de la vida artística del maestro Andrés “Chimango” Lares, una de las figuras culturales más destacadas del país.',
    review: '...una experiencia llena de color y vida, personajes que desafían la gravedad, un trasfondo en el que el misterio está siempre presente... y una banda sonora que puede impactar hasta al más preparado.',
    price: 'S/ 45.00',
    image: 'https://picsum.photos/seed/violin/800/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: 'event-2',
    title: 'Voces de la Tierra',
    date: '28/06/2025',
    time: '20:00',
    location: 'Auditorio Central',
    shortDesc: 'Un encuentro coral que explora los cantos ancestrales de los Andes peruanos.',
    fullDesc: 'Voces de la Tierra es una recopilación magistral de cantos tradicionales, interpretados por coros polifónicos que rescatan lenguas originarias y melodías que han resonado en los Andes durante siglos. Una velada para reconectar con nuestras raíces y celebrar la diversidad de nuestra herencia musical.',
    review: '...un viaje sonoro que estremece el alma, donde cada voz parece brotar de las montañas mismas, tejiendo una atmósfera de pura magia y reverencia.',
    price: 'S/ 35.00',
    image: 'https://picsum.photos/seed/coro/800/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    id: 'event-3',
    title: 'Taller: El Arte del Retablo',
    date: '15/07/2025',
    time: '10:00',
    location: 'Sala de Talleres',
    shortDesc: 'Aprende las técnicas tradicionales de la creación de retablos ayacuchanos con maestros artesanos.',
    fullDesc: 'Sumérgete en el colorido mundo de la artesanía peruana. En este taller intensivo, maestros retablistas compartirán sus secretos, desde la preparación de la masa hasta el meticuloso pintado de las figuras, permitiéndote crear tu propia obra de arte en miniatura.',
    review: '...más que una clase, es un acto de preservación cultural; ver cómo la historia cobra vida en miniatura bajo tus propias manos es una experiencia invaluable.',
    price: 'S/ 80.00',
    image: 'https://picsum.photos/seed/retablo/800/600',
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  }
];

export default function AgendaSection() {
  const [selectedEvent, setSelectedEvent] = useState<typeof agendaEvents[0] | null>(null);
  const { t } = useAppContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };

    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedEvent]);

  return (
    <section id="agenda" className="relative z-10 py-32 w-full bg-stone-50/80 dark:bg-slate-950/80 border-b border-amber-500/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] transition-colors duration-500">
      {/* Custom Top Border SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px]">
          <path 
            d="M0,60 L350,60 Q400,60 425,50 Q450,40 500,40 L700,40 Q750,40 775,50 Q800,60 850,60 L1200,60" 
            fill="none" 
            stroke="rgba(245, 158, 11, 0.2)" 
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16 pt-12 md:pt-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-4 block">Programación</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-500">
            {t('agenda.title')}
          </h2>
          <p className="text-lg md:text-xl font-serif italic text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-500">
            Sumérgete en nuestra variada programación de actividades artísticas y formativas
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20 w-full">
          {/* Left Button */}
          <button className="hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-amber-500/80 hover:bg-amber-500/10 transition-colors text-amber-500 font-medium text-sm">
            Archivo
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow max-w-5xl">
            {agendaEvents.map((event) => (
            <motion.div
              layoutId={`card-${event.id}`}
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="bg-white/90 dark:bg-slate-900/80 border border-amber-500/50 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-500/80 transition-colors group flex flex-col h-full shadow-lg backdrop-blur-sm"
            >
              <motion.div 
                layoutId={`image-${event.id}`} 
                className="relative h-64 w-full overflow-hidden bg-black"
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.image-overlay') as HTMLElement;
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <video 
                  src={event.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  suppressHydrationWarning
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="image-overlay absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-white/40 dark:via-slate-900/40 to-transparent opacity-90 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-medium transition-colors duration-500">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </motion.div>
              <motion.div layoutId={`content-${event.id}`} className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-500">{event.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-500">{event.shortDesc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500">
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-500 transition-colors duration-500">{event.price}</span>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">Ver más...</span>
                </div>
              </motion.div>
            </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button className="hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-amber-500/80 hover:bg-amber-500/10 transition-colors text-amber-500 font-medium text-sm">
            Novedades
          </button>
        </div>

        {/* Redirection Link */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-amber-500 mb-4"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
          <Link href="/agenda" className="relative overflow-hidden group border border-amber-500 px-8 py-3 text-amber-400 hover:text-amber-300 uppercase tracking-[0.2em] font-medium text-sm md:text-base transition-colors whitespace-nowrap">
            <span className="relative z-10">Entérate aquí de todos los eventos</span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_3s_infinite_ease-in-out] pointer-events-none" />
          </Link>
        </div>
      </div>

      {/* Modal Expansion */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 z-[60] bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm transition-colors duration-500"
            />
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedEvent.id}`}
                className="bg-white dark:bg-slate-900 border border-amber-500/40 rounded-2xl overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row pointer-events-auto shadow-[0_0_50px_rgba(245,158,11,0.15)] transition-colors duration-500"
              >
                {/* Left: Image */}
                <motion.div layoutId={`image-${selectedEvent.id}`} className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                  <Image src={selectedEvent.image} alt={selectedEvent.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white dark:from-slate-900 to-transparent opacity-90 md:opacity-60 transition-colors duration-500" />
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 left-4 md:hidden p-2 bg-slate-900/20 dark:bg-black/50 rounded-full text-white hover:bg-slate-900/40 dark:hover:bg-black/80 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </motion.div>

                {/* Right: Content */}
                <motion.div layoutId={`content-${selectedEvent.id}`} className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-4 text-amber-600 dark:text-amber-400 text-sm font-medium mb-2 transition-colors duration-500">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedEvent.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedEvent.time}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-500">{selectedEvent.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="hidden md:flex p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-8 transition-colors duration-500">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedEvent.location}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 transition-colors duration-500">
                    {selectedEvent.fullDesc}
                  </p>

                  <div className="mt-auto pt-8 border-r-4 border-amber-500 pr-6 text-right mb-10">
                    <p className="text-slate-500 dark:text-slate-400 italic text-lg leading-relaxed transition-colors duration-500">
                      &quot;{selectedEvent.review}&quot;
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-500">
                    <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                      <span className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors duration-500">Precio de entrada</span>
                      <span className="text-3xl font-bold text-amber-600 dark:text-amber-500 transition-colors duration-500">{selectedEvent.price}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                      <button className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-full font-medium transition-colors border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500">
                        <Download className="w-5 h-5" />
                        Ficha Técnica
                      </button>
                      <Link href="/tickets" className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                        <Ticket className="w-5 h-5" />
                        Comprar Ticket
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
