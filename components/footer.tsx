'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAppContext } from '@/components/app-provider';

// Simplified BBC-style links
const simplifiedLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'El Centro', href: '/el-centro' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Educatividad', href: '/educatividad' },
  { name: 'Creación', href: '/creacion' },
  { name: 'Recursos', href: '/recursos' },
  { name: 'Contacto', href: '/contacto' },
];

// Expanded Apple-style links
const expandedLinks = [
  {
    title: 'Explorar',
    links: [
      { name: 'Inicio', href: '/' },
      { name: 'El Centro', href: '/el-centro' },
      { name: 'Agenda', href: '/agenda' },
      { name: 'Servicios', href: '/servicios' },
    ]
  },
  {
    title: 'Programas',
    links: [
      { name: 'Educatividad', href: '/educatividad' },
      { name: 'Creación', href: '/creacion' },
      { name: 'Talleres', href: '/agenda' },
      { name: 'Exposiciones', href: '/agenda' },
    ]
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Galería y Videoteca', href: '/recursos/galeria' },
      { name: 'Artículos e Investigaciones', href: '/recursos/articulos' },
      { name: 'Directorio de Artistas', href: '/recursos/directorio' },
    ]
  },
  {
    title: 'Acerca de',
    links: [
      { name: 'Nuestra Historia', href: '/el-centro' },
      { name: 'Misión y Visión', href: '/el-centro' },
      { name: 'Equipo', href: '/recursos/directorio' },
      { name: 'Contacto', href: '/contacto' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Términos de Uso', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Uso de Cookies', href: '#' },
      { name: 'Accesibilidad', href: '#' },
    ]
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] dark:bg-[#111111] text-[#e5e5e5] dark:text-[#a1a1a6] text-xs lg:text-sm relative z-20 w-full transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        
        {/* Header / Title */}
        <div className="flex items-center justify-between mb-6 border-b border-[#444444] dark:border-[#333333] pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-white">Explora el Centro Cultural</h2>
        </div>

        {/* Content Area - Always Expanded */}
        <div className="transition-all duration-500 ease-in-out overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            {expandedLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-white font-semibold mb-4 text-sm md:text-base">{column.title}</h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className="hover:text-white hover:underline transition-colors text-xs md:text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Utility Links & Copyright */}
        <div className="border-t border-[#444444] dark:border-[#333333] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs md:text-sm">
            <Link href="#" className="hover:text-white hover:underline transition-colors">Términos de Uso</Link>
            <Link href="#" className="hover:text-white hover:underline transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white hover:underline transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-white hover:underline transition-colors">Accesibilidad</Link>
            <Link href="/contacto" className="hover:text-white hover:underline transition-colors">Contacto</Link>
          </div>
          <div className="text-xs md:text-sm text-center md:text-right text-[#888888]">
            Copyright © {currentYear} Centro Cultural Chimango Lares. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
