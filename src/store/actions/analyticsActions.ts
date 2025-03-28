import { FormattedEvent } from "../../types/types";
import {
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  UPDATE_ACTIVE_EVENTS,
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

export interface UpdateActiveEventsAction {
  type: typeof UPDATE_ACTIVE_EVENTS;
  payload: FormattedEvent[];
}

export type AnalyticsActions =
  | FetchEventsRequestAction
  | FetchEventsSuccessAction
  | FetchEventsFailureAction
  | SetCurrentTimeAction
  | UpdateActiveEventsAction;

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
