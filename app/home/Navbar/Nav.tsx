"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

//Define props type
type Props = {
  openNav: () => void;
  themeToggle: React.ReactNode;
};

const Nav = ({ openNav, themeToggle }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`fixed h-[12vh] z-[10] w-full transition-all duration-200 ${
        navBg ? "bg-[#3240b3]" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/**Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="LOGO"
            width={100}
            height={100}
            className="ml-[-1.5rem] sm:ml-0"
          />
        </Link>

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav_link">{navlink.label}</p>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="block">{themeToggle}</div>

          {/* Burger icon (visible on small screens) */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
