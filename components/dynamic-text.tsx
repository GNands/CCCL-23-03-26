'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface DynamicTextProps {
  words: string[];
  className?: string;
  staticText?: string;
  highlightClass?: string;
  interval?: number;
}

export default function DynamicText({ 
  words, 
  className = "", 
  staticText = "", 
  highlightClass = "text-amber-500",
  interval = 3000 
}: DynamicTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={className}>
      {staticText && <span>{staticText} </span>}
      <span className="relative inline-block min-w-[1ch]">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`inline-block ${highlightClass}`}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
