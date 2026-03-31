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
    image: "https://picsum.photos/seed/yaku1/800/1200",
  },
  {
    id: 'la-leyenda-del-nino-danzaq',
    title: "La leyenda del Niño Danzaq",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Narración oral escenificada que cuenta el origen de la danza de tijeras, a través de la vivencia de un niño campesino y su encuentro mágico con un espíritu danzante.",
    fullDescription: "Esta conmovedora obra narra la historia de un joven que descubre su vocación a través de un encuentro místico. Combinando teatro, narración oral y la espectacular Danza de las Tijeras, la obra explora temas de identidad, herencia y el llamado del destino. Es una experiencia educativa y emocionante, ideal para toda la familia, que desmitifica y celebra una de las danzas más representativas del Perú.",
    image: "https://picsum.photos/seed/danzaq1/800/1200",
  },
  {
    id: 'un-canto-para-mama',
    title: "Un canto para mamá",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Un homenaje para las madres luchadoras de todo Perú y para la Madre Tierra. Un recital sinfónico del legado de la música andina en nuestro país.",
    fullDescription: "Un concierto inolvidable que fusiona la riqueza de la música tradicional andina con arreglos sinfónicos contemporáneos. Dedicado a las madres peruanas y a la Pachamama, el repertorio incluye huaynos, yaravíes y mulizas interpretados por voces destacadas y una orquesta completa. Es una velada de profunda emoción, gratitud y celebración de la fuerza femenina.",
    image: "https://picsum.photos/seed/mama1/800/1200",
  },
  {
    id: 'pachamama-raymi',
    title: "Pachamama Raymi",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Celebración de la fertilidad de la tierra a través de rituales y danzas sagradas.",
    fullDescription: "Un espectáculo inmersivo que recrea los rituales de pago a la tierra. Con una escenografía naturalista y música acústica, los espectadores participan en una experiencia espiritual que conecta el pasado incaico con el presente agrícola de los Andes.",
    image: "https://picsum.photos/seed/pacha1/800/1200",
  },
  {
    id: 'apus-y-danza',
    title: "Apus y Danza",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Diálogo entre los espíritus de las montañas y los danzantes de tijeras.",
    fullDescription: "Una obra coreográfica que explora la relación entre el hombre y las montañas sagradas (Apus). Los danzantes desafían la gravedad en una serie de acrobacias que simbolizan el ascenso espiritual y la protección divina.",
    image: "https://picsum.photos/seed/apus1/800/1200",
  },
  {
    id: 'ritmos-del-sol',
    title: "Ritmos del Sol",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Percusión y movimiento inspirados en los ciclos solares andinos.",
    fullDescription: "Un ensamble de percusión andina que utiliza instrumentos tradicionales y contemporáneos para narrar el viaje del sol a través de las estaciones. Una explosión de energía y ritmo que invita al movimiento.",
    image: "https://picsum.photos/seed/sol1/800/1200",
  },
  {
    id: 'voces-de-la-quechua',
    title: "Voces de la Quechua",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Recital poético y musical en lengua originaria.",
    fullDescription: "Una selección de poemas y canciones en quechua que resaltan la belleza y profundidad de la lengua materna. Con subtítulos proyectados, la obra busca revalorizar el idioma y su cosmovisión.",
    image: "https://picsum.photos/seed/quechua1/800/1200",
  },
  {
    id: 'vientos-de-ayacucho',
    title: "Vientos de Ayacucho",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Melodías de quenas y antaras que recorren la historia.",
    fullDescription: "Un ensamble de vientos que explora las diferentes sonoridades de la región ayacuchana a través de los siglos, desde lo prehispánico hasta lo contemporáneo.",
    image: "https://picsum.photos/seed/vientos1/800/1200",
  },
  {
    id: 'tejidos-de-luz',
    title: "Tejidos de Luz",
    subtitle: "Artes Escénicas & Conciertos",
    description: "La iconografía andina transformada en movimiento.",
    fullDescription: "Espectáculo visual donde los diseños de los telares tradicionales cobran vida a través de la danza contemporánea y proyecciones de video mapping.",
    image: "https://picsum.photos/seed/tejidos1/800/1200",
  },
  {
    id: 'memoria-del-arpa',
    title: "Memoria del Arpa",
    subtitle: "Artes Escénicas & Conciertos",
    description: "Solo de arpa andina evocando paisajes sonoros.",
    fullDescription: "Un concierto íntimo que destaca la versatilidad y el sentimiento del arpa en la música tradicional peruana, interpretado por maestros de gran trayectoria.",
    image: "https://picsum.photos/seed/arpa1/800/1200",
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
                onClick={() => setSelectedItem(item)}
                className="relative h-full flex-1 cursor-pointer overflow-hidden border-r border-amber-500/10 last:border-r-0 group"
                animate={{
                  flex: isHovered ? 4 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background Image (Visible on hover) */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className={`object-cover transition-all duration-700 ${isHovered ? 'scale-105 opacity-100' : 'scale-110 opacity-0'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Vertical Title (Visible when NOT hovered) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 dark:text-white whitespace-nowrap -rotate-90 uppercase tracking-widest">
                    {item.title}
                  </h3>
                </div>

                {/* Content (Visible on hover) */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{item.subtitle}</span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed max-w-md mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest group/btn">
                    <span>Ver detalles</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Index Number */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-10">
                  <span className="text-amber-600/30 dark:text-amber-500/30 font-serif italic text-4xl">0{idx + 1}</span>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.2)] flex flex-col lg:flex-row h-full max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-8 right-8 z-50 p-3 bg-black/20 hover:bg-amber-500 text-white rounded-full transition-all hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Side */}
              <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 p-10 md:p-16 overflow-y-auto custom-scrollbar">
                <span className="text-amber-600 dark:text-amber-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Producción Original</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                  {selectedItem.title}
                </h2>
                
                <div className="space-y-8 text-slate-600 dark:text-slate-300">
                  <div className="p-6 bg-amber-50 dark:bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl italic font-serif text-lg">
                    &quot;{selectedItem.description}&quot;
                  </div>
                  
                  <div className="space-y-6 text-lg font-light leading-relaxed text-justify">
                    <p>{selectedItem.fullDescription}</p>
                    <p>
                      Cada detalle de esta producción ha sido cuidadosamente diseñado para honrar nuestras raíces mientras exploramos nuevas formas de expresión artística. Desde el vestuario hasta la composición musical, buscamos la excelencia en cada paso.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:shadow-lg hover:shadow-amber-500/20">
                      Consultar Fechas
                    </button>
                    <button className="px-8 py-4 border border-slate-200 dark:border-slate-700 hover:border-amber-500 text-slate-900 dark:text-white rounded-full font-bold uppercase text-xs tracking-widest transition-all">
                      Galería de Fotos
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
