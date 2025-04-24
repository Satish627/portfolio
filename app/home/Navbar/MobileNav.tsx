import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-full';

  return (
    <div className="lg:hidden">
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen transition-opacity duration-300"
        />
      )}

      {/* Slide-in nav from left */}
      <div className={`fixed top-0 left-0 ${navOpen} transform transition-all duration-500 delay-100
        text-white justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>

        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="nav_link text-[20px] ml-12 border-b pb-2 border-white sm:text-[30px]">
              {navlink.label}
            </p>
          </Link>
        ))}

        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileNav
