'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lilita_One } from 'next/font/google';

import { FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLinkSharp } from 'react-icons/io5';

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
});

interface NavItem {
  href: string;
  label: string;
  desc: string;
}

type ColorScheme = 'teal' | 'cyan' | 'orange' | 'rose' | 'violet';

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    desc: 'Go back to Home',
  },
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
  {
    href: '/about',
    label: 'About',
    desc: 'A little about my background',
  },
];

const colorClasses: Record<ColorScheme, string> = {
  teal: 'text-teal-900',
  cyan: 'text-cyan-900',
  orange: 'text-orange-900',
  rose: 'text-rose-900',
  violet: 'text-violet-900',
};

const getColorScheme = (pathname: string): ColorScheme => {
  switch (pathname) {
    case '/':
      return 'teal';
    case '/work':
      return 'cyan';
    case '/projects':
      return 'orange';
    case '/about':
      return 'rose';
    default:
      return 'teal';
  }
};

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  const alertTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const previousPathRef = useRef<string>(pathname);

  const color: ColorScheme = menuOpen ? 'violet' : getColorScheme(pathname);

  const textColor = colorClasses[color];

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname;

      const frameId = window.requestAnimationFrame(() => {
        setMenuOpen(false);
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    firstMenuItemRef.current?.focus();

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (alertTimeoutRef.current !== null) {
        clearTimeout(alertTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuOpen = (): void => {
    setMenuOpen((previous: boolean) => !previous);
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText('https://ehvenga.github.io');

      setShowAlert(true);

      if (alertTimeoutRef.current !== null) {
        clearTimeout(alertTimeoutRef.current);
      }

      alertTimeoutRef.current = setTimeout(() => {
        setShowAlert(false);
        alertTimeoutRef.current = null;
      }, 2000);
    } catch (error: unknown) {
      console.error('Failed to copy link:', error);
      window.alert('Failed to copy link. Please try again.');
    }
  };

  return (
    <nav aria-label='Main navigation'>
      {/* Navbar with blur extending to the top */}
      <div
        className='
          fixed top-0 left-8 right-8
          z-50 h-24
          pointer-events-none
        '
      >
        {/* Backdrop layer covers the top gap and header */}
        <div
          aria-hidden='true'
          className={`
            absolute inset-0
            pointer-events-none
            transition-[background-color,backdrop-filter,box-shadow]
            duration-300
            ${
              menuOpen
                ? 'bg-violet-50/95'
                : scrolled
                ? 'bg-white/75 shadow-sm'
                : 'bg-white/10'
            }
          `}
          style={{
            WebkitBackdropFilter: menuOpen
              ? 'blur(32px)'
              : scrolled
              ? 'blur(32px) saturate(140%)'
              : 'blur(4px)',
            backdropFilter: menuOpen
              ? 'blur(32px)'
              : scrolled
              ? 'blur(32px) saturate(140%)'
              : 'blur(4px)',
          }}
        />

        {/* Navbar items retain original 32px top offset */}
        <div
          className='
            absolute top-8 left-0 right-0
            h-16
            px-4 sm:px-8 lg:px-12
            flex items-center justify-between
            pointer-events-auto
          '
        >
          <div className='flex items-center min-w-0 gap-3 sm:gap-5'>
            <Link
              href='/'
              onClick={closeMenu}
              className={`
                ${lilitaOne.className}
                text-lg sm:text-xl
                ${textColor}
                whitespace-nowrap
                transition-colors duration-300
              `}
              aria-label='ehvenga home'
            >
              ehvenga
            </Link>

            <div className='w-px h-6 bg-gray-400 shrink-0' />

            <button
              ref={menuButtonRef}
              type='button'
              onClick={handleMenuOpen}
              aria-expanded={menuOpen}
              aria-controls='navbar-menu'
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`
                ${textColor}
                min-h-11
                flex items-center justify-center
                font-bold text-[11px] sm:text-xs
                tracking-[0.18em] sm:tracking-[0.25em]
                hover:tracking-[0.3em]
                transition-all duration-300
                whitespace-nowrap
                cursor-pointer
              `}
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>

          <Link
            href='mailto:ehvenga@gmail.com?subject=Hello%20Hari'
            target='_blank'
            aria-label='Hire me'
            className='
              flex items-center justify-center
              min-h-11
              shrink-0
              text-cyan-950 font-bold
              text-[11px] sm:text-xs
              tracking-[0.15em] sm:tracking-[0.25em]
              hover:text-teal-600
              transition-colors duration-300
              whitespace-nowrap
            '
          >
            HIRE ME
          </Link>
        </div>
      </div>

      {/* Copy confirmation */}
      {showAlert && (
        <div
          role='status'
          className='
            fixed top-28 left-1/2 -translate-x-1/2
            bg-violet-950 text-white
            px-4 py-2 rounded-lg shadow-lg
            z-[70] text-sm whitespace-nowrap
          '
        >
          Link copied successfully
        </div>
      )}

      {/* Expanded navigation menu */}
      <div
        id='navbar-menu'
        aria-label='Navigation menu'
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`
          fixed z-40
          top-8 bottom-8 left-8 right-8
          bg-violet-50
          overflow-y-auto overscroll-contain
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-5 invisible pointer-events-none'
          }
        `}
      >
        <div className='pt-28 px-4 sm:px-8 lg:px-12 pb-12'>
          {/* Social links */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-12'>
            <div
              className={`
                h-1 bg-violet-400
                transition-all duration-700 ease-out
                ${menuOpen ? 'w-24 sm:w-40' : 'w-0'}
              `}
            />

            <div className='flex flex-wrap items-center gap-5 sm:gap-8'>
              <Link
                href='https://www.linkedin.com/in/ehvenga/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='text-violet-950 hover:text-violet-600 transition-colors'
              >
                <FaLinkedin className='w-6 h-6' />
              </Link>

              <Link
                href='https://github.com/ehvenga'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                className='text-violet-950 hover:text-violet-600 transition-colors'
              >
                <FaGithub className='w-6 h-6' />
              </Link>

              <Link
                href='mailto:ehvenga@gmail.com?subject=Hello%20Hari'
                aria-label='Email'
                className='text-violet-950 hover:text-violet-600 transition-colors'
              >
                <MdEmail className='w-6 h-6' />
              </Link>

              <Link
                href='https://www.npmjs.com/~ehvenga'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='NPM'
                className='text-violet-950 hover:text-violet-600 transition-colors'
              >
                <FaNpm className='w-8 h-6' />
              </Link>

              <button
                type='button'
                onClick={() => {
                  void copyToClipboard();
                }}
                aria-label='Copy website link'
                className='text-violet-950 hover:text-violet-600 transition-colors cursor-pointer'
              >
                <IoLinkSharp className='w-6 h-7' />
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <ul className='flex flex-col gap-8 sm:gap-12'>
            {navItems.map((item: NavItem, index: number) => (
              <li
                key={item.href}
                className={`
                  grid grid-cols-1
                  lg:grid-cols-[minmax(0,350px)_1fr]
                  items-center gap-2 lg:gap-10
                  transition-all duration-500 ease-out
                  ${
                    menuOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }
                `}
                style={{
                  transitionDelay: menuOpen ? `${index * 80 + 100}ms` : '0ms',
                }}
              >
                <Link
                  ref={index === 0 ? firstMenuItemRef : null}
                  href={item.href}
                  onClick={closeMenu}
                  aria-label={item.desc}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className='
                    w-fit
                    text-4xl sm:text-6xl lg:text-7xl
                    font-bold leading-tight
                    text-violet-950
                    hover:text-violet-600
                    transition-colors duration-300
                  '
                >
                  {item.label}
                </Link>

                <span className='hidden lg:block text-base font-medium text-violet-800'>
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
