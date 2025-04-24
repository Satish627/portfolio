"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { categorizedSkillsData } from "@/data/data";
import SkillCard from "./SkillCard";

const SkillsPage = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>My Skills</SectionHeading>

      {/* Loop through categories */}
      {Object.entries(categorizedSkillsData).map(
        ([category, skills], index) => (
          <div key={category} className="mt-20 text-center">
            {/* Category Title centered */}
            <h3 className="text-white text-2xl font-bold mb-8 capitalize">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>

            {/* Carousel of skills */}
            <div className="w-[90%] mx-auto">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
              >
                {skills.map((skill) => (
                  <SwiperSlide key={skill.title}>
                    <div
                      data-aos="flip-left"
                      data-aos-offset="200"
                      data-aos-delay={index * 150}
                    >
                      <SkillCard skill={skill} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default SkillsPage