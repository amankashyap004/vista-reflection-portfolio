import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const HomePage: React.FC = () => {
  return (
    <div>
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
