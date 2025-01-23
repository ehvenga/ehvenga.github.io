import Link from 'next/link';
import React from 'react';

interface CustomTagsProps {
  text: string;
  // href: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  bgHoverColor: string;
}

const CustomTags: React.FC<CustomTagsProps> = ({
  text,
  // href,
  textColor,
  borderColor,
  bgColor,
  bgHoverColor,
}) => {
  return (
    <div
      className={`relative px-6 py-2 text-lg font-semibold ${
        textColor || 'text-indigo-500'
      } group hover:motion-scale-loop-[105%]`}
    >
      <span
        className={`absolute rounded-full inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1.5 -translate-y-1.5 ${
          bgColor || 'bg-cyan-100'
        } group-hover:${
          bgHoverColor || '[background-color:#C1F9FF]'
        } group-hover:translate-x-1 group-hover:translate-y-1`}
      ></span>
      <span
        className={`absolute rounded-full inset-0 w-full h-full border-2 ${
          borderColor || 'border-indigo-500'
        }`}
      ></span>
      <span className='relative group-hover:[text-shadow:3px_2px_0px_rgba(255,255,255)] cursor-default'>
        {text}
      </span>
    </div>
  );
};

export default CustomTags;
