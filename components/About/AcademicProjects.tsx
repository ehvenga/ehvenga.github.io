'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
}

const AcademicProjects: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section className='mt-28 text-cyan-950'>
      <h3
        className={`heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        ref={headerRef}
      >
        Academic Projects<span className='text-rose-400'>.</span>
      </h3>
      <div
        className={`border-b-4 border-rose-400 my-5 transition-all duration-1000 ${
          borderInView ? 'animate-growFromRight' : 'w-0 opacity-0'
        }`}
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
      ></div>
      <article className='text-lg w-[34em] mt-6 mb-12 leading-relaxed'>
        Learn more about my experience and expertise in JavaScript, Python,
        machine learning, and leading key projects.
      </article>
      <div className='divide-solid divide-y-2 divide-rose-400'>
        {renderExperience({
          company: 'Bradley University',
          role: 'Data Science & Analytics',
          responsibilities: [
            'I have been working on interesting research challenges under Dr. John Yoo regarding automated modular system configuration.',
          ],
        })}
        {renderExperience({
          company: 'Manipal University of  Technology',
          role: 'Mechanical Engineering',
          responsibilities: [
            'Leading development efforts on various web applications using modern technologies.',
          ],
        })}
        {renderExperience({
          company: 'Manipal University of  Technology',
          role: 'Mechanical Engineering',
          responsibilities: [
            'Leading development efforts on various web applications using modern technologies.',
          ],
        })}
      </div>
    </section>
  );
};

const renderExperience = ({
  company,
  role,
  responsibilities,
}: ExperienceProps) => {
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
        <h5 className='text-2xl font-semibold text-cyan-800'>
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
      </div>
    </div>
  );
};

export default AcademicProjects;
