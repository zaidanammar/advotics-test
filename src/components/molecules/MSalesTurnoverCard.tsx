import React from "react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { ImArrowDown } from "react-icons/im";
import { salesTurnOver } from "../../assets/images";
import { formatCurrency } from "../../utils/common";

const MSalesTurnoverCard = () => {
  return (
    <section className="bg-white p-5 md:w-fit w-full md:max-w-xs rounded-sm shadow-md">
      <div className="flex gap-10 justify-between items-center">
        <h1 className="font-sans text-textSecondary">Sales Turnover</h1>
        <BiDotsVerticalRounded className="cursor-pointer" size={20} />
      </div>

      <div className="flex md:justify-center justify-between mt-3">
        <div className="flex flex-col">
          <h1 className="font-sans font-semibold text-textPrimary text-2xl">
            {formatCurrency({ value: 3600000 })}
          </h1>
          <div className="flex gap-1 items-center text-xs mt-1">
            <ImArrowDown className="text-red-500" />
            <p className="text-red-500 font-sans font-bold">13.8%</p>
            <p className="text-textSecondary">Last period in product sold</p>
          </div>
        </div>
        <div>
          <img src={salesTurnOver} alt="sales turnover" />
        </div>
      </div>
    </section>
  );
};

export default MSalesTurnoverCard;
