'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerMediaProps {
  image: string;
  videoUrl?: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export default function BannerMedia({ image, videoUrl, title, subtitle, accentColor = 'amber' }: BannerMediaProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return url;
  };

  const accentClasses: Record<string, string> = {
    amber: 'border-amber-500/30 text-amber-400',
    emerald: 'border-emerald-500/30 text-emerald-400',
    purple: 'border-purple-500/30 text-purple-400',
    blue: 'border-blue-500/30 text-blue-400',
  };

  const buttonAccentClasses: Record<string, string> = {
    amber: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/50',
    emerald: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/50',
    purple: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/50',
    blue: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/50',
  };

  return (
    <div className={`relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border ${accentClasses[accentColor] || accentClasses.amber} mb-12 group`}>
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`text-lg md:text-xl font-medium drop-shadow-md ${accentClasses[accentColor] || accentClasses.amber}`}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>

            {videoUrl && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(true)}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center text-white shadow-2xl z-20 backdrop-blur-sm bg-white/10 border border-white/30 group-hover:bg-white/20 transition-all ${buttonAccentClasses[accentColor] || buttonAccentClasses.amber}`}
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
          >
            <iframe
              src={getEmbedUrl(videoUrl!)}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 px-4 py-2 bg-black/50 hover:bg-black/80 text-white rounded-full text-sm font-medium backdrop-blur-md border border-white/20 transition-all z-30"
            >
              Cerrar Video
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
