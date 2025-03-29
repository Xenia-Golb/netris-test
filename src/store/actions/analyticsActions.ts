import { FormattedEvent } from "../../types/types";
import {
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  SET_CURRENT_TIME,
} from "../constants";

export interface FetchEventsRequestAction {
  type: typeof FETCH_EVENTS_REQUEST;
}

export interface FetchEventsSuccessAction {
  type: typeof FETCH_EVENTS_SUCCESS;
  payload: FormattedEvent[];
}

export interface FetchEventsFailureAction {
  type: typeof FETCH_EVENTS_FAILURE;
  payload: string;
}

export interface SetCurrentTimeAction {
  type: typeof SET_CURRENT_TIME;
  payload: number;
}

export type AnalyticsActions =
  | FetchEventsRequestAction
  | FetchEventsSuccessAction
  | FetchEventsFailureAction
  | SetCurrentTimeAction;

export const fetchEventsRequest = () => ({
  type: FETCH_EVENTS_REQUEST as typeof FETCH_EVENTS_REQUEST,
});
export const fetchEventsFailure = (
  errorMessage: string
): FetchEventsFailureAction => ({
  type: FETCH_EVENTS_FAILURE,
  payload: errorMessage,
});
export const fetchEventsSuccess = (events: FormattedEvent[]) => ({
  type: FETCH_EVENTS_SUCCESS as typeof FETCH_EVENTS_SUCCESS,
  payload: events,
});
export const setCurrentTime = (time: number): SetCurrentTimeAction => ({
  type: SET_CURRENT_TIME,
  payload: time,
});
