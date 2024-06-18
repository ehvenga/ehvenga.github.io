import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hari's Portfolio",
  description:
    'Welcome to my portfolio where I show my projects and experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen px-8 py-8'>
          {/* <Navbar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
