'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
  src: string;
  alt: string;
}

const educationData: ExperienceProps[] = [
  {
    company: 'Bradley University',
    role: 'Data Science & Analytics',
    responsibilities: [
      'Completed 30 credit hours with a final GPA of 3.70, including courses in Data Science, Machine Learning, and Engineering Analytics.',
      'Served in leadership roles as Secretary for the Bradley Information Technology Students Club and Treasurer for the AI Club.',
    ],
    src: '/bu-logo.png',
    alt: 'Bradley University Logo',
  },
  {
    company: 'Manipal University of Technology',
    role: 'Mechanical Engineering',
    responsibilities: [
      'Excelling in academics and intensive research projects like heat treatment experiments.',
      'Led the Engines and Intake division for a university start-up, organized racing events, and developed software applications for campus use.',
    ],
    src: '/mit-logo.png',
    alt: 'Bradley University Logo',
  },
];

const ExperienceItem: React.FC<ExperienceProps> = ({
  company,
  role,
  responsibilities,
  src,
  alt,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      className='flex flex-wrap md:flex-nowrap justify-end items-center mb-6'
      ref={ref}
    >
      <Image
        src={src}
        width={400}
        height={200}
        alt={alt}
        className='mr-0 md:mr-32 mt-2 scale-90 transition-transform duration-300 hover:scale-95 max-w-full h-auto'
      />
      <div className='mt-10 max-w-full'>
        <h4 className='text-3xl md:text-4xl font-semibold'>
          {company}
          <span className='text-rose-400'>.</span>
        </h4>
        <h5 className='text-xl md:text-2xl font-semibold text-rose-800'>
          {role}
          <span className='text-rose-400'>.</span>
        </h5>
        {responsibilities.map((text, index) => (
          <article
            key={index}
            className={`text-base md:text-lg max-w-[34em] mt-6 leading-relaxed transition-opacity duration-1000 ${
              inView ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {text}
          </article>
        ))}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className='mt-28 mb-28 text-red-950'>
      <h3
        ref={headerRef}
        className={`group flex heading text-4xl md:text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Education<span className='text-rose-400'>.</span>{' '}
        <div className='pl-2 group-hover:motion-preset-confetti cursor-default'>
          🎓
        </div>
      </h3>
      <div
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
        className={`border-b-4 border-rose-400 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
      ></div>
      <article className='text-base md:text-lg max-w-2xl mt-6 mb-12 leading-relaxed'>
        Naturally adept with technology, I pursued a Bachelor’s in Mechanical
        Engineering and later specialized in Data Science & Analytics for my
        Master’s to tackle new challenges.
      </article>
      <div className='divide-solid divide-y-2 divide-rose-200 mt-12 mb-16'>
        {educationData.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Education;
