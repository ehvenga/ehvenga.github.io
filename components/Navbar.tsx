'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoShareSocial } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parent] = useAutoAnimate();

  const { ref: borderRef, inView: borderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home', desc: 'Go back to Home' },
    { href: '/profile', label: 'Profile', desc: 'See my profile' },
    {
      href: '/projects',
      label: 'Projects',
      desc: 'Take a look at my projects',
    },
    { href: '/about', label: 'About', desc: 'A little about my background' },
  ];

  return (
    <nav>
      <div className='bg-white absolute h-10 z-20 w-full top-0'></div>
      {/* Menu Overlay */}
      <div
        className={`m-8 pt-12 px-12 flex justify-between overflow-hidden z-10 fixed -top-10 left-0 w-screen-minus-10 h-screen-minus-10 bg-rose-200 items-start transform transition-transform duration-200 ${
          menuOpen
            ? 'translate-y-10 pointer-events-auto'
            : '-translate-y-full pointer-events-none'
        }`}
      >
        <div className='flex items-center divide-x divide-gray-500 gap-x-4'>
          <Link href={'/'}>
            <Image
              src={'/ehvenga-icon.png'}
              alt='ehvenga icon'
              width={80}
              height={80}
            />
          </Link>
          <div className='pl-4'>
            <button
              onClick={handleMenuOpen}
              className='font-bold text-xs text-cyan-950 pl-2'
            >
              {menuOpen ? (
                <span className='tracking-[0.25rem] hover:tracking-[0.3rem] flex justify-center w-10'>
                  CLOSE
                </span>
              ) : (
                <span className='tracking-[0.25rem] hover:tracking-[0.3rem] flex justify-center w-10'>
                  MENU
                </span>
              )}
            </button>
          </div>
        </div>
        <button className='font-bold text-xs text-cyan-950 tracking-[0.25rem] hover:tracking-[0.3rem] w-24 flex justify-center'>
          HIRE ME
        </button>
        <div className='absolute mt-24 text-cyan-950 font-bold text-6xl w-full'>
          <div className='flex gap-x-10 items-center'>
            <div
              className={`border-b-4 border-rose-400 mt-3 mb-20 transition-all duration-1000 ${
                borderInView ? 'animate-growFromRight' : 'w-0 opacity-0'
              }`}
              ref={borderRef}
              style={{ right: 0, position: 'relative' }}
            ></div>
            <div className='flex items-center -translate-y-8 gap-x-10'>
              <Link href='https://www.linkedin.com/in/ehvenga/'>
                <FaLinkedin className='w-6 h-6 hover:text-white' />
              </Link>
              <Link href='https://github.com/ehvenga'>
                <FaGithub className='w-6 h-6 hover:text-white' />
              </Link>
              <Link href='mailto:ehvenga@gmail.com?subject=Hello%20Hari'>
                <MdEmail className='w-6 h-6 hover:text-white' />
              </Link>
              <Link href='https://www.npmjs.com/~ehvenga'>
                <FaNpm className='w-6 h-6 hover:text-white' />
              </Link>
              <Link href='https://www.npmjs.com/~ehvenga'>
                <IoShareSocial className='w-6 h-6 hover:text-white' />
              </Link>
            </div>
          </div>
          <ul ref={parent} className='flex gap-y-16 flex-col'>
            {navItems.map((item, index) => (
              <span className='grid grid-cols-4 items-end' key={index}>
                <li onClick={handleMenuOpen}>
                  <Link
                    className='col-start-1 hover:text-white'
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
                <span className='text-base font-medium col-start-2 text-cyan-950'>
                  {item.desc}
                </span>
              </span>
            ))}
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <div className='p-20 flex justify-between absolute w-full items-start'>
        <div className='flex items-center divide-x divide-gray-500 gap-x-4'>
          <Link href={'/'}>
            <Image
              src={'/ehvenga-icon.png'}
              alt='ehvenga icon'
              width={80}
              height={80}
            />
          </Link>
          <div className='pl-4'>
            <button
              onClick={handleMenuOpen}
              className='font-bold text-xs text-cyan-950 pl-2'
            >
              {menuOpen ? (
                <span className='tracking-[0.25rem] hover:tracking-[0.3rem] flex justify-center w-10'>
                  CLOSE
                </span>
              ) : (
                <span className='tracking-[0.25rem] hover:tracking-[0.3rem] flex justify-center w-10'>
                  MENU
                </span>
              )}
            </button>
          </div>
        </div>
        <button className='font-bold text-xs text-cyan-950 tracking-[0.25rem] hover:tracking-[0.3rem] w-24 flex justify-center'>
          HIRE ME
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
