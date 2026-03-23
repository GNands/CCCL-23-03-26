'use client';

import { motion } from 'motion/react';
import { Download, Image as ImageIcon, FileText, Users } from 'lucide-react';
import Image from 'next/image';

const resources = [
  {
    type: 'gallery',
    title: "Galería y Videoteca",
    description: "Registramos y recuperamos en fotografía y video importantes momentos de nuestro calendario religioso, agrícola y festivo.",
    icon: <ImageIcon className="w-6 h-6 text-amber-400" />,
    image: "https://picsum.photos/seed/galeria/600/400"
  },
  {
    type: 'articles',
    title: "Artículos e investigaciones",
    description: "Curamos un repositario de conocimiento técnico y académico de mucho valor para el investigador y el curioso.",
    icon: <FileText className="w-6 h-6 text-amber-400" />,
    image: "https://picsum.photos/seed/articulos/600/400"
  },
  {
    type: 'directory',
    title: "Directorio de artistas y profesionales",
    description: "Te ponemos en contacto con artistas y profesionales de trayectoria y experiencia comprobada.",
    icon: <Users className="w-6 h-6 text-amber-400" />,
    image: "https://picsum.photos/seed/directorio/600/400"
  }
];

export default function RecursosSection() {
  return (
    <section id="recursos" className="relative z-10 py-32 w-full bg-stone-50 dark:bg-slate-950 border-t border-amber-500/10 transition-colors duration-500">
      {/* Glow Left */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500" />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-500">
              Conocimiento <span className="text-amber-600 dark:text-amber-500">es poder</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">
              Ponemos a tu alcance recursos que complementen tus iniciativas culturales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] dark:hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] cursor-pointer"
            >
              <div 
                className="relative w-full h-48 overflow-hidden"
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.image-overlay') as HTMLElement;
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <Image 
                  src={resource.image} 
                  alt={resource.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="image-overlay absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center border border-slate-200 dark:border-slate-700 transition-colors duration-500">
                  {resource.icon}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{resource.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow transition-colors duration-500">
                  {resource.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
