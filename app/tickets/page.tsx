'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowLeft, Ticket, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '@/components/app-provider';

export default function TicketsPage() {
  const { t } = useAppContext();
  const [step, setStep] = useState(1);
  const [ticketCount, setTicketCount] = useState(1);
  const price = 45;

  const handleNext = () => setStep(2);
  const handleConfirm = () => setStep(3);

  return (
    <main className="min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-32 pb-24 px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-amber-500/20 transition-colors duration-500">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Comprar Entradas</h1>
                <p className="text-slate-600 dark:text-slate-400 font-light italic">Selecciona la cantidad de entradas que deseas adquirir.</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-serif font-bold mb-4 text-amber-600 dark:text-amber-500">Una vida y un violín</h3>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-6">
                  <div className="flex items-center gap-2 font-light"><Calendar className="w-4 h-4" /> 16 de Mayo, 2025</div>
                  <div className="flex items-center gap-2 font-light"><Clock className="w-4 h-4" /> 19:30 hrs</div>
                  <div className="flex items-center gap-2 font-light"><MapPin className="w-4 h-4" /> Teatro Principal</div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-medium">Precio por entrada</span>
                  <span className="font-bold text-lg">S/ {price.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-medium">Cantidad</span>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                      className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    >-</button>
                    <span className="font-bold text-lg w-4 text-center">{ticketCount}</span>
                    <button 
                      onClick={() => setTicketCount(ticketCount + 1)}
                      className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    >+</button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl text-amber-600 dark:text-amber-500">S/ {(price * ticketCount).toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleNext}
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-amber-500/20"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Datos de Compra</h1>
                <p className="text-slate-600 dark:text-slate-400 font-light italic">Ingresa tus datos para enviar tus entradas.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Método de pago</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-center cursor-pointer font-medium text-amber-700 dark:text-amber-400">
                      Tarjeta de Crédito
                    </div>
                    <div className="border border-slate-300 dark:border-slate-700 rounded-xl p-4 text-center cursor-pointer font-medium hover:border-amber-500 transition-colors">
                      Yape / Plin
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="w-1/3 py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold transition-colors"
                >
                  Atrás
                </button>
                <button 
                  onClick={handleConfirm}
                  className="w-2/3 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-amber-500/20"
                >
                  Confirmar Pago (S/ {(price * ticketCount).toFixed(2)})
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 py-8">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">¡Compra Exitosa!</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md mx-auto font-light italic">
                Tus {ticketCount} entrada(s) han sido enviadas a tu correo electrónico. ¡Te esperamos!
              </p>
              
              <div className="pt-8">
                <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-amber-500/20">
                  <Ticket className="w-5 h-5" />
                  Ver mis entradas
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
