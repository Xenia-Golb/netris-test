import { FormattedEvent } from "../../types/types";
import {
  HIDE_RECTANGLE,
  PAUSE_VIDEO,
  PLAY_VIDEO,
  SET_CURRENT_EVENT,
  SET_CURRENT_TIME,
  SHOW_RECTANGLE,
} from "../constants";

export const setCurrentTime = (time: number) => ({
  type: SET_CURRENT_TIME,
  payload: time,
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
export const playVideo = () => ({
  type: PLAY_VIDEO,
});

export const pauseVideo = () => ({
  type: PAUSE_VIDEO,
});
export type PlayerActions =
  | { type: typeof SET_CURRENT_TIME; payload: number }
  | { type: typeof SET_CURRENT_EVENT; payload: FormattedEvent | null }
  | { type: typeof SHOW_RECTANGLE }
  | { type: typeof HIDE_RECTANGLE }
  | { type: typeof PLAY_VIDEO }
  | { type: typeof PAUSE_VIDEO };
