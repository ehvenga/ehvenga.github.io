import React from 'react';
import type { NextPage } from 'next';
import Hero from '@/components/About/Hero';
import Education from '@/components/About/Education';
import AcademicProjects from '@/components/About/AcademicProjects';

const About: NextPage = () => {
  return (
    <main className='bg-rose-50 px-60 py-32 flex flex-col h-full overflow-y-scroll no-scrollbar'>
      <Hero />
      <Education />
      <AcademicProjects />
    </main>
  );
};

export default About;
