import Sidebar from '@/components/sidebar';
import ContactoSection from '@/components/contacto-section';
import Footer from '@/components/footer';

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans overflow-x-hidden selection:bg-blue-500/30 pt-20 transition-colors duration-500">
      <Sidebar />
      <ContactoSection />
      
      <Footer />
    </main>
  );
}
