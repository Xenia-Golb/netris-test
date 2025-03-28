import { FormattedEvent } from "../../types/types";
import {
  HIDE_RECTANGLE,
  SET_CURRENT_EVENT,
  SET_CURRENT_TIME,
  SHOW_RECTANGLE,
  TOGGLE_PLAYING,
} from "../constants";

export const setCurrentTime = (time: number) => ({
  type: SET_CURRENT_TIME,
  payload: time,
});
export const togglePlaying = (isPlaying: boolean) => ({
  type: TOGGLE_PLAYING,
  payload: isPlaying,
});

export const setCurrentEvent = (event: FormattedEvent | null) => ({
  type: SET_CURRENT_EVENT,
  payload: event,
});

export const showRectangle = () => ({
  type: SHOW_RECTANGLE,
});

export const hideRectangle = () => ({
  type: HIDE_RECTANGLE,
});

export type PlayerActions =
  | { type: typeof SET_CURRENT_TIME; payload: number }
  | { type: typeof TOGGLE_PLAYING; payload: boolean }
  | { type: typeof SET_CURRENT_EVENT; payload: FormattedEvent | null }
  | { type: typeof SHOW_RECTANGLE }
  | { type: typeof HIDE_RECTANGLE };
