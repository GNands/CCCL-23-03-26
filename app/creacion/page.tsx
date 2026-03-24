'use client';

import Sidebar from '@/components/sidebar';
import DynamicText from '@/components/dynamic-text';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowRight } from 'lucide-react';

const proyectos = [
  {
    id: 'hatun-yaku-raymi',
    title: 'Hatun Yaku Raymi',
    subtitle: 'Estreno: 20XX, Gran Teatro Nacional del Perú.',
    sumilla: '"La Gran Fiesta del Agua" es un espectáculo que celebra la festividad andina de agradecimiento a la Pachamama por sus infinitas bondades.',
    image: 'https://picsum.photos/seed/yaku1/800/600',
  },
  {
    id: 'leyenda-nino-danzaq',
    title: 'La Leyenda del Niño Danzaq',
    subtitle: 'Estreno: 20XX, Gran Teatro Nacional del Perú.',
    sumilla: 'Narración oral escenificada que cuenta el origen de la danza de tijeras, a través de la vivencia de un niño campesino y su encuentro mágico con un espíritu danzante.',
    image: 'https://picsum.photos/seed/danzaq1/800/600',
  },
  {
    id: 'un-canto-para-mama',
    title: 'Un Canto para Mamá',
    subtitle: 'Un homenaje para las madres luchadoras de todo Perú y para la Madre Tierra.',
    sumilla: 'Un recital sinfónico del legado de la música andina en nuestro país.',
    image: 'https://picsum.photos/seed/mama1/800/600',
  }
];

export default function CreacionPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 transition-colors duration-500">
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            Una ventana creativa a <DynamicText words={["nuestra cultura", "nuevas experiencias", "historias únicas"]} highlightClass="text-amber-500" />
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200 transition-colors duration-500 italic">
            Un amplio abanico de experiencias escénicas
          </h2>
        </div>
      </section>

      {/* Listado de producciones */}
      <section className="relative z-10 py-24 w-full">
        <div className="relative z-10 px-6 lg:px-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 mb-4">Portafolio</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">¡Celebramos el Perú y su herencia!</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              En el Centro Cultural Chimango Lares hemos asumido el desafío creativo de tomar la esencia de nuestra cultura, sus luces y sombras, y transformarla en piezas artísticas que celebren los lazos imperecederos que nos unen y las raíces que nos alimentan.
            </p>
          </div>

          <div className="space-y-32">
            {proyectos.map((proyecto, idx) => (
              <div key={proyecto.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div 
                  className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-amber-500/10 group"
                >
                  <Image src={proyecto.image} alt={proyecto.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">{proyecto.title}</h3>
                  <p className="text-[10px] font-bold text-amber-600 dark:text-amber-500 mb-6 uppercase tracking-[0.2em] border-l-2 border-amber-500 pl-4">{proyecto.subtitle}</p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light">
                    {proyecto.sumilla}
                  </p>
                  <Link href={`/creacion/${proyecto.id}`} className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold text-sm hover:gap-3 transition-all group">
                    Explorar Proyecto
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
