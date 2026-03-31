'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon, X } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    year: "1990",
    title: "Inicios en Ayacucho",
    type: "image",
    thumbnail: "https://picsum.photos/seed/1990/600/400",
    gallery: [
      "https://picsum.photos/seed/1990_1/800/600",
      "https://picsum.photos/seed/1990_2/800/600",
      "https://picsum.photos/seed/1990_3/800/600"
    ]
  },
  {
    id: 2,
    year: "1995",
    title: "Primer Festival Nacional",
    type: "video",
    thumbnail: "https://picsum.photos/seed/1995/600/400",
    gallery: [
      "https://picsum.photos/seed/1995_1/800/600",
      "https://picsum.photos/seed/1995_2/800/600"
    ]
  },
  {
    id: 3,
    year: "2002",
    title: "Gira por Europa",
    type: "image",
    thumbnail: "https://picsum.photos/seed/2002/600/400",
    gallery: [
      "https://picsum.photos/seed/2002_1/800/600",
      "https://picsum.photos/seed/2002_2/800/600",
      "https://picsum.photos/seed/2002_3/800/600",
      "https://picsum.photos/seed/2002_4/800/600"
    ]
  },
  {
    id: 4,
    year: "2010",
    title: "Reconocimiento UNESCO",
    type: "image",
    thumbnail: "https://picsum.photos/seed/2010/600/400",
    gallery: [
      "https://picsum.photos/seed/2010_1/800/600",
      "https://picsum.photos/seed/2010_2/800/600"
    ]
  },
  {
    id: 5,
    year: "2018",
    title: "Fundación del Centro",
    type: "video",
    thumbnail: "https://picsum.photos/seed/2018/600/400",
    gallery: [
      "https://picsum.photos/seed/2018_1/800/600",
      "https://picsum.photos/seed/2018_2/800/600",
      "https://picsum.photos/seed/2018_3/800/600"
    ]
  },
  {
    id: 6,
    year: "2024",
    title: "Juegos Bolivarianos",
    type: "image",
    thumbnail: "https://picsum.photos/seed/2024/600/400",
    gallery: [
      "https://picsum.photos/seed/2024_1/800/600",
      "https://picsum.photos/seed/2024_2/800/600",
      "https://picsum.photos/seed/2024_3/800/600",
      "https://picsum.photos/seed/2024_4/800/600"
    ]
  }
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null);
  const [hoveredItems, setHoveredItems] = useState<Set<number>>(new Set());
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right' | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hoverDirection) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollAmount = hoverDirection === 'left' ? -10 : 10;
        scrollRef.current.scrollBy({ left: scrollAmount });
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [hoverDirection]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleEventClick = (event: typeof timelineEvents[0]) => {
    setSelectedEvent(event);
    setTimeout(() => {
      document.getElementById('gallery-view')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-4 block">Evolución</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">Nuestra Línea de Tiempo</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Un recorrido por los hitos más importantes que han marcado nuestra historia y el legado de la cultura Chanka.
        </p>
      </div>

      <div className="relative mb-24">
        {/* Hover Zones */}
        <div 
          className="absolute left-0 top-0 w-32 h-full z-30 cursor-w-resize"
          onMouseEnter={() => setHoverDirection('left')}
          onMouseLeave={() => setHoverDirection(null)}
        />
        <div 
          className="absolute right-0 top-0 w-32 h-full z-30 cursor-e-resize"
          onMouseEnter={() => setHoverDirection('right')}
          onMouseLeave={() => setHoverDirection(null)}
        />

        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-slate-800 border border-amber-500/30 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-50 dark:hover:bg-slate-700 hover:scale-110 transition-all text-amber-600 dark:text-amber-500"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-slate-800 border border-amber-500/30 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-50 dark:hover:bg-slate-700 hover:scale-110 transition-all text-amber-600 dark:text-amber-500"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto py-12 px-8 snap-x snap-mandatory hide-scrollbar relative items-center min-h-[600px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-[200%] h-1 bg-amber-500/20 -translate-y-1/2 z-0" />

          {timelineEvents.map((event, idx) => {
            const hasBeenHovered = hoveredItems.has(event.id);
            return (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative shrink-0 w-[300px] md:w-[350px] h-2 snap-center group cursor-pointer"
              onClick={() => handleEventClick(event)}
              onMouseEnter={() => setHoveredItems(prev => new Set(prev).add(event.id))}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-500 z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-transform group-hover:scale-150`} />
              
              <div className={`absolute left-1/2 -translate-x-1/2 w-full transition-transform duration-500 group-hover:-translate-y-2 ${idx % 2 === 0 ? 'bottom-full mb-8' : 'top-full mt-8'}`}>
                <div className={`bg-white dark:bg-slate-900 border-2 ${selectedEvent?.id === event.id ? 'border-amber-500' : 'border-amber-500/20'} rounded-2xl p-4 shadow-xl transition-all group-hover:shadow-2xl group-hover:border-amber-500/50`}>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                    <Image 
                      src={event.thumbnail} 
                      alt={event.title} 
                      fill 
                      className={`object-cover transition-all duration-700 ${hasBeenHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} group-hover:scale-110`} 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 transition-colors flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 group-hover:bg-black/40">
                      {event.type === 'video' ? (
                        <div className="w-10 h-10 rounded-full bg-amber-500/80 flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-4 h-4 text-white ml-1" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-500/80 flex items-center justify-center backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100">
                          <ImageIcon className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-amber-600 dark:text-amber-500 font-bold text-lg block mb-1">{event.year}</span>
                    <h3 className="text-slate-900 dark:text-white font-medium text-base">{event.title}</h3>
                  </div>
                </div>
                <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-amber-500/50 ${idx % 2 === 0 ? 'top-full' : 'bottom-full'}`} />
              </div>
            </motion.div>
          )})}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedEvent && (
          <motion.div 
            id="gallery-view"
            key={selectedEvent.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="max-w-7xl mx-auto px-6 bg-white dark:bg-slate-900 border border-amber-500/20 rounded-3xl p-8 shadow-2xl relative"
          >
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-amber-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8 border-b border-amber-500/20 pb-6">
              <span className="text-amber-600 dark:text-amber-500 font-bold text-2xl mr-4">{selectedEvent.year}</span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white inline-block">{selectedEvent.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedEvent.gallery.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 group cursor-pointer"
                >
                  <Image 
                    src={img} 
                    alt={`${selectedEvent.title} - Imagen ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
