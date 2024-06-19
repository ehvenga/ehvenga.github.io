import React from 'react';

const Hero: React.FC = () => {
  return (
    <div>
      <section className='text-2xl text-cyan-950 mt-32'>
        <h1 className='text-[3.25em] leading-[1.1em] tracking-wide animate-slide-up'>
          Hi, my
          <br /> name is <span className='font-semibold'>Hari</span>
          <span className='text-teal-500'>.</span>
        </h1>
        <h2 className='pt-6 animate-slide-up-secondary'>
          I'm a <span className='font-semibold'>Full-Stack Developer</span>{' '}
          <br />
          and <span className='font-semibold'>Data Scientist</span> from
          Illinois
        </h2>
      </section>
      <section className='mt-20 translate-x-40 '>
        <span className='text-xs tracking-[0.4em] animate-slide-up-secondary'>
          {Array.from('SCROLL').map((letter, index) => (
            <span
              key={index}
              className='inline-block animate-wave'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
        <div className='border-l border-black h-80 translate-x-8 mt-6'></div>
      </section>
    </div>
  );
};

export default Hero;
