'use client';

import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowLeft, Download } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import BannerMedia from '@/components/banner-media';
import GalleryTabs from '@/components/gallery-tabs';

const proyectosData: Record<string, any> = {
  'hatun-yaku-raymi': {
    title: 'Hatun Yaku Raymi o "La Gran Fiesta del Agua"',
    subtitle: 'Estreno: 20XX, Gran Teatro Nacional del Perú.',
    image: 'https://picsum.photos/seed/yaku1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/yaku1/800/600',
      'https://picsum.photos/seed/yaku2/800/600',
      'https://picsum.photos/seed/yaku3/800/600',
      'https://picsum.photos/seed/yaku4/800/600',
    ],
    contexto: [
      'En el corazón de los Andes peruanos, donde las montañas besan el cielo, pervive una tradición ancestral: el Hatun Yaku Raymi, un himno al agua que nutre la vida. En el valle de Sondondo y otras regiones andinas, esta celebración, conocida también como "Limpia de las acequias", se despliega como un ritual mágico.',
      'Entre agosto y septiembre, cuando el sol revitaliza la tierra, las comunidades se congregan para honrar al líquido vital. Más que una simple limpieza de canales, es una renovación del lazo sagrado con la naturaleza. El Ayni, el ancestral trabajo comunitario, resurge, uniendo a las personas en una labor que trasciende lo material. Se celebra a la Pachamama, la Madre Tierra, en un encuentro donde el conocimiento ancestral del agua se entrelaza con los ciclos agrícolas.',
      'En Sondondo, la cosmovisión andina se manifiesta en una hermosa armonía entre el calendario agrícola y las festividades católicas. Los santos, adoptados como nuevos protectores, conviven con las antiguas divinidades, integrándose a los momentos cruciales de la siembra y la cosecha, buscando la bendición divina para asegurar la abundancia.',
      'Pero la Danza de las Tijeras eleva la festividad a una dimensión sublime. Los danzantes, personajes míticos rodeados de misterio, emergen como intermediarios entre el mundo terrenal y el espiritual. Sus movimientos, al son del arpa y el violín, narran historias ancestrales, invocando a los Apus Huamanis y al majestuoso nevado Qarwarazu. Sus cuerpos, adornados con vestimentas brillantes, ejecutan pruebas de destreza y valor, desafiando los límites de lo posible. Las tijeras, relucientes, cortan el aire en un ritual que trasciende la danza, convirtiéndose en una expresión viva de la cosmovisión andina.',
      'Declarada Patrimonio Cultural de la Nación en 2005 y Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2010, esta danza es un legado invaluable que nos conecta con las raíces de nuestra identidad.'
    ],
    sumilla: 'Hatun Yaku Raymi o "Gran Fiesta del Agua" es un espectáculo musicalizado que escenifica las diversas etapas del rito andino de la limpieza de las acequias que da inicio a los ciclos agrícolas en los Andes peruanos. Esta fiesta ha sido declarada Patrimonio Cultural de la Nación (Perú, 2005).',
    director: 'Juan Andrés Lares León',
    duracion: '1 hora',
    formato: 'De mediano a gran formato (según facilidades técnicas y presupuestales)',
    conceptos: [
      'Representación de ceremonia ancestral en estampas o actos según su desarrollo tradicional.',
      'Rito en vivo de ofrenda a la tierra oficiado por un sacerdote andino (Awki).',
      'Experiencia solemne, emotiva y festiva.',
      'Exhibición de danza de tijeras y danza del sequia tusuy (danzas tradicionales).',
      'Ensamble de músicos y cantantes andinos.'
    ],
    conformacion: [
      'De 4 a 8 danzantes de tijeras.',
      '4 parejas de bailarines del sequia tusuy.',
      '4 personajes tradicionales de la festividad.',
      '2 músicos (arpa y violín) y 2 voces (masculina y femenina)',
      '1 awki (sacerdote andino).'
    ]
  },
  'leyenda-nino-danzaq': {
    title: 'La Leyenda del Niño Danzaq',
    subtitle: 'Estreno: 20XX, Gran Teatro Nacional del Perú.',
    image: 'https://picsum.photos/seed/danzaq1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/danzaq1/800/600',
      'https://picsum.photos/seed/danzaq2/800/600',
      'https://picsum.photos/seed/danzaq3/800/600',
    ],
    contexto: [
      'Esta obra es una adaptación libre del cuento de tradición oral "El niño leñador" que circula en el departamento de Ayacucho (Perú). También existe otra versión de la narración denominada "El tusuq muñeco", recopilado por Alfonsina Barrionuevo en su libro Ayacucho, la comarca del puka amaru. Sin embargo, los ecos de esta historia se pueden hallar en gérmen en otras fabulas y narraciones andinas.',
      '"La leyenda del Niño Danzaq" fue musicalizada por el maestro Andrés "Chimango" Lares y con la dirección teatral de Ana Gladiz y la colaboración de Amiel Cayo, nació de un proceso creativo en el Centro de Experimentación Escénica (CEXES) implementado por el grupo cultural Yuyachkani.'
    ],
    sumilla: 'Esta obra teatral en tres actos revitaliza el mito fundacional de los danzantes de tijeras, presentándolos como intermediarios entre el mundo de los dioses y los humanos. La obra se centra en Manuelcha, un niño que, mientras recoge leña, se encuentra en una cueva con un espíritu de la naturaleza que danza.\n\nFascinado, Manuelcha imita los movimientos del espíritu, aprendiendo su baile. Tras la partida del espíritu, que deja tras de sí unas tijeras y un muñeco, Manuelcha pide a su madre que le confeccione un traje similar al del muñeco. Un tiempo después, se reencuentra con el espíritu, ahora transformado en un danzaq. Poco después, Manuelcha desaparece de su pueblo, para luego reaparecer como maestro, enseñando la danza de tijeras en diferentes comunidades hasta la actualidad.\n\nLa leyenda de Manuelcha simboliza la transmisión cultural y la preservación de las tradiciones. La obra explora temas como la conexión con la naturaleza, el aprendizaje por imitación y el misterio de lo sagrado. A través de una narrativa contemporánea, busca conectar con el público actual, especialmente con las nuevas generaciones, invitándolos a reflexionar sobre sus raíces. La música y la puesta en escena teatral complementan la historia, creando una experiencia inmersiva en el mundo de los danzantes de tijeras, celebrando la riqueza cultural del Perú.',
    director: 'Juan Andrés Lares León',
    duracion: '45 minutos',
    formato: 'Pequeño formato',
    conceptos: [
      'Rescate de una narración oral de tradición andina.',
      'Obra nacida de un programa de experimentación teatral.',
      'Texto enriquecido con componentes de comedia de situaciones.',
      'Actores juveniles.',
      'Música en vivo.',
      'Audiovisuales que marcan el guión narrativo.',
      'Público familiar.'
    ],
    conformacion: [
      '4 actores y danzantes infantiles.',
      '1 actriz y 1 actor juveniles.',
      '2 danzantes tradicionales.',
      '1 arpista.',
      '1 violinista.'
    ]
  },
  'un-canto-para-mama': {
    title: 'Un Canto para Mamá',
    subtitle: 'Un homenaje para las madres luchadoras de todo Perú y para la Madre Tierra.',
    image: 'https://picsum.photos/seed/mama1/1200/600',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    gallery: [
      'https://picsum.photos/seed/mama1/800/600',
      'https://picsum.photos/seed/mama2/800/600',
    ],
    contexto: [
      'En casi todas las culturas del mundo, existe un día especial para honrar a las madres, figuras centrales en la vida familiar y social. En el contexto peruano, esta conmemoración adquiere un matiz profundo, ya que no solo se celebra a la madre concreta, aquella que cría y guía a sus hijos, sino también a la madre simbólica: la Pachamamá, nuestra Madre Tierra. Ambas representan los cimientos de la vida, el amor y la continuidad, esenciales para nuestra existencia y bienestar.',
      'La madre, en su doble expresión, concreta y cósmica, encarna el equilibrio entre el cuidado y la fortaleza, el amor incondicional y la capacidad regeneradora. Honrarla es reconocer nuestra interdependencia con ella y la necesidad de protegerla y valorarla en todas sus formas.',
      'En el Perú, una tierra donde la conexión con la naturaleza y los lazos familiares son fundamentales, esta celebración va más allá de un acto simbólico: se convierte en un recordatorio de nuestra gratitud y responsabilidad. Celebrar a las madres, tanto humanas como terrenales, no solo exalta su rol, sino que también nos invita a reflexionar sobre nuestra propia relación con la vida, la naturaleza y la continuidad de nuestras tradiciones.'
    ],
    sumilla: '"Un Canto para Mamá" es un magno homenaje a las madres peruanas y a la Pachamama, la Gran Madre Tierra, presentado por el virtuoso violinista andino Andrés "Chimango" Lares. Este espectáculo único, que se presentó por primera vez en el Gran Teatro Nacional en diversas fechas, reúne a más de 80 artistas en escena, incluyendo destacados representantes de la música y danza folclórica del Perú. A través de cantos, danzas tradicionales como la danza de tijeras, y la magistral interpretación de Chimango Lares y sus invitados especiales, se recrean festividades andinas como el sequía tusuy, la herranza, la chimaycha y la alegría de los toriles. "Un Canto para Mamá" es una celebración para toda la familia, que exalta la fuerza de la naturaleza, la vitalidad y la belleza de los Andes peruanos, ofreciendo una experiencia cultural inolvidable.',
    director: 'Juan Andrés Lares León',
    duracion: '45 minutos',
    formato: 'Gran formato',
    conceptos: [
      'Rescate de una narración oral de tradición andina.',
      'Obra nacida de un programa de experimentación teatral.',
      'Texto enriquecido con componentes de comedia de situaciones.',
      'Actores juveniles.',
      'Música en vivo.',
      'Audiovisuales que marcan el guión narrativo.',
      'Público familiar.'
    ],
    conformacion: [
      'Por definir.'
    ]
  }
};

export default function ProyectoPage() {
  const params = useParams();
  const id = params.id as string;
  const proyecto = proyectosData[id];

  if (!proyecto) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
        <Link href="/creacion" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver a Creación
        </Link>
        
        <BannerMedia 
          image={proyecto.image} 
          videoUrl={proyecto.videoUrl} 
          title={proyecto.title} 
          subtitle={proyecto.subtitle}
          accentColor="amber"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-12">
            <GalleryTabs 
              description={[...proyecto.contexto, proyecto.sumilla]} 
              gallery={proyecto.gallery} 
              accentColor="amber"
            />
          </div>

          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-amber-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Ficha Técnica</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-1">Director Artístico y Musical</h4>
                  <p className="text-slate-700 dark:text-slate-300">{proyecto.director}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-1">Duración</h4>
                  <p className="text-slate-700 dark:text-slate-300">{proyecto.duracion}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-1">Formato</h4>
                  <p className="text-slate-700 dark:text-slate-300">{proyecto.formato}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-amber-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conceptos Claves</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                {proyecto.conceptos.map((c: string, i: number) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-amber-500/20 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conformación Artística Mínima</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                {proyecto.conformacion.map((c: string, i: number) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <Download className="w-5 h-5" />
                Descargar Ficha Técnica (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
