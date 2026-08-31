'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CONNECTORS = new Set([
  'de', 'del', 'la', 'las', 'el', 'los', 'un', 'una', 'unos', 'unas',
  'y', 'e', 'o', 'u', 'con', 'por', 'para', 'en', 'a', 'al', 'sobre', 'sin', 'hacia', 'que'
]);

export function toTitleCaseSpanish(str: string, isStartOfPhrase = true): string {
  if (!str) return '';
  const words = str.trim().split(/\s+/);
  return words
    .map((word, idx) => {
      const lower = word.toLowerCase();
      // If it's a connector and NOT the very first word of the sentence/phrase
      if ((idx > 0 || !isStartOfPhrase) && CONNECTORS.has(lower)) {
        return lower;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

interface DynamicTextProps {
  words: string[];
  className?: string;
  staticText?: string;
  highlightClass?: string;
  interval?: number;
  variant?: 'fixed' | 'typewriter' | 'fluid';
}

export default function DynamicText({ 
  words, 
  className = "", 
  staticText = "", 
  highlightClass = "text-amber-500",
  interval = 3600,
  variant = 'fixed'
}: DynamicTextProps) {
  // Format words according to Spanish title case rules (capitalized words except connectors)
  const formattedWords = (words || []).map(w => toTitleCaseSpanish(w, !staticText));
  
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic when variant is 'typewriter'
  useEffect(() => {
    if (variant !== 'typewriter' || formattedWords.length === 0) return;

    const currentTarget = formattedWords[index] || '';
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < currentTarget.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        // Finished typing word, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, interval);
      }
    } else {
      // Deleting / backspacing
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTarget.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        // Finished deleting, pause briefly then move to next word
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % formattedWords.length);
        }, 180);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, formattedWords, variant, interval]);

  // Standard cycling interval for 'fixed' and 'fluid' modes
  useEffect(() => {
    if (variant === 'typewriter' || !formattedWords || formattedWords.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % formattedWords.length);
    }, interval);
    return () => clearInterval(timer);
  }, [formattedWords, interval, variant]);

  // Longest word placeholder for 'fixed' mode to avoid any layout movement
  const longestWord = formattedWords.reduce((longest, curr) => curr.length > longest.length ? curr : longest, "");

  // Typography style inspired by "Nuestra memoria viva" (font-serif italic font-light)
  const dynamicStyle = `font-serif italic font-light tracking-normal ${highlightClass}`;

  // 1. TYPEWRITER VARIANT (for Agenda, Educatividad, etc.)
  if (variant === 'typewriter') {
    return (
      <span className={`inline-flex flex-wrap items-baseline justify-center gap-x-2 ${className}`}>
        {staticText && <span>{staticText}</span>}
        <motion.span 
          layout
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className={`inline-flex items-baseline whitespace-nowrap ${dynamicStyle}`}
        >
          <span>{displayedText || '\u00A0'}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-[2px] h-[0.85em] bg-current ml-1 align-baseline translate-y-[2px]"
          />
        </motion.span>
      </span>
    );
  }

  // 2. FLUID VARIANT (Smooth layout-animated transition without typewriter)
  if (variant === 'fluid') {
    return (
      <span className={`inline-flex flex-wrap items-baseline justify-center gap-x-2 ${className}`}>
        {staticText && <span>{staticText}</span>}
        <motion.span 
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative inline-flex items-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`whitespace-nowrap ${dynamicStyle}`}
            >
              {formattedWords[index]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </span>
    );
  }

  // 3. FIXED VARIANT (Default: perfect disolvencia without any layout shifts)
  return (
    <span className={`inline-flex flex-wrap items-center justify-center gap-x-2 ${className}`}>
      {staticText && <span>{staticText}</span>}
      <span className="relative inline-grid place-items-center text-center">
        {/* Invisible placeholder for longest word so surrounding layout stays 100% fixed */}
        <span className={`opacity-0 pointer-events-none select-none invisible px-1 ${dynamicStyle}`} aria-hidden="true">
          {longestWord}
        </span>

        {/* Crossfading visible word with pure disolvencia */}
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`absolute inset-0 flex items-center justify-center whitespace-nowrap px-1 ${dynamicStyle}`}
          >
            {formattedWords[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
