'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from '../reusable/CustomLinkButton';

const Build: React.FC = () => {
  // InView hooks for animations
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Button configuration
  const buttons = [
    { href: 'work', text: 'Find out more' },
    { href: 'projects', text: 'Look at my projects' },
    { href: 'about', text: 'Get to know me' },
  ];

  return (
    <section className='mt-20 lg:mt-28 mb-20 lg:mb-36 text-cyan-950 px-4 sm:px-8 lg:px-0'>
      {/* Section Header */}
      <h3
        className={`group flex heading text-4xl sm:text-5xl lg:text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        ref={headerRef}
      >
        Let's Build Together<span className='text-teal-500'>.</span>{' '}
        <div className='pl-2 group-hover:motion-preset-confetti cursor-default'>
          🤝
        </div>
      </h3>

      {/* Animated Border */}
      <div
        className={`border-b-4 border-teal-500 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
      ></div>

      {/* Description */}
      <article className='text-base sm:text-lg w-full lg:w-[34em] mt-6 leading-relaxed'>
        From innovative interactive webpages and scalable applications to
        single-page apps and experimental 3D projects, I help teams build
        ambitious yet accessible web experiences -{' '}
        <span className='font-semibold'>the wilder, the better.</span>
      </article>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-x-6 mt-2'>
        {buttons.map((button, index) => (
          <CustomLinkButton
            key={index}
            href={button.href}
            text={button.text}
            textColor=''
            bgColor=''
            borderColor=''
            bgHoverColor=''
          />
        ))}
      </div>
    </section>
  );
};

export default Build;
