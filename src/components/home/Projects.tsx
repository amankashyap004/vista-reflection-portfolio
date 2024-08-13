"use client";

import React, { useState } from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full" id="project">
      <div className="container px-4 lg:px-40 py-2 lg:py-8 flex justify-center items-center w-full">
        <div className="flex flex-col justify-between items-center w-full gap-8">
          <section className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full lg:w-1/2">
              <h1 className="font-bold text-2xl lg:text-4xl">My Projects</h1>
              <p className="text-sm lg:text-base leading-relaxed text-center">
                Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
                mauris est risus lectus. Phasellus consequat urna tellus
              </p>
            </div>
          </section>
          <FilterableGrid />
        </div>
      </div>
    </div>
  );
};

export default Projects;

const items = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "AirCalling Landing Page Design ",
    category: ["UI/UX", "Web Design"],
    imageSrc: "/images/project-image-1.png",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Business Landing Page Design ",
    category: ["Web Design", "Graphic Design", "App Design"],
    imageSrc: "/images/project-image-2.png",
  },
  {
    id: 3,
    title: "App Design",
    description: "Ecom Web Page Design ",
    category: ["App Design", "Web Design"],
    imageSrc: "/images/project-image-3.png",
  },
];

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

const FilterableGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Design");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category.includes(selectedCategory));

  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 lg:gap-8">
      <div className="flex justify-start lg:justify-center items-center gap-4 overflow-x-scroll hidden-scrollbar w-full">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition-all duration-300 text-nowrap ${
              selectedCategory === category
                ? "bg-[#FD6F00] text-white"
                : "bg-[#F8F8F8] text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-start gap-2 lg:gap-4"
          >
            <div className="w-full relative">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={300}
                height={400}
                quality={100}
                className="object-contain w-full"
              />
            </div>
            <div className="w-full">
              <p className="text-[#FD6F00]">{item.title}</p>
              <p className="font-semibold lg:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
