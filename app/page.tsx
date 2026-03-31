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
      "https://picsum.photos/seed/talleres1/600/600",
      "https://picsum.photos/seed/talleres2/600/600",
      "https://picsum.photos/seed/talleres3/600/600"
    ]
  },
  {
    id: "funciones-didacticas",
    title: "Funciones didácticas",
    description: "Experimenta el poder transformador de las artes y las manifestaciones andinas a través de presentaciones interactivas.",
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
          poster="https://picsum.photos/seed/hero-poster/1920/1080?blur=10"
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
            <Link href="/el-centro" className="px-10 py-2 rounded-full border border-amber-500/50 text-amber-600 dark:text-amber-400 text-sm uppercase tracking-widest hover:bg-amber-500/10 transition-colors mb-2">
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

      {/* Behind the Scenes Section */}
      <section className="relative z-10 py-32 w-full overflow-hidden bg-slate-900 text-white">
        <div className="relative z-10 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-500 mb-4">Proceso Creativo</h3>
              <Link href="/el-centro" className="group">
                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight transition-all duration-500 group-hover:text-amber-500 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  Detrás de <span className="italic font-light text-slate-400 group-hover:text-slate-300">Escena</span>
                </h2>
              </Link>
            </div>
            <p className="text-slate-400 font-light max-w-sm text-sm leading-relaxed">
              Explora la intimidad de nuestros ensayos, la fabricación de instrumentos y la vida cotidiana en el centro cultural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <Link href="/el-centro" className="md:col-span-2 relative group overflow-hidden rounded-2xl border-2 border-amber-500/20 hover:border-amber-500/60 transition-colors duration-500">
              <Image 
                src="https://picsum.photos/seed/bts1/800/1000" 
                alt="Ensayo" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2 block">Ensayos</span>
                <h4 className="text-xl font-bold">La danza nace en el silencio</h4>
              </div>
            </Link>
            <Link href="/creacion" className="relative group overflow-hidden rounded-2xl border-2 border-amber-500/20 hover:border-amber-500/60 transition-colors duration-500">
              <Image 
                src="https://picsum.photos/seed/bts2/400/600" 
                alt="Instrumentos" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2 block">Artesanía</span>
                <h4 className="text-lg font-bold">Maderas que cantan</h4>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              <Link href="/educatividad" className="relative flex-grow group overflow-hidden rounded-2xl border-2 border-amber-500/20 hover:border-amber-500/60 transition-colors duration-500">
                <Image 
                  src="https://picsum.photos/seed/bts3/400/400" 
                  alt="Comunidad" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </Link>
              <Link href="/agenda" className="relative flex-grow group overflow-hidden rounded-2xl border-2 border-amber-500/20 hover:border-amber-500/60 transition-colors duration-500">
                <Image 
                  src="https://picsum.photos/seed/bts4/400/400" 
                  alt="Maestros" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </Link>
            </div>
          </div>
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
