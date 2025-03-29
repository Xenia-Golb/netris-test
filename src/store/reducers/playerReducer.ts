import { PlayerState } from "../../types/types";
import { PlayerActions } from "../actions/playerActions";
import {
  SET_CURRENT_TIME,
  SET_CURRENT_EVENT,
  SHOW_RECTANGLE,
  HIDE_RECTANGLE,
  PLAY_VIDEO,
  PAUSE_VIDEO,
} from "../constants";

const initialState: PlayerState = {
  currentTime: 0,
  isPlaying: false,
  currentEvent: null,
  showRectangle: false,
};

const playerReducer = (
  state = initialState,
  action: PlayerActions
): PlayerState => {
  switch (action.type) {
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload,
        isPlaying: false,
      };
    case SET_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: action.payload,
      };
    case PLAY_VIDEO:
      return {
        ...state,
        isPlaying: true,
      };
    case PAUSE_VIDEO:
      return {
        ...state,
        isPlaying: false,
      };
    case SHOW_RECTANGLE:
      return {
        ...state,
        showRectangle: true,
      };
    case HIDE_RECTANGLE:
      return {
        ...state,
        showRectangle: false,
      };
    default:
      return state;
  }
};

export default playerReducer;
