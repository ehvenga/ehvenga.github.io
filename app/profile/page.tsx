import React from 'react';
import type { NextPage } from 'next';
import Hero from '@/components/Profile/Hero';

const About: NextPage = () => {
  return (
    <main className='bg-lime-50 px-60 py-32 flex flex-col h-full overflow-y-scroll no-scrollbar'>
      <Hero />
    </main>
  );
};

export default About;
