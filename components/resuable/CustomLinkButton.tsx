import Link from 'next/link';
import React from 'react';

interface CustomLinkButtonProps {
  text: string;
  href: string;
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className='relative px-8 py-3 text-lg font-semibold text-indigo-500 group mt-10'
    >
      <span className='absolute rounded-lg inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1.5 -translate-y-1.5 bg-cyan-100 group-hover:[background-color:#C1F9FF] group-hover:translate-x-1 group-hover:translate-y-1'></span>
      <span className='absolute rounded-lg inset-0 w-full h-full border-2 border-indigo-500'></span>
      <span className='relative group-hover:[text-shadow:3px_2px_0px_rgba(255,255,255)]'>
        {text}
      </span>
    </Link>
  );
};

export default CustomLinkButton;
