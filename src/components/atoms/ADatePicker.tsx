import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addMonths } from "date-fns";

import AButton from "./AButton";
import { checkLabelColor, defaultStaticRanges } from "../../utils/date";
import { IDate, IProduct } from "../../core/product/entities";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";

type Props = {
  dateProps: IDate[];
  handleSetData: (product: IProduct[], date: IDate[]) => void;
  data: IProduct[];
  handleChangeDate: (date: IDate[]) => void;
  handleOpenDatePicker: (open: boolean) => void;
};

const ADatePicker = ({
  dateProps,
  handleChangeDate,
  data,
  handleSetData,
  handleOpenDatePicker,
}: Props) => {
  const [date, setDate] = useState(dateProps);

  useEffect(() => {
    checkLabelColor(date);
  }, [date]);

  const handleApplyFilter = () => {
    handleChangeDate(date);
    handleSetData(data, date);
    handleOpenDatePicker(false);
  };

  return (
    <aside>
      <DateRangePicker
        minDate={addMonths(new Date(), -6)}
        maxDate={new Date()}
        className="shadow-md"
        onChange={(item: any) => setDate([item.selection])}
        showMonthAndYearPickers={true}
        color="#37B04C"
        rangeColors={["#37B04C"]}
        retainEndDateOnFirstSelection={false}
        months={2}
        ranges={date}
        direction="horizontal"
        staticRanges={defaultStaticRanges}
        inputRanges={[]}
        showDateDisplay={true}
      />
      <div className="relative">
        <div className="w-1/4 absolute -top-14 flex justify-center items-center">
          <AButton onClick={handleApplyFilter} />
        </div>
      </div>
    </aside>
  );
};

export default ADatePicker;
