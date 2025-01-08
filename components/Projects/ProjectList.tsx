'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from '../reusable/CustomLinkButton';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
  buttonText: string;
}

const experienceData: ExperienceProps[] = [
  {
    company: 'Auto-M-Design',
    role: 'Interactive Modular System Configuration',
    responsibilities: [
      'I have been working on interesting research challenges under Dr. John Yoo regarding automated modular system configuration.',
      'I have worked on the algorithms, front-end and back-end systems for the backward compatible modular system design.',
    ],
    buttonText: 'Visit Github',
  },
  {
    company: 'Path Finding Visualizer',
    role: 'Full-Stack Developer',
    responsibilities: [
      'Leading development efforts on various web applications using modern technologies.',
      'Focusing on user experience, responsive design, and front-end performance.',
    ],
    buttonText: 'Visit Live Website',
  },
  {
    company: 'GTA V Mods',
    role: 'Full-Stack Developer',
    responsibilities: [
      'Contributing to both front-end and back-end development for dynamic client projects.',
      'Ensuring scalability and performance of web applications.',
    ],
    buttonText: 'View Github',
  },
  {
    company: 'Pokemon Sprite Contest',
    role: 'Founder, Software Engineer, Product Manager',
    responsibilities: [
      'Overseeing all phases of software development from conception to deployment.',
      'Managing product development timelines and coordinating with cross-functional teams.',
    ],
    buttonText: 'Visit Live Website',
  },
  {
    company: 'Trump Chatbot',
    role: 'Founder, Software Engineer, Product Manager',
    responsibilities: [
      'Overseeing all phases of software development from conception to deployment.',
      'Managing product development timelines and coordinating with cross-functional teams.',
    ],
    buttonText: 'Visit Live Website',
  },
  {
    company: 'Hand Gesture Recognition',
    role: 'Founder, Software Engineer, Product Manager',
    responsibilities: [
      'Overseeing all phases of software development from conception to deployment.',
      'Managing product development timelines and coordinating with cross-functional teams.',
    ],
    buttonText: 'View Github',
  },
  {
    company: 'Chicago Crime Analysis',
    role: 'Founder, Software Engineer, Product Manager',
    responsibilities: [
      'Overseeing all phases of software development from conception to deployment.',
      'Managing product development timelines and coordinating with cross-functional teams.',
    ],
    buttonText: 'View Github',
  },
  {
    company: 'Gemstone Prediction',
    role: 'Founder, Software Engineer, Product Manager',
    responsibilities: [
      'Overseeing all phases of software development from conception to deployment.',
      'Managing product development timelines and coordinating with cross-functional teams.',
    ],
    buttonText: 'View Github',
  },
];

const Experience: React.FC<ExperienceProps> = ({
  company,
  role,
  responsibilities,
  buttonText,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className='flex justify-end mb-16' ref={ref}>
      <div className='mt-16'>
        <h4 className='text-4xl font-semibold'>
          {company}
          <span className='text-orange-400'>.</span>
        </h4>
        <h5 className='text-xl font-semibold text-orange-600'>
          {role}
          <span className='text-orange-400'>.</span>
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
            text={buttonText}
            textColor='text-orange-500'
            bgColor='bg-orange-100'
            borderColor='border-orange-800'
            bgHoverColor='[background-color:#d7FEAA]'
          />
        </div>
      </div>
    </div>
  );
};

const ProjectList: React.FC = () => {
  return (
    <section className='mt-16 text-red-950'>
      <div className='divide-solid divide-y-2 divide-orange-200'>
        {experienceData.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
