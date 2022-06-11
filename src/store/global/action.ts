import { IDate, IProduct } from "../../core/product/entities";

export enum ActionType {
  SetOpenSidebar,
  SetOpenDatePicker,
  SetProducts,
  SetDate,
}

export interface SetOpenSidebar {
  type: ActionType.SetOpenSidebar;
  payload: boolean;
}

export interface SetOpenDatePicker {
  type: ActionType.SetOpenDatePicker;
  payload: boolean;
}

export interface SetProducts {
  type: ActionType.SetProducts;
  payload: IProduct[];
}

export interface SetDate {
  type: ActionType.SetDate;
  payload: IDate[];
}

export type GlobalAction =
  | SetOpenSidebar
  | SetOpenDatePicker
  | SetProducts
  | SetDate;
