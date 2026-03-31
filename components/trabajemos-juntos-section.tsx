'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Music, Sparkles, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/components/app-provider';

const services = [
  {
    id: 'espectaculos-a-medida',
    icon: <Music className="w-10 h-10 text-amber-500" />,
    title: "Espectáculos a medida",
    description: "Diseñamos presentaciones únicas que se adaptan a la esencia de tu evento, fusionando tradición y modernidad."
  },
  {
    id: 'produccion-musical-audiovisual',
    icon: <Sparkles className="w-10 h-10 text-amber-500" />,
    title: "Producción musical y audiovisual",
    description: "Capturamos la sonoridad y estética andina con los más altos estándares de calidad profesional."
  },
  {
    id: 'asesoria-consultoria-cultural',
    icon: <Briefcase className="w-10 h-10 text-amber-500" />,
    title: "Asesoría y consultoría cultural",
    description: "Acompañamos tus proyectos con nuestra experiencia en gestión y salvaguardia del patrimonio inmaterial."
  }
];

const mainImages = [
  "https://picsum.photos/seed/trabajemos-juntos1/800/600",
  "https://picsum.photos/seed/trabajemos-juntos2/800/600",
  "https://picsum.photos/seed/trabajemos-juntos3/800/600",
];

export default function TrabajemosJuntosSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useAppContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mainImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="trabajemos-juntos" className="relative z-10 py-32 w-full">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/20 blur-[200px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 mb-4 block">Cooperemos</span>
            <Link href="/trabajemos-juntos" className="group">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-all duration-500 group-hover:text-amber-500 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                Trabajemos <span className="italic font-light text-amber-500 group-hover:text-amber-400">juntos</span>
              </h2>
            </Link>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500 font-light italic">
              ¿Tienes una festividad o un evento corporativo? Te ofrecemos una experiencia acorde a tu necesidad.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-full overflow-hidden border-4 border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] aspect-square lg:h-auto lg:max-w-[500px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image 
                  src={mainImages[currentImageIndex]} 
                  alt="Trabajemos juntos" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Link key={idx} href={`/trabajemos-juntos/${service.id}`}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 rounded-3xl p-10 transition-all group flex flex-col items-start text-left hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative overflow-hidden h-full"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:bg-amber-500/20 transition-colors" />
                
                <div className="w-16 h-16 rounded-2xl bg-stone-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 relative z-10 transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed relative z-10 transition-colors duration-500 font-light">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Saber más</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-600" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/trabajemos-juntos" className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full font-medium transition-all">
            {t('servicios.btn')}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
