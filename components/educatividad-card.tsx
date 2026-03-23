'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import ExpandableImage from '@/components/expandable-image';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';

interface EducatividadCardProps {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export default function EducatividadCard({ id, title, description, images }: EducatividadCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="flex flex-col bg-white/60 dark:bg-slate-900/40 border border-amber-500/30 rounded-2xl p-4 lg:p-6 hover:bg-white dark:hover:bg-slate-900 transition-colors duration-500 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] group">
      {/* Main Image */}
      <Link href="/educatividad" className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800 border border-amber-500/20 transition-colors duration-500 block">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentIndex]} 
              alt={title} 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Hover Icons Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-3 text-white">
            <div className="w-14 h-14 rounded-full border-2 border-amber-400 bg-amber-500/20 flex items-center justify-center">
              <ImageIcon className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold tracking-wider uppercase drop-shadow-md">Ver la galería</span>
          </div>
        </div>
      </Link>

      {/* Text Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl lg:text-2xl font-bold text-amber-600 dark:text-amber-500 mb-3 transition-colors duration-500">{title}</h3>
        <p className="text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500 mb-6">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-amber-500/20">
          <Link href="/educatividad" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors group-hover:translate-x-1 duration-300">
            Ver más detalles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
