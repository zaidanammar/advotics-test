import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ASelect = () => {
  return (
    <div className="flex items-center gap-1.5 bg-white hover:bg-secondary hover:bg-opacity-10 border shadow-sm px-2.5 h-8 cursor-pointer">
      <p className="text-textPrimary text-xs">last 12 months</p>
      <IoIosArrowDown className="text-textPrimary" size={15} />
    </div>
  );
};

export default ASelect;
