import { ActionType, GlobalAction } from "./action";
import { IGlobalState } from "./state";

export const GlobalReducer = (state: IGlobalState, action: GlobalAction) => {
  switch (action.type) {
    case ActionType.SetOpenSidebar:
      return { ...state, openSidebar: action.payload };
    case ActionType.SetOpenDatePicker:
      return { ...state, openDatePicker: action.payload };
    case ActionType.SetProducts:
      return { ...state, products: action.payload };
    case ActionType.SetDate:
      return { ...state, date: action.payload };
  }
};
