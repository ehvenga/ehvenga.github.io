'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const anchorRef = useRef<HTMLImageElement>(null);
  const eyesRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  // Cache the eyes and update mouse position on mousemove
  useEffect(() => {
    eyesRef.current = document.querySelectorAll('.eye');

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(updateEyePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Update eye position using requestAnimationFrame
  const updateEyePosition = () => {
    if (!anchorRef.current || !eyesRef.current) return;

    const { x: mouseX, y: mouseY } = mousePos.current;
    const rekt = anchorRef.current.getBoundingClientRect();

    // Calculate the center of the anchor element (face)
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    // Define the maximum distance for x and y axes
    const maxDistance = 10; // Max movement

    // Calculate the difference between the mouse and the face center
    const diffX = mouseX - anchorX;
    const diffY = mouseY - anchorY;

    // Calculate the distance between the mouse and the face center
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    // Normalize the difference to limit the movement
    const ratio = Math.min(maxDistance / distance, 1);
    const moveX = diffX * ratio;
    const moveY = diffY * ratio;

    // Apply the same transformation to both eyes using CSS variables
    eyesRef.current.forEach((eye) => {
      eye.style.setProperty('--move-x', `${moveX}px`);
      eye.style.setProperty('--move-y', `${moveY}px`);
    });

    // Request the next animation frame
    animationFrameId.current = requestAnimationFrame(updateEyePosition);
  };

  return (
    <div className='flex justify-between'>
      <div>
        <section className='text-2xl text-cyan-950 mt-32'>
          <h1 className='text-[3.25em] leading-[1.1em] tracking-wide animate-slide-up'>
            Hi, my
            <br /> name is <span className='font-semibold'>Hari</span>
            <span className='text-teal-500'>.</span>
          </h1>
          <h2 className='pt-6 animate-slide-up-secondary'>
            I'm a 🚀 blazing fast{' '}
            <span className='font-semibold'>Web Developer</span> <br />
            and <span className='font-semibold'>Data Scientist</span> from
            Illinois.
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
      <div className='-translate-y-20 translate-x-10 grid place-items-center relative'>
        <Image
          ref={anchorRef}
          id='anchor'
          alt='face'
          width={650}
          height={650}
          src='clip-art-face.png'
        />
        <Image
          className='eye absolute top-[410px] left-[220px]'
          alt='face'
          width={45}
          height={45}
          src='clip-art-eye.png'
          style={{ transform: 'translate(var(--move-x, 0), var(--move-y, 0))' }}
        />
        <Image
          className='eye absolute top-[410px] right-[220px]'
          alt='face'
          width={45}
          height={45}
          src='clip-art-eye.png'
          style={{ transform: 'translate(var(--move-x, 0), var(--move-y, 0))' }}
        />
      </div>
    </div>
  );
};

export default Hero;
