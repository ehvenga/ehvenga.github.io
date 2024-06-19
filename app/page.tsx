import Image from 'next/image';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';

export default function Home() {
  return (
    <main className='bg-cyan-20 px-60 py-32 flex flex-col h-full'>
      <Hero />
      <WorkExperience />
    </main>
  );
}
