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
                words={["Chankas", "Peruanos", "Creadores Orgullosos"]} 
                highlightClass="text-amber-500"
                variant="fixed"
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

      {/* El Director (Composición que sigue la línea de Quiénes Somos) */}
      <section id="director" className="relative z-10 py-24 w-full bg-stone-100/60 dark:bg-slate-900/40 border-b border-amber-500/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Card Info */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between p-8 rounded-3xl border-2 border-amber-500 bg-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <User className="w-3.5 h-3.5" />
                  Liderazgo & Dirección
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                  El Director
                </h2>
                <h3 className="text-xl font-medium text-amber-700 dark:text-amber-400 mb-6">
                  Juan Andrés Lares León
                </h3>
                <p className="text-base text-slate-700 dark:text-slate-300 italic leading-relaxed font-light mb-6 border-l-2 border-amber-500 pl-4">
                  &quot;Mi misión es que el violín andino nunca deje de cantar y que nuestras raíces sigan nutriendo el futuro de nuestra nación.&quot;
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-amber-500/20 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <span className="font-bold text-amber-600 dark:text-amber-400 block uppercase tracking-wider text-[10px]">Trayectoria</span>
                <p>Más de 35 años consagrados al violín andino tradicional y la difusión de la Danza de las Tijeras.</p>
              </div>
            </div>

            {/* Right Card with Media and Content */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-amber-500/30 p-8 md:p-10 shadow-xl min-h-[500px] flex flex-col justify-between h-full transition-colors duration-500">
                <div>
                  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 border border-amber-500/20 shadow-md">
                    <Image 
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1000&auto=format&fit=crop&q=80" 
                      alt="Juan Andrés Lares León - Director General" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-white text-lg font-serif font-bold">Maestría instrumental y visión comunitaria</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify font-light">
                    <p>
                      Como director del Centro Cultural, Juan Andrés Lares León lidera la visión estratégica de preservación patrimonial y creación contemporánea. Su enfoque combina la pureza técnica del violín tradicional del sur andino con una profunda comprensión de la gestión cultural participativa.
                    </p>
                    <p>
                      Bajo su liderazgo, el centro se ha consolidado como un espacio vivo de innovación, donde los rituales y saberes milenarios dialogan con nuevas dramaturgias escénicas, educando a nuevas generaciones de intérpretes y danzantes.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                    Centro Cultural Chimango Lares
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-serif italic">
                    Ayacucho • Huancavelica • Apurímac
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Legado (Renombrado y actualizado desde Los Nietos) */}
      <section id="legado" className="relative z-10 py-32 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 font-bold mb-4 block">Sucesión & Futuro</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white">El Legado</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 font-light">La nueva generación que abraza la herencia cultural con una visión renovada, proyectando nuestras raíces al mundo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Andrés Lares Jr. */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] border border-amber-500/20 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80" 
                alt="Andrés Lares Jr. - El Legado" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-1 block">Continuidad Artística</span>
                <h3 className="text-3xl font-serif font-bold text-white mb-1">Andrés Lares Jr.</h3>
                <p className="text-amber-400 font-serif italic text-lg mb-3">Danzante de Tijeras & Músico</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Lleva en sus pies el ritmo sagrado de la tierra y en sus manos la destreza del violín, fusionando la disciplina ancestral con la vitalidad de la juventud contemporánea.
                </p>
              </div>
            </div>

            {/* Lucía Lares */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] border border-amber-500/20 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80" 
                alt="Lucía Lares - El Legado" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-1 block">Gestión e Innovación</span>
                <h3 className="text-3xl font-serif font-bold text-white mb-1">Lucía Lares</h3>
                <p className="text-amber-400 font-serif italic text-lg mb-3">Gestora Cultural & Artista</p>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Impulsa la digitalización del archivo cultural y la vinculación con nuevas audiencias globales, asegurando que la herencia viva trascienda escenarios y fronteras.
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
