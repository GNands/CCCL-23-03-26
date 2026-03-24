'use client';

import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowRight } from 'lucide-react';
import DynamicText from '@/components/dynamic-text';

const servicios = [
  {
    id: 'espectaculos-a-medida',
    title: 'Espectáculos a medida',
    subtitle: 'Llevamos la magia de los Andes a tu evento.',
    sumilla: 'Diseñamos y producimos presentaciones artísticas personalizadas para eventos corporativos, festivales, celebraciones privadas y ceremonias oficiales. Desde intervenciones breves hasta espectáculos de gran formato, adaptamos nuestro repertorio y elenco a las necesidades de tu proyecto, garantizando una experiencia cultural de alto impacto.',
    image: 'https://picsum.photos/seed/espectaculos1/800/600',
  },
  {
    id: 'produccion-musical-audiovisual',
    title: 'Producción musical y audiovisual',
    subtitle: 'Sonidos e imágenes que cuentan nuestra historia.',
    sumilla: 'Ofrecemos servicios de composición, arreglos, grabación y producción de música andina tradicional y contemporánea. Además, realizamos producción audiovisual (videoclips, documentales, registros de eventos) con un enfoque sensible y respetuoso hacia las expresiones culturales, asegurando la más alta calidad técnica y artística.',
    image: 'https://picsum.photos/seed/produccion1/800/600',
  },
  {
    id: 'asesoria-consultoria-cultural',
    title: 'Asesoría y consultoría cultural',
    subtitle: 'Conocimiento experto para tus proyectos.',
    sumilla: 'Brindamos asesoría especializada a instituciones públicas y privadas, productoras, investigadores y artistas en temas relacionados con la cultura andina, música tradicional, danzas (especialmente la Danza de las Tijeras) y gestión cultural. Acompañamos el desarrollo de proyectos asegurando la pertinencia, autenticidad y respeto por las tradiciones.',
    image: 'https://picsum.photos/seed/asesoria1/800/600',
  }
];

export default function ServiciosPage() {
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
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/50 dark:via-slate-950/50 to-transparent pointer-events-none z-0 transition-colors duration-500" />

        <div className="relative z-10 px-6 lg:px-10 max-w-4xl mx-auto flex flex-col items-center w-full mt-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500 mb-4">Soluciones</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            <DynamicText staticText="Creatividad" words={["con identidad", "a la vanguardia", "memorable", "de alta calidad"]} highlightClass="text-blue-500" />
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200 transition-colors duration-500 italic">
            Llevamos la esencia de nuestra cultura a tu evento o proyecto
          </h2>
        </div>
      </section>

      {/* Listado de servicios */}
      <section className="relative z-10 py-24 w-full">
        <div className="relative z-10 px-6 lg:px-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-500 mb-4 block">Servicios</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">Trabajemos juntos</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              Ofrecemos una amplia gama de servicios artísticos y culturales, respaldados por años de experiencia y un profundo conocimiento de nuestras tradiciones. Ya sea que busques un espectáculo inolvidable, una producción de alta calidad o asesoría experta, nuestro equipo de profesionales está listo para hacer realidad tu visión.
            </p>
          </div>

          <div className="space-y-24">
            {servicios.map((servicio, idx) => (
              <div key={servicio.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div 
                  className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-blue-500/30 group"
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.image-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <Image src={servicio.image} alt={servicio.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="image-overlay absolute inset-0 bg-black/20 transition-opacity duration-500" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">{servicio.title}</h3>
                  <p className="text-[10px] font-bold text-blue-600 dark:text-blue-500 mb-6 uppercase tracking-[0.2em] border-l-2 border-blue-500 pl-4 italic">{servicio.subtitle}</p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light">
                    {servicio.sumilla}
                  </p>
                  <Link href={`/servicios/${servicio.id}`} className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors group">
                    Solicitar información
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
