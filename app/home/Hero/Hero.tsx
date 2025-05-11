"use client"
import { BaseInfo } from '@/data/data';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaRegCopy,
  FaCheck,
} from 'react-icons/fa';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(BaseInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text content */}
          <div>
            {/* Sub heading */}
            <h1 data-aos="fade-left" className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h1>
            {/* Title */}
            <h2 data-aos="fade-right" data-aos-delay="100" className="text- text-3xl  text-bg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h2>
            {/* Description */}
            <p data-aos="fade-left"  data-aos-delay="200" className="mt-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>

            {/* Buttons and social icons */}
            <div className="flex items-center gap-4 mt-8" data-aos="zoom-in"  data-aos-delay="300">
              {/* Download CV */}
              <a href={BaseInfo.cv} rel="noopener noreferrer" target="_blank">
                <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-800 flex items-center space-x-2">
                  <span>Download CV</span>
                  <FaDownload />
                </button>
              </a>

              {/* LinkedIn */}
              <a href={BaseInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl hover:text-emerald-800 transition-colors" />
              </a>

              {/* GitHub */}
              <a href={BaseInfo.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl hover:text-emerald-800 transition-colors" />
              </a>
            </div>

            {/* Email with copy icon */}
            <div className="flex items-center gap-2 mt-6" data-aos="fade-right"  data-aos-delay="400">
              <button onClick={copyToClipboard} className="transition-colors">
                {copied ? (
                  <FaCheck className="text-green-400 text-xl" />
                ) : (
                  <FaRegCopy className="text-white text-xl hover:text-blue-400" />
                )}
              </button>
              <span className="text-white font-semibold text-md md:text-lg">
                {BaseInfo.email}
              </span>
            </div>
          </div>

          {/* Image content */}
          <div data-aos="zoom-in"  data-aos-delay="500" className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
