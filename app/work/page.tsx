import React from 'react';
import type { NextPage } from 'next';
import Hero from '@/components/Work/Hero';
import WorkExperience from '@/components/Work/WorkExperience';

const Work: NextPage = () => {
  return (
    <main className='bg-lime-50 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-8 sm:py-16 md:py-24 lg:py-32 flex flex-col h-full overflow-y-scroll no-scrollbar'>
      <Hero />
      <WorkExperience />
    </main>
  );
};

export default Work;
