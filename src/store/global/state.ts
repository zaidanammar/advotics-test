import React from "react";
import { GlobalAction } from "./action";

export interface IGlobalState {
  openSidebar: boolean;
  openDatePicker: boolean;
}

export interface IGlobalContext {
  GlobalState: IGlobalState;
  GlobalDispatch: React.Dispatch<GlobalAction>;
}
