'use client';

import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from './resuable/CustomLinkButton';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
}

const Build: React.FC = () => {
  // Hook for the section header
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className='mt-28 mb-36 text-cyan-950'>
      <h3
        className={`heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        ref={headerRef}
      >
        Let's Build Together<span className='text-teal-500'>.</span>
      </h3>
      <div
        className={`border-b-4 border-teal-500 my-5 transition-all duration-1000 ${
          borderInView ? 'animate-growFromRight' : 'w-0 opacity-0'
        }`}
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
      ></div>

      <article className='text-lg w-[34em] mt-6 leading-relaxed'>
        From innovative interactive webpages and scalable applications to
        single-page apps and experimental 3D projects, I help teams build
        ambitious yet accessible web experiences -{' '}
        <span className='font-semibold'>the wilder, the better.</span>
      </article>
      <div className='flex gap-x-6'>
        <CustomLinkButton
          href='profile'
          text='Find out more'
        ></CustomLinkButton>
        <CustomLinkButton
          href='projects'
          text='Look at my projects'
        ></CustomLinkButton>
        <CustomLinkButton href='about' text='Get to know me'></CustomLinkButton>
      </div>
    </section>
  );
};

export default Build;
