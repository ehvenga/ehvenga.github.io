'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from '../reusable/CustomLinkButton';

interface ExperienceProps {
  subject: string;
  title: string;
  responsibilities: string[];
  link: string;
}

const academicProjectData: ExperienceProps[] = [
  {
    subject: 'Engineering Analytics Research - Bradley University',
    title: 'Backward-Compatible Modular Configuration',
    responsibilities: [
      'A dynamic programming approach to streamline system configurations, enhance collaboration, and reduce costs.',
    ],
    link: 'https://github.com/ehvenga/interactive.modular.system.configuration.tool-django',
  },
  {
    subject: 'Machine Learning - Bradley University',
    title: 'Gemstones Prediction',
    responsibilities: [
      'Built with TensorFlow and Keras, the model utilizes a convolutional neural network (CNN) for accurate gemstone identification.',
    ],
    link: 'https://github.com/ehvenga/gemstones.prediction-tensorflow',
  },
  {
    subject: 'Business Analytics - Bradley University',
    title: 'Travel Insurance Prediction',
    responsibilities: [
      'Developed predictive models to identify potential travel insurance buyers, enhancing targeted marketing and profitability through data-driven insights.',
    ],
    link: 'https://github.com/ehvenga/chicago.crime.overview-tableau',
  },
  {
    subject: 'Logistics & Supply Chain Systems - Bradley University',
    title: 'Revlon Hair Dryer BOM & Logistics Analysis',
    responsibilities: [
      'Optimized logistics and supply chain processes through BOM management, database creation, regression analysis, and product performance evaluation.',
    ],
    link: 'https://github.com/ehvenga/chicago.crime.overview-tableau',
  },
  {
    subject: 'Knowledge Discovery & Data Mining - Bradley University',
    title: 'Machine Learning Analysis of Play Store Apps',
    responsibilities: [
      'Applied machine learning techniques to analyze the Google Play Store dataset, uncovering patterns in app performance and market trends.',
    ],
    link: '',
  },
  {
    subject: 'Capstone Project - Manipal University of  Technology',
    title: 'Spheroidization Heat Treatment',
    responsibilities: [
      'Studied the effects of spheroidization and alloying elements on the machinability of medium carbon steel AISI 4340.',
    ],
    link: '',
  },
];

const ExperienceItem: React.FC<ExperienceProps> = ({
  subject,
  title,
  responsibilities,
  link,
}) => {
  // Each ExperienceItem uses its own intersection observer to animate
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className='flex justify-end mb-16' ref={ref}>
      <div className='mt-16'>
        <h4 className='text-3xl font-semibold'>
          {title}
          <span className='text-rose-400'>.</span>
        </h4>
        <h5 className='text-2xl font-semibold text-rose-800'>
          {subject}
          <span className='text-rose-400'>.</span>
        </h5>
        {responsibilities.map((text, index) => (
          <article
            key={index}
            className={`text-lg w-[38em] mt-6 leading-relaxed transition-opacity duration-1000 ${
              inView ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {text}
          </article>
        ))}
        {link != '' && (
          <div className='mt-10'>
            <CustomLinkButton
              href={link}
              text='Find out more'
              textColor='text-rose-500'
              bgColor='bg-rose-100'
              borderColor='border-rose-500'
              bgHoverColor='[background-color:#FFF1F2]'
            />
          </div>
        )}
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
        className={`group flex heading text-6xl font-semibold transition-opacity duration-1000 ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Academic Projects<span className='text-rose-400'>.</span>{' '}
        <div className='pl-2 group-hover:motion-preset-confetti cursor-default'>
          📝
        </div>
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
        Below are the academic projects that helped me develop the necessary
        skills to succeed in my academics and professional life.
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
