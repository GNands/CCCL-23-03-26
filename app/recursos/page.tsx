'use client';

import Sidebar from '@/components/sidebar';
import DynamicText from '@/components/dynamic-text';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowRight } from 'lucide-react';

const recursos = [
  {
    id: 'galeria-fotografica',
    title: 'Galería fotográfica',
    subtitle: 'Imágenes que capturan la esencia de nuestras tradiciones.',
    sumilla: 'Explora nuestra extensa colección de fotografías que documentan festividades, rituales, presentaciones artísticas y la vida cotidiana en las comunidades andinas. Un viaje visual a través de nuestra historia y diversidad cultural.',
    image: 'https://picsum.photos/seed/galeria1/800/600',
    link: '/recursos/galeria?tag=fotos'
  },
  {
    id: 'archivo-audiovisual',
    title: 'Archivo audiovisual',
    subtitle: 'Sonidos y movimientos de los Andes.',
    sumilla: 'Accede a nuestro archivo de videos y grabaciones sonoras, que incluye registros de espectáculos, documentales, entrevistas a maestros tradicionales y material inédito sobre la Danza de las Tijeras y la música Chanka.',
    image: 'https://picsum.photos/seed/audiovisual1/800/600',
    link: '/recursos/galeria?tag=videos'
  },
  {
    id: 'publicaciones-investigaciones',
    title: 'Publicaciones e investigaciones',
    subtitle: 'Conocimiento para preservar nuestro legado.',
    sumilla: 'Descubre artículos, ensayos, libros y material didáctico producido por el Centro Cultural y sus colaboradores. Recursos invaluables para estudiantes, investigadores y amantes de la cultura andina.',
    image: 'https://picsum.photos/seed/publicaciones1/800/600',
    link: '/recursos/articulos'
  },
  {
    id: 'directorio-artistas',
    title: 'Directorio de artistas',
    subtitle: 'Conexión con el talento y la maestría.',
    sumilla: 'Un espacio dedicado a visibilizar y conectar con los artistas, músicos y danzantes que forman parte de nuestra red. Encuentra perfiles detallados, trayectorias y formas de contacto para colaboraciones y proyectos culturales.',
    image: 'https://picsum.photos/seed/artistas1/800/600',
    link: '/recursos/directorio'
  }
];

export default function RecursosPage() {
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
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 mb-4">Archivo</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            Nuestra <span className="italic font-light text-purple-500">memoria viva</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-slate-800 dark:text-slate-200 transition-colors duration-500 italic">
            <DynamicText 
              words={[
                "explora nuestro archivo documental y audiovisual", 
                "Ponte al día con las ultimas publicaciones", 
                "Conoce los origenes de todas las historias", 
                "Dejate impresionarte por nuestra Colección Privada de Fotografías", 
                "Descubre material inedito de todos los rincones del Perú"
              ]} 
              highlightClass="text-slate-900 dark:text-white" 
            />
          </h2>
        </div>
      </section>

      {/* Listado de recursos */}
      <section className="relative z-10 py-24 w-full">
        <div className="relative z-10 px-6 lg:px-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 mb-4 block">Recursos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">Archivo y memoria</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              El Centro Cultural Chimango Lares alberga un valioso archivo que documenta y preserva las expresiones culturales de los Andes peruanos. Ponemos a disposición del público esta colección de recursos fotográficos, audiovisuales y bibliográficos para fomentar la investigación, el aprendizaje y la valoración de nuestro patrimonio.
            </p>
          </div>

          <div className="space-y-24">
            {recursos.map((recurso, idx) => (
              <div key={recurso.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div 
                  className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-purple-500/30 group"
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.image-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <Image src={recurso.image} alt={recurso.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="image-overlay absolute inset-0 bg-black/20 transition-opacity duration-500" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">{recurso.title}</h3>
                  <p className="text-[10px] font-bold text-purple-600 dark:text-purple-500 mb-6 uppercase tracking-[0.2em] border-l-2 border-purple-500 pl-4 italic">{recurso.subtitle}</p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light">
                    {recurso.sumilla}
                  </p>
                  <Link href={recurso.link} className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors group">
                    Explorar colección
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
