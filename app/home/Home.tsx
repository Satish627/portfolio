"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EducationPage from '@/app/education/page';
import ExperiencePage from '@/app/experience/page';
import SkillsPage from '@/app/skills/page';
import Hero from './Hero/Hero';

const Home = () => {

  useEffect(()=>{
    const initAOS =async()=>{
      await import ('aos')
      AOS.init({
        duration:1000,
        easing:'ease',
        once:false,
        anchorPlacement:'top-bottom',
        mirror:true

      })
    };
    initAOS();
  },[])

  return (
    <div className="overflow-hidden">
      <Hero />
      <SkillsPage />
      <EducationPage />
      <ExperiencePage />
    </div>
  );
};

export default Home;
