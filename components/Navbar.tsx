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
}

interface NavItemsListProps {
  navItems: { href: string; label: string; desc: string }[];
  handleMenuOpen: () => void;
  parent: React.Ref<HTMLUListElement>;
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

const MenuButton: React.FC<MenuButtonProps> = ({
  menuOpen,
  handleMenuOpen,
}) => (
  <button
    onClick={handleMenuOpen}
    className='font-bold text-xs text-cyan-950 pl-2'
  >
    <span className='tracking-[0.25rem] hover:tracking-[0.3rem] flex justify-center w-10'>
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

const HireMeButton: React.FC = () => (
  <button className='font-bold text-xs text-cyan-950 tracking-[0.25rem] hover:tracking-[0.3rem] w-24 flex justify-center'>
    HIRE ME
  </button>
);

/**
 * Social icons that only appear after the bar is completely done.
 * Each slides in from the right, with a staggered 0.2s delay.
 * They remain fully hidden until the moment they start moving.
 */
const SocialIcons: React.FC<SocialIconsProps> = ({ showIcons }) => {
  const icons = [
    {
      href: 'https://www.linkedin.com/in/ehvenga/',
      icon: <FaLinkedin className='w-6 h-6 hover:text-white' />,
    },
    {
      href: 'https://github.com/ehvenga',
      icon: <FaGithub className='w-6 h-6 hover:text-white' />,
    },
    {
      href: 'mailto:ehvenga@gmail.com?subject=Hello%20Hari',
      icon: <MdEmail className='w-6 h-6 hover:text-white' />,
    },
    {
      href: 'https://www.npmjs.com/~ehvenga',
      icon: <FaNpm className='w-6 h-6 hover:text-white' />,
    },
    {
      href: 'https://www.npmjs.com/~ehvenga',
      icon: <IoShareSocial className='w-6 h-6 hover:text-white' />,
    },
  ];

  return (
    <div className='flex items-center -translate-y-8 gap-x-10 overflow-hidden'>
      {icons.map((item, idx) => {
        // 0.2s increments for a slower, staggered sequence
        const iconDelay = 0.2 * idx;

        return (
          <Link href={item.href} key={idx}>
            <div
              style={{
                animationDelay: `${iconDelay}s`,
              }}
              className={
                showIcons
                  ? 'animate-slideInIconFromRight opacity-0'
                  : 'opacity-0'
              }
            >
              {item.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

/**
 * Nav items list: each item has a "softDrop" animation
 * with a slight incremental delay, so they appear
 * one-by-one in a gentle downward motion.
 */
const NavItemsList: React.FC<NavItemsListProps> = ({
  navItems,
  handleMenuOpen,
  parent,
}) => (
  <ul ref={parent} className='flex gap-y-16 flex-col'>
    {navItems.map((item, index) => {
      // 0.1s stagger per item
      const dropDelay = 0.1 * index;

      return (
        <span
          key={index}
          style={{ animationDelay: `${dropDelay}s` }}
          // Start invisible so we can fade/drop in
          className='animate-softDrop opacity-0 grid grid-cols-4 items-end'
        >
          <li onClick={handleMenuOpen}>
            <Link className='col-start-1 hover:text-white' href={item.href}>
              {item.label}
            </Link>
          </li>
          <span className='text-base font-medium col-start-2 text-cyan-950'>
            {item.desc}
          </span>
        </span>
      );
    })}
  </ul>
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [barDone, setBarDone] = useState(false); // track if bar is finished
  const [parent] = useAutoAnimate<HTMLUListElement>();

  const handleMenuOpen = () => {
    // When menu is closed, reset barDone so icons won't show next time
    if (menuOpen) {
      setBarDone(false);
    }
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
        <LogoMenuButton menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        <HireMeButton />

        {/* Main container for the bar + icons + nav items */}
        <div className='absolute mt-24 text-cyan-950 font-bold text-6xl w-full'>
          <div className='flex gap-x-10 items-center'>
            {/* Pink bar: starts wide, ends thinner (0.4s) */}
            <div
              className={`border-b-4 border-rose-400 mt-3 mb-20 relative ${
                menuOpen ? 'animate-slideInBarFromRight' : 'w-0 opacity-0'
              }`}
              onAnimationEnd={() => setBarDone(true)}
            ></div>

            {/* Icons: only show (animate) after bar is done */}
            <SocialIcons showIcons={menuOpen && barDone} />
          </div>

          {/* NavItems each dropping in softly */}
          <NavItemsList
            navItems={navItems}
            handleMenuOpen={handleMenuOpen}
            parent={parent}
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
