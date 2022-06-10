import { ActionType, GlobalAction } from "./action";
import { IGlobalState } from "./state";

export const GlobalReducer = (state: IGlobalState, action: GlobalAction) => {
  switch (action.type) {
    case ActionType.SetOpenSidebar:
      return { ...state, openSidebar: !state.openSidebar };
    case ActionType.SetOpenDatePicker:
      return { ...state, openDatePicker: !state.openDatePicker };
  }
};