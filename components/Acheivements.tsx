'use client';

import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from './reusable/CustomLinkButton';

interface ExperienceProps {
  company: string;
  role: string;
  responsibilities: string[];
}

const Achievements: React.FC = () => {
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
    <section className='mt-28 mb-36 text-teal-950'>
      <h3
        className={`group heading text-6xl font-semibold transition-opacity duration-1000 flex ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        ref={headerRef}
      >
        Recent Achievements<span className='text-teal-500'>.</span>{' '}
        <div className='pl-2 group-hover:motion-preset-confetti cursor-default'>
          🏆
        </div>
      </h3>
      <div
        className={`border-b-4 border-teal-500 my-5 transition-all ${
          borderInView ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
        }`}
        ref={borderRef}
        style={{ right: 0, position: 'relative' }}
      ></div>

      {/* <article className='text-lg w-[34em] mt-6 leading-relaxed'>
        From innovative interactive webpages and scalable applications to
        single-page apps and experimental 3D projects, I help teams Achievements
        ambitious yet accessible web experiences -{' '}
        <span className='font-semibold'>the wilder, the better.</span>
      </article> */}
      <div>
        <ul className='flex flex-col gap-y-1 list-disc text-lg'>
          <li className='flex justify-between transition duration-300 hover:scale-[1.01] cursor-default'>
            <span>
              AI Planners and Domain Experts in Modular Product Design, IISE
              Annual Conference, Georgia,{' '}
              <span className='font-semibold'>Co-Author</span>
            </span>
            <span className='font-semibold'>Jun 2025</span>
          </li>
          <li className='flex justify-between transition duration-300 hover:scale-[1.01] cursor-default'>
            <span>
              North American Conference, IEOM Society, Washington DC,{' '}
              <span className='font-semibold'>Runner-up</span>
            </span>
            <span className='font-semibold'>Jun 2024</span>
          </li>
          <li className='flex justify-between transition duration-300 hover:scale-[1.01] cursor-default'>
            <span>
              LEO1 Certificate of Appreciation for Outstanding Contributions,
              Mumbai, India
            </span>
            <span className='font-semibold'>Aug 2023</span>
          </li>
          <li className='flex justify-between transition duration-300 hover:scale-[1.01] cursor-default'>
            <span>
              Financepeer Outstanding Contributions Award, Mumbai, India
            </span>
            <span className='font-semibold'>Dec 2022</span>
          </li>
          {/* <li className='flex justify-between'>
            <span>
              HackerRank Problem Solving Basics/Intermediate Certificate, India
            </span>
            <span className='font-semibold'>Dec 2022</span>
          </li>
          <li className='flex justify-between'>
            <span>
              HackerRank JavaScript Basics/Intermediate Certificate, India
            </span>
            <span className='font-semibold'>Dec 2022</span>
          </li>
          <li className='flex justify-between'>
            <span>
              HackerRank Python Basics/Intermediate Certificate, India
            </span>
            <span className='font-semibold'>Dec 2022</span>
          </li>
          <li className='flex justify-between'>
            <span>
              Full Stack Developer Certificate, ATTAINU, Bangalore, India
            </span>
            <span className='font-semibold'>Dec 2021</span>
          </li>
          <li className='flex justify-between'>
            <span>
              Biomedical Engineering Society of India Startup Pitch Fest,
              Runner-up, Manipal, India
            </span>
            <span className='font-semibold'>Nov 2020 - Aug 2021</span>
          </li>
          <li className='flex justify-between'>
            <span>
              Techtatva Technical Fest Remote All Terrain Crawler, Second
              Runner-up, Manipal, India
            </span>
            <span className='font-semibold'>Nov 2016</span>
          </li>
          <li className='flex justify-between'>
            <span>PERSONAL PROJECTS</span>
            <span className='font-semibold'>Mar 2014</span>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
