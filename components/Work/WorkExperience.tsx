'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from '../reusable/CustomLinkButton';
import Image from 'next/image';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
  buttonText: string;
  linkHref: string;
  src: string;
  alt: string;
}

const experiences: ExperienceProps[] = [
  {
    company: 'Bradley University',
    role: 'Graduate Research Student',
    responsibilities: [
      'I have been working on interesting research challenges under Dr. John Yoo regarding automated modular system configuration.',
      'I have worked on the algorithms, front-end and back-end systems for the backward compatible modular system design.',
    ],
    buttonText: 'Visit Github',
    linkHref: 'https://github.com/YourRepoHere',
    src: '/bu-logo.png',
    alt: 'Bradley University Logo',
  },
  {
    company: 'LEO1',
    role: 'Full-Stack Developer',
    responsibilities: [
      'Leading development efforts on various web applications using modern technologies.',
      'Focusing on user experience, responsive design, and front-end performance.',
    ],
    buttonText: 'Visit Live Website',
    linkHref: 'https://leo1.com',
    src: '/leo1-logo.png',
    alt: 'LEO1 Logo',
  },
  {
    company: 'Axis Nodes',
    role: 'Full-Stack Developer',
    responsibilities: [
      'Contributing to both front-end and back-end development for dynamic client projects.',
      'Ensuring scalability and performance of web applications.',
    ],
    buttonText: 'View Github',
    linkHref: 'https://github.com/AnotherRepoHere',
    src: '/axis-nodes-logo.png',
    alt: 'Axis Nodes Logo',
  },
  {
    company: 'Infispot',
    role: 'Founder, Software Engineer, Product Manager',
    responsibilities: [
      'Overseeing all phases of software development from conception to deployment.',
      'Managing product development timelines and coordinating with cross-functional teams.',
    ],
    buttonText: 'Visit Live Website',
    linkHref: 'https://infispot.com',
    src: '/infiale-logo.png',
    alt: 'Infispot Logo',
  },
];

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
        ref={headerRef}
        className={`heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Work Experience<span className='text-emerald-500'>.</span>
      </h3>

      <div
        ref={borderRef}
        className={`border-b-4 border-emerald-500 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
        style={{ position: 'relative', right: 0 }}
      ></div>

      <article className='text-lg w-[34em] mt-6 mb-12 leading-relaxed'>
        Learn more about my experience and expertise in JavaScript, Python,
        machine learning, and leading key projects.
      </article>

      <div className='divide-solid divide-y-2 divide-emerald-200'>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<ExperienceProps> = ({
  company,
  role,
  responsibilities,
  buttonText,
  linkHref,
  src,
  alt,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className='flex justify-end mb-16'>
      <Image
        src={src}
        width={300}
        height={200}
        alt={alt}
        className='mr-32 mt-2 w-[22rem]'
      />
      <div className='mt-16'>
        <h4 className='text-4xl font-semibold'>
          {company}
          <span className='text-emerald-500'>.</span>
        </h4>
        <h5 className='text-2xl font-semibold text-emerald-600'>
          {role}
          <span className='text-emerald-400'>.</span>
        </h5>
        {responsibilities.map((text, i) => (
          <article
            key={i}
            className={`text-lg w-[34em] mt-6 leading-relaxed transition-opacity duration-1000 ${
              inView ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {text}
          </article>
        ))}
        <div className='mt-10'>
          <CustomLinkButton
            href={linkHref}
            text={buttonText}
            textColor='text-emerald-600'
            bgColor='bg-emerald-100'
            borderColor='border-emerald-700'
            bgHoverColor='bg-emerald-600'
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
