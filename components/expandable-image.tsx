'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function ExpandableImage({ src, alt, fill, className, referrerPolicy }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure hydration is complete before mounting portal
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`cursor-zoom-in w-full h-full ${fill ? 'absolute inset-0' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill={fill} 
          className={className} 
          referrerPolicy={referrerPolicy} 
        />
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
              onClick={() => setIsOpen(false)}
            >
              <button 
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full max-w-6xl max-h-[90vh] rounded-xl overflow-hidden cursor-default shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={src} 
                  alt={alt} 
                  fill 
                  className="object-contain" 
                  referrerPolicy={referrerPolicy} 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
