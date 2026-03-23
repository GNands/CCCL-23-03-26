'use client';

import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import BannerMedia from '@/components/banner-media';
import GalleryTabs from '@/components/gallery-tabs';

const recursosData: Record<string, any> = {
  'galeria-fotografica': {
    title: 'Galería fotográfica',
    subtitle: 'Imágenes que capturan la esencia de nuestras tradiciones.',
    image: 'https://picsum.photos/seed/galeria1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/galeria1/800/600',
      'https://picsum.photos/seed/galeria2/800/600',
      'https://picsum.photos/seed/galeria3/800/600',
      'https://picsum.photos/seed/galeria4/800/600',
    ],
    description: [
      'Nuestra galería fotográfica es un testimonio visual de la riqueza y diversidad de la cultura andina. A través de la lente de destacados fotógrafos y colaboradores, documentamos las festividades, los rituales, las presentaciones artísticas y la vida cotidiana en las comunidades.',
      'Esta colección incluye imágenes históricas y contemporáneas de la Danza de las Tijeras, mostrando la evolución de los atuendos, las secuencias coreográficas y los contextos rituales en los que se desarrolla. Asimismo, preservamos registros visuales de músicos tradicionales, artesanos y portadores de saberes ancestrales.',
      'Invitamos a investigadores, estudiantes y al público en general a explorar este archivo visual, que constituye una herramienta fundamental para el estudio y la valoración de nuestro patrimonio inmaterial.'
    ],
    items: [
      { title: 'Fiesta del Agua en Puquio (1998)', type: 'Álbum fotográfico', image: 'https://picsum.photos/seed/album1/400/300' },
      { title: 'Maestros de la Danza de las Tijeras', type: 'Retratos', image: 'https://picsum.photos/seed/album2/400/300' },
      { title: 'Instrumentos tradicionales', type: 'Catálogo visual', image: 'https://picsum.photos/seed/album3/400/300' },
      { title: 'Atuendos y bordados', type: 'Detalles', image: 'https://picsum.photos/seed/album4/400/300' }
    ]
  },
  'archivo-audiovisual': {
    title: 'Archivo audiovisual',
    subtitle: 'Sonidos y movimientos de los Andes.',
    image: 'https://picsum.photos/seed/audiovisual1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/audio1/800/600',
      'https://picsum.photos/seed/audio2/800/600',
    ],
    description: [
      'El archivo audiovisual del Centro Cultural Chimango Lares resguarda una invaluable colección de registros sonoros y en video que documentan las expresiones musicales y dancísticas de los Andes peruanos, con especial énfasis en la región Chanka.',
      'Nuestra fonoteca incluye grabaciones de campo de músicos tradicionales, recopilaciones de cantos rituales, huaynos antiguos y piezas instrumentales interpretadas por maestros reconocidos. Este material sonoro es esencial para la preservación de melodías y estilos de interpretación que corren el riesgo de desaparecer.',
      'La videoteca alberga documentales, registros de festividades patronales, entrevistas a portadores de tradición y grabaciones de espectáculos producidos por el Centro Cultural. A través de estos recursos, buscamos difundir la complejidad y la belleza de nuestras artes escénicas tradicionales.'
    ],
    items: [
      { title: 'Documental: El vuelo del cóndor', type: 'Video (45 min)', image: 'https://picsum.photos/seed/video1/400/300' },
      { title: 'Recopilación de cantos de siembra', type: 'Audio (12 pistas)', image: 'https://picsum.photos/seed/audio1/400/300' },
      { title: 'Entrevista: Maestro Chimango Lares', type: 'Video (30 min)', image: 'https://picsum.photos/seed/video2/400/300' },
      { title: 'Concierto: Sonidos de la Tierra', type: 'Video (90 min)', image: 'https://picsum.photos/seed/video3/400/300' }
    ]
  },
  'publicaciones-investigaciones': {
    title: 'Publicaciones e investigaciones',
    subtitle: 'Conocimiento para preservar nuestro legado.',
    image: 'https://picsum.photos/seed/publicaciones1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/libro1/800/600',
      'https://picsum.photos/seed/libro2/800/600',
    ],
    description: [
      'La investigación es un pilar fundamental en la labor del Centro Cultural Chimango Lares. A través del estudio riguroso de nuestras tradiciones, buscamos generar conocimiento que contribuya a su preservación, difusión y valoración en el contexto contemporáneo.',
      'En esta sección, ponemos a disposición del público una selección de publicaciones, artículos, ensayos y material didáctico producido por nuestro equipo de investigadores y colaboradores externos. Estos textos abordan diversas temáticas, desde la historia y el simbolismo de la Danza de las Tijeras hasta el análisis musicológico de los géneros tradicionales andinos.',
      'Nuestro objetivo es fomentar el diálogo académico y proporcionar herramientas conceptuales a estudiantes, docentes y gestores culturales interesados en profundizar su comprensión sobre el patrimonio inmaterial del Perú.'
    ],
    items: [
      { title: 'La Danza de las Tijeras: Historia y Simbolismo', type: 'Libro (PDF)', image: 'https://picsum.photos/seed/libro1/400/300' },
      { title: 'El violín andino en la región Chanka', type: 'Artículo académico', image: 'https://picsum.photos/seed/articulo1/400/300' },
      { title: 'Guía didáctica: Ritmos del Perú', type: 'Material educativo', image: 'https://picsum.photos/seed/guia1/400/300' },
      { title: 'Memorias del I Congreso de Cultura Andina', type: 'Actas (PDF)', image: 'https://picsum.photos/seed/actas1/400/300' }
    ]
  }
};

export default function RecursoPage() {
  const params = useParams();
  const id = params.id as string;
  const recurso = recursosData[id];

  if (!recurso) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
        <Link href="/recursos" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-500 hover:text-purple-500 dark:hover:text-purple-400 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a Recursos
        </Link>
        
        <BannerMedia 
          image={recurso.image} 
          videoUrl={recurso.videoUrl} 
          title={recurso.title} 
          subtitle={recurso.subtitle}
          accentColor="purple"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-8">
            <GalleryTabs 
              description={recurso.description} 
              gallery={recurso.gallery} 
              accentColor="purple"
            />
          </div>

          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-purple-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contenido Destacado</h3>
              
              <div className="space-y-6">
                {recurso.items.map((item: any, i: number) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              <Download className="w-5 h-5" />
              Solicitar Acceso Completo
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 text-center text-xs lg:text-sm text-slate-500 dark:text-slate-400 bg-stone-50 dark:bg-slate-950 relative z-20 mt-20 overflow-hidden transition-colors duration-500">
        {/* Glow Bottom Center */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-rose-400/20 dark:bg-rose-600/20 blur-[100px] rounded-full pointer-events-none z-0 transition-colors duration-500" />
        <p className="relative z-10">© {new Date().getFullYear()} Centro Cultural Chimango Lares. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
