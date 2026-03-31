'use client';

import { motion } from 'motion/react';
import { Image as ImageIcon, FileText, Users, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/components/app-provider';

const resources = [
  {
    type: 'gallery',
    title: "Galería Fotográfica",
    description: "Registramos y recuperamos en fotografía importantes momentos de nuestro calendario religioso, agrícola y festivo.",
    icon: <ImageIcon className="w-5 h-5 text-amber-900" />,
    color: "bg-amber-600",
    spineColor: "bg-amber-700",
    link: "/recursos/galeria?tag=fotos"
  },
  {
    type: 'video',
    title: "Archivo Audiovisual",
    description: "Recopilación de videos y sonidos que capturan la esencia del movimiento y la música andina.",
    icon: <BookOpen className="w-5 h-5 text-emerald-900" />,
    color: "bg-emerald-600",
    spineColor: "bg-emerald-700",
    link: "/recursos/galeria?tag=videos"
  },
  {
    type: 'articles',
    title: "Artículos e investigaciones",
    description: "Curamos un repositario de conocimiento técnico y académico de mucho valor para el investigador y el curioso.",
    icon: <FileText className="w-5 h-5 text-blue-900" />,
    color: "bg-blue-600",
    spineColor: "bg-blue-700",
    link: "/recursos/articulos"
  },
  {
    type: 'directory',
    title: "Directorio de artistas",
    description: "Te ponemos en contacto con artistas y profesionales de trayectoria y experiencia comprobada.",
    icon: <Users className="w-5 h-5 text-rose-900" />,
    color: "bg-rose-600",
    spineColor: "bg-rose-700",
    link: "/recursos/directorio"
  }
];

export default function RecursosLibreroSection() {
  const { t } = useAppContext();

  return (
    <section id="recursos" className="relative z-10 py-32 w-full">
      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-500">
              {t('recursos.title')} <span className="text-amber-500">{t('recursos.title2')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">
              {t('recursos.subtitle')}
            </p>
          </div>
        </div>

        {/* Bookshelf Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Shelf */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-300 dark:bg-slate-800 rounded-sm border-b-4 border-slate-400 dark:border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-0 transition-colors duration-500" />
          <div className="absolute bottom-8 left-4 right-4 h-2 bg-slate-400/50 dark:bg-slate-700/50 z-0 transition-colors duration-500" />

          {/* Books */}
          <div className="relative z-10 flex flex-col md:flex-row items-end justify-center gap-6 md:gap-12 pb-8 px-4">
            {resources.map((resource, idx) => (
              <Link href={resource.link} key={idx} className="block group perspective-1000">
                <motion.div 
                  initial={{ opacity: 0, y: 50, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
                  className="relative w-full md:w-64 h-80 md:h-96 cursor-pointer transform-style-3d transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-y-[-10deg]"
                >
                  {/* Book Cover */}
                  <div className={`absolute inset-0 ${resource.color} rounded-r-xl rounded-l-sm shadow-2xl border-l-8 border-black/20 overflow-hidden flex flex-col`}>
                    {/* Book Texture/Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent mix-blend-overlay" />
                    
                    {/* Spine Detail */}
                    <div className={`absolute left-0 top-0 bottom-0 w-4 ${resource.spineColor} border-r border-white/10`} />

                    <div className="relative z-10 p-6 flex flex-col h-full ml-2">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center mb-6 shadow-md">
                        {resource.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                        {resource.title}
                      </h3>
                      
                      <p className="text-white/80 text-sm leading-relaxed flex-grow font-medium">
                        {resource.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between">
                        <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Abrir</span>
                        <BookOpen className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                  </div>

                  {/* Book Pages (Right Edge) */}
                  <div className="absolute right-0 top-2 bottom-2 w-2 bg-slate-200 dark:bg-slate-300 rounded-r-sm translate-x-full transform origin-left rotate-y-90 border-y border-r border-slate-300 dark:border-slate-400 transition-colors duration-500" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
