'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from './reusable/CustomLinkButton';
import CustomTags from './reusable/CustomTags';

const skills = [
  'Python',
  'FastAPI',
  'Django',
  'REST APIs',
  'WebSockets',
  'Angular (15.0+)',
  'React',
  'JavaScript',
  'TypeScript',
  'NextJS',
  'SQLAlchemy',
  'Postgres',
  'MySQL',
  'Redux',
  'Node.js',
  'Express JS',
  'Vue',
  'Sveltekit',
  'C#',
  '.NET',
  'ASP.NET',
  'WebRTC',
  'Local Storage',
];

const dataSkills = [
  'Data Mining',
  'Knowledge Discovery',
  'Tableau',
  'Classification',
  'Regression',
  'Neural Networks',
  'Tensorflow',
  'Pytorch',
  'Rapidminer',
  'Altair AIStudio',
  'Tableau',
  'Data Cleansing',
  'Data Visualization',
  'Pandas',
  'Data Manipulation',
  'Statistical Analysis',
  'Microsoft Access',
  'Jupyter Notebook',
  'Hypothesis Testing',
  'Prediction Performance',
];

const otherSkills = [
  'Unit Testing (Jest)',
  'Load Testing',
  'Continuous Integration/Continuous Delivery (CI/CD)',
  'Sentry',
  'DevOps practices',
  'Docker',
  'AWS',
  'Performance monitoring',
  'Quality automation',
  'Postgres',
  'MySQL',
  'NoSQL (MongoDB, Firebase)',
  'Power BI',
  'Database migrations',
  'Agile Development (SCRUM)',
  'Figma',
  'Adobe Suite',
  'Project Management',
  'Cloud technologies',
];

const Skills: React.FC = () => {
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
    <section className='flex flex-col mt-28 mb-36 text-cyan-950'>
      <h3
        className={`group flex heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        ref={headerRef}
      >
        My Skills<span className='text-teal-500'>.</span>{' '}
        <div className='pl-2 group-hover:motion-preset-confetti cursor-default'>
          ⚔️
        </div>
      </h3>
      <div
        className={`border-b-4 border-teal-500 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
      ></div>

      <article className='text-lg w-[34em] mt-6 leading-relaxed'>
        Over the years of my education and professional experience I have
        gathered useful skills for{' '}
        <span className='font-semibold'>Software Development</span> and{' '}
        <span className='font-semibold'>Data Science</span>
      </article>
      <h5 className='text-2xl mt-10 mb-6 font-semibold text-teal-700'>
        Software Development
      </h5>
      <div className='flex flex-wrap gap-x-5 gap-y-5'>
        {skills.map((skill, index) => (
          <CustomTags
            key={index}
            text={skill}
            textColor=''
            bgColor=''
            borderColor=''
            bgHoverColor=''
          />
        ))}
      </div>
      <h5 className='text-2xl mt-10 mb-6 font-semibold text-teal-700'>
        Data Science
      </h5>
      <div className='flex flex-wrap gap-x-5 gap-y-5'>
        {dataSkills.map((skill, index) => (
          <CustomTags
            key={index}
            text={skill}
            textColor=''
            bgColor=''
            borderColor=''
            bgHoverColor=''
          />
        ))}
      </div>
      <h5 className='text-2xl mt-10 mb-6 font-semibold text-teal-700'>Other</h5>
      <div className='flex flex-wrap gap-x-5 gap-y-5'>
        {otherSkills.map((skill, index) => (
          <CustomTags
            key={index}
            text={skill}
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

export default Skills;
