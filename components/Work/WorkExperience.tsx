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
    company: 'Optimum Technology',
    role: 'Full-Stack Developer',
    responsibilities: [
      'Developed and tested enterprise-scale web applications using modern full-stack technologies, ensuring performance, reliability, and scalability.',
      'Contributed to the AI Practice, exploring AI-driven solutions and leveraging Microsoft Azure for cloud-based application development.',
    ],
    buttonText: 'Visit Website',
    linkHref: 'https://www.optimumtech.com',
    src: '/otech-logo.png',
    alt: 'Optimum Technology Logo',
    isButtonPresent: false,
  },

  {
    company: 'Bradley University',
    role: 'Graduate Research Student',
    responsibilities: [
      'Researched Modular System Configurations under Dr. John Yoo, leveraging tree-based and DP-based algorithms.',
      'Designed and implemented front-end, back-end, and database systems, achieving automated configuration of over 3,000 parts while ensuring system optimality.',
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
      'Led development efforts on various web applications using modern technologies handling around 300,000 users.',
      'Architected a microservices-based system, ensuring scalability and modularity for real-time loan automation.',
      'Collaborated with cross-functional teams, integrated CI/CD pipelines, and delivered an eCommerce platform.',
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
      'Architected and developed a web application, integrating cross-platform authentication, server-side rendering, and a serverless backend system.',
      'Collaborated on customer-facing features and integrated third-party services, supporting over 100,000 users.',
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
      'Led the design and development of applications, managing the product lifecycle from concept to launch.',
      'Coordinated technical teams and content creators across South India, ensuring seamless collaboration and timely delivery.',
    ],
    buttonText: 'Visit Live Website',
    linkHref: 'https://infispot.com',
    src: '/infiale-logo.png',
    alt: 'Infispot Logo',
    isButtonPresent: false,
  },
];

const WorkExperience: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className='mt-20 lg:mt-28 text-cyan-950 px-4 sm:px-8 lg:px-0'>
      <h3
        ref={headerRef}
        className={`group flex heading text-4xl sm:text-5xl lg:text-6xl font-semibold transition-opacity duration-1000 ${
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

      <article className='text-base sm:text-lg w-full lg:w-[40em] mt-6 mb-12 leading-relaxed'>
        Full-Stack Developer with 4+ years of experience building and testing
        scalable enterprise applications using TypeScript, JavaScript, React,
        Next.js, Python, SQL, and modern cloud technologies. Experienced in
        Microsoft Azure and AI-driven initiatives. Runner-Up at the North
        American IEOM Conference as a Graduate Research Student.
      </article>

      <div className='divide-solid divide-y-2 divide-emerald-200'>
        {experiences.map((exp) => (
          <ExperienceItem key={exp.company} {...exp} />
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
    <div
      ref={ref}
      className='flex flex-col lg:flex-row justify-end items-center lg:items-start mb-8 lg:mb-16 group'
    >
      {company === 'Optimum Technology' ? (
        <div className='lg:mr-32 mt-20 flex w-[200px] lg:w-[400px] h-[120px] lg:h-[200px] flex-shrink-0 items-center justify-center'>
          <Image
            src={src}
            width={600}
            height={80}
            alt={alt}
            className='w-full h-auto object-contain scale-90 transition-transform duration-300 group-hover:scale-95'
          />
        </div>
      ) : (
        <Image
          src={src}
          width={400}
          height={200}
          alt={alt}
          className='lg:mr-32 mt-2 scale-90 transition-transform duration-300 group-hover:scale-95 w-[200px] lg:w-[400px]'
        />
      )}

      <div className='mt-8 lg:mt-16 w-full lg:w-auto'>
        <h4 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
          {company}
          <span className='text-emerald-500'>.</span>
        </h4>

        <h5 className='text-xl sm:text-2xl font-semibold text-emerald-600 mb-4 lg:mb-8'>
          {role}
          <span className='text-emerald-400'>.</span>
        </h5>

        {responsibilities.map((responsibility, index) => (
          <article
            key={`${company}-responsibility-${index}`}
            className={`text-base sm:text-lg w-full lg:w-[34em] mt-4 leading-relaxed transition-opacity duration-1000 ${
              inView ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {responsibility}
          </article>
        ))}

        {isButtonPresent && (
          <div className='mt-4 lg:mt-2'>
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
