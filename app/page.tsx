'use client';

import CursorLights from '@/components/cursor-lights';
import Carousel3D from '@/components/carousel-3d';
import EducatividadCard from '@/components/educatividad-card';
import CreacionSection from '@/components/creacion-section';
import AgendaSection from '@/components/agenda-section';
import Footer from '@/components/footer';
import TrabajemosJuntosSection from '@/components/trabajemos-juntos-section';
import RecursosLibreroSection from '@/components/recursos-librero-section';
import Sidebar from '@/components/sidebar';
import { ChevronRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/components/app-provider';

const educatividadData = [
  {
    id: "danza-de-las-tijeras",
    title: "Danza de las Tijeras",
    description: "Sinónimo de tradición, conexión espiritual y resistencia cultural, declarado Patrimonio Cultural de la Humanidad.",
    images: [
      "https://picsum.photos/seed/tijeras1/600/600",
      "https://picsum.photos/seed/tijeras2/600/600",
      "https://picsum.photos/seed/tijeras3/600/600"
    ]
  },
  {
    id: "talleres-formativos",
    title: "Talleres formativos",
    description: "El violín, el arpa y la danza, escencia del arte Chanka.",
    images: [
      "https://picsum.photos/seed/talleres1/600/600",
      "https://picsum.photos/seed/talleres2/600/600",
      "https://picsum.photos/seed/talleres3/600/600"
    ]
  },
  {
    id: "funciones-didacticas",
    title: "Funciones didácticas",
    description: "Experimenta el poder transformador de las artes y las manifestaciones andinas.",
    images: [
      "https://picsum.photos/seed/funciones1/600/600",
      "https://picsum.photos/seed/funciones2/600/600",
      "https://picsum.photos/seed/funciones3/600/600"
    ]
  }
];

export default function Home() {
  const { t } = useAppContext();

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 transition-colors duration-500">
      <CursorLights />
      <Sidebar />

      {/* Hero Section - Full Screen Video */}
      <section className="relative w-full h-screen flex flex-col items-center justify-end pb-32 overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/80 dark:via-slate-950/80 to-transparent pointer-events-none z-0 transition-colors duration-500" />

        {/* Action Buttons */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center gap-6">
          <Link href="/creacion" className="px-8 py-4 bg-blue-950/80 hover:bg-blue-900 backdrop-blur-sm border border-amber-500/40 rounded-full text-base lg:text-lg font-medium transition-all hover:border-amber-400/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] text-amber-50">
            {t('hero.btn1')}
          </Link>
          
          {/* Ticket Button */}
          <Link 
            href="/contacto"
            className="relative px-8 py-4 bg-red-600/90 hover:bg-red-500 backdrop-blur-sm text-white text-base lg:text-lg font-medium transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center justify-center group"
            style={{
              maskImage: 'radial-gradient(circle at 0% 50%, transparent 10px, black 11px), radial-gradient(circle at 100% 50%, transparent 10px, black 11px)',
              maskSize: '51% 100%',
              maskPosition: 'left, right',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: 'radial-gradient(circle at 0% 50%, transparent 10px, black 11px), radial-gradient(circle at 100% 50%, transparent 10px, black 11px)',
              WebkitMaskSize: '51% 100%',
              WebkitMaskPosition: 'left, right',
              WebkitMaskRepeat: 'no-repeat'
            }}
          >
            <span className="border-x border-dashed border-amber-500/50 px-6 py-1 group-hover:border-amber-400/80 transition-colors">
              Agenda una Cita
            </span>
          </Link>
        </div>
      </section>

      {/* El Centro Section */}
      <section id="el-centro" className="relative z-10 py-24 w-full flex flex-col items-center text-center">
        {/* Glow Left */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/30 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center w-full">
          <div className="max-w-3xl mb-16 space-y-6 flex flex-col items-center">
            <Link href="/el-centro" className="px-10 py-2 rounded-full border border-amber-500/50 text-amber-600 dark:text-amber-400 text-sm uppercase tracking-widest hover:bg-amber-500/10 transition-colors mb-2">
              {t('elcentro.btn')}
            </Link>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">
              {t('elcentro.title1')} <span className="text-blue-500">{t('elcentro.title2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">
              {t('elcentro.desc')}
            </p>
          </div>

          <Carousel3D />
        </div>
      </section>

      {/* Creación Section */}
      <CreacionSection />

      {/* Agenda Section */}
      <AgendaSection />

      {/* Educatividad Section */}
      <section id="educatividad" className="relative z-10 py-24 w-full">
        {/* Glow Left */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/20 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors duration-500">
              {t('educatividad.title')}
            </h2>
            <Link href="/educatividad" className="text-amber-600/80 dark:text-amber-500/60 text-sm uppercase tracking-widest animate-pulse hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-500 cursor-pointer">
              {t('educatividad.subtitle')}
            </Link>
          </div>

          <div className="relative flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full pr-16">
              {educatividadData.map((item, idx) => (
                <EducatividadCard 
                  key={idx}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  images={item.images}
                />
              ))}
            </div>
            
            {/* Next Arrow Button */}
            <Link href="/educatividad" className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-32 bg-blue-100/80 dark:bg-blue-900/80 border border-amber-500/40 hover:bg-blue-200 dark:hover:bg-blue-800 flex items-center justify-center rounded-l-xl transition-colors shadow-[0_0_20px_rgba(245,158,11,0.15)] group">
              <ChevronRight className="w-8 h-8 text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trabajemos Juntos Section */}
      <TrabajemosJuntosSection />

      {/* Recursos Section */}
      <RecursosLibreroSection />

      {/* CTA Cotización */}
      <section className="relative z-10 py-32 w-full flex flex-col items-center justify-center text-center px-6">
        {/* Glow Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/20 dark:bg-amber-600/10 blur-[150px] rounded-full pointer-events-none z-0 transition-colors duration-500" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            {t('cta.title1')} <span className="text-amber-500">{t('cta.title2')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed transition-colors duration-500">
            {t('cta.desc')}
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link href="/contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium text-lg transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] hover:-translate-y-1">
              <FileText className="w-6 h-6" />
              {t('cta.btn')}
            </Link>
            <Link href="/servicios" className="text-amber-600 dark:text-amber-500 font-medium underline underline-offset-4 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Agenda una Reunión con Nosotros
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
