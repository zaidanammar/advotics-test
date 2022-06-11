import React from "react";
import { GlobalAction } from "./action";

export interface IProduct {
  id: number;
  product_name: string;
  price: number;
  created_at: string;
  product_sold: number;
}

export interface IDate {
  startDate: Date;
  endDate: Date;
  key: string;
}

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
