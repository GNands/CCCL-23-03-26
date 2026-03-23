'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Image as ImageIcon, Maximize2 } from 'lucide-react';

interface GalleryTabsProps {
  description: string[];
  gallery?: string[];
  accentColor?: string;
}

export default function GalleryTabs({ description, gallery = [], accentColor = 'amber' }: GalleryTabsProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'gallery'>('info');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const accentClasses: Record<string, string> = {
    amber: 'text-amber-600 dark:text-amber-500 border-amber-500',
    emerald: 'text-emerald-600 dark:text-emerald-500 border-emerald-500',
    purple: 'text-purple-600 dark:text-purple-500 border-purple-500',
    blue: 'text-blue-600 dark:text-blue-500 border-blue-500',
  };

  const bgAccentClasses: Record<string, string> = {
    amber: 'bg-amber-500/10',
    emerald: 'bg-emerald-500/10',
    purple: 'bg-purple-500/10',
    blue: 'bg-blue-500/10',
  };

  return (
    <div className="w-full">
      <div className="flex gap-8 border-b border-slate-200 dark:border-slate-800 mb-8">
        <button
          onClick={() => setActiveTab('info')}
          className={`flex items-center gap-2 pb-4 text-lg font-bold transition-all relative ${
            activeTab === 'info' ? accentClasses[accentColor] : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
          }`}
        >
          <Info className="w-5 h-5" />
          Información
          {activeTab === 'info' && (
            <motion.div
              layoutId="activeTab"
              className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${accentClasses[accentColor].split(' ')[1]}`}
            />
          )}
        </button>
        {gallery.length > 0 && (
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 pb-4 text-lg font-bold transition-all relative ${
              activeTab === 'gallery' ? accentClasses[accentColor] : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
            Galería
            {activeTab === 'gallery' && (
              <motion.div
                layoutId="activeTab"
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${accentClasses[accentColor].split(' ')[1]}`}
              />
            )}
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'info' ? (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg"
          >
            {description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <Image src={img} alt={`Gallery image ${i + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Full view" fill className="object-contain" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
