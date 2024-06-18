import Image from 'next/image';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className='bg-cyan-50 px-60 py-32 flex h-full'>
      <Hero />
    </main>
  );
}
