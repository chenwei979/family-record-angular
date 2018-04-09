import { CanvasSettingActionTypes, CanvasSettingActionsUnion } from '../actions/canvas';
import { CanvasSettings } from '../app-state';


const defaultSettings: CanvasSettings = {
  fontSize: 16,
  fontFamily: ''
};

export const canvasReducer = (state: CanvasSettings = defaultSettings, action: CanvasSettingActionsUnion) => {
  switch (action.type) {
    case CanvasSettingActionTypes.CHANGE_FONT_SIZE:
      return {
        ...state,
        fontSize: action.fontSize
      };
    case CanvasSettingActionTypes.CHANGE_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    default:
      return state;
  }
};
