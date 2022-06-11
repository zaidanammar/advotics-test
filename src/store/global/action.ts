export enum ActionType {
  SetOpenSidebar,
  SetOpenDatePicker,
}

export interface SetOpenSidebar {
  type: ActionType.SetOpenSidebar;
  payload: boolean;
}

export interface SetOpenDatePicker {
  type: ActionType.SetOpenDatePicker;
  payload: boolean;
}

export type GlobalAction = SetOpenSidebar | SetOpenDatePicker;
