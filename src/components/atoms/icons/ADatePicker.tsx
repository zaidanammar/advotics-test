import React from "react";
import { DateRangePicker, Range } from "react-date-range";
import { defaultStaticRanges } from "../../../utils/date";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

type Props = {
  date: Range[];
  handleChangeDate: (item: any) => void;
};

const ADatePicker = ({ date, handleChangeDate }: Props) => {
  return (
    <DateRangePicker
      className="shadow-md"
      onChange={handleChangeDate}
      showMonthAndYearPickers={true}
      color="#37B04C"
      rangeColors={["#37B04C"]}
      retainEndDateOnFirstSelection={false}
      months={2}
      ranges={date}
      direction="horizontal"
      staticRanges={defaultStaticRanges}
      inputRanges={[]}
    />
  );
};

export default ADatePicker;
