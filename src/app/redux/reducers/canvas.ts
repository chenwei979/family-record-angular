import { Reducer, Action } from '@ngrx/store';
import { CHANGE_FONT_FAMILY, CHANGE_FONT_SIZE } from '../actions/canvas';


const defaultSettings: CanvasSettings = {
  fontSize: 16,
  fontFamily: ''
};

export const canvasReducer = (state: CanvasSettings = defaultSettings, action: Action) => {
  switch (action.type) {
    case CHANGE_FONT_SIZE:
      return {
        ...state,
        fontSize: action.payload
      };
    case CHANGE_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.payload
      };
    default:
      return state;
  }
};
