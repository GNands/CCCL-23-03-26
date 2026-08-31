'use client';

import Sidebar from '@/components/sidebar';
import DynamicText from '@/components/dynamic-text';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowRight } from 'lucide-react';
import CreacionSection from '@/components/creacion-section';

const proyectos = [
  {
    id: 'hatun-yaku-raymi',
    title: 'Hatun Yaku Raymi',
    subtitle: 'Estreno: 20XX, Gran Teatro Nacional del Perú.',
    sumilla: '"La Gran Fiesta del Agua" es un espectáculo que celebra la festividad andina de agradecimiento a la Pachamama por sus infinitas bondades.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'leyenda-nino-danzaq',
    title: 'La Leyenda del Niño Danzaq',
    subtitle: 'Estreno: 20XX, Gran Teatro Nacional del Perú.',
    sumilla: 'Narración oral escenificada que cuenta el origen de la danza de tijeras, a través de la vivencia de un niño campesino y su encuentro mágico con un espíritu danzante.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'un-canto-para-mama',
    title: 'Un Canto para Mamá',
    subtitle: 'Un homenaje para las madres luchadoras de todo Perú y para la Madre Tierra.',
    sumilla: 'Un recital sinfónico del legado de la música andina en nuestro país.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'pachamama-raymi',
    title: 'Pachamama Raymi',
    subtitle: 'Ritual sagrado de agradecimiento a la tierra.',
    sumilla: 'Una puesta en escena que recrea los ancestrales ritos de fertilidad y conexión con el suelo que nos sustenta.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'apus-y-danza',
    title: 'Apus y Danza',
    subtitle: 'Diálogo místico con las montañas sagradas.',
    sumilla: 'Coreografía que explora la relación entre el hombre y los espíritus protectores de los Andes.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'ritmos-del-sol',
    title: 'Ritmos del Sol',
    subtitle: 'Percusión y movimiento solar.',
    sumilla: 'Ensamble rítmico que celebra los ciclos de la luz y la energía vital del astro rey.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'voces-de-la-quechua',
    title: 'Voces de la Quechua',
    subtitle: 'Recital poético en lengua originaria.',
    sumilla: 'Un viaje sonoro a través de la palabra y el canto en nuestra lengua materna.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=80',
  }
];

export default function CreacionPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-amber-500/30 transition-colors duration-500">
      <Sidebar />
      
      {/* Portada */}
      <section className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&auto=format&fit=crop&q=80"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/50 dark:via-slate-950/50 to-transparent pointer-events-none z-0 transition-colors duration-500" />

        <div className="relative z-10 px-6 lg:px-10 max-w-4xl mx-auto flex flex-col items-center w-full mt-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 mb-4">Artes Escénicas & Conciertos</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            Una ventana creativa a <DynamicText words={["Nuestra Cultura", "Nuevas Experiencias", "Historias Únicas"]} highlightClass="text-amber-500" />
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200 transition-colors duration-500 italic">
            Un amplio abanico de experiencias escénicas
          </h2>
        </div>
      </section>

      {/* Primer Sección Destacada: Último Espectáculo & Detrás de Escena (Composición Bento) */}
      <section className="relative z-10 py-24 w-full overflow-hidden bg-slate-900 text-white">
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                Último Espectáculo Realizado
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Hatun Yaku Raymi <span className="italic font-light text-slate-400 block text-2xl md:text-3xl mt-1">&quot;La Gran Fiesta del Agua&quot;</span>
              </h2>
            </div>
            <div className="text-left md:text-right max-w-md">
              <p className="text-slate-300 font-light text-sm leading-relaxed mb-4">
                Estreno absoluto en el Gran Teatro Nacional con más de 50 artistas en escena, orquesta andina en vivo y un despliegue escenográfico sin precedentes.
              </p>
              <Link 
                href="/creacion/hatun-yaku-raymi"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-widest"
              >
                <span>Conocer esta producción</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[540px]">
            {/* Main Stage Spotlight */}
            <Link href="/creacion/hatun-yaku-raymi" className="md:col-span-2 min-h-[300px] relative group overflow-hidden rounded-3xl border border-amber-500/30 hover:border-amber-500 transition-all shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1000&auto=format&fit=crop&q=80" 
                alt="Hatun Yaku Raymi en Vivo" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1 block">Puesta en Escena</span>
                <h4 className="text-xl md:text-2xl font-bold font-serif text-white">Gran Teatro Nacional — Temporada Principal</h4>
              </div>
            </Link>

            {/* Behind the scenes: Ensayos */}
            <div className="relative min-h-[250px] group overflow-hidden rounded-3xl border border-amber-500/20 hover:border-amber-500 transition-all shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80" 
                alt="Ensayos de Danza de Tijeras" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1 block">Proceso Creativo</span>
                <h4 className="text-base font-bold text-white leading-snug">La disciplina de los ensayos</h4>
              </div>
            </div>

            {/* Behind the scenes: Vestuario y Talleres */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1 min-h-[140px] group overflow-hidden rounded-2xl border border-amber-500/20 hover:border-amber-500 transition-all shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=600&auto=format&fit=crop&q=80" 
                  alt="Instrumentos y Sonoridades" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400 block">Artesanía Sonora</span>
                  <h5 className="text-xs font-bold text-white">Arpas y violines maestros</h5>
                </div>
              </div>
              <div className="relative flex-1 min-h-[140px] group overflow-hidden rounded-2xl border border-amber-500/20 hover:border-amber-500 transition-all shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80" 
                  alt="Vestuario Bordado a Mano" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400 block">Indumentaria</span>
                  <h5 className="text-xs font-bold text-white">Bordados tradicionales</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Librero Section */}
      <CreacionSection />

      {/* Listado de producciones */}
      <section className="relative z-10 py-24 w-full">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="text-center mb-24 px-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 mb-4">Portafolio</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-8">¡Celebramos el Perú y su herencia!</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
              En el Centro Cultural Chimango Lares hemos asumido el desafío creativo de tomar la esencia de nuestra cultura, sus luces y sombras, y transformarla en piezas artísticas que celebren los lazos imperecederos que nos unen y las raíces que nos alimentan.
            </p>
          </div>

          <div className="space-y-48">
            {proyectos.map((proyecto, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <div key={proyecto.id} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-0`}>
                  {/* Image Container - Full bleed to one side */}
                  <div className={`w-full md:w-3/5 relative aspect-[16/9] md:aspect-[21/9] overflow-hidden group ${isEven ? 'md:pl-0' : 'md:pr-0'}`}>
                    <div className={`absolute inset-0 ${isEven ? 'md:rounded-r-3xl' : 'md:rounded-l-3xl'} overflow-hidden`}>
                      <Image 
                        src={proyecto.image} 
                        alt={proyecto.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className={`w-full md:w-2/5 px-6 md:px-16 lg:px-24 flex flex-col justify-center ${isEven ? 'text-right items-end' : 'text-left items-start'}`}>
                    <span className="text-amber-600 dark:text-amber-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Producción Original</span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">{proyecto.title}</h3>
                    <p className="text-[10px] font-bold text-amber-600 dark:text-amber-500 mb-8 uppercase tracking-[0.2em] border-l-2 md:border-l-0 md:border-b-2 border-amber-500 pl-4 md:pl-0 md:pb-2 inline-block">{proyecto.subtitle}</p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light max-w-md">
                      {proyecto.sumilla}
                    </p>
                    <Link href={`/creacion/${proyecto.id}`} className="inline-flex items-center gap-3 text-amber-600 dark:text-amber-500 font-bold text-sm uppercase tracking-widest group">
                      <span className="border-b border-transparent group-hover:border-amber-500 transition-all">Explorar Proyecto</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isEven ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
