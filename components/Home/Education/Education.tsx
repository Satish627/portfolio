'use client';
import SectionHeading from '@/components/Helper/SectionHeading';
import { education } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const Education = () => {
    return (
        <div className='pt-16 pb-16 bg-[#0f0715]'>
            <SectionHeading>My Educations</SectionHeading>

            <div className="w-[90%] mx-auto mt-20 flex flex-col gap-4 lg:grid-cols-3 text-white  ">
                {education.map((edu, id) => (
                    <div key={id} className="bg-[#0f0715] border border-gray-700 p-6 rounded-xl shadow-md transition-transform hover:scale-[1.02]  hover:bg-blue-900 flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-shrink-0">
                            <Image src={edu.image} alt='image' width={150} height={150}                 className="rounded-md object-contain"
 />
                        </div>
                        <div>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">{edu.institutionName}</h2>
                            <h3 className="text-md font-medium text-gray-300 mt-1">{edu.programName}</h3>
                            <p className="text-sm text-gray-400 mt-1">{edu.attendedYear}</p>
                            <p className="mt-4 text-gray-200">{edu.description}</p>
                            <a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline inline-block mt-4"
                            >
                                Visit Website
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
