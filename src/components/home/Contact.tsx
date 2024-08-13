import React from "react";
import Button from "../ui/Button";

const Contact: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full" id="contact">
      <div className="container px-4 lg:px-40 py-2 lg:py-8 flex justify-center items-center w-full">
        <div className="flex flex-col justify-between items-center w-full gap-8">
          <section className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full lg:w-1/2">
              <h1 className="font-bold text-2xl lg:text-4xl">
                Lets Design Together
              </h1>
              <p className="text-sm lg:text-base leading-relaxed text-center">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </p>
            </div>
          </section>
          <section className="w-full lg:w-1/2">
            <form className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4 w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-[#F8F8F8] text-black border border-[#AFAFAF] px-4 py-2 rounded w-full"
              />
              <Button
                text="Contact Me"
                className="text-nowrap w-full lg:w-auto"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
