'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface PointerPosition {
  x: number;
  y: number;
}

interface MobileMovement {
  faceX: number;
  faceY: number;
  rotation: number;
  eyeX: number;
  eyeY: number;
}

interface MobileInteraction {
  x: number;
  y: number;
  lastTime: number;
  scrollImpulse: number;
  lastScrollY: number;
  current: MobileMovement;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value));

const createMovement = (): MobileMovement => ({
  faceX: 0,
  faceY: 0,
  rotation: 0,
  eyeX: 0,
  eyeY: 0,
});

// Mobile and iPad animation settings.
// Desktop mouse tracking does not use these values.
const MOBILE_ANIMATION = {
  idleFaceX: 12,
  idleFaceY: 8,
  idleRotation: 2.2,
  idleEyeX: 12,
  idleEyeY: 8,

  touchFaceX: 15,
  touchFaceY: 12,
  touchEyeX: 22,
  touchEyeY: 18,
  touchRotation: 4,

  scrollFaceY: 10,
  scrollEyeY: 12,

  smoothing: 9,
  scrollDecay: 2.8,
  touchDecay: 1500,
  touchHold: 450,
} as const;

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

  const mobileRef = useRef<MobileInteraction>({
    x: 0,
    y: 0,
    lastTime: 0,
    scrollImpulse: 0,
    lastScrollY: 0,
    current: createMovement(),
  });

  useEffect(() => {
    const pointerMedia = window.matchMedia('(any-pointer: fine)');

    const reducedMotionMedia = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const mobileMedia = window.matchMedia('(max-width: 1023px)');

    let mobileAnimationId: number | null = null;
    let mobileAnimationStart = 0;
    let lastMobileFrame = 0;
    let touchActive = false;

    const shouldUseMobileAnimation = (): boolean => {
      return (
        !reducedMotionMedia.matches &&
        (mobileMedia.matches || !pointerMedia.matches)
      );
    };

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

    // Original desktop mouse tracking.
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
        shouldUseMobileAnimation() ||
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

    // Expressive mobile and iPad animation.
    const updateMobilePosition = (timestamp: number): void => {
      mobileAnimationId = null;

      if (!shouldUseMobileAnimation() || document.hidden) {
        return;
      }

      const anchor = anchorRef.current;
      const head = headRef.current;
      const leftEye = leftEyeRef.current;
      const rightEye = rightEyeRef.current;

      if (!anchor || !head || !leftEye || !rightEye) {
        return;
      }

      if (mobileAnimationStart === 0) {
        mobileAnimationStart = timestamp;
      }

      const elapsed = (timestamp - mobileAnimationStart) / 1000;

      const deltaTime =
        lastMobileFrame === 0
          ? 1 / 60
          : Math.min((timestamp - lastMobileFrame) / 1000, 0.05);

      lastMobileFrame = timestamp;

      const mobile = mobileRef.current;
      const rect = anchor.getBoundingClientRect();

      const scale = rect.width / 650;

      // More expressive idle head movement.
      const idleFaceX =
        (Math.sin(elapsed * 0.85) * 0.75 + Math.sin(elapsed * 0.37) * 0.25) *
        MOBILE_ANIMATION.idleFaceX *
        scale;

      const idleFaceY =
        Math.sin(elapsed * 1.1 + 0.5) * MOBILE_ANIMATION.idleFaceY * scale;

      const idleRotation =
        Math.sin(elapsed * 0.65) * MOBILE_ANIMATION.idleRotation;

      // Eyes move independently from the head.
      const idleEyeX =
        Math.sin(elapsed * 0.95 + 0.8) * MOBILE_ANIMATION.idleEyeX * scale;

      const idleEyeY =
        Math.sin(elapsed * 0.75 + 1.2) * MOBILE_ANIMATION.idleEyeY * scale;

      // Touch temporarily takes priority over idle movement.
      const timeSinceTouch = timestamp - mobile.lastTime;

      const touchStrength =
        mobile.lastTime > 0
          ? Math.exp(
              -Math.max(0, timeSinceTouch - MOBILE_ANIMATION.touchHold) /
                MOBILE_ANIMATION.touchDecay
            )
          : 0;

      const touchFaceX =
        mobile.x * MOBILE_ANIMATION.touchFaceX * scale * touchStrength;

      const touchFaceY =
        mobile.y * MOBILE_ANIMATION.touchFaceY * scale * touchStrength;

      const touchEyeX =
        mobile.x * MOBILE_ANIMATION.touchEyeX * scale * touchStrength;

      const touchEyeY =
        mobile.y * MOBILE_ANIMATION.touchEyeY * scale * touchStrength;

      const touchRotation =
        mobile.x * MOBILE_ANIMATION.touchRotation * touchStrength;

      // More visible scroll response.
      mobile.scrollImpulse *= Math.exp(
        -deltaTime * MOBILE_ANIMATION.scrollDecay
      );

      if (Math.abs(mobile.scrollImpulse) < 0.001) {
        mobile.scrollImpulse = 0;
      }

      const scrollFaceY =
        mobile.scrollImpulse * MOBILE_ANIMATION.scrollFaceY * scale;

      const scrollEyeY =
        mobile.scrollImpulse * MOBILE_ANIMATION.scrollEyeY * scale;

      const idleStrength = 1 - 0.75 * touchStrength;

      const target: MobileMovement = {
        faceX: idleFaceX * idleStrength + touchFaceX,

        faceY: idleFaceY * idleStrength + touchFaceY + scrollFaceY,

        rotation: idleRotation * idleStrength + touchRotation,

        eyeX: idleEyeX * idleStrength + touchEyeX,

        eyeY: idleEyeY * idleStrength + touchEyeY + scrollEyeY,
      };

      // Keep pupils within a reasonable movement range.
      const maxEyeOffset = 24 * scale;

      target.eyeX = clamp(target.eyeX, -maxEyeOffset, maxEyeOffset);

      target.eyeY = clamp(target.eyeY, -maxEyeOffset, maxEyeOffset);

      target.rotation = clamp(target.rotation, -5, 5);

      // Smooth transitions independent of frame rate.
      const smoothing = 1 - Math.exp(-deltaTime * MOBILE_ANIMATION.smoothing);

      const current = mobile.current;

      current.faceX += (target.faceX - current.faceX) * smoothing;

      current.faceY += (target.faceY - current.faceY) * smoothing;

      current.rotation += (target.rotation - current.rotation) * smoothing;

      current.eyeX += (target.eyeX - current.eyeX) * smoothing;

      current.eyeY += (target.eyeY - current.eyeY) * smoothing;

      // Face and neck always move as one unit.
      head.style.transform = `
        translate3d(
          ${current.faceX}px,
          ${current.faceY}px,
          0
        )
        rotate(${current.rotation}deg)
      `;

      // Pupils follow idle, touch, and scroll movements.
      const eyeTransform = `
        translate3d(
          ${current.eyeX}px,
          ${current.eyeY}px,
          0
        )
      `;

      leftEye.style.transform = eyeTransform;
      rightEye.style.transform = eyeTransform;

      mobileAnimationId = requestAnimationFrame(updateMobilePosition);
    };

    const stopMobileAnimation = (): void => {
      if (mobileAnimationId !== null) {
        cancelAnimationFrame(mobileAnimationId);
        mobileAnimationId = null;
      }

      lastMobileFrame = 0;
    };

    const startMobileAnimation = (): void => {
      if (
        !shouldUseMobileAnimation() ||
        document.hidden ||
        mobileAnimationId !== null
      ) {
        return;
      }

      mobileAnimationId = requestAnimationFrame(updateMobilePosition);
    };

    const handleMobileTouch = (event: PointerEvent): void => {
      if (!shouldUseMobileAnimation() || event.pointerType !== 'touch') {
        return;
      }

      const anchor = anchorRef.current;

      if (!anchor) return;

      const rect = anchor.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const horizontalRange = Math.max(window.innerWidth / 2, 1);

      const verticalRange = Math.max(window.innerHeight / 2, 1);

      const mobile = mobileRef.current;

      mobile.x = clamp((event.clientX - centerX) / horizontalRange, -1, 1);

      mobile.y = clamp((event.clientY - centerY) / verticalRange, -1, 1);

      mobile.lastTime = performance.now();

      startMobileAnimation();
    };

    const handleMobilePointerDown = (event: PointerEvent): void => {
      if (!shouldUseMobileAnimation() || event.pointerType !== 'touch') {
        return;
      }

      touchActive = true;
      handleMobileTouch(event);
    };

    const handleMobilePointerMove = (event: PointerEvent): void => {
      if (!touchActive) {
        return;
      }

      handleMobileTouch(event);
    };

    const handleMobilePointerUp = (): void => {
      touchActive = false;
    };

    const handleScroll = (): void => {
      if (!shouldUseMobileAnimation()) {
        return;
      }

      const mobile = mobileRef.current;
      const currentScrollY = window.scrollY;

      const delta = currentScrollY - mobile.lastScrollY;

      mobile.lastScrollY = currentScrollY;

      if (Math.abs(delta) < 1) return;

      const impulse = clamp(delta / 30, -1.5, 1.5);

      mobile.scrollImpulse = clamp(mobile.scrollImpulse + impulse, -1.5, 1.5);

      startMobileAnimation();
    };

    const handleVisibilityChange = (): void => {
      if (document.hidden) {
        stopMobileAnimation();
      } else {
        mobileRef.current.lastScrollY = window.scrollY;

        startMobileAnimation();
      }
    };

    const handleDeviceChange = (): void => {
      stopMobileAnimation();
      resetPosition();

      touchActive = false;
      mobileAnimationStart = 0;

      mobileRef.current.current = createMovement();
      mobileRef.current.scrollImpulse = 0;
      mobileRef.current.lastTime = 0;
      mobileRef.current.lastScrollY = window.scrollY;

      startMobileAnimation();
    };

    const handleWindowBlur = (): void => {
      resetPosition();
      stopMobileAnimation();
    };

    const handleWindowFocus = (): void => {
      startMobileAnimation();
    };

    mobileRef.current.lastScrollY = window.scrollY;

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    window.addEventListener('pointerdown', handleMobilePointerDown, {
      passive: true,
    });

    window.addEventListener('pointermove', handleMobilePointerMove, {
      passive: true,
    });

    window.addEventListener('pointerup', handleMobilePointerUp);

    window.addEventListener('pointercancel', handleMobilePointerUp);

    window.addEventListener('scroll', handleScroll, { passive: true });

    window.addEventListener('blur', handleWindowBlur);

    window.addEventListener('focus', handleWindowFocus);

    document.addEventListener('visibilitychange', handleVisibilityChange);

    pointerMedia.addEventListener('change', handleDeviceChange);

    mobileMedia.addEventListener('change', handleDeviceChange);

    reducedMotionMedia.addEventListener('change', handleDeviceChange);

    startMobileAnimation();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);

      window.removeEventListener('pointerdown', handleMobilePointerDown);

      window.removeEventListener('pointermove', handleMobilePointerMove);

      window.removeEventListener('pointerup', handleMobilePointerUp);

      window.removeEventListener('pointercancel', handleMobilePointerUp);

      window.removeEventListener('scroll', handleScroll);

      window.removeEventListener('blur', handleWindowBlur);

      window.removeEventListener('focus', handleWindowFocus);

      document.removeEventListener('visibilitychange', handleVisibilityChange);

      pointerMedia.removeEventListener('change', handleDeviceChange);

      mobileMedia.removeEventListener('change', handleDeviceChange);

      reducedMotionMedia.removeEventListener('change', handleDeviceChange);

      stopMobileAnimation();
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
