import { createSelector } from '@ngrx/store';

export interface AppState {
  canvasSettings: CanvasSettings;
}

export interface CanvasSettings {
  fontSize: number;
  fontFamily: string;
}


export const selectCanvasSettings = (state: AppState) => state.canvasSettings;
export const selectCanvasSettingsFontSize = createSelector(
  selectCanvasSettings,
  (state: CanvasSettings) => state.fontSize
);
