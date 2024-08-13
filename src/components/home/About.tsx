import React from "react";
import Image from "next/image";
import ProgressBar from "../ui/ProgressBar";

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full" id="about">
      <div className="container px-4 lg:px-40 py-2 lg:py-8 flex justify-center items-center w-full">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-8">
          <section className="flex justify-center items-center w-full lg:w-1/2">
            <div className="w-4/5">
              <Image
                src={"/images/about-image.png"}
                alt="about"
                width={400}
                height={400}
                quality={100}
                className="object-contain w-full"
              />
            </div>
          </section>
          <section className="space-y-4 w-full lg:w-1/2">
            <div className="space-y-2 lg:space-y-4">
              <h1 className="font-bold text-2xl lg:text-4xl">About Me </h1>
              <p className="text-sm lg:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </p>
            </div>
            <SkillsSection />
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

const skills = [
  { name: "UX", progress: 90 },
  { name: "Website Design", progress: 84 },
  { name: "App Design", progress: 95 },
  { name: "Graphic Design", progress: 88 },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2 w-full">
          <p className="font-semibold lg:text-lg">{skill.name}</p>
          <ProgressBar progress={skill.progress} />
        </div>
      ))}
    </div>
  );
};
