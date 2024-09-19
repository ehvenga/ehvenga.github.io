import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hari Elangeswaran - Full Stack Developer / Data Scientist',
  description:
    'Welcome to my portfolio where I show my projects and experience',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen'>
          <Navbar />
          <div className='p-8 h-screen overflow-hidden'>{children}</div>
        </div>
      </body>
    </html>
  );
}
