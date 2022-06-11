/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";

import AButton from "../components/atoms/AButton";
import ADatePicker from "../components/atoms/ADatePicker";
import MChart from "../components/molecules/MChart";
import MDatePreview from "../components/molecules/MDatePreview";
import MMarketInsightBar from "../components/molecules/MMarketInsightBar";
import MProductCard from "../components/molecules/MProductCard";
import MSalesTurnoverCard from "../components/molecules/MSalesTurnoverCard";
import OContainer from "../components/organisms/OContainer";
import { UseOutsideClick } from "../hooks/useOutsideClick";
import { ActionType } from "../store/global/action";
import GlobalContext from "../store/global/context";
import { checkLabelColor } from "../utils/date";
import dummyProducts from "../data/products.json";
import { IDate, IProduct } from "../store/global/state";

const Dashboard = () => {
  const { GlobalDispatch, GlobalState } = useContext(GlobalContext);
  const { openDatePicker, products, date } = GlobalState;

  const datePickerRef = useRef(null);
  UseOutsideClick(datePickerRef, () => handleOpenDatePicker(false));

  const handleChangeDate = (date: IDate[]) => {
    GlobalDispatch({
      type: ActionType.SetDate,
      payload: [
        {
          startDate: date[0].startDate,
          endDate: date[0].endDate,
          key: "selection",
        },
      ],
    });
  };

  const handleSetProducts = (products: IProduct[]) => {
    GlobalDispatch({
      type: ActionType.SetProducts,
      payload: products,
    });
  };

  const handleOpenDatePicker = (open: boolean, applyFilter?: boolean) => {
    const prevDate = [...date];
    GlobalDispatch({
      type: ActionType.SetOpenDatePicker,
      payload: open,
    });
    if (!open && !applyFilter) {
      handleChangeDate(prevDate);
    }
  };

  const applyFilter = () => {
    const filteredProducts = [...dummyProducts].filter((product) => {
      let productDate = new Date(product.created_at);
      return (
        productDate >= new Date(date[0].startDate) &&
        productDate <= new Date(date[0].endDate)
      );
    });
    handleSetProducts(filteredProducts);
    handleOpenDatePicker(false, true);
  };

  useEffect(() => {
    if (openDatePicker) {
      checkLabelColor(date);
    }
  }, [date, openDatePicker]);

  useEffect(() => {
    const filteredProducts = [...dummyProducts].filter((product) => {
      let productDate = new Date(product.created_at);
      return (
        productDate >= new Date(date[0].startDate) &&
        productDate <= new Date(date[0].endDate)
      );
    });
    handleSetProducts(filteredProducts);
  }, []);

  return (
    <main>
      <section className="flex gap-3 justify-between items-center">
        <div>
          <h1 className="font-sans font-bold text-textSecondary md:text-3xl text-xl">
            Dashboard
          </h1>
        </div>

        <div ref={datePickerRef} className="flex justify-end">
          <MDatePreview
            date={date}
            handleOpenDatePicker={handleOpenDatePicker}
            openDatePicker={openDatePicker}
          />

          {openDatePicker && (
            <section className="relative top-11">
              <div className="absolute my-3 flex justify-end w-full">
                <aside>
                  <ADatePicker
                    date={date}
                    handleChangeDate={(item) =>
                      handleChangeDate([item.selection])
                    }
                  />
                  <div className="relative">
                    <div className="w-1/4 absolute -top-14 flex justify-center items-center">
                      <AButton onClick={applyFilter} />
                    </div>
                  </div>
                </aside>
              </div>
            </section>
          )}
        </div>
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
              otherStyles="lg:h-[360px] lg:max-h-min max-h-[360px] overflow-auto"
            >
              {products
                .sort((a, b) => b.product_sold - a.product_sold)
                .slice(0, 10)
                .map((product, idx) => (
                  <div
                    className={"w-full " + (idx !== 9 && "my-3")}
                    key={product.id}
                  >
                    <MProductCard product={product} />
                  </div>
                ))}
            </OContainer>
          </div>
          <div className="lg:mt-0 mt-4 w-full">
            <OContainer
              title="TOP COMPETITOR SKU"
              otherStyles="lg:h-[360px] lg:max-h-min max-h-[360px] overflow-auto"
            >
              {products
                .sort((a, b) => b.product_sold - a.product_sold)
                .slice(0, 10)
                .map((product, idx) => (
                  <div
                    className={"w-full " + (idx !== 9 && "my-3")}
                    key={product.id}
                  >
                    <MProductCard product={product} />
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
