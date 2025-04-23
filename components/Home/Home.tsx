import React from 'react'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Experience from '../Experience/Experience'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Skills />
      <Education />
      <Experience />
    </div>
  )
}

export default Home