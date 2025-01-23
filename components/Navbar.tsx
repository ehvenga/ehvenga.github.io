'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Lilita_One } from 'next/font/google';

import { FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoShareSocial } from 'react-icons/io5';

const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'] });

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [barDone, setBarDone] = useState(false); // Pink bar animation done
  const [iconsDone, setIconsDone] = useState(false); // Icons animation done
  const [color, setColor] = useState('text-teal-900');
  const [parent] = useAutoAnimate<HTMLUListElement>();

  useEffect(() => {
    handleColorScheme(pathname);
  }, [pathname, menuOpen]);

  const handleColorScheme = (currentPath: string) => {
    if (menuOpen) {
      return setColor('rose');
    }
    switch (currentPath) {
      case '/':
        setColor('teal');
        break;
      case '/work':
        setColor('cyan');
        break;
      case '/projects':
        setColor('orange');
        break;
      case '/about':
        setColor('rose');
        break;
      default:
        setColor('teal');
        break;
    }
  };

  const handleMenuOpen = () => {
    if (menuOpen) {
      setBarDone(false);
      setIconsDone(false);
    }
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home', desc: 'Go back to Home' },
    {
      href: '/work',
      label: 'Work',
      desc: 'My approach to development and analysis',
    },
    {
      href: '/projects',
      label: 'Projects',
      desc: 'Take a look at my projects',
    },
    { href: '/about', label: 'About', desc: 'A little about my background' },
  ];

  const socialIcons = [
    {
      href: 'https://www.linkedin.com/in/ehvenga/',
      icon: (
        <FaLinkedin className='w-6 h-6 text-rose-950 hover:text-rose-600' />
      ),
    },
    {
      href: 'https://github.com/ehvenga',
      icon: <FaGithub className='w-6 h-6 text-rose-950 hover:text-rose-600' />,
    },
    {
      href: 'mailto:ehvenga@gmail.com?subject=Hello%20Hari',
      icon: <MdEmail className='w-6 h-6 text-rose-950 hover:text-rose-600' />,
    },
    {
      href: 'https://www.npmjs.com/~ehvenga',
      icon: <FaNpm className='w-6 h-6 text-rose-950 hover:text-rose-600' />,
    },
    {
      href: 'https://www.npmjs.com/~ehvenga',
      icon: (
        <IoShareSocial className='w-6 h-6 text-rose-950 hover:text-rose-600' />
      ),
    },
  ];

  return (
    <nav>
      <div className='bg-white absolute h-10 z-20 w-full top-0'></div>

      <div
        className={`m-8 pt-12 px-12 flex justify-between overflow-hidden z-10 fixed -top-10 left-0 w-screen-minus-10 h-screen-minus-10 bg-violet-50 items-start transform transition-transform duration-200 ${
          menuOpen
            ? 'translate-y-10 pointer-events-auto'
            : '-translate-y-full pointer-events-none'
        }`}
      >
        <div className='flex items-center divide-x divide-gray-500 gap-x-4'>
          <Link className={lilitaOne.className} href={'/'}>
            <div className={`text-xl text-${color}-900`}>ehvenga</div>
          </Link>
          <div className='pl-4'>
            <button
              onClick={handleMenuOpen}
              className='font-bold text-xs text-cyan-950 pl-2'
            >
              <span className='flex justify-center w-10 tracking-[0.25rem] hover:tracking-[0.3rem] transition-[letter-spacing] duration-300 ease-in-out'>
                {menuOpen ? 'CLOSE' : 'MENU'}
              </span>
            </button>
          </div>
        </div>

        <Link
          className='font-bold text-xs text-cyan-950 tracking-[0.25rem] hover:tracking-[0.3rem] transition-[letter-spacing] duration-300 ease-in-out w-24 flex justify-center'
          href='mailto:ehvenga@gmail.com?subject=Hello%20Hari'
          target='_blank'
        >
          HIRE ME
        </Link>

        <div className='absolute mt-24 text-cyan-950 font-bold text-6xl w-full'>
          <div className='flex gap-x-10 items-center'>
            <div
              className={`border-b-4 border-rose-400 mt-3 mb-20 relative ${
                menuOpen ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
              }`}
              onAnimationEnd={() => setBarDone(true)}
            ></div>

            <div className='flex items-center -translate-y-8 gap-x-10 overflow-hidden'>
              {socialIcons.map((item, idx) => {
                const iconDelay = 0.05 * idx;
                const isLastIcon = idx === socialIcons.length - 1;

                return (
                  <Link href={item.href} key={idx}>
                    <div
                      style={{ animationDelay: `${iconDelay}s` }}
                      className={
                        menuOpen && barDone
                          ? 'animate-slideInIconFromRight opacity-0'
                          : 'opacity-0'
                      }
                      onAnimationEnd={() => {
                        if (isLastIcon) setIconsDone(true);
                      }}
                    >
                      {item.icon}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <ul ref={parent} className='flex gap-y-16 flex-col'>
            {navItems.map((item, index) => {
              const dropDelay = 0.08 * index;

              return (
                <span
                  key={index}
                  style={{ animationDelay: `${dropDelay}s` }}
                  className={
                    menuOpen && barDone && iconsDone
                      ? 'animate-softDrop opacity-0 grid grid-cols-4 items-end group'
                      : 'opacity-0'
                  }
                >
                  <li onClick={handleMenuOpen}>
                    <Link
                      className='col-start-1 transition-all duration-200 group hover:text-rose-600 text-rose-950'
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                  <span className='text-base font-medium col-start-2 text-rose-950 group text-rose-800-hover:text-rose-900'>
                    {item.desc}
                  </span>
                </span>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='p-20 flex justify-between absolute w-full items-start'>
        <div className='flex items-center divide-x divide-gray-500 gap-x-4'>
          <Link className={lilitaOne.className} href={'/'}>
            <div className={`text-xl text-${color}-900`}>ehvenga</div>
          </Link>
          <div className='pl-4'>
            <button
              onClick={handleMenuOpen}
              className='font-bold text-xs text-cyan-950 pl-2'
            >
              <span className='flex justify-center w-10 tracking-[0.25rem] hover:tracking-[0.3rem] transition-[letter-spacing] duration-300 ease-in-out'>
                {menuOpen ? 'CLOSE' : 'MENU'}
              </span>
            </button>
          </div>
        </div>

        <Link
          className='font-bold text-xs text-cyan-950 tracking-[0.25rem] hover:tracking-[0.3rem] transition-[letter-spacing] duration-300 ease-in-out w-24 flex justify-center'
          href='mailto:ehvenga@gmail.com?subject=Hello%20Hari'
          target='_blank'
        >
          HIRE ME
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
