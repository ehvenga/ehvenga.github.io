'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Achievement {
  description: string;
  position?: string;
  location?: string;
  date: string;
}

const AchievementItem: React.FC<Achievement> = ({
  description,
  position,
  location,
  date,
}) => (
  <li className='flex justify-between py-2 cursor-default hover:font-semibold transition-all duration-150'>
    <div className='flex flex-col'>
      <span className='text-xl text-teal-900'>{description}</span>
      <span className='text-md text-teal-700'>
        {position}, {location}
      </span>
    </div>
    <span className='text-xl text-teal-900'>{date}</span>
  </li>
);

const Achievements: React.FC = () => {
  // Hook for section header animation
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const achievements: Achievement[] = [
    {
      description:
        'AI Planners and Domain Experts in Modular Product Design, IISE Annual Conference',
      position: 'Co-Author',
      location: 'Georgia, USA',
      date: 'Jun 2025',
    },
    {
      description: 'North American Conference, IEOM Society',
      position: 'Runner-up',
      location: 'Washington DC, USA',
      date: 'Jun 2024',
    },
    {
      description:
        'Big Idea Competition, Turner School of Entrepreneurship and Innovation',
      position: 'Finalist',
      location: 'Peoria IL, USA',
      date: 'Apr 2024',
    },
    {
      description:
        'Certificate of Appreciation for Outstanding Contributions, LEO1',
      location: 'Mumbai, India',
      position: 'Web Developer',
      date: 'Aug 2023',
    },
    {
      description: 'Outstanding Contributions Award, Financepeer',
      position: 'Web Developer',
      location: 'Mumbai, India',
      date: 'Dec 2022',
    },
  ];

  return (
    <section className='mt-28 mb-36 text-teal-950'>
      <h3
        className={`group heading text-6xl font-semibold transition-opacity duration-1000 flex ${
          headerInView ? 'opacity-100' : 'opacity-0'
        }`}
        ref={headerRef}
      >
        Recent Achievements<span className='text-teal-500'>.</span>
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
      <div>
        <ul className='flex flex-col mt-12 gap-y-4 list-disc text-lg'>
          {achievements.map((achievement, index) => (
            <AchievementItem key={index} {...achievement} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
