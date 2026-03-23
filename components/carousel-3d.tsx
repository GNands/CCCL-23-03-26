'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://picsum.photos/seed/cultura1/400/600",
  "https://picsum.photos/seed/cultura2/400/600",
  "https://picsum.photos/seed/cultura3/400/600",
  "https://picsum.photos/seed/cultura4/400/600",
  "https://picsum.photos/seed/cultura5/400/600",
  "https://picsum.photos/seed/cultura6/400/600",
  "https://picsum.photos/seed/cultura7/400/600",
];

export default function Carousel3D() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right' | null>(null);
  const [hoverIntensity, setHoverIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoverDirection === 'left') {
        setRotation((prev) => prev + (1 + hoverIntensity * 4));
      } else if (hoverDirection === 'right') {
        setRotation((prev) => prev - (1 + hoverIntensity * 4));
      } else if (!isHovered) {
        setRotation((prev) => prev - 0.5);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [isHovered, hoverDirection, hoverIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, direction: 'left' | 'right') => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const intensity = direction === 'left' 
      ? 1 - (x / rect.width) 
      : x / rect.width;
    setHoverIntensity(intensity);
  };

  const activeIndex = Math.round(rotation / -(360 / images.length));
  const normalizedIndex = ((activeIndex % images.length) + images.length) % images.length;

  const handleImageClick = (idx: number, src: string) => {
    if (idx === normalizedIndex) {
      setSelectedImage(src);
    } else {
      // Calculate shortest path to the clicked index
      let diff = idx - normalizedIndex;
      if (diff > images.length / 2) diff -= images.length;
      if (diff < -images.length / 2) diff += images.length;
      setRotation(prev => prev - diff * (360 / images.length));
    }
  };

  const nextSlide = () => setRotation(prev => prev - (360 / images.length));
  const prevSlide = () => setRotation(prev => prev + (360 / images.length));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Hover Zones */}
      <div 
        className="absolute left-0 top-0 w-1/4 h-full z-30 cursor-w-resize"
        onMouseEnter={() => { setIsHovered(true); setHoverDirection('left'); }}
        onMouseMove={(e) => handleMouseMove(e, 'left')}
        onMouseLeave={() => { setIsHovered(false); setHoverDirection(null); setHoverIntensity(0); }}
      />
      <div 
        className="absolute right-0 top-0 w-1/4 h-full z-30 cursor-e-resize"
        onMouseEnter={() => { setIsHovered(true); setHoverDirection('right'); }}
        onMouseMove={(e) => handleMouseMove(e, 'right')}
        onMouseLeave={() => { setIsHovered(false); setHoverDirection(null); setHoverIntensity(0); }}
      />

      <motion.div 
        className="relative w-[280px] h-[400px] cursor-grab active:cursor-grabbing"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ 
          rotateY: rotation,
          rotateX: hoverDirection ? (hoverIntensity * 10) : 0,
          scale: hoverDirection ? 1.05 : 1
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(e, { offset }) => {
          const swipe = offset.x;
          if (swipe < -50) {
            setRotation(r => r - (360 / images.length));
          } else if (swipe > 50) {
            setRotation(r => r + (360 / images.length));
          }
        }}
      >
        {images.map((src, i) => {
          const angle = (360 / images.length) * i;
          return (
            <div
              key={i}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 bg-white dark:bg-slate-900 transition-colors duration-500"
              style={{
                transform: `rotateY(${angle}deg) translateZ(380px)`,
                backfaceVisibility: 'hidden'
              }}
            >
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => handleImageClick(i, src)}
              >
                <Image 
                  src={src} 
                  alt={`Gallery image ${i}`} 
                  fill 
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-20">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-20">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 z-20 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setRotation(-(360 / images.length) * idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              normalizedIndex === idx 
                ? 'bg-amber-500 scale-125' 
                : 'bg-slate-400/30 dark:bg-white/30 hover:bg-slate-400/50 dark:hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Modal Expansion */}
    <AnimatePresence>
      {selectedImage && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm transition-colors duration-500"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-amber-500/40 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row pointer-events-auto shadow-[0_0_50px_rgba(245,158,11,0.15)] transition-colors duration-500"
            >
              {/* Left: Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px] md:min-h-[500px]">
                <Image src={selectedImage} alt="Selected gallery image" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white dark:from-slate-900 to-transparent opacity-90 md:opacity-60 transition-colors duration-500" />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 left-4 md:hidden p-2 bg-slate-900/20 dark:bg-black/50 rounded-full text-white hover:bg-slate-900/40 dark:hover:bg-black/80 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">Archivo Histórico</h3>
                    <p className="text-amber-600/80 dark:text-amber-500/80 text-sm uppercase tracking-widest transition-colors duration-500">Colección Centro Cultural</p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="hidden md:flex p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 transition-colors duration-500">
                  Descarga este archivo en alta resolución para conocer más sobre nuestra historia, tradiciones y el legado cultural que preservamos.
                </p>

                <div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
                  <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                    <Download className="w-5 h-5" />
                    Descargar Archivo (JPG)
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
