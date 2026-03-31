'use client';

import Sidebar from '@/components/sidebar';
import DynamicText from '@/components/dynamic-text';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowRight } from 'lucide-react';

const programas = [
  {
    id: 'talleres-formativos',
    title: 'Talleres formativos',
    subtitle: 'Danza de las Tijeras, Violín y Arpa',
    sumilla: 'Programas de formación integral donde herederos de la tradición comparten su maestría. Incluye la enseñanza de la Danza de las Tijeras, declarada Patrimonio de la Humanidad.',
    image: 'https://picsum.photos/seed/talleres1/800/600',
    details: [
      "Nivel básico, intermedio y avanzado",
      "Clases personalizadas y grupales",
      "Certificación por el Centro Cultural"
    ]
  },
  {
    id: 'funciones-didacticas',
    title: 'Funciones didácticas',
    subtitle: 'Mediación cultural para instituciones',
    sumilla: 'Experiencias escénicas diseñadas para colegios, universidades y grupos, fomentando la apreciación crítica y el vínculo con nuestras raíces.',
    image: 'https://picsum.photos/seed/funciones1/800/600',
    details: [
      "Guías pedagógicas incluidas",
      "Conversatorios post-función",
      "Adaptable a diferentes niveles educativos"
    ]
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
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-500 mb-4">Educación Viva</span>
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
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">Aprende con nosotros</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              Creemos en el poder del arte como herramienta de transformación social. Nuestros programas educativos están diseñados para acercar la riqueza de nuestra cultura a las nuevas generaciones.
            </p>
          </div>

          <div className="space-y-40">
            {programas.map((programa, idx) => (
              <div key={programa.id} className="relative">
                {idx > 0 && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-16 bg-emerald-500/30" />
                )}
                <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                  <div 
                    className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/10 group"
                  >
                    <Image src={programa.image} alt={programa.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">{programa.title}</h3>
                    <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 mb-8 uppercase tracking-[0.2em] border-l-2 border-emerald-500 pl-4">{programa.subtitle}</p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 font-light italic">
                      {programa.sumilla}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4 mb-10">
                      {programa.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {detail}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link href={`/educatividad/${programa.id}`} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2 group">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="px-8 py-4 border border-emerald-600 text-emerald-600 dark:text-emerald-500 font-bold rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all">
                        Inscribirse
                      </button>
                    </div>
                  </div>
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
