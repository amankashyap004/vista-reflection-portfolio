import React from "react";

interface ProgressBarProps {
  progress: number;
  height?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = "9px",
  className = "",
}) => {
  return (
    <div
      className={`bg-[#EDECEC] rounded-full  ${className}`}
      style={{ height }}
    >
      <div
        className="relative bg-[#FD6F00] h-full rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex justify-center items-center bg-[#FD6F00] p-[2.5px] rounded-full">
          <div className="bg-[#EDECEC] rounded-full w-4 h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
