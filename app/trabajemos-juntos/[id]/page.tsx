'use client';

import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowLeft, CheckCircle2, MessageSquare } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import BannerMedia from '@/components/banner-media';

const serviciosData: Record<string, any> = {
  'espectaculos-a-medida': {
    title: 'Espectáculos a medida',
    subtitle: 'Llevamos la magia de los Andes a tu evento.',
    image: 'https://picsum.photos/seed/espectaculos1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: [
      'En el Centro Cultural Chimango Lares, entendemos que cada evento es único y requiere una propuesta artística que resuene con su propósito y audiencia. Por ello, ofrecemos el diseño y producción de espectáculos a medida, adaptando la riqueza de la cultura andina a las necesidades específicas de tu proyecto.',
      'Ya sea para una convención corporativa, un festival internacional, una celebración privada o una ceremonia oficial, nuestro equipo creativo trabaja de la mano contigo para conceptualizar una experiencia inolvidable. Desde intervenciones breves y de alto impacto hasta producciones de gran formato con decenas de artistas en escena, garantizamos la más alta calidad artística y técnica.',
      'Nuestro catálogo incluye presentaciones de Danza de las Tijeras, ensambles de música tradicional (violín, arpa, vientos andinos), cantantes, narradores orales y danzas de diversas regiones del Perú. Cada propuesta es cuidadosamente elaborada para asegurar la autenticidad cultural y el disfrute del público.'
    ],
    features: [
      'Diseño conceptual personalizado.',
      'Selección de repertorio y elenco a medida.',
      'Adaptación a diferentes formatos y duraciones.',
      'Dirección artística y musical profesional.',
      'Coordinación técnica y logística integral.'
    ]
  },
  'produccion-musical-audiovisual': {
    title: 'Producción musical y audiovisual',
    subtitle: 'Sonidos e imágenes que cuentan nuestra historia.',
    image: 'https://picsum.photos/seed/produccion1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: [
      'La preservación y difusión de la cultura andina en la era digital requiere de producciones de alta calidad que capturen su esencia y la transmitan a nuevas audiencias. Nuestro servicio de producción musical y audiovisual está diseñado para responder a este desafío, combinando el conocimiento profundo de nuestras tradiciones con los más altos estándares técnicos.',
      'En el ámbito musical, ofrecemos servicios de composición, arreglos, grabación, mezcla y masterización, especializados en música andina tradicional y fusiones contemporáneas. Contamos con un equipo de músicos de sesión expertos en instrumentos tradicionales (violín andino, arpa, charango, quenas, zampoñas) y productores con amplia experiencia en el género.',
      'En el área audiovisual, realizamos la producción de videoclips, documentales, registros de eventos y material promocional. Nuestro enfoque se centra en contar historias con sensibilidad y respeto, destacando la belleza de nuestras expresiones culturales y paisajes.'
    ],
    features: [
      'Composición y arreglos musicales.',
      'Grabación en estudio y en locación.',
      'Músicos de sesión especializados.',
      'Producción y dirección audiovisual.',
      'Edición, postproducción y colorización.'
    ]
  },
  'asesoria-consultoria-cultural': {
    title: 'Asesoría y consultoría cultural',
    subtitle: 'Conocimiento experto para tus proyectos.',
    image: 'https://picsum.photos/seed/asesoria1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: [
      'El desarrollo de proyectos que involucran expresiones culturales tradicionales requiere de un conocimiento profundo y un enfoque respetuoso para garantizar su pertinencia y autenticidad. El Centro Cultural Chimango Lares pone a disposición su vasta experiencia a través de servicios de asesoría y consultoría especializada.',
      'Trabajamos con instituciones públicas y privadas, productoras de cine y televisión, investigadores, gestores culturales y artistas, brindando orientación experta en temas relacionados con la cultura andina, música tradicional, danzas (con especial énfasis en la Danza de las Tijeras) y gestión de proyectos culturales.',
      'Nuestros servicios incluyen la investigación y validación de contenidos, la asesoría en dirección artística y coreográfica, la vinculación con comunidades y portadores de tradición, y el diseño de estrategias de mediación cultural. Acompañamos tu proyecto desde la concepción hasta la ejecución, asegurando que cada paso se dé con el máximo rigor y respeto por nuestras raíces.'
    ],
    features: [
      'Investigación y validación de contenidos culturales.',
      'Asesoría en dirección artística y coreográfica.',
      'Vinculación con comunidades y artistas tradicionales.',
      'Diseño de estrategias de mediación y difusión.',
      'Capacitación y talleres especializados.'
    ]
  }
};

export default function TrabajemosJuntosDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const servicio = serviciosData[id];

  if (!servicio) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
        <Link href="/trabajemos-juntos" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a Trabajemos juntos
        </Link>
        
        <BannerMedia 
          image={servicio.image} 
          videoUrl={servicio.videoUrl} 
          title={servicio.title} 
          subtitle={servicio.subtitle}
          accentColor="blue"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-blue-500/20 pb-2">Descripción del Servicio</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {servicio.description.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </div>

          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-blue-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">¿Qué incluye?</h3>
              
              <ul className="space-y-4">
                {servicio.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contacto" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <MessageSquare className="w-5 h-5" />
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
