'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CustomLinkButton from '../reusable/CustomLinkButton';
import Image from 'next/image';

interface ExperienceProps {
  title: string;
  tags: string;
  description: string[];
  buttonText: string;
  url?: string;
  src: string;
  alt: string;
}

const experienceData: ExperienceProps[] = [
  {
    title: 'Auto-M-Design',
    tags: 'Interactive Modular System Configuration',
    description: [
      'I have been working on interesting research challenges under Dr. John Yoo regarding automated modular system configuration.',
      'I have worked on the algorithms, front-end and back-end systems for the backward compatible modular system design.',
    ],
    buttonText: 'Visit Github',
    url: 'https://github.com/ehvenga/interactive.approach.to.backward.compatible.modular.system.configuration',
    src: 'p-1.png',
    alt: 'backward compatibility image',
  },
  {
    title: 'Path Finding Visualizer',
    tags: 'Full-Stack Developer',
    description: [
      'A web application designed to demonstrate the functionality of various pathfinding algorithms',
      'Users can create custom grids by placing start and end points where these algorithms would need to find the shortest path.',
    ],
    buttonText: 'Visit Live Website',
    url: 'https://path-visualizer-nextjs.vercel.app/',
    src: 'p-2.png',
    alt: 'backward compatibility image',
  },
  {
    title: 'GTA V Mods',
    tags: 'Full-Stack Developer',
    description: [
      'Contributing to both front-end and back-end development for dynamic client titles.',
      'Ensuring scalability and performance of web applications.',
    ],
    buttonText: 'View Github',
    src: 'p-3.png',
    alt: 'backward compatibility image',
  },
  {
    title: 'Pokemon Sprite Contest',
    tags: 'Founder, Software Engineer, Product Manager',
    description: [
      'This title tracks the best Pokemon sprites by generation.',
      "It aims to collect data on which generation's sprites are most popular and provides insights into the community's preferences.",
    ],
    buttonText: 'Visit Live Website',
    url: 'https://pokemon-sprite-contest.vercel.app/',
    src: 'p-4.png',
    alt: 'backward compatibility image',
  },
  {
    title: 'Trump Chatbot',
    tags: 'Founder, Software Engineer, Product Manager',
    description: [
      'A Trump-themed chatbot built with Next.js that mimics the unique speech style and mannerisms of Donald Trump.',
      'Experience engaging and entertaining personality-driven conversations with POTUS 45/47.',
    ],
    buttonText: 'Visit Live Website',
    url: 'https://trumpbot-nextjs-gpt.vercel.app/',
    src: 'p-5.png',
    alt: 'backward compatibility image',
  },
  {
    title: 'Hand Gesture Recognition',
    tags: 'Founder, Software Engineer, Product Manager',
    description: [
      'A deep learning title using TensorFlow and OpenCV to classify various hand gestures.',
      'The model leverages a Convolutional Neural Network (CNN) to detect and interpret gestures in real-time through images or video input.',
    ],
    buttonText: 'View Github',
    url: 'https://github.com/ehvenga/handgesture.recognition-tensorflow',
    src: 'p-6.png',
    alt: 'backward compatibility image',
  },
  {
    title: 'Chicago Crime Analysis',
    tags: 'Founder, Software Engineer, Product Manager',
    description: [
      'An interactive Tableau dashboard providing insights into crime trends across the windy city.',
      'Explore data visualizations on crime types, locations, and time periods to better understand patterns and inform community safety strategies.',
    ],
    buttonText: 'View Github',
    url: 'https://github.com/ehvenga/chicago.crime.overview-tableau',
    src: 'p-7.png',
    alt: 'backward compatibility image',
  },
  {
    title: 'Flower Identification',
    tags: 'Founder, Software Engineer, Product Manager',
    description: [
      'This Jupyter Notebook presents a TensorFlow-based model to classify flower species from images using a convolutional neural network (CNN).',
      'The notebook covers data preprocessing, model training, and performance evaluation.',
    ],
    buttonText: 'View Github',
    url: 'https://github.com/ehvenga/gemstones.prediction-tensorflow',
    src: 'p-8.png',
    alt: 'backward compatibility image',
  },
];

const Experience: React.FC<ExperienceProps> = ({
  title,
  tags,
  description,
  buttonText,
  url,
  src,
  alt,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      className='flex flex-col lg:flex-row justify-end items-center mb-8'
      ref={ref}
    >
      <div className='lg:order-1 lg:mr-24 mt-2 transition-transform duration-300 hover:scale-[1.03]'>
        <Image
          src={src}
          width={450}
          height={200}
          alt={alt}
          className='w-full h-auto'
        />
      </div>
      <div className='lg:order-2 mt-4 lg:mt-0'>
        <h4 className='text-3xl lg:text-4xl font-semibold'>
          {title}
          <span className='text-orange-400'>.</span>
        </h4>
        <h5 className='text-xl font-semibold text-orange-600 mb-8'>
          {tags}
          <span className='text-orange-400'>.</span>
        </h5>
        {description.map((text, index) => (
          <article
            key={index}
            className={`text-lg lg:w-[34em] mt-4 leading-relaxed transition-opacity duration-1000 ${
              inView ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {text}
          </article>
        ))}
        {url && (
          <div className='mt-2'>
            <CustomLinkButton
              href={url}
              text={buttonText}
              textColor='text-orange-500'
              bgColor='bg-orange-100'
              borderColor='border-orange-800'
              bgHoverColor='[background-color:#d7FEAA]'
            />
          </div>
        )}
      </div>
    </div>
  );
};

const titleList: React.FC = () => {
  return (
    <section className='mt-16 text-red-950'>
      <div className='divide-solid divide-y-2 divide-orange-200'>
        {experienceData.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default titleList;
