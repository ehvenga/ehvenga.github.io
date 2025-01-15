import Image from 'next/image';
import Hero from '@/components/Hero';
import Build from '@/components/Build';
import type { NextPage } from 'next';
import Skills from '@/components/Skills';
import Achievements from '@/components/Acheivements';

const Home: NextPage = () => {
  return (
    <main className='bg-cyan-20 px-60 py-32 flex flex-col h-full overflow-y-scroll no-scrollbar'>
      <Hero />
      <Build />
      <Skills />
      <Achievements />
    </main>
  );
};

export default Home;
