import React from 'react';
import type { NextPage } from 'next';
import Hero from '@/components/About/Hero';

const About: NextPage = () => {
  return (
    <main className='bg-rose-50 px-60 py-32 flex flex-col h-full'>
      <Hero />
    </main>
  );
};

export default About;
