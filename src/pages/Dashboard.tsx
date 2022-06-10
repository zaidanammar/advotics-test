import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { calendar } from "../assets/images";
import ADatePicker from "../components/atoms/icons/ADatePicker";
import MChart from "../components/molecules/MChart";
import MMarketInsightBar from "../components/molecules/MMarketInsightBar";
import MProductCard from "../components/molecules/MProductCard";
import MSalesTurnoverCard from "../components/molecules/MSalesTurnoverCard";
import OContainer from "../components/organisms/OContainer";
import { UseOutsideClick } from "../hooks/useOutsideClick";
import { ActionType } from "../store/global/action";
import GlobalContext from "../store/global/context";
import { formatDate } from "../utils/common";
import { checkLabelColor, defineds } from "../utils/date";

const Dashboard = () => {
  const { GlobalDispatch, GlobalState } = useContext(GlobalContext);
  const { openDatePicker } = GlobalState;

  const datePickerRef = useRef(null);
  const [date, setDate] = useState([
    {
      startDate: new Date(formatDate(defineds.startOfMonth)),
      endDate: new Date(formatDate(defineds.endOfMonth)),
      key: "selection",
    },
  ]);

  const handleShowFilter = () => {
    GlobalDispatch({
      type: ActionType.SetOpenDatePicker,
    });
  };

  UseOutsideClick(datePickerRef, handleShowFilter);

  useEffect(() => {
    if (openDatePicker) {
      checkLabelColor(date);
    }
  }, [date, openDatePicker]);

  return (
    <main>
      <section className="flex justify-between">
        <div>
          <h1 className="font-sans font-bold text-textSecondary md:text-3xl text-xl">
            Dashboard
          </h1>
        </div>

        <div className="bg-white shadow-md rounded h-12 w-fit">
          <div className="flex items-center px-5 h-full w-full gap-3">
            <div>
              <img src={calendar} alt="calendar" />
            </div>
            <div className="text-textPrimary font-label md:inline-flex hidden">
              <p>Period</p>
            </div>
            <div className="text-textPrimary font-label md:inline-flex hidden cursor-default">
              <p>11 September 2018 - 14 September 2018</p>
            </div>
            <div>
              <IoIosArrowDown
                onClick={!openDatePicker ? handleShowFilter : () => {}}
                className={
                  "text-textPrimary cursor-pointer duration-300  " +
                  (openDatePicker && "rotate-180")
                }
                size={20}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        {openDatePicker && (
          <div
            ref={datePickerRef}
            className="absolute my-3 flex justify-end w-full"
          >
            <ADatePicker
              date={date}
              handleChangeDate={(item) => setDate([item.selection])}
            />
          </div>
        )}
      </section>

      <section className="md:mt-7 mt-4">
        <MMarketInsightBar />
      </section>

      <section className="md:mt-7 mt-4">
        <MSalesTurnoverCard />
      </section>

      <section className="lg:flex gap-5 lg:mt-7 mt-4">
        <div className="lg:w-[45%]">
          <OContainer title="AVERAGE PURCHASE VALUE">
            <MChart />
          </OContainer>
        </div>
        <div className="flex-1 sm:flex gap-5">
          <div className="lg:mt-0 mt-4 w-full">
            <OContainer
              title="BEST SELLING SKU"
              otherProps="lg:h-[360px] overflow-auto"
            >
              {new Array(5).fill(3).map((el, idx) => (
                <div className={idx !== 4 ? "my-3" : ""} key={idx}>
                  <MProductCard />
                </div>
              ))}
            </OContainer>
          </div>
          <div className="lg:mt-0 mt-4 w-full">
            <OContainer
              title="TOP COMPETITOR SKU"
              otherProps="lg:h-[360px] overflow-auto"
            >
              {new Array(5).fill(3).map((el, idx) => (
                <div className={idx !== 4 ? "my-3" : ""} key={idx}>
                  <MProductCard />
                </div>
              ))}
            </OContainer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
