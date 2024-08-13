"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Testimonials: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="container px-4 lg:px-40 py-2 lg:py-8 flex justify-center items-center w-full">
        <div className="flex flex-col justify-between items-center w-full gap-8">
          <section className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full lg:w-1/2">
              <h1 className="font-bold text-2xl lg:text-4xl">Testimonials</h1>
              <p className="text-sm lg:text-base leading-relaxed text-center">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
              </p>
            </div>
          </section>
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const testimonials = [
  {
    imageSrc: "/images/testimonial-image-1.png",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Name",
    position: "CEO",
  },
  {
    imageSrc: "/images/testimonial-image-2.png",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Name",
    position: "CTO",
  },
  {
    imageSrc: "/images/testimonial-image-1.png",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Name",
    position: "CFO",
  },
];

interface PaginationIndicatorProps {
  totalItems: number;
  activeIndex: number;
  swiper: any;
}

const PaginationIndicator: React.FC<PaginationIndicatorProps> = ({
  totalItems,
  activeIndex,
  swiper,
}) => {
  const indicators = Array.from({ length: totalItems }, (_, index) => (
    <div
      key={index}
      className={`px-4 lg:px-6 py-[2px] lg:py-[3px] rounded-full cursor-pointer ${
        index === activeIndex ? "bg-[#FD6F00]" : "bg-[#D9D9D9]"
      } transition-all duration-500 flex justify-center items-center`}
      onClick={() => {
        swiper?.slideTo(index);
      }}
    ></div>
  ));

  return (
    <div className="flex justify-center items-center gap-4">{indicators}</div>
  );
};

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any | null>(null);

  return (
    <section className="space-y-4 w-full lg:w-3/4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onReachEnd={(swiper) => {
          setActiveIndex(0);
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 lg:gap-6 bg-[#F8F8F8] text-black p-4 lg:p-6 rounded-lg">
              <div className="w-40 lg:w-80">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={400}
                  height={400}
                  quality={100}
                  className="object-contain w-full"
                />
              </div>

              <div className="flex flex-col justify-center items-start gap-1 h-full">
                <p className="text-justify text-sm lg:text-base">
                  <span className="text-[#FD6F00] text-lg lg:text-xl inline-block">
                    <RiDoubleQuotesL />
                  </span>
                  {testimonial.quote}
                  <span className="text-[#FD6F00] text-lg lg:text-xl inline-block">
                    <RiDoubleQuotesR />
                  </span>
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaginationIndicator
        totalItems={testimonials.length}
        activeIndex={activeIndex}
        swiper={swiperRef.current}
      />
    </section>
  );
};
