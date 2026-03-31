'use client';

import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, Download } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import BannerMedia from '@/components/banner-media';
import GalleryTabs from '@/components/gallery-tabs';

const programasData: Record<string, any> = {
  'danza-de-las-tijeras': {
    title: 'Danza de las Tijeras',
    subtitle: 'Sinónimo de tradición, conexión espiritual y resistencia cultural, declarado Patrimonio Cultural de la Humanidad.',
    image: 'https://picsum.photos/seed/tijeras1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/tijeras1/800/600',
      'https://picsum.photos/seed/tijeras2/800/600',
      'https://picsum.photos/seed/tijeras3/800/600',
    ],
    contexto: [
      'La Danza de las Tijeras es una expresión ritual andina que se practica principalmente en los departamentos de Ayacucho, Apurímac y Huancavelica. Sus orígenes se remontan a la época colonial, como una forma de resistencia cultural y espiritual frente a la imposición extranjera.',
      'Los danzantes, conocidos como "danzaq", son considerados intermediarios entre el mundo terrenal y las deidades andinas (Apus y Wamanis). A través de sus movimientos acrobáticos y el sonido rítmico de las tijeras de acero que llevan en la mano derecha, establecen una conexión con la naturaleza y las fuerzas cósmicas.',
      'El aprendizaje de esta danza es un proceso riguroso que se transmite de generación en generación, de maestro a discípulo. Requiere no solo destreza física, sino también una profunda preparación espiritual y un compromiso inquebrantable con la tradición.'
    ],
    sumilla: 'Nuestro programa de formación en Danza de las Tijeras ofrece una inmersión completa en esta manifestación cultural. Dirigido a niños, jóvenes y adultos, el programa abarca desde los pasos básicos hasta las secuencias acrobáticas más complejas, siempre bajo la guía de maestros reconocidos. Además de la técnica dancística, se imparte conocimiento sobre la historia, el significado ritual y la cosmovisión andina que sustentan esta danza.',
    director: 'Maestros Danzaq del Centro Cultural',
    duracion: 'Módulos trimestrales',
    formato: 'Clases presenciales (grupales e individuales)',
    conceptos: [
      'Técnica dancística: pasos básicos, mudanzas, acrobacias.',
      'Manejo del instrumento: ritmo y sonoridad de las tijeras.',
      'Historia y cosmovisión: el significado ritual de la danza.',
      'Preparación física y espiritual.',
      'Presentaciones públicas como parte del proceso formativo.'
    ],
    conformacion: [
      'Grupos divididos por edades y niveles de experiencia.',
      'Acompañamiento musical en vivo (arpa y violín) en sesiones seleccionadas.'
    ]
  },
  'talleres-formativos': {
    title: 'Talleres formativos',
    subtitle: 'El violín, el arpa y la danza, esencia del arte Chanka.',
    image: 'https://picsum.photos/seed/talleres1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/talleres1/800/600',
      'https://picsum.photos/seed/talleres2/800/600',
    ],
    contexto: [
      'La música y la danza son pilares fundamentales de la identidad cultural andina. En la región Chanka, el violín y el arpa andina son los instrumentos protagonistas que dan vida a las melodías tradicionales, acompañando festividades, rituales y expresiones artísticas.',
      'La transmisión de estos saberes musicales ha sido tradicionalmente oral, de padres a hijos o de maestros a aprendices. Sin embargo, en el contexto actual, es vital crear espacios formales de enseñanza que garanticen la preservación y difusión de este legado musical y dancístico.',
      'El Centro Cultural Chimango Lares se erige como un bastión para la enseñanza de estas artes, ofreciendo un espacio donde las nuevas generaciones pueden conectarse con sus raíces a través de la práctica musical y corporal.'
    ],
    sumilla: 'Nuestros talleres formativos ofrecen instrucción especializada en violín andino, arpa andina y diversas danzas tradicionales de la región. Diseñados para estudiantes de todos los niveles, desde principiantes hasta avanzados, los talleres combinan la enseñanza técnica con la apreciación cultural. Los participantes aprenden a interpretar el repertorio tradicional, desarrollando habilidades musicales y rítmicas mientras profundizan en el contexto histórico y social de cada expresión artística.',
    director: 'Andrés "Chimango" Lares y equipo docente',
    duracion: 'Cursos continuos (mensuales)',
    formato: 'Clases presenciales and virtuales',
    conceptos: [
      'Técnica instrumental: violín y arpa andina.',
      'Repertorio tradicional: huaynos, pasacalles, carnavales, música ritual.',
      'Danzas tradicionales: coreografía, expresión corporal, vestimenta.',
      'Teoría musical aplicada a la música andina.',
      'Ensambles y práctica grupal.'
    ],
    conformacion: [
      'Clases individuales de instrumento.',
      'Clases grupales de danza.',
      'Talleres de ensamble musical.'
    ]
  },
  'funciones-didacticas': {
    title: 'Funciones didácticas',
    subtitle: 'Experimenta el poder transformador de las artes y las manifestaciones andinas.',
    image: 'https://picsum.photos/seed/funciones1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/funciones1/800/600',
      'https://picsum.photos/seed/funciones2/800/600',
    ],
    contexto: [
      'La educación artística y cultural es esencial para el desarrollo integral de las personas, especialmente en la etapa escolar. Sin embargo, el acceso a experiencias culturales significativas a menudo es limitado en los entornos educativos formales.',
      'Las funciones didácticas surgen como una respuesta a esta necesidad, proponiendo un acercamiento interactivo y vivencial a las artes escénicas y la cultura tradicional. Al llevar el arte a las escuelas o invitar a los estudiantes a espacios culturales, se fomenta la apreciación estética, el pensamiento crítico y el fortalecimiento de la identidad.',
      'Estas experiencias no solo entretienen, sino que también educan, sensibilizan y abren nuevas perspectivas sobre la diversidad cultural del país.'
    ],
    sumilla: 'Las funciones didácticas del Centro Cultural Chimango Lares son presentaciones escénicas especialmente diseñadas para el público escolar y grupos organizados. A través de un formato interactivo, combinamos la exhibición artística (música, danza, narración oral) con explicaciones pedagógicas sobre el origen, significado y valor de las manifestaciones culturales presentadas. Los estudiantes tienen la oportunidad de dialogar con los artistas, conocer de cerca los instrumentos y participar activamente en la experiencia, convirtiendo el aprendizaje en un proceso dinámico y memorable.',
    director: 'Equipo de mediación cultural',
    duracion: '60 a 90 minutos por función',
    formato: 'Presentaciones en el Centro Cultural o en instituciones educativas',
    conceptos: [
      'Espectáculos adaptados a diferentes niveles educativos.',
      'Mediación cultural: diálogo y explicación interactiva.',
      'Participación activa del público.',
      'Material didáctico complementario para docentes.',
      'Temáticas: mitos y leyendas, instrumentos andinos, danzas rituales.'
    ],
    conformacion: [
      'Elenco artístico variable (músicos, danzantes, narradores).',
      'Mediador cultural/presentador.'
    ],
    eventos: [
      {
        title: 'Mitos y Leyendas',
        description: 'Narración de historias ancestrales con acompañamiento musical.',
        image: 'https://picsum.photos/seed/mitos/400/300'
      },
      {
        title: 'Instrumentos Ancestrales',
        description: 'Demostración y explicación de pututos, antaras y más.',
        image: 'https://picsum.photos/seed/instrum/400/300'
      },
      {
        title: 'Danzas Rituales',
        description: 'Exhibición de danzas sagradas de diferentes regiones.',
        image: 'https://picsum.photos/seed/rituales/400/300'
      },
      {
        title: 'Teatro de Títeres',
        description: 'Historias andinas contadas a través de títeres tradicionales.',
        image: 'https://picsum.photos/seed/titeres/400/300'
      }
    ]
  }
};

const talleresEventos = [
  {
    title: 'Danza de las Tijeras',
    description: 'Aprende los pasos y acrobacias de esta danza milenaria.',
    image: 'https://picsum.photos/seed/tijeras_t/400/300'
  },
  {
    title: 'Violín Andino',
    description: 'Técnica y repertorio tradicional del violín ayacuchano.',
    image: 'https://picsum.photos/seed/violin_t/400/300'
  },
  {
    title: 'Arpa Andina',
    description: 'Domina el instrumento base de la música Chanka.',
    image: 'https://picsum.photos/seed/arpa_t/400/300'
  },
  {
    title: 'Canto Quechua',
    description: 'Interpretación de huaynos y yaravíes en lengua originaria.',
    image: 'https://picsum.photos/seed/canto_t/400/300'
  },
  {
    title: 'Artesanía',
    description: 'Talleres de cerámica, tejido y retablo ayacuchano.',
    image: 'https://picsum.photos/seed/artesania_t/400/300'
  }
];

// Add eventos to talleres-formativos data
programasData['talleres-formativos'].eventos = talleresEventos;
programasData['danza-de-las-tijeras'].eventos = talleresEventos.filter(e => e.title === 'Danza de las Tijeras');

export default function ProgramaPage() {
  const params = useParams();
  const id = params.id as string;
  const programa = programasData[id];

  if (!programa) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
        <Link href="/educatividad" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a Educatividad
        </Link>
        
        <BannerMedia 
          image={programa.image} 
          videoUrl={programa.videoUrl} 
          title={programa.title} 
          subtitle={programa.subtitle}
          accentColor="emerald"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-12">
            <GalleryTabs 
              description={[...programa.contexto, programa.sumilla]} 
              gallery={programa.gallery} 
              accentColor="emerald"
            />
          </div>

          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-emerald-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Ficha Técnica</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider mb-1">Dirección</h4>
                  <p className="text-slate-700 dark:text-slate-300">{programa.director}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider mb-1">Duración</h4>
                  <p className="text-slate-700 dark:text-slate-300">{programa.duracion}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider mb-1">Formato</h4>
                  <p className="text-slate-700 dark:text-slate-300">{programa.formato}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-emerald-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conceptos Claves</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                {programa.conceptos.map((c: string, i: number) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-emerald-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conformación</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                {programa.conformacion.map((c: string, i: number) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Download className="w-5 h-5" />
                Descargar Brochure (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Carrusel de Eventos/Talleres */}
        {programa.eventos && (
          <div className="mt-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-500 mb-2 block">Explora</span>
                <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                  {id === 'talleres-formativos' ? 'Nuestras especialidades' : 'Nuestras funciones'}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programa.eventos.map((evento: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={evento.image} 
                      alt={evento.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{evento.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {evento.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="border-t border-emerald-500/20 py-8 text-center text-xs lg:text-sm text-slate-500 dark:text-slate-400 bg-stone-50 dark:bg-slate-950 relative z-20 mt-20 overflow-hidden transition-colors duration-500">
        {/* Glow Bottom Center */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-rose-400/20 dark:bg-rose-600/20 blur-[100px] rounded-full pointer-events-none z-0 transition-colors duration-500" />
        <p className="relative z-10">© {new Date().getFullYear()} Centro Cultural Chimango Lares. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
