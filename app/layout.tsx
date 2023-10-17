import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import SessionProvider from './components/SessionProvider';
import ToastProvider from './components/ToastProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CMED assessment',
  description: 'Made by next.js 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider>
          <main>
            <ToastProvider>{children}</ToastProvider>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
