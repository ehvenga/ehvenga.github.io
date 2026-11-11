'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface PointerPosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<HTMLImageElement>(null);
  const rightEyeRef = useRef<HTMLImageElement>(null);

  const mousePos = useRef<PointerPosition>({
    x: 0,
    y: 0,
  });

  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const pointerMedia = window.matchMedia('(any-pointer: fine)');

    const reducedMotionMedia = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const resetPosition = (): void => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }

      if (headRef.current) {
        headRef.current.style.transform =
          'translate3d(0px, 0px, 0px) rotate(0deg)';
      }

      if (leftEyeRef.current) {
        leftEyeRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
      }

      if (rightEyeRef.current) {
        rightEyeRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
      }
    };

    const updatePosition = (): void => {
      animationFrameId.current = null;

      const anchor = anchorRef.current;
      const head = headRef.current;

      if (!anchor || !head) return;

      const { x: mouseX, y: mouseY } = mousePos.current;

      const rect = anchor.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const diffX = mouseX - centerX;
      const diffY = mouseY - centerY;

      const distance = Math.hypot(diffX, diffY);
      const scale = rect.width / 650;

      const maxEyeMovement = 15 * scale;
      const maxFaceMovement = 5 * scale;
      const maxRotation = 3;

      const eyeRatio =
        distance > 0 ? Math.min(maxEyeMovement / distance, 1) : 0;

      const faceRatio =
        distance > 0 ? Math.min(maxFaceMovement / distance, 1) : 0;

      const eyeMoveX = diffX * eyeRatio;
      const eyeMoveY = diffY * eyeRatio;

      const faceMoveX = diffX * faceRatio;
      const faceMoveY = diffY * faceRatio;

      const rotation = Math.max(
        -maxRotation,
        Math.min(maxRotation, (diffX / window.innerWidth) * maxRotation)
      );

      head.style.transform = `
        translate3d(
          ${faceMoveX}px,
          ${faceMoveY}px,
          0
        )
        rotate(${rotation}deg)
      `;

      const eyeTransform = `
        translate3d(
          ${eyeMoveX}px,
          ${eyeMoveY}px,
          0
        )
      `;

      if (leftEyeRef.current) {
        leftEyeRef.current.style.transform = eyeTransform;
      }

      if (rightEyeRef.current) {
        rightEyeRef.current.style.transform = eyeTransform;
      }
    };

    const handlePointerMove = (event: PointerEvent): void => {
      if (
        !pointerMedia.matches ||
        reducedMotionMedia.matches ||
        event.pointerType === 'touch'
      ) {
        return;
      }

      mousePos.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (animationFrameId.current === null) {
        animationFrameId.current = requestAnimationFrame(updatePosition);
      }
    };

    const handleDeviceChange = (): void => {
      resetPosition();
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    window.addEventListener('blur', resetPosition);

    pointerMedia.addEventListener('change', handleDeviceChange);

    reducedMotionMedia.addEventListener('change', handleDeviceChange);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);

      window.removeEventListener('blur', resetPosition);

      pointerMedia.removeEventListener('change', handleDeviceChange);

      reducedMotionMedia.removeEventListener('change', handleDeviceChange);

      resetPosition();
    };
  }, []);

  return (
    <div className='flex flex-col lg:flex-row justify-between'>
      <div className='lg:flex-1 lg:min-w-0'>
        <section className='text-2xl text-cyan-950 mt-12 lg:mt-32'>
          <h1 className='text-[2.5em] sm:text-[3.25em] leading-[1.1em] tracking-wide animate-slide-up'>
            Hi, my
            <br />
            name is <span className='font-semibold'>Hari</span>
            <span className='text-teal-500'>.</span>
          </h1>

          <h2 className='pt-6 animate-slide-up-secondary'>
            I'm a <span aria-hidden='true'>&#128640;</span> blazing fast{' '}
            <span className='font-semibold'>Web Developer</span>
            <br />
            and <span className='font-semibold'>Data Scientist</span> from
            Illinois.
          </h2>
        </section>

        <section className='mt-10 lg:mt-20 translate-x-0 lg:translate-x-40'>
          <span className='text-xs tracking-[0.4em] animate-slide-up-secondary'>
            {Array.from('SCROLL').map((letter: string, index: number) => (
              <span
                key={index}
                className='inline-block animate-wave'
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>

          <div className='border-l border-black h-40 lg:h-80 translate-x-8 mt-6' />
        </section>
      </div>

      <div className='w-full lg:w-auto flex justify-center lg:justify-end -translate-y-10 lg:-translate-y-12 translate-x-0 2xl:translate-x-10'>
        <div
          ref={anchorRef}
          id='anchor'
          className='relative aspect-square w-[min(300px,85vw)] lg:w-[min(520px,43vw)] shrink-0'
        >
          <div
            ref={headRef}
            className='absolute inset-0 pointer-events-none'
            style={{
              transformOrigin: 'center 30%',
              transition: 'transform 0.2s ease-out',
            }}
          >
            {/* Neck */}
            <Image
              className='absolute top-[-2%] lg:top-0 left-0 z-0 w-full h-full object-contain'
              alt='Neck'
              width={650}
              height={650}
              src='/clip-art-neck.png'
              draggable={false}
            />

            {/* Face */}
            <Image
              className='face absolute inset-0 z-10 w-full h-full object-contain'
              alt='Face'
              width={650}
              height={650}
              src='/clip-art-face.png'
              priority
              draggable={false}
            />

            {/* Left Eye */}
            <Image
              ref={leftEyeRef}
              className='eye absolute z-20 top-[48.3%] left-[33.85%] w-[8.33%] lg:w-[6.92%] h-auto object-contain'
              alt='Left eye'
              width={45}
              height={45}
              src='/clip-art-eye.png'
              draggable={false}
              style={{
                transition: 'transform 0.2s ease-out',
              }}
            />

            {/* Right Eye */}
            <Image
              ref={rightEyeRef}
              className='eye absolute z-20 top-[48.3%] right-[33.85%] w-[8.33%] lg:w-[6.92%] h-auto object-contain'
              alt='Right eye'
              width={45}
              height={45}
              src='/clip-art-eye.png'
              draggable={false}
              style={{
                transition: 'transform 0.2s ease-out',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
