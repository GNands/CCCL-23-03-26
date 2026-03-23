'use client';

import Sidebar from '@/components/sidebar';
import Carousel3D from '@/components/carousel-3d';
import ElCentroTabs from '@/components/el-centro-tabs';
import DynamicText from '@/components/dynamic-text';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { Calendar } from 'lucide-react';

export default function ElCentroPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      {/* Portada */}
      <section className="relative z-10 py-24 w-full flex flex-col items-center text-center">
        {/* Glow Left */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/20 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center w-full">
          <div className="max-w-4xl mb-16 space-y-6 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">
              <DynamicText 
                staticText="Somos" 
                words={["chankas", "Peruanos", "Creadores Orgullosos"]} 
                highlightClass="text-amber-500"
              />
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 transition-colors duration-500">
              Preservamos nuestra identidad para las futuras generaciones.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">
              Motivamos la exploración cultural como recurso para la creación artística.
            </p>
          </div>

          <Carousel3D />
        </div>
      </section>

      {/* Tabs Section (Quiénes somos & Qué perseguimos) */}
      <ElCentroTabs />

      {/* Tercera sección: El legado */}
      <section className="relative z-10 py-32 w-full bg-stone-100 dark:bg-slate-900 border-y border-amber-500/10">
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">El legado</h2>
              <h3 className="text-2xl text-amber-600 dark:text-amber-500 font-medium mb-10">Nuestro fundador.</h3>
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/30">
                <Image src="https://picsum.photos/seed/chimango/1000/1200" alt="Chimango Lares" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white dark:bg-black border-2 border-amber-500/80 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-justify text-lg">
                  <p>
                    Juan Andrés Lares León (Ayacucho, 1957), más conocido en el mundo del folclore como &quot;Chimango Lares&quot;, es violinista, compositor y difusor cultural ayacuchano y uno de los principales expositores del folclor, figura destacada de la música andina peruana, considerado por especialistas, cultores y su público como &quot;el Primer Violín Andino del Perú&quot;. Su labor denodada en la difusión, conservación y puesta en valor del patrimonio inmaterial del país no solo se extiende sobre el ámbito de lo musical, ocupando gran parte de su vida al rescate y renovación de la ancestral Danza de las Tijeras. También acompaña con sus arrobadoras melodías, a maravillosas danzas costumbristas como las Huaylías, Fiesta del Agua, Negritos de cintas multicolores, entre otras.
                  </p>
                  <p>
                    Como músico representativo de los Andes peruanos ha viajado con su violín por los más importantes escenarios del país, transponiendo fronteras, llevando su arte y herencia a diversos países de América Latina, América del Norte, Asia y Europa, en giras exitosas y presentándose en más de 100 festivales alrededor del mundo.
                  </p>
                  <p>
                    Ha recibido múltiples premios y reconocimientos, entre los que destacan el Primer Puesto en el Festival de las Culturas del Mundo 2014, en la ciudad Zakopane, Polonia; el reconocimiento de la Comisión Permanente del Perú ante la UNESCO; e invitado de honor en las celebraciones por los 50 años del Consejo Internacional de Organizaciones de Festivales de Folclore y de las Artes Tradicionales - CIOFF World Congress 2021 realizado en Rusia. Localmente, ha sido reconocido como Licenciatario Oficial de la Marca Perú por PromPerú, y ha recibido honores por parte del Presidente del Congreso de la República; del Viceministerio de Interculturalidad del Ministerio de Cultura; de la Municipalidad Metropolitana de Lima; del Gobierno Regional de Ayacucho. En el 2024 fue nombrado Embajador Oficial de los Juegos Bolivarianos del Bicentenario Ayacucho de ese año.
                  </p>
                  <p>
                    Ha publicado numerosas producciones musicales, y cooperado con prometedores talentos y consagrados artistas como Magaly Solier, Amaranta, Manuelcha Prado, Fredy Ortiz, Uchpa, Antología, William Luna, Mac Salvador, Martina Portocarrero, Edwin Montoya, &quot;Chano&quot; Díaz Limaco, Sofía Buchuck, Julio Humala, &quot;Pepita&quot; García Miró y Jaime Guardia con Encantos Andinos, y muchos más.
                  </p>
                  <p>
                    Ha incursionado en el Cine Nacional como actor entre las que se pueden nombrar &quot;Sigo Siendo&quot; junto a Magaly Solier; &quot;El viaje macho&quot; junto a Amiel Cayo; &quot;Killapa Wawan&quot; nuevamente con Magaly Solier (en rodaje); y ha participado en la banda sonora de Willaq Pirqa. Todas con reconocimientos y premios ganados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
