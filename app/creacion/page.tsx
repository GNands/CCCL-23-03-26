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
    image: 'https://picsum.photos/seed/yaku1/1200/800',
  },
  {
    id: 'leyenda-nino-danzaq',
    title: 'La Leyenda del Niño Danzaq',
    subtitle: 'Estreno: 20XX, Gran Teatro Nacional del Perú.',
    sumilla: 'Narración oral escenificada que cuenta el origen de la danza de tijeras, a través de la vivencia de un niño campesino y su encuentro mágico con un espíritu danzante.',
    image: 'https://picsum.photos/seed/danzaq1/1200/800',
  },
  {
    id: 'un-canto-para-mama',
    title: 'Un Canto para Mamá',
    subtitle: 'Un homenaje para las madres luchadoras de todo Perú y para la Madre Tierra.',
    sumilla: 'Un recital sinfónico del legado de la música andina en nuestro país.',
    image: 'https://picsum.photos/seed/mama1/1200/800',
  },
  {
    id: 'pachamama-raymi',
    title: 'Pachamama Raymi',
    subtitle: 'Ritual sagrado de agradecimiento a la tierra.',
    sumilla: 'Una puesta en escena que recrea los ancestrales ritos de fertilidad y conexión con el suelo que nos sustenta.',
    image: 'https://picsum.photos/seed/pacha1/1200/800',
  },
  {
    id: 'apus-y-danza',
    title: 'Apus y Danza',
    subtitle: 'Diálogo místico con las montañas sagradas.',
    sumilla: 'Coreografía que explora la relación entre el hombre y los espíritus protectores de los Andes.',
    image: 'https://picsum.photos/seed/apus1/1200/800',
  },
  {
    id: 'ritmos-del-sol',
    title: 'Ritmos del Sol',
    subtitle: 'Percusión y movimiento solar.',
    sumilla: 'Ensamble rítmico que celebra los ciclos de la luz y la energía vital del astro rey.',
    image: 'https://picsum.photos/seed/sol1/1200/800',
  },
  {
    id: 'voces-de-la-quechua',
    title: 'Voces de la Quechua',
    subtitle: 'Recital poético en lengua originaria.',
    sumilla: 'Un viaje sonoro a través de la palabra y el canto en nuestra lengua materna.',
    image: 'https://picsum.photos/seed/quechua1/1200/800',
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
          poster="https://picsum.photos/seed/creacion-poster/1920/1080?blur=10"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/50 dark:via-slate-950/50 to-transparent pointer-events-none z-0 transition-colors duration-500" />

        <div className="relative z-10 px-6 lg:px-10 max-w-4xl mx-auto flex flex-col items-center w-full mt-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 mb-4">Artes Escénicas & Conciertos</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            Una ventana creativa a <DynamicText words={["nuestra cultura", "nuevas experiencias", "historias únicas"]} highlightClass="text-amber-500" />
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200 transition-colors duration-500 italic">
            Un amplio abanico de experiencias escénicas
          </h2>
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
