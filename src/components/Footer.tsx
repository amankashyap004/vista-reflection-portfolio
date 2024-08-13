import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

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

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full pt-12">
      <section className="container px-4 lg:px-40 flex flex-col justify-center items-center w-full gap-4 lg:gap-8">
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
        <Navbar />
        <SocialMedia />
      </section>
      <section className="flex justify-center items-center w-full bg-[#545454] dark:bg-[#121212]">
        <div className="container px-4 lg:px-40 py-2 lg:py-4 flex justify-center items-center w-full">
          <p className="text-xs lg:text-sm font-light text-white text-opacity-90">
            © {new Date().getFullYear()}
            <span className="text-[#FD6F00] font-semibold"> Mumair</span> All
            Rights Reserved, Inc.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center flex-col lg:flex-row gap-4 lg:gap-8 text-nowrap">
      <div className="flex justify-center items-start lg:items-center flex-wrap gap-x-4 gap-y-2 lg:gap-x-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="transition-all duration-300 hover:text-[#FD6F00]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
