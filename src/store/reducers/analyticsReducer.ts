import { AnalyticsState } from "../../types/types";
import { AnalyticsActions } from "../actions/analyticsActions";
import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from "../constants";

const initialState: AnalyticsState = {
  events: [],
  activeEvents: [],
  loading: false,
  error: null,
  currentTime: 0,
};

const analyticsReducer = (
  state = initialState,
  action: AnalyticsActions
): AnalyticsState => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default analyticsReducer;
