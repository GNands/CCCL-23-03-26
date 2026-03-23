'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Music, Sparkles, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/components/app-provider';

const services = [
  {
    icon: <Music className="w-10 h-10 text-amber-500" />,
    title: "Conciertos privados",
    description: "Un amplio repertorio, músicos consagrados y danzantes premiados junto a la experiencia escénica de cinco décadas."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-amber-500" />,
    title: "Experiencias inmersivas",
    description: "La vitalidad y magia de la cultura andina como camino de descubrimiento personal."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-amber-500" />,
    title: "Gestión y producción",
    description: "Co-creamos y diseñamos a tu lado tus proyectos más osados."
  }
];

const mainImages = [
  "https://picsum.photos/seed/servicios1/800/600",
  "https://picsum.photos/seed/servicios2/800/600",
  "https://picsum.photos/seed/servicios3/800/600",
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
    <section id="servicios" className="relative z-10 py-32 w-full">
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/20 blur-[200px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-500">
              Trabajemos <span className="text-amber-500">juntos</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">
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
                  alt="Servicios Artísticos" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-800 hover:border-amber-500/50 rounded-full aspect-square p-8 md:p-10 transition-all group flex flex-col items-center justify-center text-center hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] relative overflow-hidden"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              
              <div className="w-20 h-20 rounded-full bg-stone-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10 transition-colors duration-500">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed relative z-10 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/servicios" className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full font-medium transition-all">
            {t('servicios.btn')}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
