'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

const creacionData = [
  {
    id: 'hatun-yaku-raymi',
    title: "Hatun Yaku Raymi",
    subtitle: "Artes Escénicas & Conciertos",
    description: "\"La Gran Fiesta del Agua\" es un espectáculo que celebra la festividad andina de agradecimiento a la Pachamama por sus infinitas bondades.",
    fullDescription: "Hatun Yaku Raymi es una celebración vibrante que rinde homenaje al agua como fuente de vida. A través de danzas ancestrales, música en vivo y rituales tradicionales, este espectáculo transporta al espectador al corazón de los Andes, donde la conexión con la naturaleza es sagrada. La puesta en escena incluye más de 50 artistas, vestuarios coloridos y una narrativa que resalta la importancia de la conservación ambiental desde la cosmovisión andina.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'la-leyenda-del-nino-danzaq',
    title: "La leyenda del Niño Danzaq",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Narración oral escenificada que cuenta el origen de la danza de tijeras, a través de la vivencia de un niño campesino y su encuentro mágico con un espíritu danzante.",
    fullDescription: "Esta conmovedora obra narra la historia de un joven que descubre su vocación a través de un encuentro místico. Combinando teatro, narración oral y la espectacular Danza de las Tijeras, la obra explora temas de identidad, herencia y el llamado del destino. Es una experiencia educativa y emocionante, ideal para toda la familia, que desmitifica y celebra una de las danzas más representativas del Perú.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'un-canto-para-mama',
    title: "Un canto para mamá",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Un homenaje para las madres luchadoras de todo Perú y para la Madre Tierra. Un recital sinfónico del legado de la música andina en nuestro país.",
    fullDescription: "Un concierto inolvidable que fusiona la riqueza de la música tradicional andina con arreglos sinfónicos contemporáneos. Dedicado a las madres peruanas y a la Pachamama, el repertorio incluye huaynos, yaravíes y mulizas interpretados por voces destacadas y una orquesta completa. Es una velada de profunda emoción, gratitud y celebración de la fuerza femenina.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'pachamama-raymi',
    title: "Pachamama Raymi",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Celebración de la fertilidad de la tierra a través de rituales y danzas sagradas.",
    fullDescription: "Un espectáculo inmersivo que recrea los rituales de pago a la tierra. Con una escenografía naturalista y música acústica, los espectadores participan en una experiencia espiritual que conecta el pasado incaico con el presente agrícola de los Andes.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'apus-y-danza',
    title: "Apus y Danza",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Diálogo entre los espíritus de las montañas y los danzantes de tijeras.",
    fullDescription: "Una obra coreográfica que explora la relación entre el hombre y las montañas sagradas (Apus). Los danzantes desafían la gravedad en una serie de acrobacias que simbolizan el ascenso espiritual y la protección divina.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'ritmos-del-sol',
    title: "Ritmos del Sol",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Percusión y movimiento inspirados en los ciclos solares andinos.",
    fullDescription: "Un ensamble de percusión andina que utiliza instrumentos tradicionales y contemporáneos para narrar el viaje del sol a través de las estaciones. Una explosión de energía y ritmo que invita al movimiento.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'voces-de-la-quechua',
    title: "Voces de la Quechua",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Recital poético y musical en lengua originaria.",
    fullDescription: "Una selección de poemas y canciones en quechua que resaltan la belleza y profundidad de la lengua materna. Con subtítulos proyectados, la obra busca revalorizar el idioma y su cosmovisión.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'vientos-de-ayacucho',
    title: "Vientos de Ayacucho",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Melodías de quenas y antaras que recorren la historia.",
    fullDescription: "Un ensamble de vientos que explora las diferentes sonoridades de la región ayacuchana a través de los siglos, desde lo prehispánico hasta lo contemporáneo.",
    image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'tejidos-de-luz',
    title: "Tejidos de Luz",
    subtitle: "Artes Escénicas & Conciertos",
    description: "La iconografía andina transformada en movimiento.",
    fullDescription: "Espectáculo visual donde los diseños de los telares tradicionales cobran vida a través de la danza contemporánea y proyecciones de video mapping.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 'memoria-del-arpa',
    title: "Memoria del Arpa",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Solo de arpa andina evocando paisajes sonoros.",
    fullDescription: "Un concierto íntimo que destaca la versatilidad y el sentimiento del arpa en la música tradicional peruana, interpretado por maestros de gran trayectoria.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
  }
];

export default function CreacionSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof creacionData[0] | null>(null);
  const [modalTab, setModalTab] = useState<'info' | 'galeria' | 'medios'>('info');

  const handleSelectItem = (item: typeof creacionData[0]) => {
    setModalTab('info');
    setSelectedItem(item);
  };

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
      className="relative z-10 py-32 w-full min-h-screen flex flex-col justify-center bg-stone-50 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="relative z-10 px-6 lg:px-10 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="group flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 font-bold mb-2">Portafolio</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Creación
              </h2>
            </div>
          </div>
          <div className="max-w-md text-right md:text-right">
            <p className="text-amber-600 dark:text-amber-500 text-xs uppercase tracking-widest font-bold mb-2">
              Artes Escénicas & Conciertos
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed">
              Explora nuestras producciones originales donde la tradición se encuentra con la vanguardia escénica.
            </p>
          </div>
        </div>

        {/* Bookshelf Layout */}
        <div className="flex h-[700px] w-full gap-2 md:gap-4 overflow-hidden rounded-3xl border border-amber-500/10 shadow-2xl bg-white dark:bg-slate-900">
          {creacionData.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleSelectItem(item)}
                className="relative h-full flex-1 cursor-pointer overflow-hidden border-r border-amber-500/10 last:border-r-0 group select-none"
                animate={{
                  flex: isHovered ? 4 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background Image (Visible on hover with smooth fade) */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className={`object-cover transition-all duration-700 ease-out ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Vertical Title (Fades in/out smoothly in pure disolvencia) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 dark:text-white whitespace-nowrap -rotate-90 uppercase tracking-widest">
                    {item.title}
                  </h3>
                </div>

                {/* Expanded Content (Fades in smoothly after the image has loaded/expanded) */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-all ease-out ${
                  isHovered 
                    ? 'opacity-100 translate-y-0 duration-500 delay-300 pointer-events-auto' 
                    : 'opacity-0 translate-y-3 duration-200 delay-0 pointer-events-none'
                }`}>
                  <div className="max-w-lg">
                    <span className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">{item.subtitle}</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 leading-tight">{item.title}</h3>
                    <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest group/btn">
                      <span className="border-b border-amber-500 pb-0.5">Ver detalles</span>
                      <ArrowRight className="w-4 h-4 text-amber-500 group-hover/btn:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Index Number */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-10 pointer-events-none">
                  <span className="text-amber-600/30 dark:text-amber-500/30 font-serif italic text-4xl drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.2)] border border-amber-500/20 flex flex-col lg:flex-row h-full max-h-[88vh]"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 p-2.5 bg-slate-900/60 hover:bg-amber-500 text-white rounded-full transition-all hover:scale-110 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Side */}
              <div className="relative w-full lg:w-5/12 h-64 lg:h-auto min-h-[300px]">
                <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Text Side & Tabs */}
              <div className="w-full lg:w-7/12 p-8 md:p-12 overflow-y-auto flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-600 dark:text-amber-500 font-bold text-xs uppercase tracking-[0.3em]">Producción Original</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {selectedItem.title}
                  </h2>
                  
                  {/* Modal Tabs Bar */}
                  <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
                    <button 
                      onClick={() => setModalTab('info')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        modalTab === 'info' 
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
                      }`}
                    >
                      Información
                    </button>
                    <button 
                      onClick={() => setModalTab('galeria')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        modalTab === 'galeria' 
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
                      }`}
                    >
                      Galería
                    </button>
                    <button 
                      onClick={() => setModalTab('medios')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        modalTab === 'medios' 
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
                      }`}
                    >
                      Impacto en Medios
                    </button>
                  </div>

                  {/* Tab Content: Información */}
                  {modalTab === 'info' && (
                    <div className="space-y-6 text-slate-600 dark:text-slate-300 animate-fadeIn">
                      <div className="p-5 bg-amber-50 dark:bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl italic font-serif text-base text-slate-800 dark:text-amber-100">
                        &quot;{selectedItem.description}&quot;
                      </div>
                      
                      <div className="space-y-4 text-base font-light leading-relaxed">
                        <p>{selectedItem.fullDescription}</p>
                        <p>
                          Cada detalle de esta producción ha sido cuidadosamente diseñado para honrar nuestras raíces andinas con una propuesta estética vanguardista.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tab Content: Galería */}
                  {modalTab === 'galeria' && (
                    <div className="grid grid-cols-2 gap-3 animate-fadeIn">
                      <div className="relative h-32 rounded-2xl overflow-hidden border border-amber-500/20 group">
                        <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80" alt="Producción" fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="relative h-32 rounded-2xl overflow-hidden border border-amber-500/20 group">
                        <Image src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80" alt="Ensayo" fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="relative h-32 rounded-2xl overflow-hidden border border-amber-500/20 group">
                        <Image src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=600&auto=format&fit=crop&q=80" alt="Vestuario" fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="relative h-32 rounded-2xl overflow-hidden border border-amber-500/20 group">
                        <Image src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80" alt="Detalle" fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                    </div>
                  )}

                  {/* Tab Content: Impacto en Medios */}
                  {modalTab === 'medios' && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">El Comercio — Sección Luces</span>
                          <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Crítica Teatral</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                          &quot;Una obra monumental que revitaliza el misticismo andino. La destreza escénica y musical sitúa a Chimango Lares como referente cultural del país.&quot;
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">TV Perú Noticias</span>
                          <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Cobertura Especial</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                          &quot;Lleno total en el Gran Teatro Nacional. Una ovación de pie coronó el estreno de una producción sin precedentes.&quot;
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">Revista Caretas</span>
                          <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Reseña Cultural</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                          &quot;La conjunción de violín tradicional, danza de tijeras e iluminación contemporánea crea una experiencia que conmueve el alma.&quot;
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4">
                  <Link 
                    href="/agenda"
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:shadow-lg hover:shadow-amber-500/20 inline-flex items-center gap-2"
                  >
                    Consultar Fechas en Agenda
                  </Link>
                  <Link 
                    href={`/creacion/${selectedItem.id}`}
                    className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-amber-500 text-slate-900 dark:text-white rounded-full font-bold uppercase text-xs tracking-widest transition-all"
                  >
                    Página del Proyecto
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
