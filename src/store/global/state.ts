import React from "react";
import { IDate, IProduct } from "../../core/product/entities";
import { GlobalAction } from "./action";

export interface IGlobalState {
  openSidebar: boolean;
  openDatePicker: boolean;
  products: IProduct[];
  date: IDate[];
}

export interface IGlobalContext {
  GlobalState: IGlobalState;
  GlobalDispatch: React.Dispatch<GlobalAction>;
}
