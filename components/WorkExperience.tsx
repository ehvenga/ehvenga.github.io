'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from './resuable/CustomLinkButton';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
}

const WorkExperience: React.FC = () => {
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
    <section className='mt-28 text-cyan-950'>
      <h3
        className={`heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        ref={headerRef}
      >
        Work Experience<span className='text-teal-500'>.</span>
      </h3>
      <div
        className={`border-b-4 border-teal-500 my-5 transition-all duration-1000 ${
          borderInView ? 'animate-growFromRight' : 'w-0 opacity-0'
        }`}
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
      ></div>

      <article className='text-lg w-[34em] mt-6 mb-12 leading-relaxed'>
        Learn more about my experience and expertise in JavaScript, Python,
        machine learning, and leading key projects.
      </article>
      <div className='divide-solid divide-y-2 divide-teal-200'>
        {renderExperience({
          company: 'Bradley University',
          role: 'Graduate Research Student',
          responsibilities: [
            'I have been working on interesting research challenges under Dr. John Yoo regarding automated modular system configuration.',
            'I have worked on the algorithms, front-end and back-end systems for the backward compatible modular system design.',
          ],
        })}
        {renderExperience({
          company: 'LEO1',
          role: 'Full-Stack Developer',
          responsibilities: [
            'Leading development efforts on various web applications using modern technologies.',
            'Focusing on user experience, responsive design, and front-end performance.',
          ],
        })}
        {renderExperience({
          company: 'Axis Nodes',
          role: 'Full-Stack Developer',
          responsibilities: [
            'Contributing to both front-end and back-end development for dynamic client projects.',
            'Ensuring scalability and performance of web applications.',
          ],
        })}
        {renderExperience({
          company: 'Infiale Services',
          role: 'Founder, Software Engineer, Product Manager',
          responsibilities: [
            'Overseeing all phases of software development from conception to deployment.',
            'Managing product development timelines and coordinating with cross-functional teams.',
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
          <span className='text-teal-500'>.</span>
        </h4>
        <h5 className='text-2xl font-semibold text-cyan-800'>
          {role}
          <span className='text-teal-500'>.</span>
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
          ></CustomLinkButton>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
