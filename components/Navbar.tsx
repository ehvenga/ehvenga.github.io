'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoShareSocial } from 'react-icons/io5';

// Interface Definitions
interface MenuButtonProps {
  menuOpen: boolean;
  handleMenuOpen: () => void;
}

interface LogoMenuButtonProps {
  menuOpen: boolean;
  handleMenuOpen: () => void;
}

interface SocialIconsProps {
  showIcons: boolean;
  onIconsDone: () => void;
}

interface NavItemsListProps {
  navItems: { href: string; label: string; desc: string }[];
  handleMenuOpen: () => void;
  parent: React.Ref<HTMLUListElement>;
  showItems: boolean;
}

// Component Definitions
const Logo: React.FC = () => (
  <Link href={'/'}>
    <Image
      src={'/ehvenga-icon.png'}
      alt='ehvenga icon'
      width={80}
      height={80}
    />
  </Link>
);

/**
 * MenuButton now has transition-[letter-spacing] for smoothing
 * the hover from tracking-[0.25rem] to tracking-[0.3rem].
 */
const MenuButton: React.FC<MenuButtonProps> = ({
  menuOpen,
  handleMenuOpen,
}) => (
  <button
    onClick={handleMenuOpen}
    className='font-bold text-xs text-cyan-950 pl-2'
  >
    <span
      className='
        flex justify-center w-10
        tracking-[0.25rem]
        hover:tracking-[0.3rem]
        transition-[letter-spacing]
        duration-300
        ease-in-out
      '
    >
      {menuOpen ? 'CLOSE' : 'MENU'}
    </span>
  </button>
);

const LogoMenuButton: React.FC<LogoMenuButtonProps> = ({
  menuOpen,
  handleMenuOpen,
}) => (
  <div className='flex items-center divide-x divide-gray-500 gap-x-4'>
    <Logo />
    <div className='pl-4'>
      <MenuButton menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
    </div>
  </div>
);

/**
 * Same approach for HireMeButton:
 * tracking transitions smoothly on hover.
 */
const HireMeButton: React.FC = () => (
  <button
    className='
      font-bold text-xs text-cyan-950
      tracking-[0.25rem]
      hover:tracking-[0.3rem]
      transition-[letter-spacing]
      duration-300
      ease-in-out
      w-24 flex justify-center
    '
  >
    HIRE ME
  </button>
);

const SocialIcons: React.FC<SocialIconsProps> = ({
  showIcons,
  onIconsDone,
}) => {
  const icons = [
    {
      href: 'https://www.linkedin.com/in/ehvenga/',
      icon: <FaLinkedin className='w-6 h-6 hover:text-rose-700' />,
    },
    {
      href: 'https://github.com/ehvenga',
      icon: <FaGithub className='w-6 h-6 hover:text-rose-700' />,
    },
    {
      href: 'mailto:ehvenga@gmail.com?subject=Hello%20Hari',
      icon: <MdEmail className='w-6 h-6 hover:text-rose-700' />,
    },
    {
      href: 'https://www.npmjs.com/~ehvenga',
      icon: <FaNpm className='w-6 h-6 hover:text-rose-700' />,
    },
    {
      href: 'https://www.npmjs.com/~ehvenga',
      icon: <IoShareSocial className='w-6 h-6 hover:text-rose-700' />,
    },
  ];

  return (
    <div className='flex items-center -translate-y-8 gap-x-10 overflow-hidden'>
      {icons.map((item, idx) => {
        // 0.05s increments for a slower, staggered sequence
        const iconDelay = 0.05 * idx;
        const isLastIcon = idx === icons.length - 1;

        return (
          <Link href={item.href} key={idx}>
            <div
              style={{ animationDelay: `${iconDelay}s` }}
              className={
                showIcons
                  ? 'animate-slideInIconFromRight opacity-0'
                  : 'opacity-0'
              }
              onAnimationEnd={() => {
                if (isLastIcon) {
                  onIconsDone();
                }
              }}
            >
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const NavItemsList: React.FC<NavItemsListProps> = ({
  navItems,
  handleMenuOpen,
  parent,
  showItems,
}) => (
  <ul ref={parent} className='flex gap-y-16 flex-col'>
    {navItems.map((item, index) => {
      const dropDelay = 0.08 * index;

      return (
        <span
          key={index}
          style={{ animationDelay: `${dropDelay}s` }}
          className={
            showItems
              ? 'animate-softDrop opacity-0 grid grid-cols-4 items-end group'
              : 'opacity-0'
          }
        >
          <li onClick={handleMenuOpen}>
            <Link
              className='col-start-1 transition-all duration-200 group-hover:text-rose-700 text-rose-950'
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
          <span className='text-base font-medium col-start-2 text-rose-950 group-hover:text-rose-700'>
            {item.desc}
          </span>
        </span>
      );
    })}
  </ul>
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [barDone, setBarDone] = useState(false); // pink bar done animating
  const [iconsDone, setIconsDone] = useState(false); // icons done animating
  const [parent] = useAutoAnimate<HTMLUListElement>();

  const handleMenuOpen = () => {
    // Reset any "done" states whenever we close the menu
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
        <LogoMenuButton menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        <HireMeButton />

        <div className='absolute mt-24 text-cyan-950 font-bold text-6xl w-full'>
          <div className='flex gap-x-10 items-center'>
            <div
              className={`border-b-4 border-rose-400 mt-3 mb-20 relative ${
                menuOpen ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
              }`}
              onAnimationEnd={() => setBarDone(true)}
            ></div>
            <SocialIcons
              showIcons={menuOpen && barDone}
              onIconsDone={() => setIconsDone(true)}
            />
          </div>

          {/* NavItems each dropping in softly AFTER icons have done */}
          <NavItemsList
            navItems={navItems}
            handleMenuOpen={handleMenuOpen}
            parent={parent}
            showItems={menuOpen && barDone && iconsDone}
          />
        </div>
      </div>

      {/* Navbar up top */}
      <div className='p-20 flex justify-between absolute w-full items-start'>
        <LogoMenuButton menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        <HireMeButton />
      </div>
    </nav>
  );
};

export default Navbar;
