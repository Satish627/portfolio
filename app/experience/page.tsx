import SectionHeading from "@/components/Helper/SectionHeading";
import { experience } from "@/data/data";
import Image from "next/image";
import React from "react";

const ExperiencePage = () => {
  return (
    <div>
      <div className="pt-32 pb-16 bg-[#0f0715]">
        <SectionHeading>My Experiences</SectionHeading>
        <div className="w-[90%] mx-auto mt-20 flex flex-col gap-8 text-white">
          {experience.map((exp, id) => (
            <div
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay={id * 150}
              key={id}
              className="bg-[#0f0715] border border-gray-700 p-6 rounded-xl shadow-md transition-transform hover:scale-[1.02] hover:bg-emerald-800 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="flex-shrink-0">
                <Image
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  height={100}
                  width={100}
                  className="rounded-md object-contain"
                />
              </div>
              <div className="text-left w-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-gray-300 font-semibold">
                  {exp.company}
                </h2>
                <h3 className="text-md font-medium text-gray-300">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{exp.date}</p>
                <p className="mt-4 text-gray-200">{exp.summary}</p>
                <a
                  href={exp.link}
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
      </div>{" "}
    </div>
  );
};

export default ExperiencePage;
