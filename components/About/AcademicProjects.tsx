'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from '../reusable/CustomLinkButton';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
}

const academicProjectData: ExperienceProps[] = [
  {
    company: 'Bradley University',
    role: 'Data Science & Analytics',
    responsibilities: [
      'I have been working on interesting research challenges under Dr. John Yoo regarding automated modular system configuration.',
    ],
  },
  {
    company: 'Manipal University of  Technology',
    role: 'Mechanical Engineering',
    responsibilities: [
      'Leading development efforts on various web applications using modern technologies.',
    ],
  },
  {
    company: 'Manipal University of  Technology',
    role: 'Mechanical Engineering',
    responsibilities: [
      'Leading development efforts on various web applications using modern technologies.',
    ],
  },
];

const ExperienceItem: React.FC<ExperienceProps> = ({
  company,
  role,
  responsibilities,
}) => {
  // Each ExperienceItem uses its own intersection observer to animate
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className='flex justify-end mb-16' ref={ref}>
      <div className='mt-16'>
        <h4 className='text-4xl font-semibold'>
          {company}
          <span className='text-rose-400'>.</span>
        </h4>
        <h5 className='text-2xl font-semibold text-rose-800'>
          {role}
          <span className='text-rose-400'>.</span>
        </h5>
        {responsibilities.map((text, index) => (
          <article
            key={index}
            className={`text-lg w-[34em] mt-6 leading-relaxed transition-opacity duration-1000 ${
              inView ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {text}
          </article>
        ))}
        <div className='mt-10'>
          <CustomLinkButton
            href='profile'
            text='Find out more'
            textColor='text-rose-500'
            bgColor='bg-rose-100'
            borderColor='border-rose-500'
            bgHoverColor='[background-color:#FFF1F2]'
          />
        </div>
      </div>
    </div>
  );
};

const AcademicProjects: React.FC = () => {
  // Intersection observer for the main heading
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Intersection observer for the border animation
  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className='mt-28 text-red-950'>
      {/* Animated heading */}
      <h3
        ref={headerRef}
        className={`heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Academic Projects<span className='text-rose-400'>.</span>
      </h3>
      {/* Animated border */}
      <div
        ref={borderRef}
        className={`border-b-4 border-rose-400 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
        style={{ right: 0, position: 'relative' }}
      />
      {/* Intro description */}
      <article className='text-lg w-[34em] mt-6 mb-12 leading-relaxed'>
        Learn more about my experience and expertise in JavaScript, Python,
        machine learning, and leading key projects.
      </article>
      {/* Academic projects listing */}
      <div className='divide-solid divide-y-2 divide-rose-200'>
        {academicProjectData.map((project, index) => (
          <ExperienceItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default AcademicProjects;
