'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/footer';
import { ArrowLeft, Search, FileText, ChevronRight } from 'lucide-react';
import Sidebar from '@/components/sidebar';

const keywords = ["Herencia Chanka", "Cultura Peruana", "Fiestas en Octubre", "Danza de las Tijeras", "Música Andina"];

const categoryTree = [
  {
    name: "Música",
    children: [
      { name: "Instrumentos", children: [{ name: "Violín" }, { name: "Arpa" }, { name: "Charango" }] },
      { name: "Géneros", children: [{ name: "Huayno" }, { name: "Yaraví" }, { name: "Muliza" }] }
    ]
  },
  {
    name: "Danza",
    children: [
      { name: "Danza de las Tijeras", children: [{ name: "Orígenes" }, { name: "Vestimenta" }, { name: "Pasos" }] },
      { name: "Danzas Agrícolas", children: [{ name: "Siembra" }, { name: "Cosecha" }] }
    ]
  },
  {
    name: "Festividades",
    children: [
      { name: "Fiesta del Agua", children: [{ name: "Rituales" }, { name: "Significado" }] },
      { name: "Carnavales", children: [{ name: "Ayacuchano" }, { name: "Apurimeño" }] }
    ]
  }
];

const articles = [
  { id: 1, title: "El origen de la Danza de las Tijeras", category: "Orígenes", author: "Elena Vargas", date: "Oct 2023" },
  { id: 2, title: "Simbolismo en la vestimenta del danzante", category: "Vestimenta", author: "Carlos Huamán", date: "Nov 2023" },
  { id: 3, title: "El violín andino: afinaciones y técnicas", category: "Violín", author: "Chimango Lares", date: "Ene 2024" },
  { id: 4, title: "La Fiesta del Agua en Ayacucho", category: "Rituales", author: "Elena Vargas", date: "Feb 2024" },
  { id: 5, title: "Evolución del Huayno contemporáneo", category: "Huayno", author: "Luis Mendoza", date: "Mar 2024" },
];

export default function ArticulosPage() {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const renderTree = (nodes: any[], level = 0) => {
    return (
      <ul className={`pl-${level > 0 ? 4 : 0} space-y-2`}>
        {nodes.map((node, idx) => (
          <li key={idx} className="relative">
            <div 
              className={`flex items-center gap-2 py-1 px-2 rounded-md cursor-pointer transition-colors ${selectedCategory === node.name ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
              onClick={() => {
                if (!node.children) {
                  setSelectedCategory(node.name === selectedCategory ? null : node.name);
                }
              }}
            >
              {node.children ? (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              ) : (
                <div className="w-4 h-4" /> // Spacer
              )}
              <span className="text-sm md:text-base">{node.name}</span>
            </div>
            {node.children && renderTree(node.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <Link href="/#recursos" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-medium mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        {/* Search Header */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="h-16 mb-4 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={keywordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-500"
              >
                {keywords[keywordIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">
            Explora nuestro repositorio de artículos, investigaciones y documentos históricos sobre la cultura andina.
          </p>
          
          <div className="relative w-full max-w-2xl">
            <input 
              type="text" 
              placeholder="Buscar por título, autor o tema..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border-2 border-blue-500/30 bg-white dark:bg-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-lg shadow-lg"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-500/50" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category Tree */}
          <div className="w-full lg:w-1/3 bg-white dark:bg-slate-900 border border-blue-500/20 rounded-3xl p-6 shadow-lg h-fit sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-blue-500/20 pb-4">Categorías</h3>
            <div className="overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
              {renderTree(categoryTree)}
            </div>
            {selectedCategory && (
              <button 
                onClick={() => setSelectedCategory(null)}
                className="mt-6 text-sm text-blue-600 dark:text-blue-400 hover:underline w-full text-center"
              >
                Limpiar filtro
              </button>
            )}
          </div>

          {/* Articles List */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedCategory ? `Resultados para "${selectedCategory}"` : 'Todos los artículos'}
              </h2>
              <span className="text-slate-500 dark:text-slate-400 text-sm">{filteredArticles.length} resultados</span>
            </div>

            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, idx) => (
                <motion.div 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col sm:flex-row gap-6 items-start sm:items-center cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-400">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Por <span className="font-medium text-slate-700 dark:text-slate-300">{article.author}</span>
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all hidden sm:block" />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl">
                <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No se encontraron artículos</h3>
                <p className="text-slate-500 dark:text-slate-400">Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
