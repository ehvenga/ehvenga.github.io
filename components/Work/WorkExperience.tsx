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
  isButtonPresent: boolean;
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
    linkHref:
      'https://github.com/ehvenga/interactive.approach.to.backward.compatible.modular.system.configuration',
    src: '/bu-logo.png',
    alt: 'Bradley University Logo',
    isButtonPresent: true,
  },
  {
    company: 'LEO1',
    role: 'Full-Stack Developer',
    responsibilities: [
      'Leading development efforts on various web applications using modern technologies.',
      'Focusing on user experience, responsive design, and front-end performance.',
    ],
    buttonText: 'Visit Website',
    linkHref: 'https://leo1.com',
    src: '/leo1-logo.png',
    alt: 'LEO1 Logo',
    isButtonPresent: true,
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
    isButtonPresent: false,
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
    isButtonPresent: false,
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
        className={`group flex heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Work Experience<span className='text-emerald-500'>.</span>{' '}
        <div className='pl-2 group-hover:motion-preset-confetti cursor-default'>
          💼
        </div>
      </h3>

      <div
        ref={borderRef}
        className={`border-b-4 border-emerald-500 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
        style={{ position: 'relative', right: 0 }}
      ></div>

      <article className='text-lg w-[40em] mt-6 mb-12 leading-relaxed'>
        4+ years of experience as a Full-Stack Developer skilled in Postgres,
        SQL, JavaScript, Python, Django, and React. Runner-Up at the North
        American IEOM Conference as a Graduate Research Student.
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
  isButtonPresent,
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
        {isButtonPresent && (
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
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
