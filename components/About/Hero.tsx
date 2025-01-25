'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className=''>
      <section className='text-2xl text-red-950 mt-32'>
        <h1 className='text-[3.25em] leading-[1.1em] tracking-wide animate-slide-up font-semibold'>
          About me
          <span className='text-rose-400'>.</span>
        </h1>
        <div
          className={`border-b-4 border-rose-400 my-5 mt-3 transition-all ${
            borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
          }`}
          ref={borderRef}
          style={{ right: 0, position: 'relative' }}
        ></div>
        <h2 className='pt-6 animate-slide-up-secondary'>
          Learn more about my academic journey and find out
          <br className='hidden md:block' /> about the{' '}
          <span className='font-semibold leading-relaxed'>
            interesting projects
          </span>{' '}
          I was a part of through my <br className='hidden md:block' />
          academic journey.
        </h2>
      </section>
      <section className='mt-20 translate-x-0 md:translate-x-40'>
        <span className='text-xs tracking-[0.4em] animate-slide-up-secondary'>
          {Array.from('SCROLL').map((letter, index) => (
            <span
              key={index}
              className='inline-block animate-wave-ro'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
        <div className='border-l border-black h-80 translate-x-8 mt-6'></div>
      </section>
    </div>
  );
};

export default Hero;
