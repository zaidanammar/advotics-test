/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";

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
import dummyProducts from "../data/products.json";
import { IDate, IProduct } from "../core/product/entities";
import { ProductService } from "../core/product/service";

const Dashboard = () => {
  const { GlobalDispatch, GlobalState } = useContext(GlobalContext);
  const { openDatePicker, products, date } = GlobalState;

  const datePickerRef = useRef(null);
  UseOutsideClick(datePickerRef, () => handleOpenDatePicker(false));

  useEffect(() => {
    handleSetProducts(dummyProducts, date);
  }, []);

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

  const handleSetProducts = (products: IProduct[], date: IDate[]) => {
    const filteredProducts = new ProductService().getFilteredProducts(
      products,
      date
    );
    GlobalDispatch({
      type: ActionType.SetProducts,
      payload: filteredProducts,
    });
  };

  const handleOpenDatePicker = (open: boolean) => {
    GlobalDispatch({
      type: ActionType.SetOpenDatePicker,
      payload: open,
    });
  };

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
                <ADatePicker
                  dateProps={date}
                  data={dummyProducts}
                  handleSetData={handleSetProducts}
                  handleChangeDate={handleChangeDate}
                  handleOpenDatePicker={handleOpenDatePicker}
                />
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
              {ProductService.getTopProducts(products).map((product, idx) => (
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
              {ProductService.getTopProducts(products).map((product, idx) => (
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
