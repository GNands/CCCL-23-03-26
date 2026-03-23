import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Header from '@/components/header';
import SectionNavigator from '@/components/section-navigator';
import { AppProvider } from '@/components/app-provider';
import BackToTop from '@/components/back-to-top';

export const metadata: Metadata = {
  title: 'Enigma | Centro Cultural',
  description: 'Un espacio de creación y educatividad.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
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
