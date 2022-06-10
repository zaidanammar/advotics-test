export enum ActionType {
  SetOpenSidebar,
  SetOpenDatePicker,
}

export interface SetOpenSidebar {
  type: ActionType.SetOpenSidebar;
}

export interface SetOpenDatePicker {
  type: ActionType.SetOpenDatePicker;
}

export type GlobalAction = SetOpenSidebar | SetOpenDatePicker;
