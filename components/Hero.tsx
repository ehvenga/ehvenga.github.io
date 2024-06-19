import React from 'react';

const Hero: React.FC = () => {
  return (
    <div>
      <section className='text-2xl text-cyan-950'>
        <h1 className='text-7xl leading-[1.2em] tracking-wide animate-slide-up'>
          Hi, my
          <br /> name is <span className='font-semibold'>Hari</span>.
        </h1>
        <h2 className='pt-8 animate-slide-up-secondary'>
          I'm a <span className='font-semibold'>Full-Stack Developer</span> from
          Illinois
        </h2>
      </section>
      <section className='mt-20 translate-x-40'>
        <span className='text-xs tracking-[0.4em] animate-shine'>
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
      </section>
    </div>
  );
};

export default Hero;
