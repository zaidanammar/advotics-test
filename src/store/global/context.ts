import { createContext } from "react";
import { IGlobalContext, IGlobalState } from "./state";
import dummyProducts from "../../data/products.json";
import { defineds } from "../../utils/date";
import { isMobile } from "react-device-detect";

export const initialGlobalState: IGlobalState = {
  openSidebar: isMobile ? false : true,
  openDatePicker: false,
  products: dummyProducts,
  date: [
    {
      startDate: defineds.last7day,
      endDate: defineds.startOfYesterday,
      key: "selection",
    },
  ],
};

const GlobalContext = createContext<IGlobalContext>({
  GlobalState: initialGlobalState,
  GlobalDispatch: () => undefined,
});

export const GlobalContextProvider = GlobalContext.Provider;

export default GlobalContext;
