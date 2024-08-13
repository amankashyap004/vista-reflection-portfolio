import React from "react";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-40 py-2 lg:py-8 flex justify-center items-center w-full">
        <div className="flex flex-col justify-between items-center w-full gap-8">
          <section className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full lg:w-1/2">
              <h1 className="font-bold text-2xl lg:text-4xl">Services</h1>
              <p className="text-sm lg:text-base leading-relaxed text-center">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </p>
            </div>
          </section>
          <ServicesSection />
        </div>
      </div>
    </div>
  );
};

export default Services;

const services = [
  {
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    imageSrc: "/images/services-icon-1.png",
  },
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    imageSrc: "/images/services-icon-2.png",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    imageSrc: "/images/services-icon-3.png",
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    imageSrc: "/images/services-icon-4.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-start gap-2 bg-[#F8F8F8] text-black rounded-md p-2 lg:p-4"
        >
          <div className="w-8 h-8">
            <Image
              src={service.imageSrc}
              alt={service.title}
              width={400}
              height={400}
              quality={100}
              className="object-contain w-8 h-8"
            />
          </div>
          <div className="lg:space-y-1 w-full">
            <p className="font-semibold lg:text-lg">{service.title}</p>
            <p className="text-xs lg:text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
