import React from "react";
import Image from "next/image";

import SocialMedia from "../SocialMedia";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-40 py-2 lg:py-8 flex justify-center items-center w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8">
          <section className="space-y-4 w-full lg:w-1/2">
            <div className="space-y-2 w-full lg:w-5/6">
              <div className="text-lg lg:text-xl font-medium">
                <p>Hi I am </p>
                <p className="text-[#FD6F00]">Muhammad Umair</p>
              </div>
              <div className="text-5xl lg:text-7xl font-bold">
                <h1>UI & UX</h1>
                <h1 className="text-end">Designer</h1>
              </div>
              <div className="pt-1 lg:pt-4">
                <p className="text-sm leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                  massa nibh lectus netus in. Aliquet donec morbi convallis
                  pretium. Turpis tempus pharetra
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start items-center ">
              <Button text="Hire Me" className="px-10" />
            </div>
          </section>
          <section className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full lg:w-1/2">
            <div className="w-4/5">
              <Image
                src={"/images/hero-image.png"}
                alt="logo"
                width={400}
                height={400}
                quality={100}
                className="object-contain w-full"
              />
            </div>
            <SocialMedia />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
