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
    id: "talleres-formativos",
    title: "Talleres formativos",
    description: "Aprende los secretos de la Danza de las Tijeras, el violín y el arpa, guiado por maestros herederos de la tradición Chanka.",
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "funciones-didacticas",
    title: "Funciones didácticas",
    description: "Experimenta el poder transformador de las artes y las manifestaciones andinas a través de presentaciones interactivas.",
    images: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop&q=80"
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
          poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&auto=format&fit=crop&q=80"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-stone-50 dark:from-slate-950 via-stone-50/80 dark:via-slate-950/80 to-transparent pointer-events-none z-0 transition-colors duration-500" />

        {/* Hero Content */}
        <div className="relative z-20 mb-12 text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter text-slate-900 dark:text-white mb-4">
            Chimango <span className="italic font-light text-amber-500">Lares</span>
          </h1>
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-8">
            Centro Cultural & Tradición Viva
          </p>
        </div>

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
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col items-center w-full">
          <div className="max-w-3xl mb-16 space-y-6 flex flex-col items-center">
            <Link 
              href="/el-centro" 
              className="px-10 py-2.5 rounded-full border border-amber-500/60 text-amber-600 dark:text-amber-400 text-sm uppercase tracking-widest hover:bg-amber-500/10 transition-all mb-2 animate-pulse-subtle shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              {t('elcentro.btn')}
            </Link>
            <Link href="/el-centro" className="group">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-all duration-500 group-hover:text-amber-500 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                {t('elcentro.title1')} <span className="italic font-light text-blue-500 group-hover:text-blue-400">{t('elcentro.title2')}</span>
              </h2>
            </Link>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500 font-light max-w-2xl">
              {t('elcentro.desc')}
            </p>
          </div>

          <Carousel3D />
        </div>
      </section>

      {/* Creación Section */}
      <div className="py-12 bg-stone-50 dark:bg-slate-950 transition-colors duration-500">
        <CreacionSection />
      </div>

      {/* Agenda Section */}
      <div className="py-12 bg-stone-50 dark:bg-slate-950 transition-colors duration-500">
        <AgendaSection />
      </div>

      {/* Educatividad Section */}
      <section id="educatividad" className="relative z-10 py-32 w-full">
        <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-500 mb-4">Formación Cultural</h3>
              <Link href="/educatividad" className="group">
                <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 dark:text-white transition-all duration-500 group-hover:text-emerald-500 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  {t('educatividad.title')}
                </h2>
              </Link>
            </div>
            <Link href="/educatividad" className="text-amber-600/80 dark:text-amber-500/60 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-amber-500/30 pb-1 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-500 cursor-pointer">
              {t('educatividad.subtitle')}
            </Link>
          </div>

          <div className="relative flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 w-full pr-16 relative">
              {/* Divider Line */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-emerald-500/30" />
              
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
      <div className="py-12 bg-stone-50 dark:bg-slate-950 transition-colors duration-500">
        <RecursosLibreroSection />
      </div>

      {/* CTA Cotización */}
      <section className="relative z-10 py-32 w-full flex flex-col items-center justify-center text-center px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link href="/contacto" className="group">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-all duration-500 group-hover:text-amber-500 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              {t('cta.title1')} <span className="text-amber-500">{t('cta.title2')}</span>
            </h2>
          </Link>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed transition-colors duration-500">
            {t('cta.desc')}
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link href="/contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium text-lg transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] hover:-translate-y-1">
              <FileText className="w-6 h-6" />
              {t('cta.btn')}
            </Link>
            <Link href="/trabajemos-juntos" className="text-amber-600 dark:text-amber-500 font-medium underline underline-offset-4 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Agenda una Reunión con Nosotros
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
