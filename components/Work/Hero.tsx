'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div>
      <section className='text-2xl text-cyan-950 mt-12 lg:mt-32 px-4 sm:px-8 lg:px-0'>
        <h1 className='text-[2.5em] sm:text-[3.25em] leading-[1.1em] tracking-wide animate-slide-up font-semibold'>
          Work
          <span className='text-emerald-400'>.</span>
        </h1>
        <div
          className={`border-b-4 border-emerald-400 my-5 mt-3 transition-all ${
            borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
          }`}
          ref={borderRef}
          style={{ right: 0, position: 'relative' }}
        ></div>
        <h2 className='pt-6 animate-slide-up-secondary'>
          A forward thinking tech enthusiast who likes to design and <br />{' '}
          build{' '}
          <span className='font-semibold leading-relaxed'>
            interactive, accessible websites{' '}
            <span className='font-normal'>and</span> products
          </span>{' '}
          that
          <br />
          make the world a{' '}
          <span className='font-semibold leading-relaxed'>
            little bit brighter.
          </span>
        </h2>
      </section>
      <section className='mt-10 lg:mt-20 translate-x-0 lg:translate-x-40 px-4 sm:px-8 lg:px-0'>
        <span className='text-xs tracking-[0.4em] animate-slide-up-secondary'>
          {Array.from('SCROLL').map((letter, index) => (
            <span
              key={index}
              className='inline-block animate-wave-em'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
        <div className='border-l border-black h-40 lg:h-80 translate-x-8 mt-6'></div>
      </section>
    </div>
  );
};

export default Hero;
