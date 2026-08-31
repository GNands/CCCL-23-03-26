'use client';

import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import BannerMedia from '@/components/banner-media';
import GalleryTabs from '@/components/gallery-tabs';

const eventosData: Record<string, any> = {
  '1': {
    title: 'Hatun Yaku Raymi',
    type: 'espectaculo',
    date: '15 de Mayo, 2026',
    time: '19:00 hrs',
    location: 'Gran Teatro Nacional',
    address: 'Av. Javier Prado Este 2225, San Borja',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    gallery: [
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    ],
    description: [
      '"La Gran Fiesta del Agua" es un espectáculo que celebra la festividad andina de agradecimiento a la Pachamama por sus infinitas bondades.',
      'Un despliegue de música, danza y color que te transportará a las profundidades de nuestras raíces andinas. Contaremos con la participación de más de 50 artistas en escena, incluyendo danzantes de tijeras, músicos tradicionales y un coro de voces andinas.',
      'No te pierdas esta oportunidad única de vivir la magia de nuestra cultura en uno de los escenarios más importantes del país.'
    ],
    price: 'Desde S/ 30.00',
    ticketUrl: '#'
  },
  '2': {
    title: 'Taller de Violín Andino',
    type: 'taller',
    date: 'Inicios: 1er de cada mes',
    time: 'Varios horarios',
    location: 'Centro Cultural Chimango Lares',
    address: 'Av. Cultural 123, Distrito',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80',
    ],
    description: [
      'Aprende a tocar el violín andino con los maestros del Centro Cultural Chimango Lares.',
      'Este taller está dirigido a personas de todas las edades, con o sin experiencia previa. Aprenderás las técnicas básicas de ejecución, lectura musical y repertorio tradicional andino.',
      'Las clases son personalizadas y se adaptan al ritmo de aprendizaje de cada estudiante.'
    ],
    price: 'S/ 150.00 mensual',
    ticketUrl: '#'
  }
};

export default function EventoPage() {
  const params = useParams();
  const id = params.id as string;
  const evento = eventosData[id];

  if (!evento) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
        <Link href="/agenda" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a la Agenda
        </Link>
        
        <BannerMedia 
          image={evento.image} 
          videoUrl={evento.videoUrl} 
          title={evento.title} 
          accentColor={evento.type === 'espectaculo' ? 'blue' : 'emerald'}
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-8">
            <GalleryTabs 
              description={evento.description} 
              gallery={evento.gallery} 
              accentColor={evento.type === 'espectaculo' ? 'blue' : 'emerald'}
            />
          </div>

          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-amber-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Detalles</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Fecha</h4>
                    <p className="text-slate-600 dark:text-slate-400">{evento.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Hora</h4>
                    <p className="text-slate-600 dark:text-slate-400">{evento.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Lugar</h4>
                    <p className="text-slate-600 dark:text-slate-400">{evento.location}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{evento.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Ticket className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Entradas</h4>
                    <p className="text-slate-600 dark:text-slate-400">{evento.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              {evento.type === 'taller' ? 'Inscribirse ahora' : 'Comprar entradas'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-amber-500/20 py-8 text-center text-xs lg:text-sm text-slate-500 dark:text-slate-400 bg-stone-50 dark:bg-slate-950 relative z-20 mt-20 overflow-hidden transition-colors duration-500">
        {/* Glow Bottom Center */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-rose-400/20 dark:bg-rose-600/20 blur-[100px] rounded-full pointer-events-none z-0 transition-colors duration-500" />
        <p className="relative z-10">© {new Date().getFullYear()} Centro Cultural Chimango Lares. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
