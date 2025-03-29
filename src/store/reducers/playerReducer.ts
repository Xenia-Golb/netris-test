import { PlayerState } from "../../types/types";
import { PlayerActions } from "../actions/playerActions";
import {
  SET_CURRENT_TIME,
  SET_CURRENT_EVENT,
  SET_ACTIVE_EVENTS,
} from "../constants";

const initialState: PlayerState = {
  currentTime: 0,
  isPlaying: false,
  currentEvent: null,
  showRectangle: false,
  activeRectangles: [],
  activeEvents: [],
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
    case SET_ACTIVE_EVENTS:
      return {
        ...state,
        activeEvents: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
