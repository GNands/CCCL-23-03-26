'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowLeft, Mail, Globe, Music } from 'lucide-react';
import Sidebar from '@/components/sidebar';

const artistas = [
  {
    id: 1,
    name: "Chimango Lares",
    role: "Director y Primer Violín Andino",
    bio: "Más de 50 años de trayectoria difundiendo la música andina y la Danza de las Tijeras por el mundo.",
    image: "https://picsum.photos/seed/chimango/400/400",
    skills: ["Violín", "Composición", "Dirección"],
  },
  {
    id: 2,
    name: "María Quispe",
    role: "Voz Principal",
    bio: "Intérprete de cantos tradicionales con una voz que transmite la esencia de los Andes.",
    image: "https://picsum.photos/seed/maria/400/400",
    skills: ["Canto", "Percusión menor"],
  },
  {
    id: 3,
    name: "Carlos Huamán",
    role: "Danzante de Tijeras",
    bio: "Reconocido danzante con múltiples premios nacionales, portador de la tradición ancestral.",
    image: "https://picsum.photos/seed/carlos/400/400",
    skills: ["Danza", "Coreografía"],
  },
  {
    id: 4,
    name: "Ana Condori",
    role: "Arpista",
    bio: "Virtuosa del arpa andina, acompañando melodías tradicionales con maestría y sentimiento.",
    image: "https://picsum.photos/seed/ana/400/400",
    skills: ["Arpa", "Arreglos"],
  },
  {
    id: 5,
    name: "Luis Mendoza",
    role: "Guitarrista",
    bio: "Especialista en guitarra ayacuchana, fusionando ritmos tradicionales con técnicas contemporáneas.",
    image: "https://picsum.photos/seed/luis/400/400",
    skills: ["Guitarra", "Coros"],
  },
  {
    id: 6,
    name: "Elena Vargas",
    role: "Investigadora Cultural",
    bio: "Antropóloga dedicada a la documentación y preservación de las festividades andinas.",
    image: "https://picsum.photos/seed/elena/400/400",
    skills: ["Investigación", "Gestión Cultural"],
  }
];

export default function DirectorioPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-rose-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <Link href="/#recursos" className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 hover:text-rose-500 dark:hover:text-rose-400 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Directorio de Artistas</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Conoce a los profesionales, músicos, danzantes e investigadores que forman parte de nuestra red cultural y hacen posible la magia del Centro Cultural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artistas.map((artista, idx) => (
            <motion.div 
              key={artista.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-rose-500/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:border-rose-500/40 transition-all group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={artista.image} 
                  alt={artista.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{artista.name}</h3>
                  <p className="text-rose-300 font-medium text-sm">{artista.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                  {artista.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {artista.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs font-semibold rounded-full border border-rose-200 dark:border-rose-800/50">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                    <Globe className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                    <Music className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
