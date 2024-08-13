import React from "react";

import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-12 lg:gap-16">
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;
