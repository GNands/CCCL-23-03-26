import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css'; // Global styles
import Header from '@/components/header';
import SectionNavigator from '@/components/section-navigator';
import { AppProvider } from '@/components/app-provider';
import BackToTop from '@/components/back-to-top';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const display = Outfit({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'CCCL | Centro Cultural Chimango Lares',
  description: 'Un espacio de creación y cultura viva.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
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
