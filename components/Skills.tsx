'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from './reusable/CustomLinkButton';

const Skills: React.FC = () => {
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
        My Skills<span className='text-teal-500'>.</span>
      </h3>
      <div
        className={`border-b-4 border-teal-500 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
      ></div>

      <article className='text-lg w-[34em] mt-6 leading-relaxed'>
        From innovative interactive webpages and scalable applications to
        single-page apps and experimental 3D projects, I help teams Skills
        ambitious yet accessible web experiences -{' '}
        <span className='font-semibold'>the wilder, the better.</span>
      </article>
      <div className='flex gap-x-6'>
        <CustomLinkButton
          href='profile'
          text='Find out more'
          textColor=''
          bgColor=''
          borderColor=''
          bgHoverColor=''
        ></CustomLinkButton>
        <CustomLinkButton
          href='projects'
          text='Look at my projects'
          textColor=''
          bgColor=''
          borderColor=''
          bgHoverColor=''
        ></CustomLinkButton>
        <CustomLinkButton
          href='about'
          text='Get to know me'
          textColor=''
          bgColor=''
          borderColor=''
          bgHoverColor=''
        ></CustomLinkButton>
      </div>
    </section>
  );
};

export default Skills;
