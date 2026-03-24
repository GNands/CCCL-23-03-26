import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles
import Header from '@/components/header';
import SectionNavigator from '@/components/section-navigator';
import { AppProvider } from '@/components/app-provider';
import BackToTop from '@/components/back-to-top';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'CCCL | Centro Cultural Chimango Lares',
  description: 'Un espacio de creación y cultura.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        <AppProvider>
          <Header />
          <SectionNavigator />
          {children}
          <BackToTop />
        </AppProvider>
      </body>
    </html>
  );
}
