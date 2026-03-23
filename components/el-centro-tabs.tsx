'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

const tabs = [
  {
    id: 'quienes-somos',
    title: '¿Quiénes somos?',
    subtitle: 'El poder de la identidad',
    slides: [
      {
        text: 'Somos más que una institución; somos representantes de la cultura viva de los pueblos originarios del sur del Perú, y de la región Chanka, que une las raíces culturales de Ayacucho, Huancavelica, Apurímac y Arequipa. Con una historia que se remonta a más de 50 años, iniciada por el maestro Andrés "Chimango" Lares, nos dedicamos a preservar y difundir las tradiciones que definen nuestra esencia: la música, las danzas y las costumbres que laten en el corazón de nuestra identidad andina.',
        image: 'https://picsum.photos/seed/somos1/800/600'
      },
      {
        text: 'A lo largo de una década como centro cultural hemos llevado las expresiones de nuestras comunidades más remotas hasta los diversos escenarios del Perú y del mundo, siendo embajadores de una identidad que se niega a desaparecer. Nuestros esfuerzos no solo celebran las danzas y melodías, como la emblemática Danza de las Tijeras y el violín andino, sino que también honran la cosmovisión y los valores ancestrales de nuestros pueblos.',
        image: 'https://picsum.photos/seed/somos2/800/600'
      },
      {
        text: 'Desde el 2018, trabajamos junto a Grupo Lares en la investigación y el registro de ceremonias, festividades y saberes que son el alma de nuestros Andes. Cada acción emprendida, desde la curaduría de una videoteca cultural hasta la creación de espectáculos escénicos, es un acto de resistencia cultural y una afirmación del valor infinito de nuestras raíces.',
        image: 'https://picsum.photos/seed/somos3/800/600'
      },
      {
        text: 'Reconocidos como Punto de Cultura por el Ministerio de Cultura del Perú, aceptamos el desafío de ser guardianes de una herencia que no solo construye identidad, sino que inspira a las nuevas generaciones a caminar con orgullo hacia el futuro, llevando consigo la riqueza y diversidad de nuestra tierra.',
        image: 'https://picsum.photos/seed/somos4/800/600'
      }
    ]
  },
  {
    id: 'que-perseguimos',
    title: '¿Qué perseguimos?',
    subtitle: 'Nuestros propósitos.',
    slides: [
      {
        text: 'Como una asociación que se orienta a la promoción y salvaguarda del patrimonio cultural y al desarrollo de capacidades artísticas, nuestras acciones se encuentran dirigidas a promover la investigación, registro, práctica y difusión del violín andino y la Danza de las Tijeras a nivel local, nacional e internacional.',
        image: 'https://picsum.photos/seed/perseguimos1/800/600'
      },
      {
        text: 'Proyectar servicios a la comunidad vinculados a la formación artística en tradiciones culturales del sur andino del Perú. Realizar talleres de formación artística en danza de las tijeras y violín andino.',
        image: 'https://picsum.photos/seed/perseguimos2/800/600'
      },
      {
        text: 'Crear y ejecutar proyectos escénicos sobre la base de tradiciones, leyendas y festividades andinas del sur del país. Registrar en formato audiovisual las diversas ceremonias, festividades y celebraciones de los pueblos asentados en el sur andino del país para su posterior investigación, archivo y recuperación.',
        image: 'https://picsum.photos/seed/perseguimos3/800/600'
      },
      {
        text: 'Aportar, junto a otras instituciones, públicas y privadas, en la creación de una escuela de formación en danza de las tijeras. Cooperar con la comunidad, en acciones de recuperación del espacio urbano y silvestre, en específico, la recuperación de una franja del Río Surco, potenciando las dinámicas sociales y económicas que se tejen alrededor de este.',
        image: 'https://picsum.photos/seed/perseguimos4/800/600'
      }
    ]
  }
];

export default function ElCentroTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeTabData = tabs.find(t => t.id === activeTab)!;

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeTabData.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeTabData.slides.length) % activeTabData.slides.length);
  };

  return (
    <section className="relative z-10 py-24 w-full bg-white/50 dark:bg-slate-900/50 border-y border-amber-500/10 transition-colors duration-500">
      <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${activeTab === tab.id ? 'text-amber-600 dark:text-amber-500' : 'text-slate-900 dark:text-white'}`}>
                  {tab.title}
                </h2>
                <h3 className={`text-lg font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-amber-700 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'}`}>
                  {tab.subtitle}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-2/3 relative">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-amber-500/30 p-6 md:p-10 shadow-xl overflow-hidden min-h-[500px] flex flex-col transition-colors duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${currentSlide}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full flex-grow"
                >
                  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 border border-amber-500/20">
                    <Image 
                      src={activeTabData.slides[currentSlide].image} 
                      alt={activeTabData.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify flex-grow">
                    {activeTabData.slides[currentSlide].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex gap-2">
                  {activeTabData.slides.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-amber-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                    />
                  ))}
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-600 dark:text-amber-500 hover:bg-amber-500 hover:text-white transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-600 dark:text-amber-500 hover:bg-amber-500 hover:text-white transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
