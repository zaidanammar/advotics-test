import React from "react";
import { IoIosArrowUp } from "react-icons/io";

import { help } from "../../assets/images";

const MMarketInsightBar = () => {
  return (
    <div className="h-12 px-4 flex justify-between items-center bg-primary rounded-sm shadow-sm">
      <div className="flex items-center">
        <h1 className="uppercase text-white font-semibold md:text-base text-sm">Market Insights</h1>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-1 items-center">
          <img src={help} alt="help" className="w-5" />
          <p className="underline font-sans text-xs text-left font-light text-white cursor-pointer">
            Click Here for Help
          </p>
        </div>
        <div>
          <IoIosArrowUp className="text-white cursor-pointer" size={20}/>
        </div>
      </div>
    </div>
  );
};

export default MMarketInsightBar;
