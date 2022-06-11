import React from "react";
import { isEqual } from "lodash";
import { IoIosArrowDown } from "react-icons/io";
import { calendar } from "../../assets/images";
import { formatDate } from "../../utils/common";

type Props = {
  date: { startDate: Date; endDate: Date }[];
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
      onClick={() => handleOpenDatePicker(true)}
      className="bg-white shadow-md rounded h-12 w-fit cursor-pointer"
    >
      <div className="flex items-center px-5 h-full w-full gap-5">
        <div className="flex items-center gap-3">
          <div>
            <img src={calendar} alt="calendar" />
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
