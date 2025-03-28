import { PlayerState } from "../../types/types";
import { PlayerActions } from "../actions/playerActions";
import {
  SET_CURRENT_TIME,
  TOGGLE_PLAYING,
  SET_CURRENT_EVENT,
  SHOW_RECTANGLE,
  HIDE_RECTANGLE,
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
      };
    case TOGGLE_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case SET_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: action.payload,
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
