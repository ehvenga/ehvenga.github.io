import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className='p-16 flex justify-between absolute w-full'>
      <div className='flex divide-x divide-gray-500 gap-x-4'>
        <Image
          src={'/ehvenga-icon.png'}
          alt='ehvenga icon'
          width={80}
          height={80}
        />
        <div className='pl-4'>
          <button className='font-semibold text-lg text-cyan-800 tracking-widest'>
            MENU
          </button>
        </div>
      </div>
      <button className='font-semibold text-lg text-cyan-800 tracking-widest'>
        HIRE ME
      </button>
    </nav>
  );
};

export default Navbar;
