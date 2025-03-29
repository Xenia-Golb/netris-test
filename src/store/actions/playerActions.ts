import { FormattedEvent } from "../../types/types";
import {
  SET_ACTIVE_EVENTS,
  SET_CURRENT_EVENT,
  SET_CURRENT_TIME,
} from "../constants";

export const setCurrentTime = (time: number) => ({
  type: SET_CURRENT_TIME,
  payload: time,
});
export const setCurrentEvent = (event: FormattedEvent | null) => ({
  type: SET_CURRENT_EVENT,
  payload: event,
});
export const setActiveEvents = (events: FormattedEvent[]) => ({
  type: SET_ACTIVE_EVENTS,
  payload: events,
});
export type PlayerActions =
  | { type: typeof SET_CURRENT_TIME; payload: number }
  | { type: typeof SET_CURRENT_EVENT; payload: FormattedEvent | null }
  | { type: typeof SET_ACTIVE_EVENTS; payload: FormattedEvent[] };
