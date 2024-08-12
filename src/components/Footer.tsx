import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-[#545454] dark:bg-[#121212]">
      <div className="container px-4 lg:px-40 py-2 lg:py-4 flex justify-center items-center w-full">
        <p className="text-xs lg:text-sm font-light text-white text-opacity-90">
          © {new Date().getFullYear()}
          <span className="text-[#FD6F00] font-semibold"> Mumair</span> All
          Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
