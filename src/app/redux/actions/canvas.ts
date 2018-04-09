import { Action } from '@ngrx/store';

export enum CanvasSettingActionTypes {
  CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE',
  CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY',
}

export class ChangeFontFamily implements Action {
  readonly type = CanvasSettingActionTypes.CHANGE_FONT_FAMILY;

  constructor(public fontFamily: string) {
  }
}

export class ChangeFontSize implements Action {
  readonly type = CanvasSettingActionTypes.CHANGE_FONT_SIZE;

  constructor(public fontSize: number) {
  }
}


export type CanvasSettingActionsUnion =
  | ChangeFontFamily
  | ChangeFontSize;
