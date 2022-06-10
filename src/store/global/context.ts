import { createContext } from "react";
import { IGlobalContext, IGlobalState } from "./state";

export const initialGlobalState: IGlobalState = {
  openSidebar: false,
  openDatePicker: false,
};

const GlobalContext = createContext<IGlobalContext>({
  GlobalState: initialGlobalState,
  GlobalDispatch: () => undefined,
});

export const GlobalContextProvider = GlobalContext.Provider;

export default GlobalContext;
