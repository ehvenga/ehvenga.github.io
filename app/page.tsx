import Hero from '@/components/Landing/Hero';
import Build from '@/components/Landing/Build';
import Skills from '@/components/Landing/Skills';
import Achievements from '@/components/Landing/Achievements';
import type { NextPage } from 'next';

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
