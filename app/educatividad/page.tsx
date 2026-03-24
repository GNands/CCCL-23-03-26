'use client';

import Sidebar from '@/components/sidebar';
import DynamicText from '@/components/dynamic-text';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowRight } from 'lucide-react';

const programas = [
  {
    id: 'danza-de-las-tijeras',
    title: 'Danza de las Tijeras',
    subtitle: 'Sinónimo de tradición, conexión espiritual y resistencia cultural, declarado Patrimonio Cultural de la Humanidad.',
    sumilla: 'Aprende los secretos y la destreza de esta danza milenaria, guiado por maestros herederos de la tradición.',
    image: 'https://picsum.photos/seed/tijeras1/800/600',
  },
  {
    id: 'talleres-formativos',
    title: 'Talleres formativos',
    subtitle: 'El violín, el arpa y la danza, esencia del arte Chanka.',
    sumilla: 'Programas de formación musical y dancística para todas las edades, enfocados en la preservación de nuestras raíces.',
    image: 'https://picsum.photos/seed/talleres1/800/600',
  },
  {
    id: 'funciones-didacticas',
    title: 'Funciones didácticas',
    subtitle: 'Experimenta el poder transformador de las artes y las manifestaciones andinas.',
    sumilla: 'Presentaciones interactivas diseñadas para escuelas y grupos, donde el aprendizaje se vive a través del arte en escena.',
    image: 'https://picsum.photos/seed/funciones1/800/600',
  }
];

export default function EducatividadPage() {
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
          poster="https://picsum.photos/seed/educatividad-poster/1920/1080?blur=10"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/50 dark:via-slate-950/50 to-transparent pointer-events-none z-0 transition-colors duration-500" />

        <div className="relative z-10 px-6 lg:px-10 max-w-4xl mx-auto flex flex-col items-center w-full mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            El arte que <DynamicText words={["transforma", "educa", "Conecta", "Perdura"]} highlightClass="text-emerald-500" />
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200 transition-colors duration-500 italic">
            Descubre nuestros programas de formación y mediación cultural
          </h2>
        </div>
      </section>

      {/* Listado de programas */}
      <section className="relative z-10 py-24 w-full">
        <div className="relative z-10 px-6 lg:px-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-500 mb-4">Educación Viva</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">Aprende con nosotros</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              Creemos en el poder del arte como herramienta de transformación social. Nuestros programas educativos están diseñados para acercar la riqueza de nuestra cultura a las nuevas generaciones.
            </p>
          </div>

          <div className="space-y-32">
            {programas.map((programa, idx) => (
              <div key={programa.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div 
                  className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/10 group"
                >
                  <Image src={programa.image} alt={programa.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">{programa.title}</h3>
                  <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 mb-6 uppercase tracking-[0.2em] border-l-2 border-emerald-500 pl-4">{programa.subtitle}</p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light">
                    {programa.sumilla}
                  </p>
                  <Link href={`/educatividad/${programa.id}`} className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-bold text-sm hover:gap-3 transition-all group">
                    Explorar Programa
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
