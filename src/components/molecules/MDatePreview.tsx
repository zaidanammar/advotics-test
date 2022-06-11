import React from "react";
import { isEqual } from "lodash";
import { IoIosArrowDown } from "react-icons/io";
import { calendar } from "../../assets/images";
import { formatDate } from "../../utils/common";
import { IDate } from "../../core/product/entities";

type Props = {
  date: IDate[];
  handleOpenDatePicker: (openDatePicker: boolean) => void;
  openDatePicker: boolean;
};

const MDatePreview = ({
  date,
  handleOpenDatePicker,
  openDatePicker,
}: Props) => {
  return (
    <div
      onClick={() => handleOpenDatePicker(!openDatePicker)}
      className="bg-white hover:bg-opacity-50 hover:bg-gray-50 shadow-md rounded md:h-12 h-8 w-fit cursor-pointer"
    >
      <div className="flex items-center md:px-5 px-3 h-full w-full gap-5">
        <div className="flex items-center gap-3">
          <div className="md:w-5 w-4">
            <img src={calendar} alt="calendar" className="w-full" />
          </div>
          <div className="text-textPrimary font-label md:inline-flex hidden">
            <p>Period</p>
          </div>
        </div>
        <div className="md:flex hidden items-center gap-3">
          <p className="text-textPrimary font-label ">
            {isEqual(
              formatDate(date[0].startDate, "DD/MM/YYYY"),
              formatDate(date[0].endDate, "DD/MM/YYYY")
            )
              ? formatDate(date[0].startDate, "DD MMMM YYYY")
              : `${formatDate(date[0].startDate, "DD MMMM YYYY")} - 
              ${formatDate(date[0].endDate, "DD MMMM YYYY")}`}
          </p>
          <div>
            <IoIosArrowDown
              className={
                "text-textPrimary duration-300  " +
                (openDatePicker && "rotate-180")
              }
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDatePreview;
