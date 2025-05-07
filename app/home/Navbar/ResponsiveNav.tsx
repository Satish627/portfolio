"use client";

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import ThemeToggle from '@/components/Helper/ThemeToggle';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = ()=> setShowNav(true);
  const closeNavHandler = () => setShowNav(false);


  return (
    <div>
        <Nav openNav={showNavHandler} themeToggle={<ThemeToggle/>}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav