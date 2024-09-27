import Image from 'next/image';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Build from '@/components/Build';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className='bg-cyan-20 px-60 py-32 flex flex-col h-full overflow-y-scroll no-scrollbar'>
      <Hero />
      <Build />
      <WorkExperience />
    </main>
  );
};

export default Home;
