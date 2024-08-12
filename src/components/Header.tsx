"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

import ThemeSwitch from "./ThemeSwitch";
import Button from "./ui/Button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenu(!isSideMenu);
  };

  const closeSideMenu = () => {
    setIsSideMenu(false);
  };
  return (
    <header className="flex justify-center items-center w-full backdrop-blur-lg shadow-sm fixed z-50">
      <div className="relative container px-4 lg:px-40 py-4 lg:py-6 flex justify-between items-center flex-col lg:flex-row">
        <div className="flex justify-between items-center w-full">
          <div className="">
            <Link href={"/"} className="flex justify-center items-center gap-2">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={100}
                height={100}
                quality={100}
                className="object-contain w-8"
              />
              <p className="text-xl lg:text-3xl font-montserrat">
                <strong>M</strong>
                <span className="opacity-60">umair</span>
              </p>
            </Link>
          </div>
          <div className="lg:hidden flex justify-center items-center gap-2 lg:gap-4">
            <ThemeSwitch />
            <div className="text-3xl" onClick={toggleSideMenu}>
              {isSideMenu ? <IoMenu /> : <IoClose />}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-end items-center gap-4 mt-0 h-full w-full">
          <Navbar closeSideMenu={closeSideMenu} />
          <ThemeSwitch />
        </div>
        {isSideMenu && (
          <div className="relative lg:hidden flex justify-center items-start mt-4 pt-16 h-screen w-full">
            <div className="absolute top-0 w-full h-px bg-gradient-to-l from-transparent via-[#FD6F00] to-transparent"></div>
            <Navbar closeSideMenu={closeSideMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

interface NavbarProps {
  closeSideMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ closeSideMenu }) => {
  return (
    <nav className="flex justify-center items-center flex-col lg:flex-row gap-4 lg:gap-8 text-nowrap">
      <div className="flex justify-center items-start lg:items-center flex-col lg:flex-row gap-4 lg:gap-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => closeSideMenu()}
            className="transition-all duration-300 hover:text-[#FD6F00]"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href={"/documents/document.pdf"} target="_blank">
        <Button text="Download CV" />
      </Link>
    </nav>
  );
};
