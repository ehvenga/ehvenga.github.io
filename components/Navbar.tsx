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
  menuOpen: boolean;
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

const SocialIcons: React.FC<SocialIconsProps> = ({ menuOpen }) => {
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

  // Predefined delay classes
  const delayClasses = [
    'delay-200',
    'delay-400',
    'delay-600',
    'delay-800',
    'delay-1000',
  ];

  return (
    <div className='flex items-center -translate-y-8 gap-x-10'>
      {icons.map((item, index) => (
        <Link href={item.href} key={index}>
          <div
            className={`${
              menuOpen
                ? `animate-slideInFromRight ${
                    delayClasses[index % delayClasses.length]
                  } opacity-100`
                : 'opacity-0'
            } transition-opacity duration-500`}
          >
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

const NavItemsList: React.FC<NavItemsListProps> = ({
  navItems,
  handleMenuOpen,
  parent,
}) => (
  <ul ref={parent} className='flex gap-y-16 flex-col'>
    {navItems.map((item, index) => (
      <span className='grid grid-cols-4 items-end' key={index}>
        <li onClick={handleMenuOpen}>
          <Link className='col-start-1 hover:text-white' href={item.href}>
            {item.label}
          </Link>
        </li>
        <span className='text-base font-medium col-start-2 text-cyan-950'>
          {item.desc}
        </span>
      </span>
    ))}
  </ul>
);

// Navbar Component

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [parent] = useAutoAnimate<HTMLUListElement>();

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
        <LogoMenuButton menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        <HireMeButton />
        <div className='absolute mt-24 text-cyan-950 font-bold text-6xl w-full'>
          <div className='flex gap-x-10 items-center'>
            <div
              className={`border-b-4 border-rose-400 mt-3 mb-20 relative transition-all duration-1000 ${
                menuOpen ? 'animate-growFromRight' : 'w-0 opacity-0'
              }`}
            ></div>
            <SocialIcons menuOpen={menuOpen} />
          </div>
          <NavItemsList
            navItems={navItems}
            handleMenuOpen={handleMenuOpen}
            parent={parent}
          />
        </div>
      </div>

      {/* Navbar */}
      <div className='p-20 flex justify-between absolute w-full items-start'>
        <LogoMenuButton menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        <HireMeButton />
      </div>
    </nav>
  );
};

export default Navbar;
