'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/footer';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Image as ImageIcon, X } from 'lucide-react';
import Sidebar from '@/components/sidebar';

const galleryItems = [
  { id: 1, title: "Inicios en Ayacucho", type: "image", src: "https://picsum.photos/seed/1990_1/800/600", year: "1990" },
  { id: 2, title: "Inicios en Ayacucho", type: "image", src: "https://picsum.photos/seed/1990_2/800/600", year: "1990" },
  { id: 3, title: "Primer Festival Nacional", type: "video", src: "https://picsum.photos/seed/1995_1/800/600", year: "1995" },
  { id: 4, title: "Gira por Europa", type: "image", src: "https://picsum.photos/seed/2002_1/800/600", year: "2002" },
  { id: 5, title: "Gira por Europa", type: "image", src: "https://picsum.photos/seed/2002_2/800/600", year: "2002" },
  { id: 6, title: "Reconocimiento UNESCO", type: "image", src: "https://picsum.photos/seed/2010_1/800/600", year: "2010" },
  { id: 7, title: "Fundación del Centro", type: "video", src: "https://picsum.photos/seed/2018_1/800/600", year: "2018" },
  { id: 8, title: "Juegos Bolivarianos", type: "image", src: "https://picsum.photos/seed/2024_1/800/600", year: "2024" },
  { id: 9, title: "Juegos Bolivarianos", type: "image", src: "https://picsum.photos/seed/2024_2/800/600", year: "2024" },
];

function GaleriaContent() {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get('tag');
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>(
    initialTag === 'fotos' ? 'image' : initialTag === 'videos' ? 'video' : 'all'
  );

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <Link href="/recursos" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 font-medium mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Volver a Recursos
      </Link>

      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-4 block">Archivo Visual</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6">Galería y Videoteca</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
          Nuestra memoria colectiva capturada en imágenes y sonidos. Un registro histórico de la danza, la música y la vida en el Centro Cultural.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {['all', 'image', 'video'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-6 py-2 rounded-full border transition-all uppercase text-[10px] tracking-widest font-bold ${
              filter === f 
                ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-500/20' 
                : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:border-amber-500/50'
            }`}
          >
            {f === 'all' ? 'Todos' : f === 'image' ? 'Fotos' : 'Videos'}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-amber-500/10 shadow-xl"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {item.type === 'video' ? (
                  <div className="w-16 h-16 rounded-full bg-amber-500/80 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-amber-500/80 flex items-center justify-center backdrop-blur-sm">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-amber-500 font-bold text-xs mb-1 block">{item.year}</span>
                <h3 className="text-white font-serif font-bold text-xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function GaleriaPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-amber-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando galería...</div>}>
        <GaleriaContent />
      </Suspense>

      <Footer />
    </main>
  );
}
