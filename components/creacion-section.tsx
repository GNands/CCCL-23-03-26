'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import ExpandableImage from '@/components/expandable-image';

const creacionData = [
  {
    id: 'hatun-yaku-raymi',
    title: "Hatun Yaku Raymi",
    description: "\"La Gran Fiesta del Agua\" es un espectáculo que celebra la festividad andina de agradecimiento a la Pachamama por sus infinitas bondades.",
    fullDescription: "Hatun Yaku Raymi es una celebración vibrante que rinde homenaje al agua como fuente de vida. A través de danzas ancestrales, música en vivo y rituales tradicionales, este espectáculo transporta al espectador al corazón de los Andes, donde la conexión con la naturaleza es sagrada. La puesta en escena incluye más de 50 artistas, vestuarios coloridos y una narrativa que resalta la importancia de la conservación ambiental desde la cosmovisión andina.",
    image: "https://picsum.photos/seed/yaku1/800/600",
  },
  {
    id: 'la-leyenda-del-nino-danzaq',
    title: "La leyenda del Niño Danzaq",
    description: "Narración oral escenificada que cuenta el origen de la danza de tijeras, a través de la vivencia de un niño campesino y su encuentro mágico con un espíritu danzante.",
    fullDescription: "Esta conmovedora obra narra la historia de un joven que descubre su vocación a través de un encuentro místico. Combinando teatro, narración oral y la espectacular Danza de las Tijeras, la obra explora temas de identidad, herencia y el llamado del destino. Es una experiencia educativa y emocionante, ideal para toda la familia, que desmitifica y celebra una de las danzas más representativas del Perú.",
    image: "https://picsum.photos/seed/danzaq1/800/600",
  },
  {
    id: 'un-canto-para-mama',
    title: "Un canto para mamá",
    description: "Un homenaje para las madres luchadoras de todo Perú y para la Madre Tierra. Un recital sinfónico del legado de la música andina en nuestro país.",
    fullDescription: "Un concierto inolvidable que fusiona la riqueza de la música tradicional andina con arreglos sinfónicos contemporáneos. Dedicado a las madres peruanas y a la Pachamama, el repertorio incluye huaynos, yaravíes y mulizas interpretados por voces destacadas y una orquesta completa. Es una velada de profunda emoción, gratitud y celebración de la fuerza femenina.",
    image: "https://picsum.photos/seed/mama1/800/600",
  }
];

export default function CreacionSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof creacionData[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <section 
      id="creacion" 
      className="relative z-10 py-24 w-full min-h-[800px] flex flex-col justify-center"
    >
      {/* Glow Right */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <Link href="/creacion" className="group flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-1">Portafolio</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors duration-500 group-hover:text-amber-500 dark:group-hover:text-amber-500">
                Creación
              </h2>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
          <p className="text-amber-600/80 dark:text-amber-500/80 text-[10px] uppercase tracking-widest transition-colors duration-500">
            Descubrir
          </p>
        </div>

        <div className="relative w-full h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10 dark:opacity-20 transition-opacity duration-500">
            <Image src="/Ukhupacha negro.png" alt="Ukhupacha" width={600} height={600} className="object-contain dark:invert" />
          </div>

          {/* Plus Icon */}
          <Link href="/creacion" className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-amber-500/80 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-105 transition-all z-20 cursor-pointer">
            <div className="absolute inset-2 rounded-full border-2 border-amber-500/60" />
            <div className="w-16 h-4 md:w-24 md:h-6 bg-amber-500/80 rounded-full" />
            <div className="absolute w-4 h-16 md:w-6 md:h-24 bg-amber-500/80 rounded-full" />
          </Link>

          {/* Items */}
          <div className="w-full h-full relative z-10">
            {creacionData.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              const isEven = idx % 2 !== 0; // 1 is even (index 1) -> flex-row-reverse
              
              // Base positions for the diagonal layout
              const normalLeft = `${15 + idx * 17.5}%`;
              const normalTop = `${idx * 30}%`;
              
              // Expanded positions
              const expandedLeft = '10%';
              const expandedWidth = '80%';
              const normalWidth = '35%';
              
              // Bring currently hovered item to the very top to fix overlap
              const zIndex = isHovered ? 60 : 10 + idx;

              return (
                <motion.div 
                  key={idx}
                  layout
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`absolute h-[40%] flex ${isEven ? 'flex-row-reverse' : 'flex-row'} gap-6 cursor-pointer`}
                  style={{ 
                    top: normalTop,
                    zIndex
                  }}
                  animate={{
                    left: isHovered ? expandedLeft : normalLeft,
                    width: isHovered ? expandedWidth : normalWidth,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                >
                  {/* Image Box */}
                  <motion.div 
                    layout
                    className={`relative overflow-hidden border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.15)] rounded-2xl ${isHovered ? 'w-1/2' : 'w-full'} h-full transition-colors duration-500 ${isHovered ? 'border-amber-400' : ''}`}
                  >
                    <ExpandableImage src={item.image} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" />
                    <div className={`image-overlay absolute inset-0 bg-black/40 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
                  </motion.div>

                  {/* Text Box */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95, x: isEven ? 20 : -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: isEven ? 20 : -20 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-col justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-amber-500/30 p-8 rounded-2xl w-1/2 h-full shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-colors duration-500 overflow-hidden min-w-[280px]"
                      >
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-600 dark:text-amber-500 mb-4 transition-colors duration-500 whitespace-nowrap">{item.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500 mb-6 font-light italic line-clamp-3">{item.description}</p>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedItem(item);
                          }}
                          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold text-sm hover:text-amber-500 dark:hover:text-amber-400 transition-colors group self-start whitespace-nowrap"
                        >
                          Ver detalles
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-[60] bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm transition-colors duration-500"
            />
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-slate-900 border border-amber-500/40 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row pointer-events-auto shadow-[0_0_50px_rgba(245,158,11,0.15)] transition-colors duration-500"
              >
                {/* Left: Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                  <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white dark:from-slate-900 to-transparent opacity-90 md:opacity-60 transition-colors duration-500" />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 left-4 md:hidden p-2 bg-slate-900/20 dark:bg-black/50 rounded-full text-white hover:bg-slate-900/40 dark:hover:bg-black/80 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white transition-colors duration-500">{selectedItem.title}</h3>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="hidden md:flex p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 transition-colors duration-500 font-light italic">
                    {selectedItem.fullDescription}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-amber-500/20"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
