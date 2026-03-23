const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /bg-slate-950/g, to: 'bg-stone-50' },
  { from: /text-slate-200/g, to: 'text-slate-700' },
  { from: /text-slate-300/g, to: 'text-slate-600' },
  { from: /text-slate-400/g, to: 'text-slate-500' },
  { from: /bg-slate-900/g, to: 'bg-white' },
  { from: /bg-slate-800/g, to: 'bg-slate-100' },
  { from: /border-slate-800/g, to: 'border-slate-200' },
  { from: /border-slate-700/g, to: 'border-slate-300' },
  { from: /from-slate-950/g, to: 'from-stone-50' },
  { from: /via-slate-950/g, to: 'via-stone-50' },
  { from: /from-slate-900/g, to: 'from-white' },
  { from: /via-slate-900/g, to: 'via-white' },
  { from: /to-slate-900/g, to: 'to-white' },
  { from: /bg-black\/80/g, to: 'bg-slate-900\/40' },
  { from: /bg-black\/50/g, to: 'bg-slate-900\/20' },
  { from: /text-white/g, to: 'text-slate-900' },
];

const revertWhiteText = [
  { from: /bg-amber-600 hover:bg-amber-500 text-slate-900/g, to: 'bg-amber-600 hover:bg-amber-500 text-white' },
  { from: /bg-red-600\/90 hover:bg-red-500 backdrop-blur-sm text-slate-900/g, to: 'bg-red-600/90 hover:bg-red-500 backdrop-blur-sm text-white' },
  { from: /bg-blue-600 hover:bg-blue-500 text-slate-900/g, to: 'bg-blue-600 hover:bg-blue-500 text-white' },
  { from: /bg-slate-100 hover:bg-slate-700 text-slate-900/g, to: 'bg-slate-100 hover:bg-slate-200 text-slate-900' }, // Fixed bg-slate-800 mapping
  { from: /bg-slate-900\/20 rounded-full text-slate-900/g, to: 'bg-slate-900/20 rounded-full text-white' },
  { from: /bg-white\/10 hover:bg-white\/20 rounded-full text-slate-900/g, to: 'bg-white/10 hover:bg-white/20 rounded-full text-white' },
  { from: /text-slate-900\/80/g, to: 'text-white/80' },
  { from: /text-slate-900\/60/g, to: 'text-white/60' },
  { from: /text-slate-900\/5/g, to: 'text-slate-900/5' }, // Keep this one dark
  { from: /text-blue-100/g, to: 'text-slate-600' },
];

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = [...walk('./app'), ...walk('./components')];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });

  revertWhiteText.forEach(r => {
    content = content.replace(r.from, r.to);
  });

  // Specific fixes
  if (file.includes('sidebar.tsx')) {
    content = content.replace(/bg-blue-900\/90/g, 'bg-white/90');
    content = content.replace(/hover:bg-white\/20/g, 'hover:bg-slate-100');
  }

  if (file.includes('educatividad-card.tsx')) {
    content = content.replace(/bg-stone-50\/60/g, 'bg-white/80'); // from bg-slate-950/60
  }

  if (file.includes('recursos-librero-section.tsx')) {
    // Revert book cover text to white
    content = content.replace(/text-2xl font-bold text-slate-900 mb-4/g, 'text-2xl font-bold text-white mb-4');
  }

  if (file.includes('carousel-3d.tsx')) {
    // Revert download button
    content = content.replace(/bg-amber-600 hover:bg-amber-500 text-slate-900/g, 'bg-amber-600 hover:bg-amber-500 text-white');
  }

  if (file.includes('agenda-section.tsx')) {
    // Revert ticket button
    content = content.replace(/bg-blue-600 hover:bg-blue-500 text-slate-900/g, 'bg-blue-600 hover:bg-blue-500 text-white');
    // Revert download button
    content = content.replace(/bg-slate-100 hover:bg-slate-700 text-slate-900/g, 'bg-slate-100 hover:bg-slate-200 text-slate-900');
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
