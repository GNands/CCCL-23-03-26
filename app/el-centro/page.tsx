'use client';

import Sidebar from '@/components/sidebar';
import Timeline from '@/components/timeline';
import ElCentroTabs from '@/components/el-centro-tabs';
import DynamicText from '@/components/dynamic-text';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { Calendar, User, History, Users } from 'lucide-react';

export default function ElCentroPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      {/* Portada */}
      <section className="relative z-10 py-24 w-full flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/20 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center w-full">
          <div className="max-w-4xl mb-16 space-y-6 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-2 block">Identidad & Cultura</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">
              <DynamicText 
                staticText="Somos" 
                words={["chankas", "Peruanos", "Creadores Orgullosos"]} 
                highlightClass="text-amber-500"
              />
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif italic font-medium text-slate-800 dark:text-slate-200 transition-colors duration-500">
              Preservamos nuestra identidad para las futuras generaciones.
            </h2>
          </div>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 group">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://picsum.photos/seed/centro-video/1920/1080?blur=10"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white text-xl font-serif italic">Nuestra esencia en movimiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section (Quiénes somos & Qué perseguimos) */}
      <ElCentroTabs />

      {/* El Director */}
      <section id="director" className="relative z-10 py-32 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
                <Image src="https://picsum.photos/seed/director/800/1000" alt="El Director" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 border border-amber-500/30 p-6 rounded-2xl shadow-xl">
                <User className="w-8 h-8 text-amber-600 mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest text-amber-500">Director General</p>
                <p className="text-xl font-serif font-bold">Juan Andrés Lares</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold block">Liderazgo</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white">El Director</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed italic">
                &quot;Mi misión es que el violín andino nunca deje de cantar y que nuestras raíces sigan nutriendo el futuro de nuestra nación.&quot;
              </p>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>Como director del Centro Cultural, Juan Andrés Lares León lidera la visión estratégica de preservación y creación. Su enfoque combina la maestría técnica del violín con una profunda comprensión de la gestión cultural comunitaria.</p>
                <p>Bajo su dirección, el centro se ha convertido en un faro de innovación, donde las artes escénicas tradicionales se encuentran con nuevas formas de expresión contemporánea.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Legado */}
      <section id="legado" className="relative z-10 py-32 w-full bg-stone-100 dark:bg-slate-900 border-y border-amber-500/10">
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-4 block">Nuestra Historia</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">El legado</h2>
              <h3 className="text-2xl text-amber-600 dark:text-amber-500 font-serif italic font-medium mb-10">Nuestro fundador.</h3>
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/30">
                <Image src="https://picsum.photos/seed/chimango/1000/1200" alt="Chimango Lares" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white dark:bg-black border-2 border-amber-500/80 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-justify text-lg font-light">
                  <p>
                    <span className="font-serif text-2xl text-amber-600 dark:text-amber-500 font-bold mr-1">Juan Andrés Lares León</span> (Ayacucho, 1957), más conocido como &quot;Chimango Lares&quot;, es el pilar sobre el cual se construye este centro. Su vida es un testimonio de resistencia y amor por la cultura ayacuchana.
                  </p>
                  <p>
                    Considerado el &quot;Primer Violín Andino del Perú&quot;, ha dedicado décadas al rescate de la Danza de las Tijeras y otras manifestaciones ancestrales, llevando el sonido de los Andes a los escenarios más prestigiosos del mundo.
                  </p>
                  <p>
                    Su legado no es solo musical; es una filosofía de vida que enseña que la tradición no es algo estático, sino una fuerza viva que debe ser renovada constantemente para permanecer relevante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los Nietos */}
      <section id="nietos" className="relative z-10 py-32 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-4 block">Sucesión</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white">Los Nietos</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">La tercera generación que abraza la herencia con una visión renovada y contemporánea.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Nieto Hombre */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] border border-amber-500/20">
              <Image src="https://picsum.photos/seed/nieto/800/1200" alt="Nieto" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Andrés Lares Jr.</h3>
                <p className="text-amber-500 font-serif italic text-lg mb-4">Danzante de Tijeras & Músico</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Lleva en sus pies el ritmo de la tierra y en sus manos la destreza del violín, fusionando la técnica clásica con la energía de la juventud.
                </p>
              </div>
            </div>

            {/* Nieta Mujer */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] border border-amber-500/20">
              <Image src="https://picsum.photos/seed/nieta/800/1200" alt="Nieta" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Lucía Lares</h3>
                <p className="text-amber-500 font-serif italic text-lg mb-4">Gestora Cultural & Artista</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Impulsa la digitalización del legado y la conexión con nuevas audiencias globales, asegurando que la tradición trascienda fronteras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Línea de Tiempo */}
      <Timeline />
      
      {/* Floating Contact Button */}
      <Link 
        href="/contacto" 
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all hover:-translate-y-1 group"
      >
        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden md:inline">Agenda una Reunión</span>
      </Link>

      <Footer />
    </main>
  );
}
