import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-[#FD6F00] text-white px-4 py-2 rounded transition-all duration-300 hover:opacity-90 ">
      {text}
    </button>
  );
};

export default Button;
