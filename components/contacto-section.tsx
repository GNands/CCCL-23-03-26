'use client';

import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="relative z-10 py-24 w-full">
      {/* Glow Right */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/20 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Column - Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-500">
                Contáctate con <span className="text-amber-500">nosotros.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-md mx-auto leading-relaxed transition-colors duration-500">
                ¡Estamos para ayudarte!
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-amber-500/30 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium mb-1 transition-colors duration-500">Email</h4>
                  <a href="mailto:centrocultural@chimangolares.com.pe" className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                    centrocultural@chimangolares.com.pe
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-amber-500/30 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-medium mb-1 transition-colors duration-500">Ubicación</h4>
                  <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500">
                    Lima, Perú, Perú.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-medium mb-4 transition-colors duration-500">Síguenos en nuestras redes</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/Andres.Chimango.Lares?locale=es_LA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:text-amber-500 dark:hover:text-amber-500 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-colors duration-500"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/andreschimangolares?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:text-amber-500 dark:hover:text-amber-500 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-colors duration-500"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com/@andreschimangolares?si=gMbWVvsAgv4WjAva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:text-amber-500 dark:hover:text-amber-500 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-colors duration-500"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form & Map */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 dark:border-amber-500/10 rounded-3xl p-8 md:p-10 shadow-2xl transition-colors duration-500">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-500">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-stone-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-500">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-stone-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-500">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-stone-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                  Enviar mensaje
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 dark:border-amber-500/10 rounded-3xl overflow-hidden relative shadow-2xl transition-colors duration-500">
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 transition-colors duration-500">
                <MapPin className="w-8 h-8 mb-2 text-amber-500/50" />
                <span>Mapa Interactivo</span>
                <span className="text-xs mt-1">Lima, Perú</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
