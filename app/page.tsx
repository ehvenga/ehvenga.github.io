import Hero from '@/components/Landing/Hero';
import Build from '@/components/Landing/Build';
import Skills from '@/components/Landing/Skills';
import Achievements from '@/components/Landing/Achievements';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className='bg-cyan-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-8 sm:py-16 md:py-24 lg:py-32 flex flex-col h-full overflow-y-scroll no-scrollbar'>
      <Hero />
      <Build />
      <Skills />
      <Achievements />
    </main>
  );
};

export default Home;
