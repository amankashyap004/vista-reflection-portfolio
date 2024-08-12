import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FD6F00] text-white px-4 py-2 rounded transition-all duration-300 hover:opacity-90 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
